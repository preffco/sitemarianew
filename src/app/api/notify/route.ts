import { NextResponse } from "next/server"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(request: Request) {
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json(
      { error: "Bot token or chat id missing in environment variables" },
      { status: 500 },
    )
  }

  const { name, email, phone } = await request.json().catch(() => ({}))

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const message = `📩 Новая заявка с формы\n\n<b>Имя:</b> ${name}\n<b>Email:</b> ${email}\n<b>Телефон:</b> ${phone}`

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json(
      { error: `Telegram API error: ${errorText}` },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}

