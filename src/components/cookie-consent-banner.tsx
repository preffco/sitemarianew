"use client"

import { Button } from "@/components/ui/button"
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

  const handleChoice = (value: "accepted" | "declined") => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setChoice(value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[1100] rounded-3xl border border-white/10 bg-neutral-950/95 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl text-white sm:bottom-6 sm:px-8"
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о cookie"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="space-y-2 flex-1 text-sm leading-relaxed text-neutral-200">
          <p className="font-semibold text-white text-base sm:text-lg">Мы используем cookie</p>
          <p>
            Сохраняем технические cookie для стабильной работы интерфейса и аналитические cookie, чтобы
            понимать, как вы используете сайт. Это помогает быстрее реагировать и делать рекомендации.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            className="flex-1 bg-amber-400 text-neutral-950 hover:bg-amber-500 focus-visible:ring-2"
            onClick={() => handleChoice("accepted")}
          >
            Принять
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-white border-white/40 hover:border-white"
            onClick={() => handleChoice("declined")}
          >
            Отклонить
          </Button>
        </div>
      </div>
    </div>
  )
}

