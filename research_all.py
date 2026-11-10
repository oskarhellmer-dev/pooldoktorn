#!/usr/bin/env python3
import subprocess, sys, os
QS = {
 "rorrengoring-spabad": "rörrengöring spabad",
 "spabad-lacker": "spabad tappar vatten",
 "skummande-spabad": "skummande spabad",
 "cirkulationspump-spabad": "cirkulationspump spabad",
 "saltvattenpool": "saltvattenpool",
 "pooloverdrag": "poolöverdrag",
 "poolstaket": "poolstaket barnsäkerhet",
 "vedeldad-poolvarmare": "vedeldad poolvärmare",
}
out = "/tmp/research"
for slug, q in QS.items():
    path = f"{out}/b_{slug}.md"
    if os.path.exists(path) and os.path.getsize(path) > 500:
        print("SKIP", slug, flush=True); continue
    print("RUN", slug, q, flush=True)
    try:
        r = subprocess.run([sys.executable, "research_bing.py", q], capture_output=True, text=True, timeout=180)
        open(path, "w").write(r.stdout or r.stderr)
        print("OK", slug, len(r.stdout), flush=True)
    except Exception as e:
        print("FAIL", slug, str(e)[:120], flush=True)
print("ALLDONE", flush=True)
