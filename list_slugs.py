import json, re, glob, os
os.chdir('/home/clawd/pooldoktorn-astro')
slugs = []
# content.json
try:
    base = json.load(open('src/data/content.json'))
    for p in base.get('pages', []):
        slugs.append((p['slug'], p.get('tag')))
except Exception as e:
    print('json err', e)
# ts modules: slug: '...'
for f in glob.glob('src/data/*.ts'):
    txt = open(f).read()
    for m in re.finditer(r"slug:\s*'([^']+)'", txt):
        slugs.append((m.group(1), os.path.basename(f)))
print('TOTALT', len(slugs))
for s, t in slugs:
    print(s, '|', t)
