#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Hamtar en sida och skriver rubriker (h1-h3) + textutdrag. Anrop: python3 fetchpage.py URL [URL...]"""
import sys, re, urllib.request, html

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9"})
    return urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "replace")

def clean(t):
    t = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    return html.unescape(re.sub(r"\s+", " ", t)).strip()

for url in sys.argv[1:]:
    print("=" * 80)
    print("URL:", url)
    try:
        h = fetch(url)
    except Exception as e:
        print("  FETCH-FEL:", str(e)[:150]); continue
    for tag in ("h1", "h2", "h3"):
        for m in re.findall(rf"<{tag}[^>]*>(.*?)</{tag}>", h, re.S | re.I):
            t = clean(m)
            if 2 < len(t) < 160:
                print(f"  [{tag}] {t}")
    paras = re.findall(r"<p[^>]*>(.*?)</p>", h, re.S | re.I)
    shown = 0
    for p in paras:
        t = clean(p)
        if len(t) > 60:
            print(f"  - {t[:300]}")
            shown += 1
            if shown >= 14:
                break
