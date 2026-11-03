#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import csv

PATH = "/home/clawd/pooldoktorn-nyckelord.csv"
MAP = {
    # ph-spabad
    "ph värde spabad": "/spabad/ph-spabad/",
    "ph värde i spabad": "/spabad/ph-spabad/",
    "spabad ph värde": "/spabad/ph-spabad/",
    "för högt ph i spabad": "/spabad/ph-spabad/",
    "för högt ph värde spabad": "/spabad/ph-spabad/",
    "för lågt ph i spabad": "/spabad/ph-spabad/",
    "högt ph i spabad": "/spabad/ph-spabad/",
    "högt ph spabad": "/spabad/ph-spabad/",
    "högt ph värde spabad": "/spabad/ph-spabad/",
    "lågt ph i spabad": "/spabad/ph-spabad/",
    "lågt ph värde spabad": "/spabad/ph-spabad/",
    "spabad lågt ph": "/spabad/ph-spabad/",
    # klor-spabad
    "klorhalt i spabad": "/spabad/klor-spabad/",
    "klornivå spabad": "/spabad/klor-spabad/",
    "klorvärde i spabad": "/spabad/klor-spabad/",
    "fritt klor spabad": "/spabad/klor-spabad/",
    "högt klorvärde spabad": "/spabad/klor-spabad/",
    "för hög klorhalt i spa": "/spabad/klor-spabad/",
    "kloret försvinner i spabadet": "/spabad/klor-spabad/",
    # brom-spabad
    "bromvärde spabad": "/spabad/brom-spabad/",
    "högt bromvärde spabad": "/spabad/brom-spabad/",
    # cyanursyra-spabad
    "cyanursyra spabad": "/spabad/cyanursyra-spabad/",
    "cya värde spabad": "/spabad/cyanursyra-spabad/",
    "hög cyanursyra spabad": "/spabad/cyanursyra-spabad/",
    # gront-vatten-spabad
    "grönt vatten i spabadet": "/spabad/gront-vatten-spabad/",
    "grönt vatten spabad": "/spabad/gront-vatten-spabad/",
    "grönt vatten i spabad": "/spabad/gront-vatten-spabad/",
    "spabad grönt vatten": "/spabad/gront-vatten-spabad/",
    "grönt grumligt vatten i spabad": "/spabad/gront-vatten-spabad/",
    # bubbelplast-pool
    "bubbelplast pool": "/guider/bubbelplast-pool/",
    "bubbelplast till pool": "/guider/bubbelplast-pool/",
    "poolskydd bubbelplast": "/guider/bubbelplast-pool/",
    "pooltäcke bubbelplast": "/guider/bubbelplast-pool/",
    "pooltäcke": "/guider/bubbelplast-pool/",
    "pool överdrag": "/guider/bubbelplast-pool/",
    "överdrag pool": "/guider/bubbelplast-pool/",
    "soltäcke pool": "/guider/bubbelplast-pool/",
    "solfolie pool": "/guider/bubbelplast-pool/",
    "termotäcke pool": "/guider/bubbelplast-pool/",
    "termofolie pool": "/guider/bubbelplast-pool/",
    "värmeduk pool": "/guider/bubbelplast-pool/",
    "poolskydd på rulle": "/guider/bubbelplast-pool/",
    "upprullare poolskydd": "/guider/bubbelplast-pool/",
    # poolvarmevaxlare
    "värmeväxlare pool": "/guider/poolvarmevaxlare/",
    "poolvärmeväxlare": "/guider/poolvarmevaxlare/",
    "värmeväxlare eller värmepump pool": "/guider/poolvarmevaxlare/",
    # poolvarmepump-bypass
    "bypass poolvärmepump": "/guider/poolvarmepump-bypass/",
    "poolvärmepump utan bypass": "/guider/poolvarmepump-bypass/",
    "inställning värmepump pool": "/guider/poolvarmepump-bypass/",
    "kopplingsschema värmepump pool": "/guider/poolvarmepump-bypass/",
    "poolvärmepump 5 kw": "/guider/poolvarmepump-bypass/",
}

with open(PATH, encoding="utf-8-sig", newline="") as f:
    rows = list(csv.reader(f, delimiter=";"))

hits, misses = [], []
for r in rows:
    if len(r) >= 5 and r[0].strip() in MAP:
        r[3] = MAP[r[0].strip()]
        r[4] = "täckt"
        hits.append(r[0].strip())

found = {r[0].strip() for r in rows if len(r) >= 5}
for k in MAP:
    if k not in found:
        misses.append(k)

with open(PATH, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";")
    w.writerows(rows)

print("Uppdaterade (%d):" % len(hits), hits)
print("Hittades ej i listan:", misses)
