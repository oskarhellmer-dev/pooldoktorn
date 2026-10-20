#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, "/home/clawd/pooldoktorn-astro")
from fetch_page import get, text

urls = [
    "https://sv.wikipedia.org/wiki/Solf%C3%A5ngare",
    "https://www.viskanspa.se/",
    "https://svenskabad.se/spabad/",
    "https://www.energiteknik.net/solvarme/solfangare/",
]
for u in urls:
    b = get(u)
    print("\n" + "=" * 80)
    print("URL:", u, "len", len(b))
    print("=" * 80)
    print((b if b.startswith("ERR") else text(b))[:5000])
