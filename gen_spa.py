#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för pooldoktorn spabad-sektionen (16:9 webp 400/800/1200 + jpg)."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "spabad-komplett-guide": "A modern outdoor hot tub with steam rising, set on a wooden deck in a Nordic garden at dusk, warm light",
 "installera-spabad-markarbete": "A prepared gravel and concrete base for a hot tub in a garden, construction site with tools, daylight",
 "spabad-energiforbrukning": "A well insulated hot tub with a thick thermal cover on a wooden deck, snowy Nordic winter garden background",
 "spabad-vattenbalans": "A water test kit with test strips and a digital tester beside a hot tub with clear blue water, close view",
 "skotsel-av-spabad": "Cleaning a hot tub filter cartridge with a garden hose on a wooden deck, bucket and tools nearby",
 "vattenbyte-spabad": "A hot tub being drained with a hose lying across a wooden deck, water flowing out, garden setting",
 "spabad-felsokning": "A close up of a hot tub digital control panel showing settings, illuminated display",
 "spabad-vinter": "An outdoor hot tub steaming in a snowy Nordic winter garden at twilight, snow on the ground, warm glow from the water",
 "spabad-eller-badtunna": "A rustic wooden hot tub with steam beside a modern hot tub in a garden, two styles compared",
 "bygga-in-spabad": "A hot tub recessed into a wooden deck in a modern garden, built-in spa integrated into decking, evening light",
 "spabad-kemikalier": "A collection of hot tub chemical bottles and a test kit arranged on a wooden deck beside a spa with clear water",
 "starta-spabad-forsta-gangen": "A newly filled hot tub with clear water and steam rising, garden hose in the filter housing",
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
        nw = int(h*t); x=(w-nw)//2; im = im.crop((x,0,x+nw,h))
    else:
        nh = int(w/t); y=(h-nh)//2; im = im.crop((0,y,w,y+nh))
    im = im.resize((1200,675), Image.LANCZOS)
    for tw in (1200,800,400):
        im.resize((tw,int(675*tw/1200)), Image.LANCZOS).save(f"{OUT}/{name}-{tw}.webp","WEBP",quality=82,method=6)
    im.resize((800,450), Image.LANCZOS).save(f"{OUT}/{name}.jpg","JPEG",quality=84,optimize=True,progressive=True)

def main():
    key = os.environ.get("FAL_KEY")
    if not key: print("Sätt FAL_KEY"); sys.exit(1)
    only = sys.argv[1:]
    for name, prompt in JOBS.items():
        if only and name not in only: continue
        try:
            save(name, urllib.request.urlopen(fal(prompt, key), timeout=120).read())
            m = ImageStat.Stat(Image.open(f"{OUT}/{name}-800.webp").convert("RGB")).mean
            ok = not all(v < 4 for v in m)
            print(f"{'OK' if ok else 'SVART?'}  {name}  mean={[round(x) for x in m]}")
        except Exception as e:
            print("ERR", name, e)

if __name__ == "__main__":
    main()
