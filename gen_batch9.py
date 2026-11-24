#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder for batch 9 – 16:9 webp 1200/800/400 + jpg."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "pooltillbehor": "A tidy pool equipment shelf with a leaf skimmer net, a long-handled pool brush, bottles of pool chemicals, a water test kit and PVC fittings, beside a garden pool with clear blue water",
 "locklyft-spabad": "A spa hot tub with a rigid insulating cover on a twin-arm cover lifter on a wooden deck in a Swedish garden, folded cover resting beside the tub, clear water",
 "saltvatten-spabad": "A spa hot tub with clear water on a wooden deck, a small salt chlorinator cell connected to the plumbing and a control panel on the side, Swedish garden",
 "batteridriven-pooldammsugare": "A cordless battery powered pool vacuum with a telescopic pole being lowered into a garden above ground pool with clear water, its own filter cartridge visible",
 "naturpool": "A natural swimming pool with clear water, a gravel regeneration zone with reeds and water plants on one side, natural stone edges, lush Swedish garden",
 "spabad-inomhus": "A modern indoor hot tub built into a tiled floor in a bright bathroom with large windows, a ventilation grille in the ceiling, wooden panelling, light steam in the air",
 "pool-i-tradack": "A rectangular swimming pool built flush into a wooden deck in a Swedish garden, clear blue water level with the boards, a metal ladder, a lift-up service hatch beside the pool",
 "kompositpool": "A one-piece composite swimming pool shell being lowered by a small crane into a prepared hole in a Swedish garden, smooth light grey interior visible, clear water",
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
