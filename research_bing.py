#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deep-research brief via Bing HTML (fallback nar Brave-API:t saknar krediter).
Ingen nyckel kravs. Ger: SERP topp 10 (titel, riktig url, snippet),
frage-mining via varianter, samt konkurrenternas h2/h3.
"""
import sys, re, time, base64, urllib.parse, urllib.request, html as htmllib

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def get(url, timeout=25):
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": UA,
            "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
            "Accept": "text/html,application/xhtml+xml"})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", "replace")
    except Exception as e:
        return ""


def clean(t):
    t = re.sub(r"<[^>]+>", "", t)
    t = htmllib.unescape(t)
    return re.sub(r"\s+", " ", t).strip()


def real_url(href):
    """Loser upp bings ck/a-redirect (u=a1<base64url>)."""
    href = htmllib.unescape(href)
    m = re.search(r"[?&]u=a1([A-Za-z0-9_\-]+)", href)
    if m:
        b = m.group(1)
        b += "=" * (-len(b) % 4)
        try:
            return base64.urlsafe_b64decode(b).decode("utf-8", "replace")
        except Exception:
            pass
    return href


def serp(q, n=10):
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(
        {"q": q, "setlang": "sv", "cc": "SE", "count": "20"})
    body = get(url)
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
    forms = ["hur {0}", "varför {0}", "{0} vs", "{0} problem", "bästa {0}",
             "{0} pris", "{0} kostar", "vilken {0}"]
    seen, out = set(), []
    for f in forms:
        for res in serp(f.format(q), n=6):
            t = res["title"]
            if t and t not in seen:
                seen.add(t); out.append(t)
        time.sleep(0.8)
    return out


def brief(q):
    print(f"# Research-brief (Bing-fallback): {q}\n")
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
