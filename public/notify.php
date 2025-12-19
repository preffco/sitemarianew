<?php
// Simple Telegram notifier for shared hosting (PHP).
// Expects JSON body: { name, email, phone, message? }
//
// Configure secrets via environment variables (recommended):
// - TELEGRAM_BOT_TOKEN
// - TELEGRAM_CHAT_ID
//
// If your hosting does not provide env vars, you can set them in Apache via .htaccess:
//   SetEnv TELEGRAM_BOT_TOKEN "..."
//   SetEnv TELEGRAM_CHAT_ID "..."

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$botToken = getenv('TELEGRAM_BOT_TOKEN');
$chatId = getenv('TELEGRAM_CHAT_ID');

if (!$botToken || !$chatId) {
  http_response_code(500);
  echo json_encode(['error' => 'Server is not configured (missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID)']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = [];

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$note = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $phone === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Missing fields']);
  exit;
}

$text = "📩 Новая заявка с формы\n\n" .
  "Имя: " . $name . "\n" .
  "Email: " . $email . "\n" .
  "Телефон: " . $phone;
if ($note !== '') {
  $text .= "\nСообщение: " . $note;
}

$url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";

$payload = json_encode([
  'chat_id' => $chatId,
  'text' => $text,
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$resp = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

if ($resp === false) {
  http_response_code(502);
  echo json_encode(['error' => 'Telegram request failed: ' . $curlErr]);
  exit;
}

if ($httpCode < 200 || $httpCode >= 300) {
  http_response_code(502);
  echo json_encode(['error' => 'Telegram API error', 'details' => $resp]);
  exit;
}

echo json_encode(['success' => true]);


