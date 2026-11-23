#!/usr/bin/env python3
import urllib.request, re
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
def code(u):
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": UA}), timeout=25)
        return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return "ERR", ""
base = "https://pooldoktorn.se"
pages = {"poolvarmare": "kopguider", "poolsalt": "guider", "alger-i-poolen": "guider",
         "poolkupol": "kopguider", "lamelltacke-pool": "kopguider", "thermoblock-pool": "kopguider",
         "betongpool": "guider", "rund-pool": "kopguider"}
st, sm = code(base + "/sitemap-0.xml")
print("sitemap-0.xml:", st)
for slug, sec in pages.items():
    url = "%s/%s/%s/" % (base, sec, slug)
    c, body = code(url)
    t = re.search(r'<title[^>]*>(.*?)</title>', body, re.S)
    og = re.search(r'property="og:image" content="([^"]*)"', body)
    ogc = code(og.group(1))[0] if og else "NONE"
    imgc = code(base + "/bilder/%s-800.webp" % slug)[0]
    print("%-18s HTTP=%s in_map=%s og_img=%s img800=%s title=%s" % (
        slug, c, url in sm, ogc, imgc, (t.group(1) if t else '?')))
