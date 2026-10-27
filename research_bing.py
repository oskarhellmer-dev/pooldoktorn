#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deep-research brief (Bing + Google autocomplete) med robusthet.

Bing-servern kan svara med irrelevant innehall (datacenter-IP). Darfor:
  - flera parameter-varianter och omforsok,
  - relevansfilter: minst 2 traffar dar ett nyckelord fran sokordet finns,
  - Google autocomplete for verkliga sokfragor,
  - konkurrenternas h2/h3 fran topp-sidorna.
Skriver markdown-brief pa stdout. Ingen API-nyckel.
"""
import sys, re, time, json, base64, urllib.parse, urllib.request, html as htmllib

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def get(url, timeout=25, referer=None):
    h = {"User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
         "Accept": "text/html,application/xhtml+xml"}
    if referer:
        h["Referer"] = referer
    try:
        return urllib.request.urlopen(urllib.request.Request(url, headers=h),
                                      timeout=timeout).read().decode("utf-8", "replace")
    except Exception:
        return ""


def clean(t):
    return re.sub(r"\s+", " ", htmllib.unescape(re.sub(r"<[^>]+>", "", t))).strip()


def real_url(href):
    href = htmllib.unescape(href)
    m = re.search(r"[?&]u=a1([A-Za-z0-9_\-]+)", href)
    if m:
        b = m.group(1) + "=" * (-len(m.group(1)) % 4)
        try:
            return base64.urlsafe_b64decode(b).decode("utf-8", "replace")
        except Exception:
            pass
    return href


def parse_bing(body):
    out = []
    for it in re.findall(r'<li class="b_algo".*?</li>', body, re.S):
        m = re.search(r'<h2>\s*<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', it, re.S)
        if not m:
            continue
        u = real_url(m.group(1))
        t = clean(m.group(2))
        p = re.search(r'<p[^>]*>(.*?)</p>', it, re.S)
        d = clean(p.group(1)) if p else ""
        if t and u.startswith("http"):
            out.append({"title": t, "url": u, "desc": d})
    seen, res = set(), []
    for r in out:
        if r["url"] not in seen:
            seen.add(r["url"]); res.append(r)
    return res


def relevant(results, q):
    toks = [w.lower() for w in re.split(r"\W+", q) if len(w) >= 4]
    if not toks:
        return False
    hits = 0
    for r in results:
        blob = (r["title"] + " " + r["url"]).lower()
        if any(t in blob for t in toks):
            hits += 1
    return hits >= 2


def serp(q, n=10, tries=7):
    variants = [
        {"q": q, "count": "20", "mkt": "sv-SE"},
        {"q": q, "count": "20", "setlang": "sv", "cc": "SE"},
        {"q": q, "count": "20"},
        {"q": q + " sverige", "count": "20", "mkt": "sv-SE"},
    ]
    for i in range(tries):
        v = variants[i % len(variants)]
        body = get("https://www.bing.com/search?" + urllib.parse.urlencode(v))
        res = parse_bing(body)
        if relevant(res, q):
            return res[:n]
        time.sleep(1.2)
    return []


def suggest(q):
    u = ("https://suggestqueries.google.com/complete/search?client=firefox&hl=sv&gl=se&q="
         + urllib.parse.quote(q))
    try:
        return json.loads(get(u))[1]
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
    if not res:
        print("_(Bing gav inga relevanta traffar efter omforsok)_\n")
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
        body = get(r["url"], referer="https://www.bing.com/")
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
