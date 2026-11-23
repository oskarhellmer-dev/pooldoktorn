#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Markera publicerade sokord som tackt i nyckelordslistan (batch 8)."""
import csv

PATH = "/home/clawd/pooldoktorn-nyckelord.csv"
MAP = {}
def add(url, kws):
    for k in kws:
        MAP[k.lower()] = url
add("/kopguider/poolvarmare/", ["poolvärmare", "poolvärme", "pooluppvärmning",
    "poolvärmepump ovanmarkspool", "poolvärmare ovanmarkspool", "doppvärmare pool",
    "vedeldad poolvärmare", "elvärmare pool", "värmepump till poolen"])
add("/kopguider/varmepump-pool/", ["poolvärmepump", "luftvärmepump pool",
    "luftvärmepump till pool", "luftvärmepump för pool"])
add("/guider/poolsalt/", ["poolsalt"])
add("/guider/alger-i-poolen/", ["alger i poolen", "gul beläggning pool"])
add("/kopguider/poolkupol/", ["poolkupol", "pool kupol"])
add("/kopguider/lamelltacke-pool/", ["lamelltäcke pool"])
add("/kopguider/thermoblock-pool/", ["thermoblock pool"])
add("/guider/betongpool/", ["betongpool", "betongpool utan liner", "gjuten pool", "pool betong"])
add("/kopguider/rund-pool/", ["rund pool", "runda pooler"])

rows = list(csv.reader(open(PATH, encoding="utf-8-sig"), delimiter=";"))
changed = 0
for r in rows[1:]:
    if len(r) > 4 and r[0].strip().lower() in MAP:
        url = MAP[r[0].strip().lower()]
        r[3] = url
        r[4] = "täckt"
        changed += 1
with open(PATH, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";")
    for r in rows:
        w.writerow(r)
print("markerade:", changed)
