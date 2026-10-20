#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import subprocess, sys, os
os.makedirs("/tmp/briefs", exist_ok=True)
kws = [
    "wellness spabad",
    "spabad barn",
    "grumligt vatten spabad",
    "blocket spabad",
    "poolservice",
    "tjällden pool",
    "solfångare pool",
    "förångare värmepump",
]
for kw in kws:
    f = "/tmp/briefs/" + kw.replace(" ", "_").replace("/", "-") + ".md"
    with open(f, "w", encoding="utf-8") as fh:
        subprocess.run([sys.executable, "research_v2.py", kw], stdout=fh, stderr=subprocess.STDOUT)
    print("DONE:", kw, os.path.getsize(f), "bytes", flush=True)
print("ALL DONE")
