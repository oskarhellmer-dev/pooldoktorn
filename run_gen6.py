import os, runpy
for l in open('/home/clawd/.hermes/fal.env'):
    if '=' in l:
        k, v = l.strip().split('=', 1)
        os.environ.setdefault(k, v)
runpy.run_path('/home/clawd/pooldoktorn-astro/gen_batch6.py', run_name='__main__')
