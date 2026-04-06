#!/usr/bin/env bash
# Append a release block to docs/11_release-log.md
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/docs/11_release-log.md"
mkdir -p "$(dirname "$LOG")"
touch "$LOG"

echo "Release title (one line):"
read -r TITLE
echo "Date YYYY-MM-DD (empty = today):"
read -r DATE_IN
if [[ -z "${DATE_IN// }" ]]; then
  DATE="$(date +%Y-%m-%d)"
else
  DATE="$DATE_IN"
fi
echo "Bullet lines (empty line to finish):"
BULLETS=()
while IFS= read -r line; do
  [[ -z "$line" ]] && break
  BULLETS+=("$line")
done

{
  echo ""
  echo "---"
  echo ""
  echo "## $DATE — $TITLE"
  echo ""
  for b in "${BULLETS[@]}"; do
    echo "- $b"
  done
  echo ""
} >>"$LOG"

echo "Appended to docs/11_release-log.md"
