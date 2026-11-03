#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 6 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "ph-spabad": "A spa water test kit with a colour comparator vial of pink-tinted test water held up beside an outdoor hot tub with clear blue water, test tablets and a small bottle on a wooden table beside it",
 "klor-spabad": "A chlorine test kit and a small container of spa chlorine granules beside an outdoor hot tub with clear blue water and light steam, test strips on a table",
 "brom-spabad": "A container of spa bromine tablets and a small floating brominator dispenser beside an outdoor hot tub with clear blue water",
 "cyanursyra-spabad": "A digital water photometer showing a cyanuric acid reading beside an outdoor hot tub, a container of chlorine stabilizer granules in the foreground, clear blue water",
 "gront-vatten-spabad": "An outdoor hot tub with clearly green discoloured water, green algae tint, surrounded by green garden foliage, daylight",
 "bubbelplast-pool": "A blue bubble-wrap solar cover partly rolled out on the surface of a clear blue swimming pool, an uproller at the pool edge, sunny garden",
 "poolvarmevaxlare": "A titanium pool heat exchanger, a cylindrical tube unit with pipe connections, mounted in a clean pool equipment room with insulated pipes and valves",
 "poolvarmepump-bypass": "A pool heat pump on a concrete pad beside a swimming pool with a bypass manifold of white PVC pipes and ball valves, clean equipment area",
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
