#!/usr/bin/env bash
# Append a decision stub to docs/09_decision-log.md
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/docs/09_decision-log.md"
if [[ $# -lt 1 ]]; then
  echo "Usage: $0 \"Decision title\"" >&2
  exit 1
fi
TITLE="$*"
mkdir -p "$(dirname "$LOG")"
touch "$LOG"

# Count existing D- entries roughly
N="$(grep -c '^## D-' "$LOG" 2>/dev/null || true)"
NEXT=$((N + 1))

{
  echo ""
  echo "## D-$(printf '%03d' "$NEXT") — $TITLE"
  echo ""
  echo "- **상태**: 제안"
  echo "- **맥락**: "
  echo "- **결정**: "
  echo "- **근거**: "
  echo "- **결과 / 트레이드오프**: "
  echo ""
} >>"$LOG"

echo "Appended D-$(printf '%03d' "$NEXT") to docs/09_decision-log.md"
