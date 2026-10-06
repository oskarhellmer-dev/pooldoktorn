#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Spabad-bilder: varm, levande editorial-stil (gyllene timme / skymning),
med variation per artikel så rutnätet inte blir enformigt."""
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
os.makedirs(OUT, exist_ok=True)

# Gemensam grund: varmt, levande, luft i bilden, inga personer.
QUALITY = ("professional editorial photography, photorealistic, warm inviting sunlight, "
           "gentle steam, soft shadows, rich natural tones, high detail, no text, no watermark, "
           "absolutely no people, no hands, no human figures")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 "spabad-komplett-guide": "A modern hot tub on a wooden deck in a tidy garden at golden hour, steam rising from the glowing water, inviting warm light, the whole tub in view with space around it",
 "installera-spabad-markarbete": "A wooden deck and a prepared hot tub base under construction in a garden, stacked timber and a few tools, warm late-afternoon light, wide view",
 "spabad-energiforbrukning": "A hot tub with a thick thermal cover in a snowy Nordic winter garden at dusk, warm light glowing softly from under the cover, wide view",
 "spabad-vattenbalans": "A water testing kit and test strips on the wooden edge of a hot tub with clear rippling water, warm golden light, shallow depth of field, garden bokeh behind",
 "skotsel-av-spabad": "A clean filter cartridge and a bucket of water on a wooden deck beside a hot tub, warm golden light, shallow depth of field, deck and garden softly behind",
 "vattenbyte-spabad": "Water draining from a hot tub through a hose over the deck edge, catching warm golden light, garden and deck in view",
 "spabad-felsokning": "The illuminated control panel of a hot tub at dusk with warm glow, water reflections and the spa softly visible around it",
 "spabad-vinter": "A steaming hot tub in a snowy Nordic garden at twilight, warm lantern light, snow on the ground and trees, wide view",
 "spabad-eller-badtunna": "A traditional wooden hot tub beside a modern hot tub on a deck at dusk, steam rising from both, warm inviting light, wide view",
 "bygga-in-spabad": "A hot tub recessed into a wooden deck in a modern garden at golden hour, integrated into the decking, warm light, wide view",
 "spabad-kemikalier": "Hot tub maintenance bottles and a test kit on a wooden deck beside a spa, warm golden light, shallow depth of field, spa and garden softly behind",
 "starta-spabad-forsta-gangen": "A newly filled hot tub in a garden with a garden hose in the filter housing, steam rising, warm evening light, the whole tub in view",
}

def fal(prompt, key):
    body = json.dumps({"prompt": f"{prompt}, {QUALITY}, {NORDIC}",
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
