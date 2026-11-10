#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 7 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "rorrengoring-spabad": "A bottle of spa plumbing pipe cleaner fluid standing on the rim of an outdoor hot tub with clear blue water, lid open, soft daylight",
 "cirkulationspump-spabad": "A small circulation pump for a hot tub mounted on its plumbing inside a clean equipment compartment, white PVC pipes and unions, technical photo",
 "skummande-spabad": "Close-up of white foam on the surface of a hot tub with bubbling jets, clear water beneath the foam, outdoor setting",
 "spabad-lacker": "A hot tub with side panel removed showing a drip of water on a plumbing union near the pump and heater, wet insulation, workshop light",
 "aktivt-syre-spabad": "A container of active oxygen granules for pool water treatment next to a small outdoor hot tub and a water test kit, clear blue water",
 "pooloverdrag": "A swimming pool covered with a blue bubble solar cover rolled out on the surface, an uproller at the edge, sunny Nordic garden",
 "saltvattenpool": "An electrolysis salt chlorinator cell installed in the plumbing of a swimming pool with clear blue water, PVC pipes and a control box, clean equipment area",
 "poolstaket-och-poollarm": "A safety fence with a lockable gate around a swimming pool in a garden, clear blue water, wooden decking, Nordic garden, daylight",
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
    key = os.environ["FAL_KEY"]
    only = sys.argv[1:] if len(sys.argv) > 1 else list(JOBS)
    for name in only:
        try:
            url = fal(JOBS[name], key)
            raw = urllib.request.urlopen(url, timeout=120).read()
            save(name, raw)
            print("OK", name, "brightness=%.1f" % mean_brightness(name), flush=True)
        except Exception as e:
            print("FAIL", name, str(e)[:160], flush=True)
