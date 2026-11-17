#!/usr/bin/env python3
import urllib.request, time, sys, re
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
pages = [
 "/kopguider/poolvarmare/", "/guider/poolsalt/", "/guider/alger-i-poolen/",
 "/kopguider/poolkupol/", "/kopguider/lamelltacke-pool/", "/kopguider/thermoblock-pool/",
 "/guider/betongpool/", "/kopguider/rund-pool/",
]
def get(u, method="GET"):
    try:
        req = urllib.request.Request(u, method=method, headers={"User-Agent": UA})
        r = urllib.request.urlopen(req, timeout=25)
        return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return "ERR:%s" % e, ""
base = "https://pooldoktorn.se"
# sitemap
st, sm = get(base + "/sitemap-0.xml")
print("sitemap-0.xml status:", st, "len", len(sm))
for p in pages:
    code, body = get(base + p)
    inmap = (p in sm) or (p.rstrip('/') in sm)
    print("%-30s HTTP=%s in_sitemap=%s len=%s" % (p, code, inmap, len(body)))
