#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kontrollerar title/meta-desc/langd + en H1 + canonical for byggda sidor."""
import re, sys, html, os
BASE = "/home/clawd/pooldoktorn-astro/dist"
slugs = sys.argv[1:]
for s in slugs:
    for sec in ("spabad", "guider", "kopguider", "poolbygge", "recensioner"):
        p = f"{BASE}/{sec}/{s}/index.html"
        if os.path.exists(p):
            h = open(p, encoding="utf-8").read()
            t = re.search(r"<title[^>]*>(.*?)</title>", h, re.S)
            d = re.search(r'<meta name="description" content="([^"]*)"', h)
            h1 = len(re.findall(r"<h1[^>]*>", h))
            can = re.search(r'<link rel="canonical" href="([^"]*)"', h)
            tt = html.unescape(t.group(1)) if t else "?"
            dd = html.unescape(d.group(1)) if d else "?"
            print(f"{sec}/{s}: title={len(tt)} desc={len(dd)} h1={h1} canonical={can.group(1) if can else '?'}")
            if len(tt) < 25 or len(tt) > 65:
                print(f"   VARNING title-langd: {tt}")
            if len(dd) < 100 or len(dd) > 175:
                print(f"   VARNING desc-langd: {dd}")
            if h1 != 1:
                print(f"   VARNING h1-antal={h1}")
