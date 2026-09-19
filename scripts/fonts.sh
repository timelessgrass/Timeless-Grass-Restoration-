#!/usr/bin/env bash
# Re-download the self-hosted Poppins files and print the @font-face rules at the top of public/styles.css.
# Run only when the weights in the CSS change.
set -euo pipefail
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
cd "$(dirname "$0")/.."
mkdir -p public/assets/fonts
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" \
  | awk '/\/\* latin \*\//{f=1} f&&/src: url/{print} f&&/}/{f=0}' \
  | grep -oE 'https://[^)]+\.woff2' | while read -r url; do echo "$url"; done
echo "Download each with: curl -s -o public/assets/fonts/poppins-<weight>.woff2 <url>"
