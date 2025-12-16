"use client"

import type React from "react"

import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [phone, setPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      setEmailError("Введите корректный email")
      return
    }

    setEmailError("")
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone,
        }),
      })

      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error || "Не удалось отправить заявку")
      }

      setStatus("Заявка отправлена, @anikina_mariia получит сообщение.")
      setFormData({ name: "", email: "" })
      setPhone("")
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Ошибка при отправке")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Начните внедрение ИИ с бесплатного аудита
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Заполните форму, и мы свяжемся с вами для 30-минутной консультации. Мы проанализируем ваши задачи и
              предложим конкретный план: начать с мастер-класса для команды или сразу внедрять AI-ассистента. Это
              бесплатно и ни к чему не обязывает.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-semibold">30</span>
                </div>
                <span className="text-neutral-300">минут консультации</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-semibold">₽0</span>
                </div>
                <span className="text-neutral-300">бесплатно</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-400 text-sm mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-2xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-neutral-400 text-sm mb-2">Ваш номер телефона</label>
                <div className="rounded-2xl border border-neutral-700 bg-neutral-800 px-3 py-2">
                  <PhoneInput
                    country="ru"
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    masks={{ ru: "(...) ...-..-.." }}
                    enableAreaCodes
                    inputStyle={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      paddingLeft: "48px",
                      color: "#ffffff",
                      outline: "none",
                      fontSize: "1rem",
                      height: "48px",
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      marginRight: "40px",
                      borderRadius: "12px",
                    }}
                    dropdownStyle={{
                      borderRadius: "1rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid #334155",
                    }}
                    enableSearch
                    enableTerritories
                    containerClass="w-full h-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-400 text-sm mb-2">
                  Ваш email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-2xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="ivan@company.ru"
                  onBlur={() => {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    setEmailError(emailPattern.test(formData.email) ? "" : "Введите корректный email")
                  }}
                />
              </div>

              {emailError && <p className="text-amber-300 text-sm mt-1">{emailError}</p>}

              <Button
                type="submit"
                className={`w-full bg-amber-400 hover:bg-amber-500 text-neutral-950 rounded-full py-6 text-lg font-semibold transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                aria-busy={loading}
              >
                Получить бесплатный аудит
              </Button>

              {status && (
                <p className="text-center text-neutral-300 text-sm mt-2" aria-live="polite">
                  {status}
                </p>
              )}

              <p className="text-neutral-500 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
