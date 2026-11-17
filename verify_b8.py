#!/usr/bin/env python3
import re, os
pages = {
 'poolvarmare': 'kopguider', 'poolsalt': 'guider', 'alger-i-poolen': 'guider',
 'poolkupol': 'kopguider', 'lamelltacke-pool': 'kopguider', 'thermoblock-pool': 'kopguider',
 'betongpool': 'guider', 'rund-pool': 'kopguider'}
for slug, sec in pages.items():
    p = "dist/%s/%s/index.html" % (sec, slug)
    if not os.path.exists(p):
        print("MISSING", p); continue
    h = open(p, encoding='utf-8').read()
    t = re.search(r'<title[^>]*>(.*?)</title>', h, re.S)
    d = re.search(r'<meta name="description" content="([^"]*)"', h)
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S)
    ld = len(re.findall(r'application/ld\+json', h))
    canon = re.search(r'<link rel="canonical" href="([^"]*)"', h)
    print("%-20s title=%s desc=%s h1=%s ld=%s" % (
        slug,
        len(t.group(1)) if t else '?',
        len(d.group(1)) if d else '?',
        len(re.sub('<[^>]+>', '', h1.group(1))) if h1 else '?',
        ld))
    print("     canonical:", canon.group(1) if canon else 'NONE')
    print("     img srcset:", '-400.webp 400w' in h, "| imgs:", len(re.findall(r'<img', h)))
    print("     og:image:", (re.search(r'property="og:image" content="([^"]*)"', h) or [None, 'NONE'])[1])
