#!/usr/bin/env python3
import urllib.request, re, sys
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
def get(u):
    try:
        req = urllib.request.Request(u, headers={"User-Agent": UA})
        r = urllib.request.urlopen(req, timeout=25)
        return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return "ERR", ""
base = "https://pooldoktorn.se"
pages = ["/kopguider/poolvarmare/", "/guider/poolsalt/", "/guider/alger-i-poolen/",
         "/kopguider/poolkupol/", "/kopguider/lamelltacke-pool/", "/kopguider/thermoblock-pool/",
         "/guider/betongpool/", "/kopguider/rund-pool/"]
seen = {}
for p in pages:
    st, body = get(base + p)
    links = set(re.findall(r'href="(/[^"#?]*)"', body))
    bad = []
    for l in sorted(links):
        if l in seen:
            ok = seen[l]
        else:
            code, _ = get(base + l)
            ok = (code == 200)
            seen[l] = ok
        if not ok:
            bad.append(l)
    imgs = set(re.findall(r'src="(/bilder/[^"?]+)', body))
    badimg = []
    for i in sorted(imgs):
        code, _ = get(base + i)
        if code != 200:
            badimg.append(i)
    print("%-30s links=%d bad=%s badimg=%s" % (p, len(links), bad, badimg))
