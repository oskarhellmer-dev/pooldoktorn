#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Testar 3 bildriktningar på samma motiv så Oskar kan välja stil."""
import os, json, urllib.request
from io import BytesIO
from PIL import Image, ImageDraw

OUT = "/tmp/stiltest"
os.makedirs(OUT, exist_ok=True)

BASE = "A modern hot tub on a wooden deck in a Nordic garden"
COMMON = "professional editorial photography, photorealistic, high detail, no text, no watermark, no people, no hands"

STYLES = {
 "A_bright":  "bright and airy Scandinavian editorial photo, clean minimal composition, soft diffused daylight, light neutral palette, airy calm mood",
 "B_golden":  "warm lifestyle editorial photo at golden hour, inviting warm sunlight, rich natural tones, gentle steam rising, cozy mood",
 "C_blue":    "atmospheric evening photo at blue hour, warm lantern and string lights around the deck, steam rising from the water, deep moody tones, quietly luxurious",
}

def fal(prompt, key):
    body = json.dumps({"prompt": prompt, "image_size": "landscape_16_9", "num_images": 1}).encode()
    req = urllib.request.Request("https://fal.run/fal-ai/flux-pro/v1.1", data=body,
        headers={"Authorization": f"Key {key}", "Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=180))["images"][0]["url"]

key = os.environ["FAL_KEY"]
imgs = []
for name, style in STYLES.items():
    url = fal(f"{BASE}, {style}, {COMMON}", key)
    raw = urllib.request.urlopen(url, timeout=120).read()
    im = Image.open(BytesIO(raw)).convert("RGB")
    w,h = im.size; t=16/9
    if w/h>t: nw=int(h*t); x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
    else: nh=int(w/t); y=(h-nh)//2; im=im.crop((0,y,w,y+nh))
    im = im.resize((600,338), Image.LANCZOS)
    im.save(f"{OUT}/{name}.jpg", quality=90)
    imgs.append((name, im))
    print("OK", name)

mont = Image.new("RGB", (600, 338*3+0), "white")
d = ImageDraw.Draw(mont)
for i,(name,im) in enumerate(imgs):
    mont.paste(im, (0, i*338))
    d.rectangle([0, i*338, 599, i*338+26], fill="black")
    d.text((8, i*338+8), name, fill="white")
mont.save("/tmp/stiltest.jpg", quality=88)
print("saved /tmp/stiltest.jpg")
