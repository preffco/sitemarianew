"use client"

import Image from "next/image"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const sections = [
  {
    title: "От юриспруденции к ИИ",
    content:
      "Мария Аникина с красным дипломом юриста оставила стабильную карьеру на госслужбе и превратила интерес к нейросетям в Ai for all. Переломный момент наступил, когда она почувствовала, что ИИ — это смысл, не просто код.",
  },
  {
    title: "Сложности внедрения",
    content:
      "Самый трудный проект был в юридической компании: нужно было не только перестроить аналитику документов, но и изменить отношение людей к ИИ, показать, что автоматизация усиливает экспертность.",
  },
  {
    title: "Готовность бизнеса",
    content:
      "Мария смотрит на реальную боль и готовность менять процессы. Если клиент хочет шаблонного бота и не готов тестировать — лучше не тратить деньги, ведь качественный ИИ-ассистент всегда кастомный.",
  },
  {
    title: "Отрасли и масштабы",
    content:
      "Малый бизнес, выгоревший от рутины, быстро внедряет решения, а крупные игроки тормозят из-за долгих согласований. Важен масштаб и скорость, а не специфическая отрасль.",
  },
  {
    title: "Тренды",
    content:
      "Переоценены ИИ-аватары для видео и универсальные продающие боты. Недооценены рутинные процессы: найм, онбординг, работа с документами, внутренняя документация и голосовые ассистенты — именно там лежат реальные деньги.",
  },
  {
    title: "ИИ рядом с человеком",
    content:
      "ИИ не должен заменять человека, он должен идти рядом, освобождая от рутины и оставляя за человеком стратегию. Осознанное партнёрство человека и машины уже строится сегодня.",
  },
]

export default function AiForAllArticlePage() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Header variant="light" />

      <section className="bg-neutral-950 text-white px-6 md:px-10 py-16 pt-[110px]">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Блог и публикации</p>
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-tight mt-4">ИИ для всех: как AFA переосмысливает бизнес-процессы</h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl">
            История о том, как гуманитарий стал проводником ИИ в бизнес-процессы, помогает клиентам перестроить рутины и создает кастомные решения, где смысл важнее технологий.
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
          <div className="lg:w-1/2 flex justify-end">
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_60px_rgba(15,23,42,0.15)]">
              <Image
                src="/screen2.webp"
                alt="Мария Аникина"
                width={600}
                height={600}
                className="w-full h-full object-cover"
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

