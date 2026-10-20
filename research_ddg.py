#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fallback deep-research brief nar Brave-API:t saknar krediter (402).

Anvander DuckDuckGo HTML-endpointen (ingen nyckel kravs) for att:
  1. Hamta SERP (titel, url, snippet).
  2. Frage-mining via varianter (hur/varfor/vs/problem/basta/pris/kostar/vilken).
  3. Hamta konkurrenternas h2/h3 fran topp-sidorna.
Skriver markdown-brief pa stdout. Samma upplagg som research.py.
"""
import sys, re, time, urllib.parse, urllib.request, html as htmllib

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def get(url, timeout=25):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA,
                                                   "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8"})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", "replace")
    except Exception as e:
        return ""


def clean(t):
    t = re.sub(r"<[^>]+>", "", t)
    t = htmllib.unescape(t)
    return re.sub(r"\s+", " ", t).strip()


def decode_ddg(u):
    if u.startswith("//"):
        u = "https:" + u
    m = re.search(r"[?&]uddg=([^&]+)", u)
    if m:
        return urllib.parse.unquote(m.group(1))
    return u


def serp(q, n=10):
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(q)
    body = get(url)
    out = []
    # varje resultat: result__a (titel+lank) och result__snippet
    for m in re.finditer(r'<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)</a>', body, re.S):
        href = decode_ddg(m.group(1))
        title = clean(m.group(2))
        if title and href.startswith("http"):
            out.append({"title": title, "url": href, "desc": ""})
    # snippets i samma ordning
    snips = [clean(s) for s in re.findall(r'<a[^>]*class="result__snippet"[^>]*>(.*?)</a>', body, re.S)]
    for i, s in enumerate(snips):
        if i < len(out):
            out[i]["desc"] = s
    # fallback: vanliga ddg-lite-strukturen (result-link)
    if not out:
        for m in re.finditer(r'class="result-link"[^>]*href="([^"]+)"[^>]*>(.*?)</a>', body, re.S):
            href = decode_ddg(m.group(1))
            title = clean(m.group(2))
            if title and href.startswith("http"):
                out.append({"title": title, "url": href, "desc": ""})
    # dedup pa url
    seen, res = set(), []
    for r in out:
        if r["url"] not in seen:
            seen.add(r["url"]); res.append(r)
    return res[:n]


def headings(html):
    hs = re.findall(r"<h[23][^>]*>(.*?)</h[23]>", html, re.S | re.I)
    out = []
    for h in hs:
        t = clean(h)
        if 3 < len(t) < 120:
            out.append(t)
    return out[:18]


def questions(q):
    forms = ["hur {0}", "varför {0}", "{0} vs", "{0} problem", "bästa {0}", "{0} pris", "{0} kostar", "vilken {0}"]
    seen, out = set(), []
    for f in forms:
        for res in serp(f.format(q), n=6):
            t = res["title"]
            if t and t not in seen:
                seen.add(t); out.append(t)
        time.sleep(1.0)
    return out


def brief(q):
    print(f"# Research-brief (DDG-fallback): {q}\n")
    res = serp(q, 10)
    print("## SERP topp 10\n")
    for i, r in enumerate(res, 1):
        print(f"{i}. **{r['title']}**")
        print(f"   {r['url']}")
        print(f"   _{r['desc']}_\n")
    print("## Vanliga fragor (frage-mining)\n")
    for t in questions(q)[:20]:
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
