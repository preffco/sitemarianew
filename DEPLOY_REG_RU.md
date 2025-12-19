# Деплой на REG.RU (ISPmanager): новый сайт в корень, старый — в `/education`

## Важно про безопасность

Если вы где-то публиковали логины/пароли от хостинга — **сразу смените их** в панели управления REG.RU.

## Почему так

На текущем хостинге `afa-edu.ru` лежит **статический сайт** (`index.html` + `.htaccess`). Чтобы разместить наш Next.js-проект на таком хостинге, мы используем **статическую сборку (export) → папка `out/`**.

Форма обратной связи раньше отправляла запрос на `/api/notify` (Next.js API route). В статическом режиме API-роутов нет, поэтому добавлен `notify.php` (PHP-обработчик), который уходит в Telegram.

## 1) Локальная сборка `out/`

В корне проекта:

```bash
cd /Users/goretofff/Desktop/Проекты/mariasite
npm ci
npm run build:static
```

Результат: появится папка `out/` (её и нужно загружать на сервер). Внутри уже есть `notify.php`.

## 2) Бэкап текущего сайта на сервере

Зайдите по SSH и выполните:

```bash
cd /var/www/u3300191/data
mkdir -p backups
tar -czf "backups/afa-edu.ru_$(date +%F_%H-%M-%S).tar.gz" -C www afa-edu.ru
ls -lh backups | tail -5
```

## 3) Сохранить текущий сайт по адресу `/education`

```bash
cd /var/www/u3300191/data/www/afa-edu.ru
mkdir -p education
cp -a index.html education/index.html
```

Проверка (после деплоя нового сайта):
- `https://afa-edu.ru/education/` должен показывать старую страницу

## 4) Настроить Telegram для формы (на сервере)

`notify.php` читает настройки из переменных окружения:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### Вариант A (быстро): через `.htaccess` в корне сайта

Откройте `/var/www/u3300191/data/www/afa-edu.ru/.htaccess` и добавьте (в конце файла):

```apacheconf
SetEnv TELEGRAM_BOT_TOKEN "PASTE_TOKEN_HERE"
SetEnv TELEGRAM_CHAT_ID "PASTE_CHAT_ID_HERE"
```

### Вариант B (правильно): через настройки окружения в ISPmanager

Если у ISPmanager есть настройка env для PHP — задайте там эти переменные (так лучше, чем хранить в `.htaccess`).

## 5) Загрузка нового сайта в корень домена

Нужно **залить содержимое `out/`** в:
`/var/www/u3300191/data/www/afa-edu.ru/`

Важно:
- **Не удаляйте** папку `education/`
- **Не удаляйте** `.htaccess` (в нём редирект на https)

### Вариант A: через SFTP-клиент (FileZilla / Cyberduck)

- Локально откройте папку `out/`
- На сервере откройте `/var/www/u3300191/data/www/afa-edu.ru/`
- Скопируйте **всё содержимое `out/`** в эту папку (с заменой `index.html`)

### Вариант B: rsync (если используете SSH-ключ)

```bash
rsync -avz \
  --exclude 'education/' \
  --exclude '.htaccess' \
  /PATH/TO/mariasite/out/ \
  u3300191@31.31.197.5:/var/www/u3300191/data/www/afa-edu.ru/
```

## 6) Проверка после деплоя

- `https://afa-edu.ru/` — новый сайт
- `https://afa-edu.ru/education/` — старый сайт
- Форма: отправьте тестовую заявку → должно прийти сообщение в Telegram


