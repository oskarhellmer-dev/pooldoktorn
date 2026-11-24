import urllib.request, time, sys

urls = [
 "kopguider/pooltillbehor",
 "kopguider/locklyft-spabad",
 "spabad/saltvatten-spabad",
 "kopguider/batteridriven-pooldammsugare",
 "guider/naturpool",
 "spabad/spabad-inomhus",
 "guider/pool-i-tradack",
 "kopguider/kompositpool",
]

def code(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        r = urllib.request.urlopen(req, timeout=25)
        return r.getcode()
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return "ERR " + str(e)[:60]

time.sleep(int(sys.argv[1]) if len(sys.argv) > 1 else 0)
ok = 0
for u in urls:
    c = code("https://pooldoktorn.se/" + u + "/")
    print(f"{c}  https://pooldoktorn.se/{u}/")
    if c == 200:
        ok += 1
print(f"\n{ok}/{len(urls)} gav 200")

# sitemap check
sm = urllib.request.urlopen("https://pooldoktorn.se/sitemap-0.xml", timeout=25).read().decode("utf-8", "replace")
print("sitemap-0.xml loc-antal:", sm.count("<loc>"))
for u in urls:
    print(("I SITEMAP" if u in sm else "SAKNAS I SITEMAP"), u)
