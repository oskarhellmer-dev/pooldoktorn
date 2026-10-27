#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deep-research brief nar bade Brave (402) och Bing-parsern ar opalitlig.

Anvander DuckDuckGo lite-endpointen (https://lite.duckduckgo.com/lite/) for SERP
+ Google autocomplete for verkliga sokfragor + konkurrenternas h2/h3 fran topp-sidorna.
Skriver markdown-brief pa stdout. Ingen API-nyckel kravs.
"""
import sys, re, time, json, urllib.parse, urllib.request, html as htmllib

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def get(url, timeout=25):
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": UA,
            "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
            "Accept": "text/html,application/xhtml+xml"})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", "replace")
    except Exception:
        return ""


def clean(t):
    t = re.sub(r"<[^>]+>", "", t)
    t = htmllib.unescape(t)
    return re.sub(r"\s+", " ", t).strip()


def decode_ddg(u):
    u = htmllib.unescape(u)
    if u.startswith("//"):
        u = "https:" + u
    m = re.search(r"[?&]uddg=([^&]+)", u)
    if m:
        return urllib.parse.unquote(m.group(1))
    return u


def serp(q, n=10):
    url = "https://lite.duckduckgo.com/lite/?q=" + urllib.parse.quote(q)
    body = get(url)
    out = []
    for m in re.finditer(
            r'<a[^>]*class="result-link"[^>]*href="([^"]+)"[^>]*>(.*?)</a>', body, re.S):
        href = decode_ddg(m.group(1))
        title = clean(m.group(2))
        if title and href.startswith("http"):
            out.append({"title": title, "url": href, "desc": ""})
    snips = [clean(s) for s in re.findall(
        r'class="result-snippet"[^>]*>(.*?)</td>', body, re.S)]
    for i, s in enumerate(snips):
        if i < len(out):
            out[i]["desc"] = s
    seen, res = set(), []
    for r in out:
        if r["url"] not in seen:
            seen.add(r["url"]); res.append(r)
    return res[:n]


def suggest(q):
    u = ("https://suggestqueries.google.com/complete/search?client=firefox&hl=sv&gl=se&q="
         + urllib.parse.quote(q))
    r = get(u)
    try:
        return json.loads(r)[1]
    except Exception:
        return []


def headings(html):
    hs = re.findall(r"<h[23][^>]*>(.*?)</h[23]>", html, re.S | re.I)
    out = []
    for h in hs:
        t = clean(h)
        if 3 < len(t) < 120:
            out.append(t)
    return out[:18]


def questions(q):
    seen, out = set(), []
    base = [q, f"{q} hur", f"{q} varför", f"{q} bästa", f"hur {q}",
            f"bästa {q}", f"{q} pris", f"{q} problem", f"{q} vs", f"{q} dimension"]
    for b in base:
        for s in suggest(b):
            if s not in seen:
                seen.add(s); out.append(s)
        time.sleep(0.4)
    return out


def brief(q):
    print(f"# Research-brief: {q}\n")
    res = serp(q, 10)
    print("## SERP topp 10\n")
    for i, r in enumerate(res, 1):
        print(f"{i}. **{r['title']}**")
        print(f"   {r['url']}")
        print(f"   _{r['desc']}_\n")
    print("## Sokfragor (Google autocomplete)\n")
    for t in questions(q)[:25]:
        print(f"- {t}")
    print()
    print("## Konkurrenternas rubriker (topp 5)\n")
    for r in res[:5]:
        body = get(r["url"])
        if not body:
            continue
        hs = headings(body)
        if hs:
            print(f"### {r['title']} — {r['url']}\n")
            for h in hs:
                print(f"- {h}")
            print()
    print("\n## Gap-analys (FYLL I EFTER GENOMLASNING)")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit("Ange ett sokord")
    brief(sys.argv[1])
