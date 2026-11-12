#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för badtunna-klustret."""
import os, json, sys, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "vedeldad-badtunna": "A wood-fired hot tub in a Nordic garden with a smoking chimney and steam rising from the water, stacked firewood beside it, dusk",
 "badtunna-pris": "A clean modern wooden hot tub on a garden deck with a termo cover, steam, soft daylight, tidy garden",
 "bygga-in-badtunna": "A wooden hot tub recessed into a timber deck in a Nordic garden, integrated into decking, evening light",
 "utomhusbastu": "A small wooden outdoor sauna cabin in a Nordic garden at dusk with warm light in the window, a gravel path",
 "isbad": "An outdoor ice bath tub with cold water and light steam in a Nordic garden, early morning light",
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
    for name, prompt in JOBS.items():
        try:
            save(name, urllib.request.urlopen(fal(prompt, key), timeout=120).read())
            m = ImageStat.Stat(Image.open(f"{OUT}/{name}-800.webp").convert("RGB")).mean
            lum = sum(m)/3
            print(f"OK  {name:22} mean={[round(x) for x in m]} {'OK' if lum > 55 else 'FÖR MÖRK'}")
        except Exception as e:
            print("ERR", name, e)

if __name__ == "__main__":
    main()
