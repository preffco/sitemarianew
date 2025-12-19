#!/bin/bash

# Загружаем nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Переключаемся на Node.js 20
nvm use 20

# Запускаем Strapi
cd "$(dirname "$0")"
npm run develop

