# Быстрая настройка Strapi CMS

## Шаг 1: Установка Strapi

```bash
cd strapi
npm install
```

## Шаг 2: Настройка переменных окружения

1. Скопируйте `.env.example` в `.env`:
```bash
cp .env.example .env
```

2. Сгенерируйте безопасные ключи (выполните команду 5 раз):
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

3. Вставьте результаты в `.env`:
```env
APP_KEYS=ключ1,ключ2,ключ3,ключ4
API_TOKEN_SALT=ключ5
ADMIN_JWT_SECRET=ключ6
TRANSFER_TOKEN_SALT=ключ7
JWT_SECRET=ключ8
```

## Шаг 3: Первый запуск

```bash
npm run develop
```

Откройте http://localhost:1337/admin

## Шаг 4: Создание администратора

При первом запуске создайте учетную запись администратора:
- Email: ваш email
- Пароль: надежный пароль
- Имя: ваше имя

## Шаг 5: Настройка прав доступа

1. В админ-панели перейдите: **Settings → Users & Permissions Plugin → Roles → Public**

2. Найдите секцию **Publication** и включите:
   - ✅ `find` - для получения списка публикаций
   - ✅ `findOne` - для получения одной публикации

3. Нажмите **Save**

## Шаг 6: Создание первой публикации

1. Перейдите: **Content Manager → Publication**

2. Нажмите **Create new entry**

3. Заполните форму:
   - **Title**: "ИИ-агенты и супераппы в Азии..."
   - **URL**: "/blog/rbk"
   - **Source**: "РБК"
   - **Publication Logo**: "/RBK_logo.svg.png"
   - **Date**: выберите дату публикации

4. Нажмите **Save**, затем **Publish**

## Шаг 7: Проверка API

Проверьте, что API работает:

```bash
curl http://localhost:1337/api/publications
```

Должен вернуться JSON с публикациями.

## Шаг 8: Настройка Next.js

1. Создайте `.env.local` в корне проекта:
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

2. Перезапустите Next.js:
```bash
npm run dev
```

Публикации должны автоматически загружаться на сайте!

## Решение проблем

### Strapi не запускается
- Проверьте, что Node.js версии 18-22
- Убедитесь, что порт 1337 свободен
- Проверьте `.env` файл

### API возвращает 403
- Проверьте права доступа в **Settings → Users & Permissions Plugin → Roles → Public**
- Убедитесь, что публикации опубликованы (статус "Published")

### Публикации не отображаются на сайте
- Проверьте переменную `NEXT_PUBLIC_STRAPI_API_URL` в `.env.local`
- Убедитесь, что Strapi запущен
- Проверьте консоль браузера на ошибки

