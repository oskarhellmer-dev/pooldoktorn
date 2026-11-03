import urllib.request, sys, time
urls = [
    "https://pooldoktorn.se/spabad/ph-spabad/",
    "https://pooldoktorn.se/spabad/klor-spabad/",
    "https://pooldoktorn.se/spabad/brom-spabad/",
    "https://pooldoktorn.se/spabad/cyanursyra-spabad/",
    "https://pooldoktorn.se/spabad/gront-vatten-spabad/",
    "https://pooldoktorn.se/guider/bubbelplast-pool/",
    "https://pooldoktorn.se/guider/poolvarmevaxlare/",
    "https://pooldoktorn.se/guider/poolvarmepump-bypass/",
]
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 pooldoktorn-verify"})
    try:
        r = urllib.request.urlopen(req, timeout=25)
        return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return 0, str(e)
for attempt in range(6):
    rows = []
    ok = 0
    for u in urls:
        st, body = get(u)
        has_h1 = "<h1" in body
        rows.append((u, st, has_h1, len(body)))
        if st == 200:
            ok += 1
    print("attempt", attempt, "ok", ok, "/", len(urls))
    for u, st, h1, ln in rows:
        print(f"  {st} h1={h1} bytes={ln}  {u}")
    if ok == len(urls):
        break
    time.sleep(20)
