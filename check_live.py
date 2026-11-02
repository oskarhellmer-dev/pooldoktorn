#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys, time, urllib.request

SLUGS = [
 "kopguider/poolpaket",
 "guider/braddavlopp-pool",
 "guider/cirkulationspump-pool",
 "guider/klorvarde-pool",
 "guider/brunt-vatten-pool",
 "guider/driftkostnad-pool",
 "guider/poolsarg",
 "spabad/elanslutning-spabad",
]
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"

def code(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        return urllib.request.urlopen(req, timeout=25).getcode()
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return "ERR:" + str(e)[:60]

wait = int(sys.argv[1]) if len(sys.argv) > 1 else 45
time.sleep(wait)
base = "https://pooldoktorn.se/"
for s in SLUGS:
    print("%-40s %s" % (s, code(base + s + "/")), flush=True)
