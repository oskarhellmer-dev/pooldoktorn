#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar en dedikerad badtunna-bild (16:9 webp 400/800/1200 + jpg)."""
import os, json, sys, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
NAME = "badtunna"
PROMPT = ("A rustic wooden hot tub filled with steaming warm water in a Swedish garden at dusk, "
          "cedar timber tub with a wood-fired heater beside it, soft evening light, no people")
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

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
        nw = int(h*t); x = (w-nw)//2; im = im.crop((x,0,x+nw,h))
    else:
        nh = int(w/t); y = (h-nh)//2; im = im.crop((0,y,w,y+nh))
    im = im.resize((1200,675), Image.LANCZOS)
    for tw in (1200,800,400):
        im.resize((tw,int(675*tw/1200)), Image.LANCZOS).save(f"{OUT}/{name}-{tw}.webp","WEBP",quality=82,method=6)
    im.resize((800,450), Image.LANCZOS).save(f"{OUT}/{name}.jpg","JPEG",quality=84,optimize=True,progressive=True)

def main():
    key = os.environ.get("FAL_KEY")
    if not key:
        print("Sätt FAL_KEY"); sys.exit(1)
    save(NAME, urllib.request.urlopen(fal(PROMPT, key), timeout=120).read())
    m = ImageStat.Stat(Image.open(f"{OUT}/{NAME}-800.webp").convert("RGB")).mean
    print(f"OK {NAME} mean={[round(x) for x in m]}  (ljushet: {'OK' if sum(m)/3 > 60 else 'FÖR MÖRK'})")

if __name__ == "__main__":
    main()
