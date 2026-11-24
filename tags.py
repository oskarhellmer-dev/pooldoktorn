import re, glob, json
want = ["pooldammsugare","basta-poolroboten","basta-poolrengoraren","poolkemikalier","sandfilterpump",
        "saltvattenpool","poolsalt","saltklorinator","spabad-kemikalier","spabad-uppblasbart","betongpool",
        "poolfilter-guide","gront-poolvatten","spabad-komplett-guide","spabad-energiforbrukning",
        "spabad-vattenbalans","bygga-in-spabad","terasspool-och-ovanmarkspool","rund-pool","poolskydd",
        "pooltrappa-eller-stege","glasfiberpool","thermoblock-pool","poolliner","ph-och-klor","chockklorering",
        "vattentester-pool","driftkostnad-pool","varmepump-pool","poolvarmare","stil"] 
tags = {}
# json base
b = json.load(open('src/data/content.json'))
for p in b.get('pages', []):
    tags[p['slug']] = p.get('tag')
for f in glob.glob('src/data/*.ts'):
    t = open(f).read()
    for m in re.finditer(r"slug:\s*'([^']+)',\s*\n\s*tag:\s*'([^']+)'", t):
        tags[m.group(1)] = m.group(2)
for w in want:
    print(f"{w:35} {tags.get(w,'??')}")
