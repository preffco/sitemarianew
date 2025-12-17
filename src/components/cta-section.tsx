"use client"

import type React from "react"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import "react-phone-input-2/lib/style.css"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2, X } from "lucide-react"

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false })

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [phone, setPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ variant: "success" | "error"; title: string; message: string } | null>(null)
  const [toastOpen, setToastOpen] = useState(false)

  useEffect(() => {
    if (!toastOpen) return
    const t = window.setTimeout(() => setToastOpen(false), 5000)
    return () => window.clearTimeout(t)
  }, [toastOpen])

  useEffect(() => {
    if (toastOpen) return
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 350)
    return () => window.clearTimeout(t)
  }, [toastOpen, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      setEmailError("Введите корректный email")
      return
    }

    setEmailError("")
    setLoading(true)
    setToast(null)

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone,
            message: formData.message,
        }),
      })

      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error || "Не удалось отправить заявку")
      }

      setToast({
        variant: "success",
        title: "Заявка отправлена!",
        message: "Мы скоро свяжемся с вами.",
      })
      setToastOpen(true)
      setFormData({ name: "", email: "", message: "" })
      setPhone("")
    } catch (error) {
      setToast({
        variant: "error",
        title: "Не удалось отправить заявку",
        message: error instanceof Error ? error.message : "Попробуйте еще раз позже.",
      })
      setToastOpen(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-neutral-950 py-24 px-6">
      {toast && (
        <div
          className={`fixed z-[999] top-4 right-4 left-4 sm:left-auto sm:w-[420px] transition-all duration-300 ${
            toastOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          aria-live="polite"
        >
          <div
            className={`relative overflow-hidden rounded-2xl border bg-neutral-950/95 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${
              toast.variant === "success" ? "border-neutral-800" : "border-neutral-800"
            }`}
          >
            <div className="flex items-start gap-3 p-4">
              <div className="mt-0.5">
                {toast.variant === "success" ? (
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-rose-300" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <p className="text-white font-semibold leading-snug">{toast.title}</p>
                <p className="text-neutral-300 text-sm leading-relaxed mt-1">{toast.message}</p>
              </div>

              <button
                type="button"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Закрыть уведомление"
                onClick={() => setToastOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* subtle progress line */}
            <div className="h-1 bg-neutral-800">
              <div className={`h-full ${toast.variant === "success" ? "bg-emerald-400" : "bg-rose-400"} opacity-70`} />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          <div>
            <h2 className="text-[clamp(1.6rem,3.2vw,3.8rem)] font-black text-white leading-[0.98] tracking-tight mb-6">
              Начните внедрение ИИ с бесплатного аудита
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Заполните форму, и мы проведем 30-минутный бесплатный аудит. Разберём задачи, покажем, где нужен
              мастер-класс, а где — AI-ассистент, и предложим конкретный план внедрения. Это бесплатно и без
              обязательств.
            </p>

            <div className="space-y-6 text-white/80">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 font-semibold">
                  30
                </div>
                <div>
                  <p className="text-white font-semibold">минут аудита</p>
                  <p className="text-white/65">Разберём процессы и предложим план внедрения</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 font-semibold">
                  ₽0
                </div>
                <div>
                  <p className="text-white font-semibold">бесплатно</p>
                  <p className="text-white/65">Никаких обязательств — только польза</p>
                </div>
              </div>
              <div className="pt-2 space-y-2 text-white/70">
                <p>
                  <span className="text-white/60">Email:</span>{" "}
                  <a className="underline underline-offset-4 hover:text-white" href="mailto:ai-for-all@yandex.ru">
                    ai-for-all@yandex.ru
                  </a>
                </p>
                <p>
                  <span className="text-white/60">Телефон:</span>{" "}
                  <a className="underline underline-offset-4 hover:text-white" href="tel:+79850614040">
                    +7 985 061‑40‑40
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/80 rounded-[36px] p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 rounded-full bg-neutral-800 border border-white/10 px-7 text-white placeholder-white/40 focus:outline-none focus:border-white/25 transition-colors"
                  placeholder="Имя"
                />
              </div>

              <div>
                <div className="rounded-full border border-white/10 bg-neutral-800 px-4 py-2">
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
                      height: "44px",
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
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 rounded-full bg-neutral-800 border border-white/10 px-7 text-white placeholder-white/40 focus:outline-none focus:border-white/25 transition-colors"
                  placeholder="Email"
                  onBlur={() => {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    setEmailError(emailPattern.test(formData.email) ? "" : "Введите корректный email")
                  }}
                />
              </div>

              {emailError && <p className="text-amber-300 text-sm -mt-3">{emailError}</p>}

              <Button
                type="submit"
                className={`w-full h-16 rounded-full bg-white text-neutral-950 hover:bg-white/95 text-lg font-semibold shadow-[0_22px_70px_rgba(0,0,0,0.35)] transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Отправляем..." : "Отправить"}
              </Button>

              <p className="text-white/45 text-xs text-center">
                Нажимая «Отправить», вы подтверждаете согласие с условиями и обработкой персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
