import urllib.request, re

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 verify"})
    try:
        r = urllib.request.urlopen(req, timeout=25)
        return r.status, r.read().decode("utf-8", "replace")
    except Exception as e:
        return getattr(e, "code", 0), ""

slugs = ["ph-spabad", "klor-spabad", "brom-spabad", "cyanursyra-spabad", "gront-vatten-spabad",
         "bubbelplast-pool", "poolvarmevaxlare", "poolvarmepump-bypass"]

st, sm = get("https://pooldoktorn.se/sitemap-0.xml?cb=99")
print("sitemap status", st, "locs", sm.count("<loc>"))
for s in slugs:
    print("  in sitemap:", s, f"/{s}/" in sm)

# live page 200 + internal links
seen = set()
for s in slugs:
    sec = "spabad" if s.endswith("-spabad") else "guider"
    code, body = get(f"https://pooldoktorn.se/{sec}/{s}/")
    print(f"  page {code} /{sec}/{s}/")
    for m in re.findall(r'href="(/[^"]+)"', body):
        if m.startswith(("/bilder/", "/nyckelord")) or m == "#":
            continue
        seen.add(m)
bad = []
for link in sorted(seen):
    code, _ = get("https://pooldoktorn.se" + link)
    if code != 200:
        bad.append((link, code))
print("internal links on new pages:", len(seen))
print("non-200 internal links:", bad if bad else "NONE")
