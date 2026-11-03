import urllib.request, re
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 verify"})
    try:
        r = urllib.request.urlopen(req, timeout=25); return r.status, r.read().decode("utf-8","replace")
    except Exception as e:
        try: return e.code, ""
        except Exception: return 0, str(e)

slugs = ["ph-spabad","klor-spabad","brom-spabad","cyanursyra-spabad","gront-vatten-spabad","bubbelplast-pool","poolvarmevaxlare","poolvarmepump-bypass"]
st, sm = get("https://pooldoktorn.se/sitemap-0.xml")
print("sitemap status", st, "locs", sm.count("<loc>"))
for s in slugs:
    print("  in sitemap:", s, f"#/{s}/" in sm)

# image checks
imgs = ["ph-spabad","klor-spabad","brom-spabad","cyanursyra-spabad","gront-vatten-spabad","bubbelplast-pool","poolvarmevaxlare","poolvarmepump-bypass"]
for n in imgs:
    st, _ = get(f"https://pooldoktorn.se/bilder/{n}-800.webp")
    print("  img", n, st)

# internal link check: gather internal hrefs from each new page and HEAD them
seen = set()
for s in slugs:
    sec = "spabad" if s.endswith("-spabad") else "guider"
    st, body = get(f"https://pooldoktorn.se/{sec}/{s}/")
    for m in re.findall(r'href="(/[^"]+)"', body):
        if m.startswith(("/bilder/","/nyckelord","#")): continue
        seen.add(m)
print("internal links found on new pages:", len(seen))
bad = []
for link in sorted(seen):
    st, _ = get("https://pooldoktorn.se" + link)
    if st != 200:
        bad.append((link, st))
print("non-200 internal links:", bad if bad else "NONE")
