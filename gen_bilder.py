#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för nya pooldoktorn-sidor (16:9 webp 400/800/1200 + jpg)."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "chockklorering": "A person measuring chlorine granules from a bucket into a swimming pool, pool chemicals and test kit beside the pool",
 "grumligt-poolvatten": "A backyard swimming pool with milky cloudy white-blue water, close view of the water surface, garden setting",
 "algmedel-pool": "A plastic bottle of pool algaecide standing beside a swimming pool with clear blue water, pool maintenance products",
 "smart-pool-automation": "A tablet showing a pool control app lying on a wooden table beside a modern swimming pool, pool automation",
 "basta-poolrengoraren": "Pool cleaning equipment arranged poolside: leaf skimmer net, wall brush and vacuum hose, clear blue pool water",
 "spabad-kopguide": "A modern outdoor hot tub spa with bubbling warm water on a wooden deck in a Nordic garden, soft evening light",
 "poolbelysning": "A swimming pool illuminated by underwater LED lights at dusk, glowing blue water, quiet garden",
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
    for name, prompt in JOBS.items():
        try:
            save(name, urllib.request.urlopen(fal(prompt, key), timeout=120).read())
            from PIL import ImageStat
            m = ImageStat.Stat(Image.open(f"{OUT}/{name}-800.webp").convert("RGB")).mean
            print(f"OK  {name}  mean={[round(x) for x in m]}")
        except Exception as e:
            print("ERR", name, e)

if __name__ == "__main__":
    main()
