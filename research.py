#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deep-research brief for en artikel pa pooldoktorn.se.

Anvander Brave Search API for att:
  1. Hamta SERP for huvudordet (topp 10: titel, URL, snippet).
  2. Hamta "People also ask"-liknande fragor via varianter (hur/varfor/vs/problem/basta/kostar).
  3. Hamta relaterade sokningar (Brave 'infobox'/'faq' om det finns).
  4. Hamta konkurrenternas rubriker (h2/h3) fran topp 3-5 sidor.
  5. Skriva ut en brief i markdown pa stdout.

Anvandning:
  python3 research.py "pooldammsugare"
  python3 research.py --csv /home/clawd/pooldoktorn-nyckelord.csv --n 8   # valj nasta luckor
"""
import os, sys, json, re, time, argparse, urllib.parse, urllib.request

ENV = "/home/clawd/.hermes/secrets/brave_api.env"
def brave_key():
    for l in open(ENV, encoding="utf-8"):
        if l.startswith("BRAVE_API_KEY"):
            return l.split("=", 1)[1].strip()
    raise SystemExit("BRAVE_API_KEY saknas")

KEY = brave_key()
UA = "Mozilla/5.0 (compatible; pooldoktorn-research/1.0)"

def brave(q, count=10, extra=""):
    url = ("https://api.search.brave.com/res/v1/web/search?"
           + urllib.parse.urlencode({"q": q, "count": count, "country": "se", "search_lang": "sv"}))
    req = urllib.request.Request(url, headers={
        "Accept": "application/json", "X-Subscription-Token": KEY, "User-Agent": UA})
    try:
        return json.load(urllib.request.urlopen(req, timeout=30))
    except Exception as e:
        return {"_error": str(e)}

def fetch(url, timeout=20):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", "replace")
    except Exception:
        return ""

def headings(html):
    hs = re.findall(r"<h[23][^>]*>(.*?)</h[23]>", html, re.S | re.I)
    out = []
    for h in hs:
        t = re.sub(r"<[^>]+>", "", h)
        t = re.sub(r"\s+", " ", t).strip()
        if 3 < len(t) < 120:
            out.append(t)
    return out[:18]

def questions(q):
    forms = ["hur {}", "varför {}", "{} vs", "{} problem", "bästa {}", "{} pris", "{} kostar", "vilken {}"]
    seen, out = set(), []
    for f in forms:
        r = brave(f.format(q), count=6)
        for res in r.get("web", {}).get("results", []):
            t = res.get("title", "")
            if t and t not in seen:
                seen.add(t); out.append(t)
        time.sleep(0.6)
    return out

def brief(q):
    print(f"# Research-brief: {q}\n")
    # 1. SERP
    r = brave(q, count=10)
    if "_error" in r:
        print(f"**Brave-fel:** {r['_error']}\n")
    results = r.get("web", {}).get("results", [])
    print("## SERP topp 10\n")
    for i, res in enumerate(results, 1):
        print(f"{i}. **{res.get('title','')}**")
        print(f"   {res.get('url','')}")
        d = re.sub(r"<[^>]+>", "", res.get("description", ""))
        print(f"   _{d}_\n")
    # FAQ fran Brave (om finns)
    faq = r.get("faq", {}).get("results") or []
    if faq:
        print("## Brave FAQ\n")
        for f in faq[:8]:
            print(f"- **{f.get('question','')}** — {re.sub('<[^>]+>','',f.get('answer',''))[:200]}")
        print()
    # 2. Fragor
    print("## Vanliga fragor (frage-mining)\n")
    for t in questions(q)[:20]:
        print(f"- {t}")
    print()
    # 3. Konkurrenternas rubriker
    print("## Konkurrenternas rubriker (topp 5)\n")
    for res in results[:5]:
        u = res.get("url", "")
        html = fetch(u)
        if not html:
            continue
        hs = headings(html)
        if hs:
            print(f"### {res.get('title','')} — {u}\n")
            for h in hs:
                print(f"- {h}")
            print()
    print("\n## Gap-analys (FYLL I EFTER GENOMLÄSNING)\n")
    print("Anteckna: vilka delteman tar konkurrenterna upp, vad saknar de, vilken vinkel")
    print("kan vi vinna pa? Vilka konkreta siffror/enheter/namn bor inga i texten?")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("keyword", nargs="?")
    ap.add_argument("--csv")
    ap.add_argument("--n", type=int, default=8)
    a = ap.parse_args()
    if a.csv:
        rows = [l.rstrip("\r\n").split(";") for l in open(a.csv, encoding="utf-8-sig")][1:]
        gaps = [(r[0], r[1]) for r in rows if len(r) > 4 and r[4] != "täckt" and r[0].strip()]
        for k, v in gaps[:a.n]:
            print("=" * 70)
            print(f"VOLYM {v}: {k}")
            brief(k)
    elif a.keyword:
        brief(a.keyword)
    else:
        raise SystemExit("Ange ett sokord eller --csv")
