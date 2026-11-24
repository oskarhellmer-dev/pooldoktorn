import urllib.request, re
def get(u):
    try:
        r = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
        return urllib.request.urlopen(r, timeout=25).read()
    except Exception as e:
        return b"ERR" + str(e).encode()

# 1. image live-check for the new slugs
imgs = ["pooltillbehor","locklyft-spabad","saltvatten-spabad","batteridriven-pooldammsugare",
        "naturpool","spabad-inomhus","pool-i-tradack","kompositpool"]
for n in imgs:
    for v in ("-1200.webp","-800.webp","-400.webp",".jpg"):
        u = f"https://pooldoktorn.se/bilder/{n}{v}"
        b = get(u)
        print(("OK " if b[:3] not in (b'ERR',) and len(b) > 2000 else "FAIL"),
              f"{len(b):>7}  {u}")

# 2. internal links on new pages -> must be 200
print("\n--- interna länkar ---")
pages = {
 "https://pooldoktorn.se/kopguider/pooltillbehor/": None,
 "https://pooldoktorn.se/guider/naturpool/": None,
 "https://pooldoktorn.se/guider/pool-i-tradack/": None,
 "https://pooldoktorn.se/kopguider/kompositpool/": None,
}
seen = set()
for p in pages:
    html = get(p).decode("utf-8", "replace")
    for m in re.findall(r'href="(/[^"#?]+)"', html):
        if m in seen or m.startswith(("/bilder", "/_astro")):
            continue
        seen.add(m)
for m in sorted(seen):
    b = get("https://pooldoktorn.se" + m)
    if b[:3] == b'ERR' or len(b) < 500:
        print("FELLÄNK", m, len(b))
print("interna länkar kollade:", len(seen), "(inga FELLÄNK ovan = ok)")
