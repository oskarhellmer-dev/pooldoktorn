import sys, json, urllib.parse, urllib.request, time

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def suggest(q):
    u = ("https://suggestqueries.google.com/complete/search?client=firefox&hl=sv&gl=se&q="
         + urllib.parse.quote(q))
    try:
        r = urllib.request.Request(u, headers={"User-Agent": UA})
        data = json.loads(urllib.request.urlopen(r, timeout=20).read().decode("utf-8", "replace"))
        return data[1]
    except Exception as e:
        return []

def mine(seed, depth="alphabet"):
    seen, out = set(), []
    probes = [seed]
    if depth == "alphabet":
        for c in "abcdefghijklmnoprstuvåäö ":
            probes.append(seed + " " + c)
    probes += [f"hur {seed}", f"bästa {seed}", f"{seed} pris", f"vilken {seed}"]
    for p in probes:
        for s in suggest(p):
            if s not in seen:
                seen.add(s); out.append(s)
        time.sleep(0.25)
    return out

if __name__ == "__main__":
    for seed in sys.argv[1:]:
        print("=" * 70)
        print("SEED:", seed)
        for s in mine(seed):
            print("-", s)
