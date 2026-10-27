#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 5 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "poolpaket": "A complete swimming pool kit laid out on a lawn before installation, pool wall panels, a rolled blue pool liner, a sand filter with pump, a metal pool ladder and pipes",
 "braddavlopp-pool": "Close-up of a stainless steel pool surface skimmer weir at the waterline of a blue tiled swimming pool, stone coping edge beside it, clear water",
 "cirkulationspump-pool": "A pool circulation pump with a clear strainer basket lid on a concrete pad in a clean pool equipment room, connected pipes and valves",
 "klorvarde-pool": "A pool water test kit with a colour comparator showing a chlorine test result and test tablets on a table beside a swimming pool, blue water behind",
 "brunt-vatten-pool": "A swimming pool with brownish discoloured water beside a section of clear blue pool water, a water test strip and a pool chemical bottle in the foreground",
 "driftkostnad-pool": "A pool heat pump unit beside a swimming pool at dusk with light steam rising from the warm water, calm Nordic garden",
 "poolsarg": "Close-up of a stone coping edge around a swimming pool with water lapping against the stones, a wooden deck beside it",
 "elanslutning-spabad": "An outdoor hot tub spa on a wooden deck with a buried electrical cable and a small weatherproof consumer unit with an RCD nearby",
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
