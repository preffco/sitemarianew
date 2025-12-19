#!/usr/bin/env bash
set -euo pipefail

# Deploy helper for REG.RU shared hosting:
# - Builds static export into ./out
# - Makes server-side backup
# - Preserves current landing at /education
# - Uploads ./out into web root without touching /education and .htaccess
#
# Usage:
#   cd /path/to/mariasite
#   ./scripts/deploy-reg-ru.sh
#
# Env vars (recommended):
#   REG_RU_SSH_USER=u3300191
#   REG_RU_SSH_HOST=31.31.197.5
#   REG_RU_WEB_ROOT=/var/www/u3300191/data/www/afa-edu.ru
#
# Auth:
# - Prefer SSH key
# - If you must use a password, the script will prompt (input is hidden)

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

REG_RU_SSH_USER="${REG_RU_SSH_USER:-}"
REG_RU_SSH_HOST="${REG_RU_SSH_HOST:-}"
REG_RU_WEB_ROOT="${REG_RU_WEB_ROOT:-/var/www/u3300191/data/www/afa-edu.ru}"

if [[ -z "$REG_RU_SSH_USER" || -z "$REG_RU_SSH_HOST" ]]; then
  echo "ERROR: set REG_RU_SSH_USER and REG_RU_SSH_HOST"
  echo "Example:"
  echo "  REG_RU_SSH_USER=u3300191 REG_RU_SSH_HOST=31.31.197.5 ./scripts/deploy-reg-ru.sh"
  exit 1
fi

SSH_TARGET="${REG_RU_SSH_USER}@${REG_RU_SSH_HOST}"

echo "==> Building static site (out/)..."
npm run build:static

if [[ ! -d out ]]; then
  echo "ERROR: out/ not found after build"
  exit 1
fi

echo "==> Checking SSH connectivity..."
SSH_BASE=(ssh -o StrictHostKeyChecking=accept-new)

if ! "${SSH_BASE[@]}" "$SSH_TARGET" "echo ok" >/dev/null 2>&1; then
  echo "SSH key auth failed or not configured."
  echo -n "Enter SSH password for $SSH_TARGET (input hidden): "
  read -rs REG_RU_SSH_PASS
  echo

  if ! command -v sshpass >/dev/null 2>&1; then
    echo "ERROR: sshpass is not installed. Install it or set up SSH keys."
    exit 1
  fi

  SSH_BASE=(sshpass -p "$REG_RU_SSH_PASS" ssh -o StrictHostKeyChecking=accept-new)
  RSYNC_SSH="sshpass -p $REG_RU_SSH_PASS ssh -o StrictHostKeyChecking=accept-new"
else
  RSYNC_SSH="ssh -o StrictHostKeyChecking=accept-new"
fi

echo "==> Server-side backup..."
"${SSH_BASE[@]}" "$SSH_TARGET" "set -e; cd /var/www/${REG_RU_SSH_USER}/data; mkdir -p backups; tar -czf \"backups/afa-edu.ru_\$(date +%F_%H-%M-%S).tar.gz\" -C www afa-edu.ru; ls -lh backups | tail -5"

echo "==> Preserving current landing at /education ..."
"${SSH_BASE[@]}" "$SSH_TARGET" "set -e; cd \"$REG_RU_WEB_ROOT\"; mkdir -p education; if [ -f index.html ]; then cp -a index.html education/index.html; fi"

echo "==> Uploading out/ into $REG_RU_WEB_ROOT (preserving /education and .htaccess)..."
rsync -avz \
  --delete \
  --exclude 'education/' \
  --exclude '.htaccess' \
  -e "$RSYNC_SSH" \
  out/ \
  "$SSH_TARGET:$REG_RU_WEB_ROOT/"

echo
echo "DONE."
echo "Check:"
echo "  https://afa-edu.ru/            (new site)"
echo "  https://afa-edu.ru/education/  (old landing)"


