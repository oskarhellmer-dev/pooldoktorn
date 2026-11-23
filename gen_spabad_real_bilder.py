#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ersätter AI-bilderna i spabad-klustret med riktiga bilder från Badtunnaspa/TimberIN."""
import os, shutil
from PIL import Image, ImageOps, ImageStat

SRC = "/tmp/bt_cand2"
OUT = "/home/clawd/pooldoktorn-astro/public/bilder"

# målbild <- källa, vertikal centrering
MAP = {
    "spabad-komplett-guide":      ("life_terrace_dusk.webp", 0.55),
    "spabad-eller-badtunna":      ("life_integrerad_kamin.webp", 0.50),
    "spabad-vattenbalans":        ("life_glasfiber.webp", 0.50),
    "skotsel-av-spabad":          ("life_8p.webp", 0.50),
    "vattenbyte-spabad":          ("life_plast.webp", 0.50),
    "spabad-felsokning":          ("comp_air_massage.webp", 0.50),
    "spabad-vinter":              ("life_4_6p.webp", 0.50),
    "bygga-in-spabad":            ("life_inbyggnad.webp", 0.50),
    "spabad-kemikalier":          ("comp_uvc_filter.webp", 0.50),
    "starta-spabad-forsta-gangen":("life_elvarme.webp", 0.50),
    "elanslutning-spabad":        ("nordic_classic.webp", 0.50),
    "installera-spabad-markarbete":("life_extern_kamin.webp", 0.50),
    "aktivt-syre-spabad":         ("life_bubbel.webp", 0.50),
    "brom-spabad":                ("life_el_tub.webp", 0.50),
    "cyanursyra-spabad":          ("life_glasfiber_2p.webp", 0.50),
    "gront-vatten-spabad":        ("life_vedeldad.webp", 0.50),
    "klor-spabad":                ("life_plast_stor.webp", 0.50),
    "ph-spabad":                  ("life_background.webp", 0.50),
    "rorrengoring-spabad":        ("comp_water_massage.webp", 0.50),
    "skummande-spabad":           ("nordic_duo.webp", 0.50),
    "spabad-energiforbrukning":   ("comp_leather_cover.webp", 0.50),
    "cirkulationspump-spabad":    ("nordic_oval_duo.webp", 0.50),
    "spabad-lacker":              ("nordic_thermowood_deluxe.webp", 0.50),
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
        print(f"OK  {name:28} <- {src:30} lum={round(lum)} {'ok' if lum > 45 else '<<< MÖRK'}")

if __name__ == "__main__":
    run()
