#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genererar bilder för pooldoktorn spabad-sektionen (16:9 webp 400/800/1200 + jpg).
Enhetlig "editorial establishing shot"-stil: samma avstånd, badet i sammanhang,
luft runt motivet, tydlig horisont – så att alla kort i rutnätet känns som en serie."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)

# Enhetlig kamerastil för HELA setet (nyckeln till att rutnätet ska hänga ihop)
SHOT = ("wide editorial establishing shot, the entire hot tub visible and centered in the frame, "
        "generous empty space around the subject, clear garden horizon and sky in the background, "
        "consistent camera distance and framing, balanced composition")
QUALITY = ("professional editorial photography, photorealistic, shot on 35mm at f/5.6, "
           "soft natural daylight, high detail, no text, no watermark, "
           "absolutely no people, no hands, no human figures, empty scene")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "spabad-komplett-guide": "A modern outdoor hot tub on a wooden deck in a tidy garden, gentle steam rising in the evening light",
 "installera-spabad-markarbete": "An empty prepared concrete and gravel base for a hot tub in a garden, tidy construction context, daylight",
 "spabad-energiforbrukning": "A hot tub with a thick thermal cover on a wooden deck in a Nordic winter garden, snow on the ground",
 "spabad-vattenbalans": "A hot tub in a garden with a water testing kit and test strips on the deck beside it",
 "skotsel-av-spabad": "A clean hot tub on a wooden deck in a garden with a filter cartridge and a bucket standing beside it",
 "vattenbyte-spabad": "A hot tub on a wooden deck in a garden with a drain hose over the edge, water being emptied",
 "spabad-felsokning": "A modern outdoor hot tub in a garden, its control panel and access panel visible on the side",
 "spabad-vinter": "A steaming hot tub in a snowy Nordic winter garden at twilight, warm glow from the water",
 "spabad-eller-badtunna": "A rustic wooden hot tub beside a modern hot tub in a garden, steam rising from both",
 "bygga-in-spabad": "A hot tub recessed into a wooden deck in a modern garden, integrated into the decking, evening light",
 "spabad-kemikalier": "Hot tub maintenance bottles and a test kit on a wooden deck beside a spa in a garden",
 "starta-spabad-forsta-gangen": "A newly filled hot tub in a garden with a garden hose in the filter housing, gentle steam rising",
}

def fal(prompt, key):
    body = json.dumps({"prompt": f"{prompt}, {SHOT}, {QUALITY}, {NORDIC}",
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
