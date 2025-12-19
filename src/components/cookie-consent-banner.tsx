"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const CONSENT_KEY = "afa-cookie-consent"

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [choice, setChoice] = useState<string | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
      return
    }

    setChoice(stored)
  }, [])

  const handleChoice = (value: "accepted") => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setChoice(value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[1100] rounded-[32px] border border-white/10 bg-neutral-900/70 p-5 shadow-[0_15px_60px_rgba(15,23,42,0.45)] backdrop-blur-[12px] text-white transition duration-500 sm:bottom-6 sm:px-7"
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о cookie"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="space-y-2 flex-1 text-sm leading-relaxed text-neutral-200">
          <p className="font-semibold text-white text-base sm:text-lg">Мы используем cookie в целях сбора статистики.</p>
          <p className="text-white/70">
            Оставаясь на сайте, Вы выражаете согласие на сбор и обработку Ваших персональных данных, в том числе с привлечением сторонних сервисов, с применением cookie-файлов и средств анализа поведения пользователей, согласно нашей{" "}
            <Link href="/privacy" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
              Политике конфиденциальности
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <Button
            className="flex-1 bg-amber-400 text-neutral-950 hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-amber-300 transition-colors"
            onClick={() => handleChoice("accepted")}
          >
            Принять
          </Button>
        </div>
      </div>
    </div>
  )
}

