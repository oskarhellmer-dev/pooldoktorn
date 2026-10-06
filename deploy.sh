#!/usr/bin/env bash
set -euo pipefail
export PATH="/home/clawd/.npm-global/bin:$PATH"
PROJ=/home/clawd/pooldoktorn-astro
REPO=https://github.com/oskarhellmer-dev/pooldoktorn.git
SITE_URL="${SITE_URL:-https://oskarhellmer-dev.github.io}"
BASE_PATH="${BASE_PATH:-/pooldoktorn}"

cd "$PROJ"
git init -q 2>/dev/null || true
git config user.email "oskarhellmer@gmail.com"
git config user.name "oskarhellmer-dev"

echo "== 1. bygg =="
SITE_URL="$SITE_URL" BASE_PATH="$BASE_PATH" npm run build 2>&1 | tail -3

echo "== 2. publicera källkod till main =="
git add -A
git commit -q -m "Astro-version: guider, köpguider, hubbar, schema, RSS" || echo "(inget att committa)"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"
GIT_TERMINAL_PROMPT=0 git push -f origin main 2>&1 | tail -2

echo "== 3. publicera byggd sajt till gh-pages =="
rm -rf /tmp/pd-pages
cp -r dist /tmp/pd-pages
touch /tmp/pd-pages/.nojekyll
cd /tmp/pd-pages
git init -q
git config user.email "oskarhellmer@gmail.com"
git config user.name "oskarhellmer-dev"
git add -A
git commit -q -m "build $(date +%F\ %H:%M)"
git branch -M gh-pages
git remote add origin "$REPO"
GIT_TERMINAL_PROMPT=0 git push -f origin gh-pages 2>&1 | tail -2

echo "== klart: sidor =="
find /tmp/pd-pages -name index.html | wc -l
