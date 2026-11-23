#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ersätter AI-bilderna på badtunna-sidorna med riktiga produktbilder från Badtunnaspa/TimberIN."""
import os
from PIL import Image, ImageOps, ImageStat

SRC = "/tmp/btimg"
OUT = "/home/clawd/pooldoktorn-astro/public/bilder"

# målbild  <-  källa,  vertikal centrering (0=topp, 1=botten)
MAP = {
    "badtunna":            ("01_jacuzzi-de-madera-en-terraza-al-anochecer.jpg", 0.55),
    "vedeldad-badtunna":   ("02_Badtunna-med-integrerad-kamin-Wellness-Royal-1.jpg", 0.50),
    "badtunna-pris":       ("13_timberin-nordic-duo-white-studio.webp", 0.50),
    "bygga-in-badtunna":   ("06_Badtunna-glasfiber-for-inbyggnad.jpg", 0.50),
    "spabad-eller-badtunna": ("03_Badtunna-i-glasfiber-f__r-2-personer-Tarja-__rebro-Sverige-3.jpg", 0.55),
    "utomhusbastu":        ("extra_timberin-nordic-pod-porch-white-studio-visual-20260805.webp", 0.52),
    "isbad":               ("09_timberin-nordic-ice-cold-plunge-white-studio.webp", 0.50),
}

def run():
    for name, (src, cy) in MAP.items():
        p = os.path.join(SRC, src)
        if not os.path.exists(p):
            print("SAKNAS:", name, src); continue
        im = Image.open(p).convert("RGB")
        im = ImageOps.fit(im, (1200, 675), method=Image.LANCZOS, centering=(0.5, cy))
        for tw in (1200, 800, 400):
            im.resize((tw, int(675 * tw / 1200)), Image.LANCZOS).save(
                f"{OUT}/{name}-{tw}.webp", "WEBP", quality=82, method=6)
        im.resize((800, 450), Image.LANCZOS).save(f"{OUT}/{name}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
        m = ImageStat.Stat(im).mean
        lum = sum(m) / 3
        print(f"OK  {name:24} <- {src[:40]:40} mean={[round(x) for x in m]} {'OK' if lum > 45 else 'MÖRK'}")

if __name__ == "__main__":
    run()
