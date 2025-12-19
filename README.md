# Ai for all - Website

Сайт агентства Ai for all, построенный на Next.js с интеграцией Strapi CMS для управления контентом.

## Технологии

- **Next.js 16** (App Router) - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Strapi CMS** - Headless CMS для управления контентом

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` на основе `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Заполните переменные:
- `NEXT_PUBLIC_STRAPI_API_URL` - URL вашего Strapi сервера (по умолчанию `http://localhost:1337`)
- `STRAPI_API_TOKEN` - токен API для защищенных endpoints (опционально)

### 3. Запуск Next.js приложения

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Strapi CMS

### Установка и запуск Strapi

1. Перейдите в папку Strapi:
```bash
cd strapi
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте переменные окружения:
```bash
cp .env.example .env
```

Сгенерируйте безопасные ключи (выполните 5 раз и вставьте результаты в `.env`):
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

4. Запустите Strapi:
```bash
npm run develop
```

Strapi будет доступен по адресу: http://localhost:1337

### Первый запуск Strapi

1. Откройте http://localhost:1337/admin
2. Создайте администратора:
   - Email: ваш email
   - Пароль: надежный пароль
   - Имя: ваше имя

3. Настройте права доступа:
   - Перейдите в **Settings → Users & Permissions Plugin → Roles → Public**
   - Включите для **Publication**:
     - `find` (GET /api/publications)
     - `findOne` (GET /api/publications/:id)
   - Сохраните изменения

### Управление публикациями

1. В админ-панели Strapi перейдите в **Content Manager → Publication**
2. Нажмите **Create new entry**
3. Заполните поля:
   - **Title** - заголовок публикации
   - **Description** - краткое описание (опционально)
   - **URL** - ссылка на публикацию (например, `/blog/rbk`)
   - **Source** - название издания (например, "РБК", "TenChat")
   - **Publication Logo** - путь к логотипу (например, `/RBK_logo.svg.png`)
   - **Date** - дата публикации
   - **Image** - изображение (опционально)
4. Нажмите **Save** и затем **Publish**

Публикации автоматически появятся на сайте в блоке "О нас пишут".

### API Endpoints

После настройки прав доступа, публикации доступны через REST API:

```bash
# Получить все публикации (отсортированные по дате)
GET http://localhost:1337/api/publications?sort=date:desc

# Получить одну публикацию
GET http://localhost:1337/api/publications/:id

# С фильтрацией
GET http://localhost:1337/api/publications?filters[source][$eq]=РБК
```

Подробная документация по Strapi: [strapi/README.md](./strapi/README.md)

## Структура проекта

```
├── src/
│   ├── app/              # Next.js App Router страницы
│   ├── components/       # React компоненты
│   └── lib/              # Утилиты (включая strapi.ts)
├── strapi/               # Strapi CMS
│   ├── config/           # Конфигурация Strapi
│   └── src/
│       └── api/          # API endpoints и модели
└── public/               # Статические файлы
```

## Деплой

### Next.js на Vercel

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения:
   - `NEXT_PUBLIC_STRAPI_API_URL` - URL вашего Strapi сервера
   - `STRAPI_API_TOKEN` - токен API (если используется)

### Strapi

Strapi можно развернуть на:
- Heroku
- Railway
- DigitalOcean
- VPS с Node.js

Не забудьте настроить переменные окружения для продакшна!

## Дополнительная информация

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
