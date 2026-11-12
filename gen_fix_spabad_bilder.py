#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Regenererar två felaktiga spabad-bilder (matchar bild mot artikelämne)."""
import os, json, sys, urllib.request
from io import BytesIO
from PIL import Image, ImageStat

OUT = "/home/clawd/pooldoktorn-astro/public/bilder"
STYLE = ("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
         "clean editorial style, high detail, no text, no watermark, no people")
NORDIC = "Swedish/Nordic garden setting, muted natural palette"

JOBS = {
 # Ska visa GRUNDARBETE/platta – inte en färdig tunna
 "installera-spabad-markarbete":
   "A garden construction site for a future hot tub: a freshly prepared level gravel bed "
   "and a concrete foundation slab with rebar mesh, a spirit level and hand tools resting on it, "
   "open excavation, building materials and a wheelbarrow nearby. "
   "There is NO hot tub, NO wooden barrel and NO water in the image",
 # Ska visa modernt spabad VS vedeldad tunna (tydlig kontrast)
 "spabad-eller-badtunna":
   "A modern dark-grey acrylic hot tub with a folded thermal cover standing on a wooden deck, "
   "placed next to a rustic wooden barrel hot tub with steam rising, clear side-by-side "
   "comparison of the two styles in the same garden, soft daylight",
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
            print(f"OK  {name:34} mean={[round(x) for x in m]} {'OK' if lum > 55 else 'FÖR MÖRK'}")
        except Exception as e:
            print("ERR", name, e)

if __name__ == "__main__":
    main()
