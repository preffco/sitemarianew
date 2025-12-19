#!/usr/bin/env bash
set -euo pipefail

# Deploy helper for REG.RU shared hosting:
# - Builds static export into ./out
# - Makes server-side backup
# - Preserves current landing at /education
# - Uploads ./out into web root without touching /education and .htaccess
# - (Optional) configures TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID via .htaccess for notify.php
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
# Optional (if you want the script to configure notify.php):
#   TELEGRAM_BOT_TOKEN=...
#   TELEGRAM_CHAT_ID=...
#
# Auth:
# - Prefer SSH key
# - If you must use a password, the script will prompt (input is hidden)

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

REG_RU_SSH_USER="${REG_RU_SSH_USER:-}"
REG_RU_SSH_HOST="${REG_RU_SSH_HOST:-}"
REG_RU_WEB_ROOT="${REG_RU_WEB_ROOT:-/var/www/u3300191/data/www/afa-edu.ru}"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-}"

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

if [[ -z "$TELEGRAM_BOT_TOKEN" || -z "$TELEGRAM_CHAT_ID" ]]; then
  echo
  echo "==> Telegram настройки для формы (notify.php)"
  echo "If you want the script to configure TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID in .htaccess now, type 'y'."
  echo -n "Configure Telegram now? [y/N]: "
  read -r answer
  if [[ "${answer}" == "y" || "${answer}" == "Y" ]]; then
    if [[ -z "$TELEGRAM_BOT_TOKEN" ]]; then
      echo -n "Enter TELEGRAM_BOT_TOKEN (input hidden): "
      read -rs TELEGRAM_BOT_TOKEN
      echo
    fi
    if [[ -z "$TELEGRAM_CHAT_ID" ]]; then
      echo -n "Enter TELEGRAM_CHAT_ID (input hidden): "
      read -rs TELEGRAM_CHAT_ID
      echo
    fi
  fi
fi

if [[ -n "$TELEGRAM_BOT_TOKEN" && -n "$TELEGRAM_CHAT_ID" ]]; then
  echo "==> Writing TELEGRAM_* env vars into $REG_RU_WEB_ROOT/.htaccess ..."

  # Avoid leaking secrets in logs: encode values before sending to remote shell
  BOT_B64="$(printf '%s' "$TELEGRAM_BOT_TOKEN" | base64 | tr -d '\n')"
  CHAT_B64="$(printf '%s' "$TELEGRAM_CHAT_ID" | base64 | tr -d '\n')"

  "${SSH_BASE[@]}" "$SSH_TARGET" "set -e; cd \"$REG_RU_WEB_ROOT\"; touch .htaccess; \
    sed -i '/^# BEGIN AFA TELEGRAM ENV\$/,/^# END AFA TELEGRAM ENV\$/d' .htaccess; \
    BOT=\$(echo \"$BOT_B64\" | base64 -d); CHAT=\$(echo \"$CHAT_B64\" | base64 -d); \
    cat >> .htaccess <<EOF

# BEGIN AFA TELEGRAM ENV
SetEnv TELEGRAM_BOT_TOKEN \"\$BOT\"
SetEnv TELEGRAM_CHAT_ID \"\$CHAT\"
# END AFA TELEGRAM ENV
EOF"
else
  echo
  echo "Skipping Telegram env configuration. To enable form delivery, set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (see DEPLOY_REG_RU.md)."
fi

echo
echo "DONE."
echo "Check:"
echo "  https://afa-edu.ru/            (new site)"
echo "  https://afa-edu.ru/education/  (old landing)"


