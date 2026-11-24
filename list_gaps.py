import csv, io
raw = open('/home/clawd/pooldoktorn-nyckelord.csv', 'rb').read().decode('utf-8-sig')
r = csv.reader(io.StringIO(raw), delimiter=';')
rows = list(r)
print('HEADER', rows[0])
gap = [x for x in rows[1:] if len(x) >= 5 and x[4].strip() == 'LUCKA']
print('ANTAL LUCKA', len(gap))
for x in gap:
    print(f"{x[1]:>8} | {x[2]:<8} | {x[0]}")
