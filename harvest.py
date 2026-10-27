#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys, os, re
import research_fallback as R
from siteurls import locs

SITES = {
 "folkpool": "https://www.folkpool.se/sitemap.xml",
 "poolar": "https://www.poolar.se/sitemap.xml",
 "poolstore": "https://www.poolstore.se/sitemap_index.xml",
 "spabad": "https://www.spabad.se/sitemap_index.xml",
 "bygghemma": "https://www.bygghemma.se/sitemap.xml",
 "jula": "https://www.jula.se/sitemap.xml",
 "badtunna24": "https://www.badtunna24.se/sitemap.xml",
 "vattenbutiken": "https://www.vattenbutiken.se/sitemap.xml",
 "svenskabad": "https://www.svenskabad.se/sitemap.xml",
}
os.makedirs("/tmp/urls", exist_ok=True)
for name, sm in SITES.items():
    try:
        us = locs(sm)
    except Exception as e:
        us = []
        print(name, "ERR", e)
    if us:
        open(f"/tmp/urls/{name}.txt", "w").write("\n".join(us) + "\n")
    print(f"{name}: {len(us)} urls")

# editorial content across all
pat = re.compile(r"/(guide|guider|blog|blogg|artiklar|tips|radgivning|kunskap|inspiration|ordlista|fragor|faq)/")
print("\n=== editorial ===")
allu = []
for f in os.listdir("/tmp/urls"):
    for l in open("/tmp/urls/" + f):
        l = l.strip()
        if pat.search(l):
            allu.append(l)
for u in allu[:80]:
    print(u)
print("# editorial total", len(allu))
