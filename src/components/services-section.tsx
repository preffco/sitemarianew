"use client"

import {
  ArrowRight,
  Bot,
  FileSearch,
  GraduationCap,
  Headset,
  ListChecks,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react"
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
        <div className="mb-14">
          <h2 className="text-[clamp(2.6rem,4.8vw,4.5rem)] font-black text-neutral-950 tracking-tight leading-[0.98]">
            Все возможности внедрения ИИ
          </h2>
          <p className="mt-3 text-neutral-700 text-lg">
            От консалтинга до разработки AI‑ассистентов — в одной системе подхода
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
          {/* Left: tiles */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "01", title: "Аудит процессов", icon: Workflow, desc: "Находим точки роста и считаем эффект." },
              { n: "02", title: "Сценарии внедрения", icon: ListChecks, desc: "Гипотезы, KPI, пилот и масштабирование." },
              { n: "03", title: "Поиск по базе знаний", icon: FileSearch, desc: "Ответы по документам за секунды." },
              { n: "04", title: "ИИ‑ассистент в чатах", icon: Bot, desc: "Telegram/виджеты, квалификация и поддержка." },
              { n: "05", title: "Интеграция CRM", icon: Users, desc: "Bitrix24/AMO: лиды, задачи, контроль диалогов." },
              { n: "06", title: "152‑ФЗ и риски", icon: ShieldCheck, desc: "Проектируем безопасно и прозрачно." },
              { n: "07", title: "Обучение команды", icon: GraduationCap, desc: "Практика нейросетей за 1 день." },
              { n: "08", title: "Сопровождение", icon: Headset, desc: "Поддержка, улучшения и контроль качества." },
            ].map((t) => (
              <div
                key={t.n}
                className="bg-white rounded-3xl p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-neutral-500 font-semibold">{t.n}</span>
                  <div className="h-11 w-11 rounded-full bg-neutral-200 flex items-center justify-center">
                    <t.icon className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-950 leading-tight">{t.title}</h3>
                <p className="mt-2 text-neutral-700 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: big feature panel */}
          <div className="rounded-3xl bg-neutral-950 text-white p-8 md:p-10 overflow-hidden relative">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <p className="text-white/70 font-medium">Главная услуга</p>
                  <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
                    Внедрение и разработка ИИ‑ассистентов
                  </h3>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-neutral-950 font-semibold shadow-[0_16px_40px_rgba(245,255,98,0.2)] hover:bg-amber-500 transition-colors"
                >
                  Получить аудит
                </a>
              </div>

              <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-2xl">
                Создаем кастомных ИИ‑ассистентов «под ключ» и интегрируем их в CRM и бизнес‑процессы. От «нейропродавца» в
                чате до интеллектуального поиска по базе знаний.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#use-cases"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Сценарии внедрения <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#education"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Программы обучения <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Image preview */}
              <div className="mt-10 grid md:grid-cols-2 gap-4 items-start">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Открыть пример диалога ИИ-ассистента"
                  className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-zoom-in"
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
                    alt="Пример диалога ИИ-ассистента"
                    width={500}
                    height={889}
                    className="w-full h-auto opacity-95"
                  />
                </div>

                <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                  <div className="aspect-video relative">
                    <Image
                      src="/services-masterclass.webp"
                      alt="Корпоративный мастер-класс по ИИ"
                      fill
                      className="object-cover opacity-95"
                    />
                  </div>
                </div>
              </div>
            </div>
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
                  alt="Пример диалога ИИ-ассистента (увеличение)"
                  width={500}
                  height={889}
                  className="w-full h-auto origin-center motion-safe:animate-[afa-phone-zoom-loop_6.5s_ease-in-out_infinite] motion-reduce:animate-none"
                />
              </div>

              <p className="mt-4 text-center text-white/70 text-sm">Нажмите вне изображения, чтобы закрыть</p>
            </div>
          </div>
        )}
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
