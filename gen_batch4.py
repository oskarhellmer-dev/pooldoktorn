#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 4 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "poolslang": "Rolls of blue and white flexible PVC pool hose of different diameters on a paved patio beside a swimming pool filter pump, garden setting",
 "filterbollar-pool": "Close-up of white polyester filter balls beside an open round sand filter tank on a garden patio, swimming pool in the background",
 "poolkemikalier": "Assorted pool water treatment chemical bottles and buckets arranged neatly beside a clean swimming pool, water test kit in the foreground",
 "flockningsmedel-pool": "A bottle of liquid pool flocculant on a pool edge, cloudy greenish water on one side and clear blue water on the other",
 "vattentester-pool": "Pool water test kit with test strips, a colour comparator and a small digital photometer on a table beside a swimming pool",
 "pooltermometer": "A floating thermometer shaped like a yellow duck on the surface of a backyard swimming pool, clear blue water, sunny day",
 "basta-spabad": "A modern rectangular outdoor hot tub spa with an insulating cover partly open on a wooden deck in a Swedish garden",
 "inomhuspool": "An indoor swimming pool inside a bright modern villa with large windows, tiles and a glass wall, calm water, architectural view",
}

def fal(prompt, key):
    body = json.dumps({"prompt": prompt + ", " + STYLE + ", " + NORDIC,
                       "image_size": "landscape_16_9", "num_images": 1}).encode()
    req = urllib.request.Request("https://fal.run/fal-ai/flux-pro/v1.1", data=body,
        headers={"Authorization": f"Key {key}", "Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=180))["images"][0]["url"]

def save(name, raw):
    im = Image.open(BytesIO(raw)).convert("RGB")
    w, h = im.size; t = 16/9
    if w/h > t:
        nw = int(h*t); x = (w-nw)//2; im = im.crop((x, 0, x+nw, h))
    else:
        nh = int(w/t); y = (h-nh)//2; im = im.crop((0, y, w, y+nh))
    im = im.resize((1200, 675), Image.LANCZOS)
    for tw in (1200, 800, 400):
        im.resize((tw, int(675*tw/1200)), Image.LANCZOS).save(f"{OUT}/{name}-{tw}.webp", "WEBP", quality=82, method=6)
    im.resize((800, 450), Image.LANCZOS).save(f"{OUT}/{name}.jpg", "JPEG", quality=84, optimize=True, progressive=True)

if __name__ == "__main__":
    key = os.environ["FAL_KEY"]
    only = sys.argv[1:] if len(sys.argv) > 1 else list(JOBS)
    for name in only:
        try:
            url = fal(JOBS[name], key)
            raw = urllib.request.urlopen(url, timeout=120).read()
            save(name, raw)
            print("OK", name, flush=True)
        except Exception as e:
            print("FAIL", name, str(e)[:160], flush=True)
