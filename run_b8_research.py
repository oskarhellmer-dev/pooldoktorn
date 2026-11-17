#!/usr/bin/env python3
import subprocess, sys, os
KW = {
 "poolvarmare": "poolvärmare",
 "pooltillbehor": "pooltillbehör",
 "poolsalt": "poolsalt",
 "alger-i-poolen": "alger i poolen",
 "markskydd-pool": "markskydd pool",
 "redox-orp": "redox värde pool",
 "spabad-vattenhardhet": "spabad vattenhårdhet",
 "spabad-sommardrift": "spabad sommartid",
}
out = "/home/clawd/pd-batch8"
os.makedirs(out, exist_ok=True)
for slug, q in KW.items():
    b = f"{out}/bing_{slug}.md"
    if not (os.path.exists(b) and os.path.getsize(b) > 800):
        print("BING", slug, flush=True)
        r = subprocess.run([sys.executable, "research_bing.py", q], capture_output=True, text=True, timeout=240)
        open(b, "w").write(r.stdout or r.stderr)
        print("  ->", len(r.stdout), flush=True)
    l = f"{out}/lite_{slug}.md"
    if not (os.path.exists(l) and os.path.getsize(l) > 300):
        print("LITE", slug, flush=True)
        r = subprocess.run([sys.executable, "research_lite.py", q], capture_output=True, text=True, timeout=200)
        open(l, "w").write(r.stdout or r.stderr)
        print("  ->", len(r.stdout), flush=True)
print("ALLDONE", flush=True)
