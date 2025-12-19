# Strapi CMS для управления публикациями

Это Headless CMS на базе Strapi для управления контентом блока "О нас в СМИ / Публикации".

## Установка

1. Перейдите в папку strapi:
```bash
cd strapi
```

2. Установите зависимости:
```bash
npm install
```

3. Скопируйте файл `.env.example` в `.env`:
```bash
cp .env.example .env
```

4. Сгенерируйте ключи безопасности (выполните в консоли Node.js):
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```
Скопируйте результат 4 раза для APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT, JWT_SECRET.

## Запуск

### Разработка
```bash
npm run develop
```

Strapi будет доступен по адресу: http://localhost:1337

### Продакшн
```bash
npm run build
npm start
```

## Первый запуск и настройка

1. При первом запуске откройте http://localhost:1337/admin
2. Создайте администратора:
   - Email: ваш email
   - Пароль: надежный пароль
   - Имя: ваше имя

3. После входа в админ-панель:
   - Перейдите в **Content-Type Builder**
   - Модель **Publication** уже создана
   - Проверьте, что все поля на месте

4. Настройте права доступа:
   - Перейдите в **Settings → Users & Permissions Plugin → Roles → Public**
   - Включите разрешения для **Publication**:
     - `find` (GET /api/publications)
     - `findOne` (GET /api/publications/:id)
   - Сохраните изменения

## Использование

### Добавление публикации

1. В админ-панели перейдите в **Content Manager → Publication**
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

### API Endpoints

После настройки прав доступа, публикации доступны через REST API:

- **Получить все публикации:**
  ```
  GET http://localhost:1337/api/publications?sort=date:desc
  ```

- **Получить одну публикацию:**
  ```
  GET http://localhost:1337/api/publications/:id
  ```

- **С фильтрацией:**
  ```
  GET http://localhost:1337/api/publications?filters[source][$eq]=РБК
  ```

## Переменные окружения

Основные переменные в `.env`:

- `HOST` - хост сервера (по умолчанию 0.0.0.0)
- `PORT` - порт сервера (по умолчанию 1337)
- `CORS_ORIGIN` - URL фронтенда для CORS (по умолчанию http://localhost:3000)
- `DATABASE_FILENAME` - путь к файлу базы данных SQLite

## Безопасность

⚠️ **Важно:** В продакшне обязательно:
1. Измените все ключи в `.env` на уникальные случайные значения
2. Используйте переменные окружения для хранения секретов
3. Настройте CORS только для вашего домена
4. Используйте HTTPS

