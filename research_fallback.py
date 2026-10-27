#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fallback deep-research brief (Bing + DuckDuckGo HTML) nar Brave-nyckeln ar slut.
Samma output-format som research.py sa att arbetsflodet ar oforandrat.
Inga påhittade data: allt hamtas fran verkliga SERP:ar och konkurrentsidor.
"""
import sys, re, json, time, urllib.parse, urllib.request, html as htmlmod

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0 Safari/537.36")

def get(url, timeout=25):
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8"})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", "replace")
    except Exception as e:
        return "ERR:" + str(e)

def strip(h):
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h, flags=re.S | re.I)
    h = re.sub(r"<[^>]+>", "", h)
    h = htmlmod.unescape(h)
    return re.sub(r"\s+", " ", h).strip()

def bing(q, count=20):
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(
        {"q": q, "setlang": "sv", "cc": "SE", "count": count})
    h = get(url)
    if h.startswith("ERR:"):
        return []
    out = []
    # Bing organic results: <li class="b_algo"> ... <h2><a href=...>title</a></h2> ... <p>snippet</p>
    for block in re.findall(r'<li class="b_algo".*?</li>', h, re.S):
        m = re.search(r'<h2[^>]*>.*?<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.S)
        if not m:
            continue
        u = htmlmod.unescape(m.group(1))
        t = strip(m.group(2))
        sm = re.search(r'<p[^>]*>(.*?)</p>', block, re.S)
        snip = strip(sm.group(1)) if sm else ""
        out.append((t, u, snip))
    return out[:count]

def ddg(q, count=20):
    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode({"q": q, "kl": "se-sv"})
    h = get(url)
    if h.startswith("ERR:"):
        return []
    out = []
    for block in re.findall(r'<div class="result[^"]*result--web.*?</div>\s*</div>', h, re.S):
        m = re.search(r'<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.S)
        if not m:
            continue
        u = htmlmod.unescape(m.group(1))
        if "uddg=" in u:
            u = urllib.parse.unquote(re.search(r"uddg=([^&]+)", u).group(1))
        t = strip(m.group(2))
        sm = re.search(r'class="result__snippet"[^>]*>(.*?)</a>', block, re.S)
        snip = strip(sm.group(1)) if sm else ""
        out.append((t, u, snip))
    return out[:count]

def serp(q):
    r = bing(q)
    if len(r) < 5:
        r2 = ddg(q)
        if len(r2) > len(r):
            r = r2
    return r

def headings(url):
    h = get(url)
    if h.startswith("ERR:"):
        return []
    hs = re.findall(r"<h[123][^>]*>(.*?)</h[123]>", h, re.S | re.I)
    out = []
    seen = set()
    for x in hs:
        t = strip(x)
        if 3 < len(t) < 130 and t.lower() not in seen:
            seen.add(t.lower()); out.append(t)
    return out[:22]

def questions(q):
    forms = ["hur {0}", "{0} problem", "bästa {0}", "{0} pris", "vad kostar {0}",
             "{0} vs", "vilken {0}", "{0} guide"]
    seen, out = set(), []
    for f in forms:
        q2 = f.format(q)
        for t, u, s in serp(q2)[:6]:
            if t and t not in seen:
                seen.add(t); out.append(t)
        time.sleep(0.4)
    return out

def brief(q):
    print(f"# Research-brief: {q}\n")
    res = serp(q)
    print("## SERP topp 10\n")
    for i, (t, u, s) in enumerate(res[:10], 1):
        print(f"{i}. **{t}**")
        print(f"   {u}")
        print(f"   _{s[:220]}_\n")
    print("## Vanliga fragor (frage-mining)\n")
    for t in questions(q)[:20]:
        print(f"- {t}")
    print()
    print("## Konkurrenternas rubriker (topp 5)\n")
    for t, u, s in res[:5]:
        hs = headings(u)
        if hs:
            print(f"### {t} — {u}\n")
            for x in hs:
                print(f"- {x}")
            print()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit("Ange ett sokord")
    brief(sys.argv[1])
