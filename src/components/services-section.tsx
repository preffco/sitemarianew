"use client"

import { Bot, GraduationCap, ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MasterclassLogosCarousel } from "@/components/masterclass-logos-carousel"

const masterclassLogos = Array.from({ length: 12 }, (_, i) => ({
  src: `/logos/logo-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Логотип компании ${i + 1}`,
}))

export function ServicesSection() {
  const [isPhoneZoomOpen, setIsPhoneZoomOpen] = useState(false)

  useEffect(() => {
    if (!isPhoneZoomOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPhoneZoomOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isPhoneZoomOpen])
  return (
    <section id="services" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4">Наши услуги</h2>
          <p className="text-neutral-600 text-lg">От консалтинга до разработки AI-ассистентов</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 group hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-neutral-950" />
              </div>
              <div className="relative flex w-10 items-center justify-center">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-transparent transition-all duration-300 group-hover:bg-neutral-950" />
                <span className="relative z-10 text-neutral-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  01
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              Внедрение и разработка ИИ-ассистентов
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              {
                "Создаем кастомных ИИ-ассистентов 'под ключ'. Интегрируем их в ваши CRM (Bitrix24, AMO) и бизнес-процессы. Решаем задачи: от 'нейропродавца' в чате до интеллектуального поиска по базе знаний."
              }
            </p>
            
            {/* Chat screenshot */}
            <div className="mb-6 flex justify-center">
              <div
                role="button"
                tabIndex={0}
                aria-label="Ознакомьтесь со скриншотом ИИ-ассистента"
                className="relative group overflow-hidden rounded-2xl shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber-400 cursor-zoom-in"
                onClick={() => setIsPhoneZoomOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setIsPhoneZoomOpen(true)
                  }
                }}
              >
                <Image
                  src="/services-chat-screenshot.png"
                  alt="Скриншот чата ИИ-ассистента"
                  width={500}
                  height={889}
                  className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Zoom overlay */}
            {isPhoneZoomOpen && (
              <div className="fixed inset-0 z-[999]">
                <button
                  type="button"
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  aria-label="Закрыть"
                  onClick={() => setIsPhoneZoomOpen(false)}
                />

                <div className="relative mx-auto w-[min(92vw,460px)] pt-20 sm:pt-24">
                  <button
                    type="button"
                    className="absolute -top-2 right-2 sm:right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors"
                    aria-label="Закрыть"
                    onClick={() => setIsPhoneZoomOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                    <Image
                      src="/services-chat-screenshot.png"
                      alt="Скриншот чата ИИ-ассистента (увеличение)"
                      width={500}
                      height={889}
                      className="w-full h-auto origin-center motion-safe:animate-[afa-phone-zoom-loop_6.5s_ease-in-out_infinite] motion-reduce:animate-none"
                    />
                  </div>

                  <p className="mt-4 text-center text-white/70 text-sm">
                    Нажмите вне изображения, чтобы закрыть
                  </p>
                </div>
              </div>
            )}

            <a href="#use-cases" className="flex items-center gap-2 text-neutral-950 font-medium group-hover:gap-4 transition-all mt-auto">
              <span>Подробнее</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 group hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-neutral-950" />
              </div>
              <div className="relative flex w-10 items-center justify-center">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-transparent transition-all duration-300 group-hover:bg-neutral-950" />
                <span className="relative z-10 text-neutral-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  02
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">Корпоративные мастер-классы по ИИ</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Проводим практические мастер-классы для ваших команд. Учим сотрудников эффективно применять ИИ (ChatGPT,
              Gemini, Claude, DeepSeek, Manus, Genspark, Skywork, Perplexity, YandexGPT, GigaChat и др.) для решения
              ежедневных задач. Повышаем эффективность команды за 1 день.
            </p>
            
            {/* 16:9 image container */}
            <div className="mb-6 relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
                <Image
                  src="/services-masterclass.webp"
                  alt="Корпоративный мастер-класс по ИИ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <a href="#education" className="flex items-center gap-2 text-neutral-950 font-medium group-hover:gap-4 transition-all">
              <span>Подробнее</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div id="masterclasses" className="mt-20">
          <MasterclassLogosCarousel
            title={
              <>
                Мы провели <span className="whitespace-nowrap">мастер-классы</span> по ИИ для
              </>
            }
            logos={masterclassLogos}
            perPage={3}
            autoPlay
            intervalMs={3000}
          />
        </div>
      </div>
    </section>
  )
}
