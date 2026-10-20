#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för batch 3 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "wellness-spabad": "A modern outdoor hot tub spa with bubbling water and massage jets on a wooden deck in a Scandinavian garden, warm evening light",
 "spabad-barn": "A family hot tub spa on a wooden deck with a safety cover rolled to the side, folded towels and a garden in soft daylight",
 "grumligt-vatten-spabad": "Close-up of cloudy milky water in an outdoor hot tub spa with a white filter cartridge lying on the edge, soft daylight",
 "kopa-begagnat-spabad": "A used hot tub spa loaded on a flatbed trailer ready for transport in a driveway, tools and a cover nearby, overcast daylight",
 "poolservice": "A pool service toolbox with water test kit, test strips and a pool brush on the edge of a clean swimming pool, garden setting, daylight",
 "tjallendens-pool": "A rectangular swimming pool under construction with white insulated concrete formwork blocks stacked as walls, garden excavation, daylight",
 "solfangare-pool": "Black solar heating panels for a swimming pool mounted on a garden rack beside a clear blue pool, sunny day",
 "forangare-varmepump": "Close-up of the evaporator coil fins on an outdoor pool heat pump with light frost on the fins, garden setting, cold daylight",
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
