#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Hamta alla URL:er fran en sajts sitemap (foljer sitemap-index)."""
import sys, re, research_fallback as R

def locs(url, depth=0, seen=None):
    if seen is None: seen = set()
    if url in seen or depth > 2: return []
    seen.add(url)
    h = R.get(url, 25)
    if h.startswith("ERR:"): return []
    urls = re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", h)
    out = []
    for u in urls:
        if u.endswith(".xml"):
            out += locs(u, depth + 1, seen)
        else:
            out.append(u)
    return out

if __name__ == "__main__":
    nu = 0
    for s in sys.argv[1:]:
        for u in locs(s):
            print(u)
            nu += 1
    print(f"# total {nu}", file=sys.stderr)
