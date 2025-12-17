"use client"

import Image from "next/image"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const sections = [
  {
    title: "Morgan Stanley и азиатская модель",
    content:
      "Morgan Stanley спрогнозировал, что следующей стадией развития мессенджеров в мире станут ИИ-агенты. По мнению экспертов, Азия раньше всех придет к модели супераппов с внедренным универсальным ИИ-агентом.",
  },
  {
    title: "ИИ-ассистенты и агенты",
    content:
      "ИИ-агент — это полностью проактивная автономная система, способная самостоятельно принимать решения и выполнять задачи без постоянных инструкций. ИИ-ассистент с агентским функционалом — реактивный инструмент, выполняющий команды пользователя и частично способный к автономным действиям.",
  },
  {
    title: "Азиатский путь к супераппам",
    content:
      "WeChat, LINE и Kakao выросли из мессенджеров в супераппы благодаря мини-программам и платежным экосистемам. Пользователи получают доступ ко всему — от финансов до обслуживания города — не покидая чат.",
  },
  {
    title: "Российский контекст",
    content:
      "Российский рынок развивается «снизу» вокруг банков, поисковиков и социальных сетей. Telegram остается медиаплатформой, а не полноценной экосистемой, а проект MAX пытается заполнить пробел сверху с государственным участием.",
  },
  {
    title: "Два сценария будущего",
    content:
      "Сценарий 1: локальный суперапп вокруг Яндекса или VK заменяет рутинные задачи ИИ-агентами. Сценарий 2: неконсистентное развитие и нишевые решения, которые не вырастают в универсальные ассистенты.",
  },
]

export default function RbkArticlePage() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Header variant="light" />

      <section className="bg-neutral-950 text-white px-6 md:px-10 py-16 pt-[110px]">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Блог и публикации</p>
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-tight mt-4">О нас в федеральных СМИ (РБК)</h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl">
            Материал про то, как провайдеры ИИ и национальные платформы (MAX, Tencent, Kakao) встраивают агенты в
            экосистемы и что это значит для российского бизнеса и Ai for all.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-1/2 space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="bg-white border border-black/10 p-7 shadow-[0_15px_60px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold text-neutral-950 mb-3">{section.title}</h2>
                <p className="text-neutral-700 leading-relaxed">{section.content}</p>
              </article>
            ))}
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/screen1.jpeg"
                alt="Скриншот телефона"
                width={600}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

