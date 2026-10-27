#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Hamta en URL och skriv ut lasbar text (rubriker + brodtext) for research."""
import sys, re
import research_fallback as R

def text(url, maxlen=4000):
    h = R.get(url, 25)
    if h.startswith("ERR:"):
        return "FETCH-FEL " + h
    h = re.sub(r"<(script|style|noscript)[^>]*>.*?</\1>", " ", h, flags=re.S | re.I)
    # headings markerade
    def hmark(m):
        level = m.group(1)
        t = R.strip(m.group(2))
        return f"\n{'#'*int(level)} {t}\n"
    h = re.sub(r"<h([1-4])[^>]*>(.*?)</h\1>", hmark, h, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", h)
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    lines = [l.strip() for l in t.splitlines() if l.strip()]
    out = "\n".join(lines)
    # starta vid första H1 (hoppa meny/nav) om den finns
    i = out.find("\n# ")
    if 0 < i < len(out):
        out = out[i + 1:]
    return out[:maxlen]

if __name__ == "__main__":
    for u in sys.argv[1:]:
        print("=" * 80)
        print("URL:", u)
        print("=" * 80)
        print(text(u))
        print()
