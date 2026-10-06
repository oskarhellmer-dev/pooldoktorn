#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, sys, json, urllib.request
from io import BytesIO
from PIL import Image, ImageStat
OUT="/home/clawd/pooldoktorn-astro/public/bilder"
STYLE=("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
       "clean editorial style, high detail, no text, no watermark, no people, no hands")
NORDIC="Swedish/Nordic pool setting, clean clear blue water, muted natural palette"
JOBS={
 "dolphin-s300i":"A premium robotic pool cleaner on the bottom of a large clear blue pool, angled three-quarter view showing the filter basket and tracks, crisp water",
 "dolphin-e20":"A compact robotic pool cleaner climbing the wall of a smaller clear blue pool, side view, garden background",
 "dolphin-e10":"A small simple robotic pool cleaner on the flat floor of a clear blue above-ground pool, top-down angle",
 "wybot-c2-vision-a":"A modern black cordless robotic pool cleaner with a camera on the floor of a large clear blue pool, front view, sleek design",
 "aiper-scuba-e1":"A black and grey cordless robotic pool cleaner on the flat floor of a clear blue pool, three-quarter view, compact design",
 "aiper-scuba-se":"A small black cordless robotic pool cleaner on the floor of a clear blue pool, simple budget design, top-down angle",
 "bwt-fsa900":"A white and grey cordless robotic pool cleaner on the bottom of a small clear blue pool, side view with visible debris compartment",
 "ultenic-pooleco-10":"A black robotic pool cleaner with a small float on the floor of a clear blue pool, three-quarter view, budget design",
 "bestway-flowclear-aquarover":"A blue and white cordless robotic pool cleaner on the floor of a round above-ground pool, top-down angle",
 "netspa-coyote":"A grey robotic pool cleaner on the tiled floor of a clear blue pool, angled view, robust design",
}
def fal(p,key):
    body=json.dumps({"prompt":f"{p}, {STYLE}, {NORDIC}","image_size":"landscape_16_9","num_images":1}).encode()
    req=urllib.request.Request("https://fal.run/fal-ai/flux-pro/v1.1",data=body,
        headers={"Authorization":f"Key {key}","Content-Type":"application/json"})
    return json.load(urllib.request.urlopen(req,timeout=180))["images"][0]["url"]
def save(name,raw):
    im=Image.open(BytesIO(raw)).convert("RGB")
    w,h=im.size; t=16/9
    if w/h>t: nw=int(h*t); x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
    else: nh=int(w/t); y=(h-nh)//2; im=im.crop((0,y,w,y+nh))
    im=im.resize((1200,675),Image.LANCZOS)
    for tw in (1200,800,400):
        im.resize((tw,int(675*tw/1200)),Image.LANCZOS).save(f"{OUT}/{name}-{tw}.webp","WEBP",quality=82,method=6)
    im.resize((800,450),Image.LANCZOS).save(f"{OUT}/{name}.jpg","JPEG",quality=84,optimize=True,progressive=True)
key=os.environ["FAL_KEY"]
only=sys.argv[1:]
for name,prompt in JOBS.items():
    if only and name not in only: continue
    try:
        save(name,urllib.request.urlopen(fal(prompt,key),timeout=120).read())
        m=ImageStat.Stat(Image.open(f"{OUT}/{name}-800.webp").convert("RGB")).mean
        print(f"{'OK' if not all(v<4 for v in m) else 'SVART?'}  {name}  mean={[round(x) for x in m]}")
    except Exception as e:
        print("ERR",name,e)
