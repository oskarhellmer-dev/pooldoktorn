#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import urllib.request

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")

def code(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        return urllib.request.urlopen(req, timeout=25).getcode()
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return "ERR"

SLUGS = ["poolpaket", "braddavlopp-pool", "cirkulationspump-pool", "klorvarde-pool",
         "brunt-vatten-pool", "driftkostnad-pool", "poolsarg", "elanslutning-spabad"]

# Sitemap
sm = ""
for u in ["https://pooldoktorn.se/sitemap-0.xml", "https://pooldoktorn.se/sitemap.xml",
          "https://pooldoktorn.se/sitemap-index.xml"]:
    try:
        sm += get(u)
    except Exception:
        pass
print("sitemap length:", len(sm))
for s in SLUGS:
    print("%-24s in sitemap: %s" % (s, ("/%s/" % s) in sm))

print("\n-- images --")
for n in ["poolpaket", "braddavlopp-pool", "cirkulationspump-pool", "klorvarde-pool",
          "brunt-vatten-pool", "driftkostnad-pool", "poolsarg", "elanslutning-spabad"]:
    print(n, code("https://pooldoktorn.se/bilder/%s-800.webp" % n))

print("\n-- internal links on new pages --")
links = {
 "https://pooldoktorn.se/kopguider/poolpaket/": ["/poolbygge/att-kopa-pool/", "/poolbygge/vad-kostar-det-att-bygga-pool/", "/guider/poolliner/", "/guider/poolsarg/"],
 "https://pooldoktorn.se/guider/braddavlopp-pool/": ["/guider/poolpump/", "/guider/poolfilter-guide/", "/poolbygge/poolskydd/", "/guider/cirkulationspump-pool/"],
 "https://pooldoktorn.se/guider/cirkulationspump-pool/": ["/guider/poolpump/", "/kopguider/sandfilterpump/", "/guider/poolfilter-guide/", "/guider/braddavlopp-pool/"],
 "https://pooldoktorn.se/guider/klorvarde-pool/": ["/guider/ph-och-klor/", "/guider/chockklorering/", "/guider/gront-poolvatten/", "/guider/vattentester-pool/"],
 "https://pooldoktorn.se/guider/brunt-vatten-pool/": ["/guider/grumligt-poolvatten/", "/guider/gront-poolvatten/", "/guider/varstart-pool/", "/guider/flockningsmedel-pool/"],
 "https://pooldoktorn.se/guider/driftkostnad-pool/": ["/kopguider/varmepump-pool/", "/poolbygge/energismarta-losningar/", "/kopguider/solfangare-pool/"],
 "https://pooldoktorn.se/guider/poolsarg/": ["/guider/poolliner/", "/guider/terasspool-och-ovanmarkspool/", "/poolbygge/poolskydd/", "/poolbygge/att-kopa-pool/"],
 "https://pooldoktorn.se/spabad/elanslutning-spabad/": ["/spabad/installera-spabad-markarbete/", "/spabad/spabad-energiforbrukning/", "/kopguider/spabad-kopguide/", "/spabad/starta-spabad-forsta-gangen/"],
}
for page, hrefs in links.items():
    try:
        html = get(page)
    except Exception as e:
        print("FETCH FAIL", page, e); continue
    miss = [h for h in hrefs if h not in html]
    print("%-52s links ok=%s missing=%s" % (page.replace("https://pooldoktorn.se", ""), len(hrefs) - len(miss), miss))
