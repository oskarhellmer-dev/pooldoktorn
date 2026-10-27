#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import csv

PATH = "/home/clawd/pooldoktorn-nyckelord.csv"
MAP = {
    "wellness spabad": "/kopguider/wellness-spabad/",
    "spabad barn": "/guider/spabad-barn/",
    "grumligt vatten spabad": "/guider/grumligt-vatten-spabad/",
    "grumligt vatten i spabadet": "/guider/grumligt-vatten-spabad/",
    "blocket spabad": "/kopguider/kopa-begagnat-spabad/",
    "spabad blocket": "/kopguider/kopa-begagnat-spabad/",
    "poolservice": "/guider/poolservice/",
    "tjällden pool": "/poolbygge/tjallendens-pool/",
    "tjälldens pool": "/poolbygge/tjallendens-pool/",
    "solfångare pool": "/kopguider/solfangare-pool/",
    "solfångare till pool": "/kopguider/solfangare-pool/",
    "solvärme pool": "/kopguider/solfangare-pool/",
    "poolvärmare sol": "/kopguider/solfangare-pool/",
    "förångare värmepump": "/guider/forangare-varmepump/",
}

with open(PATH, encoding="utf-8-sig", newline="") as f:
    rows = list(csv.reader(f, delimiter=";"))

hits = []
for r in rows:
    if len(r) >= 5 and r[0].strip() in MAP:
        r[3] = MAP[r[0].strip()]
        r[4] = "täckt"
        hits.append(r[0].strip())

with open(PATH, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";")
    w.writerows(rows)

print("Uppdaterade:", hits)
