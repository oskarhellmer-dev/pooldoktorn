#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 8 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "poolvarmare": "An outdoor heat pump unit for a swimming pool installed on a pad beside a garden pool with clear blue water, white PVC pipes, clean equipment area",
 "poolsalt": "A bag of pool salt beside a measuring scoop on the pool deck, a salt chlorinator control box on the wall, clear blue pool water in the background",
 "alger-i-poolen": "A garden swimming pool with green algae on the walls and cloudy green water, a long-handled pool brush leaning at the edge, overcast daylight",
 "poolkupol": "A transparent pool dome cover over a round above-ground swimming pool in a garden, clear blue water visible inside the dome, soft daylight",
 "lamelltacke-pool": "A slatted pool cover rolled onto an axle at the short end of a rectangular swimming pool, clear blue water, wooden decking at the edge",
 "thermoblock-pool": "Construction of an insulated block swimming pool, stacked white hollow insulated blocks forming the pool walls on a concrete slab, steel reinforcement bars, daylight",
 "betongpool": "A newly built concrete swimming pool under construction in a garden, smooth sprayed concrete walls, clear water beginning to fill the pool, daylight",
 "rund-pool": "A round above-ground steel frame swimming pool in a garden with clear blue water, a metal ladder at the edge, sunny Nordic garden",
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

def mean_brightness(name):
    im = Image.open(f"{OUT}/{name}-800.webp").convert("L")
    px = list(im.getdata())
    return sum(px) / len(px)

if __name__ == "__main__":
    key = os.environ.get("FAL_KEY")
    if not key:
        for l in open("/home/clawd/.hermes/fal.env", encoding="utf-8"):
            if l.startswith("FAL_KEY"):
                key = l.split("=", 1)[1].strip()
    if not key:
        raise SystemExit("FAL_KEY saknas")
    only = sys.argv[1:] if len(sys.argv) > 1 else list(JOBS)
    for name in only:
        try:
            url = fal(JOBS[name], key)
            raw = urllib.request.urlopen(url, timeout=120).read()
            save(name, raw)
            print("OK", name, "brightness=%.1f" % mean_brightness(name), flush=True)
        except Exception as e:
            print("FAIL", name, str(e)[:160], flush=True)
