#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Hamta en sidas rubriker + brodtext (for faktakoll)."""
import sys, re, urllib.request, html as htmllib

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")


def get(u):
    try:
        return urllib.request.urlopen(urllib.request.Request(
            u, headers={"User-Agent": UA, "Accept-Language": "sv-SE,sv;q=0.9"}), timeout=25
        ).read().decode("utf-8", "replace")
    except Exception as e:
        return "ERR " + str(e)


def text(h):
    h = re.sub(r"(?is)<(script|style|nav|footer|header|svg)[^>]*>.*?</\1>", " ", h)
    h = re.sub(r"(?is)<(h[1-6])[^>]*>(.*?)</\1>", lambda m: "\n\n## " + re.sub("<[^>]+>", "", m.group(2)) + "\n", h)
    h = re.sub(r"(?is)<p[^>]*>(.*?)</p>", lambda m: "\n" + re.sub("<[^>]+>", "", m.group(1)) + "\n", h)
    h = re.sub(r"(?is)<li[^>]*>(.*?)</li>", lambda m: "\n- " + re.sub("<[^>]+>", "", m.group(1)), h)
    h = re.sub(r"<[^>]+>", " ", h)
    h = htmllib.unescape(h)
    h = re.sub(r"[ \t]+", " ", h)
    h = re.sub(r"\n\s*\n+", "\n\n", h)
    return h.strip()


if __name__ == "__main__":
    for u in sys.argv[1:]:
        b = get(u)
        print("\n" + "=" * 80)
        print("URL:", u, "len", len(b))
        print("=" * 80)
        if b.startswith("ERR"):
            print(b)
        else:
            print(text(b)[:4000])
