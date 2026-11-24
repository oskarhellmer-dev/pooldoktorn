import re, sys, urllib.parse, urllib.request, html as h
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def get(u):
    try:
        r = urllib.request.Request(u, headers={"User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8"})
        return urllib.request.urlopen(r, timeout=25).read().decode("utf-8", "replace")
    except Exception as e:
        return "ERR:" + str(e)

def strip(x):
    x = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", x, flags=re.S | re.I)
    x = re.sub(r"<[^>]+>", "", x)
    return re.sub(r"\s+", " ", h.unescape(x)).strip()

def bing(q, count=12):
    u = "https://www.bing.com/search?setlang=sv&cc=SE&count=20&q=" + urllib.parse.quote(q)
    body = get(u)
    out = []
    for block in re.findall(r'<li class="b_algo".*?(?=<li class="b_algo"|</ol>)', body, re.S):
        m = re.search(r'<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.S)
        if not m:
            continue
        url = h.unescape(m.group(1))
        title = strip(m.group(2))
        sm = re.search(r'<p[^>]*>(.*?)</p>', block, re.S)
        snip = strip(sm.group(1)) if sm else ""
        if title:
            out.append((title, url, snip))
    return out[:count]

if __name__ == "__main__":
    for q in sys.argv[1:]:
        print("=" * 70)
        print("QUERY:", q)
        for i, (t, u, s) in enumerate(bing(q), 1):
            print(f"{i}. {t}\n   {u}\n   {s[:200]}")
