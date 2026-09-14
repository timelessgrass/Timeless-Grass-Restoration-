#!/bin/bash
# Renders the Facebook cover and posts from the HTML templates with headless Chrome.
# Usage: bash social/facebook/src/render.sh   (writes PNGs to social/facebook/)
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
shot() {
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --virtual-time-budget=8000 --window-size="$2" --screenshot="../$3" "file://$PWD/$1" >/dev/null 2>&1
  echo "rendered $3"
}
shot banner.html 1640,624 cover-1640x624.png
shot "posts.html#p1" 1080,1350 post-1-meet-brian.png
shot "posts.html#p2" 1080,1350 post-2-pet-odor.png
shot "posts.html#p3" 1080,1350 post-3-pricing.png
shot "posts.html#p4" 1080,1350 post-4-putting-green.png
shot "posts.html#p5" 1080,1350 post-5-storm-checklist.png
shot "posts.html#p6" 1080,1350 post-6-memberships.png
