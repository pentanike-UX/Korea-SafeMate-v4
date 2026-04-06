#!/usr/bin/env bash
# Append one line to docs/08_prompt-log.md (project work log).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/docs/08_prompt-log.md"
if [[ $# -lt 1 ]]; then
  echo "Usage: $0 \"작업 한 줄 요약\"" >&2
  exit 1
fi
LINE="$*"
TS="$(date -u +"%Y-%m-%dT%H:%MZ")"
mkdir -p "$(dirname "$LOG")"
touch "$LOG"
printf "\n- \`%s\` — %s\n" "$TS" "$LINE" >>"$LOG"
echo "Logged to docs/08_prompt-log.md"
