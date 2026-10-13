#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för batch 2 (köpguider/guider) – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "pooldammsugare": "A manual pool vacuum cleaner head with a hose on the floor of a clean swimming pool, pool brush and telescopic pole on the pool deck",
 "sandfilterpump": "A sand filter pump for a swimming pool with a six-way multiport valve and pressure gauge, beside a clean pool",
 "poolliner": "A swimming pool under renovation with a rolled blue PVC liner and pool walls visible",
 "poolstege": "A stainless steel swimming pool ladder with non-slip steps leading into clear blue water",
 "spabad-uppblasbart": "An inflatable hot tub spa with bubbling water on a wooden deck in a garden, warm evening light",
 "swimspa": "A modern swim spa with a strong current jet and warm water in a garden, evening light, sleek design",
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
            print("OK", name)
        except Exception as e:
            print("FAIL", name, str(e)[:160])
