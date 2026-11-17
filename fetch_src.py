#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys, re, html, urllib.request, urllib.error
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
def fetch(u):
    try:
        req = urllib.request.Request(u, headers={"User-Agent": UA,
            "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
            "Accept": "text/html,application/xhtml+xml"})
        raw = urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "replace")
    except Exception as e:
        return "ERR: %s" % e
    t = re.sub(r"<(script|style|noscript)[^>]*>.*?</\1>", " ", raw, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"\s+", " ", t)
    return t
for u in sys.argv[1:]:
    t = fetch(u)
    print("=" * 80)
    print(u)
    print(t[:2500] if not t.startswith("ERR:") else t)
    print()
