# Быстрый запуск Strapi

## ⚠️ Важно: Требования к версии Node.js

Strapi требует **Node.js версии 18-20**. У вас установлена версия **v23.11.0**, которая не поддерживается.

## Решение: Установка Node.js 20 через nvm

### Шаг 1: Установите nvm (если еще не установлен)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

После установки перезапустите терминал или выполните:
```bash
source ~/.zshrc
# или
source ~/.bash_profile
```

### Шаг 2: Установите Node.js 20

```bash
nvm install 20
nvm use 20
```

Проверьте версию:
```bash
node --version
# Должно быть: v20.x.x
```

### Шаг 3: Запустите Strapi

```bash
cd strapi
npm install
npm run develop
```

Strapi запустится на http://localhost:1337/admin

## Альтернативное решение: Docker

Если не хотите менять версию Node.js, можно использовать Docker:

```bash
# Создайте Dockerfile в папке strapi
# Или используйте готовый образ Strapi
```

## После запуска Strapi

1. Откройте http://localhost:1337/admin
2. Создайте администратора
3. Настройте права доступа: **Settings → Users & Permissions → Roles → Public**
4. Включите `find` и `findOne` для **Publication**
5. Создайте публикации через **Content Manager**

