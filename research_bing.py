#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fallback deep-research brief via Bing (Brave slut pa kvot).
Anrop: python3 research_bing.py "<sokord>" """
import sys, re, urllib.parse, urllib.request, html, base64, time

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9"})
    return urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "replace")

def strip(t):
    t = re.sub(r"<[^>]+>", "", t)
    return html.unescape(re.sub(r"\s+", " ", t)).strip()

def real_url(href):
    m = re.search(r"[?&]u=a1([A-Za-z0-9_\-]+)", href)
    if m:
        b = m.group(1).replace("-", "+").replace("_", "/")
        b += "=" * (-len(b) % 4)
        try:
            return base64.b64decode(b).decode("utf-8", "replace")
        except Exception:
            pass
    if href.startswith("http") and "bing.com/ck/a" not in href:
        return href
    return href

def serp(q, count=12):
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(
        {"q": q, "setlang": "sv", "cc": "SE", "mkt": "sv-SE", "count": count})
    h = fetch(url)
    out = []
    for block in re.findall(r'<li class="b_algo".*?</li>', h, re.S):
        m = re.search(r'<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.S)
        if not m:
            continue
        u = real_url(html.unescape(m.group(1)))
        title = strip(m.group(2))
        sn = re.search(r'<p[^>]*>(.*?)</p>', block, re.S)
        snippet = strip(sn.group(1)) if sn else ""
        if title:
            out.append((title, u, snippet))
    return out

def headings(url):
    try:
        h = fetch(url)
    except Exception:
        return []
    res = []
    for x in re.findall(r"<h[23][^>]*>(.*?)</h[23]>", h, re.S | re.I):
        t = strip(x)
        if 3 < len(t) < 120:
            res.append(t)
    return res[:16]

def main(q):
    print(f"# Research-brief (Bing): {q}\n")
    res = serp(q)
    print("## SERP topp 10\n")
    for i, (t, u, s) in enumerate(res[:10], 1):
        print(f"{i}. **{t}**")
        print(f"   {u}")
        print(f"   _{s}_\n")
    print("## Vanliga frågor (auto-förslag)\n")
    for f in [f"hur {q}", f"varför {q}", f"{q} problem", f"bästa {q}"]:
        for t, u, s in serp(f)[:4]:
            print(f"- {t}  ({u})")
        time.sleep(0.4)
    print("\n## Konkurrenternas rubriker (topp 5)\n")
    for t, u, s in res[:5]:
        hs = headings(u)
        if hs:
            print(f"### {t} — {u}\n")
            for x in hs:
                print(f"- {x}")
            print()

if __name__ == "__main__":
    main(sys.argv[1])
