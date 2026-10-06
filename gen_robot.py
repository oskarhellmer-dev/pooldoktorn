#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, json, urllib.request
from io import BytesIO
from PIL import Image, ImageStat
OUT="/home/clawd/pooldoktorn-astro/public/bilder"
STYLE=("professional photography, photorealistic, shot on 35mm, soft natural daylight, "
       "clean editorial style, high detail, no text, no watermark, no people")
NORDIC="Swedish/Nordic garden setting, muted natural palette"
name="basta-poolroboten"
prompt=("A modern robotic pool cleaner robot submerged on the clean floor of a clear blue swimming pool, "
        "the robot seen from a low angle with its filter basket and brushes visible, crisp water")
def fal(p,key):
    body=json.dumps({"prompt":f"{p}, {STYLE}, {NORDIC}","image_size":"landscape_16_9","num_images":1}).encode()
    req=urllib.request.Request("https://fal.run/fal-ai/flux-pro/v1.1",data=body,
        headers={"Authorization":f"Key {key}","Content-Type":"application/json"})
    return json.load(urllib.request.urlopen(req,timeout=180))["images"][0]["url"]
key=os.environ["FAL_KEY"]
im=Image.open(BytesIO(urllib.request.urlopen(fal(prompt,key),timeout=120).read())).convert("RGB")
w,h=im.size; t=16/9
if w/h>t: nw=int(h*t); x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
else: nh=int(w/t); y=(h-nh)//2; im=im.crop((0,y,w,y+nh))
im=im.resize((1200,675),Image.LANCZOS)
for tw in (1200,800,400):
    im.resize((tw,int(675*tw/1200)),Image.LANCZOS).save(f"{OUT}/{name}-{tw}.webp","WEBP",quality=82,method=6)
im.resize((800,450),Image.LANCZOS).save(f"{OUT}/{name}.jpg","JPEG",quality=84,optimize=True,progressive=True)
m=ImageStat.Stat(Image.open(f"{OUT}/{name}-800.webp").convert("RGB")).mean
print("OK",name,"mean=",[round(x) for x in m])
