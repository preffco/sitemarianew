"use client"

import { TrendingDown, Clock } from "lucide-react"

const valueCards = [
  {
    icon: TrendingDown,
    title: "Потеря прибыли",
    description: "Рутинные операции отнимают до 40% рабочего времени сотрудников",
  },
  {
    icon: Clock,
    title: "Время на рутину",
    description: "Обработка заявок, резюме и документов — часы работы каждый день",
  },
  {
    icon: null,
    title: "Экономия с ИИ",
    description: "Автоматизация сокращает расходы и повышает эффективность в 3-5 раз",
  },
]

export function BusinessValueSection() {

  return (
    <section className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="text-[clamp(1.8rem,3.5vw,4.15rem)] font-black text-neutral-950 tracking-tight leading-[0.98] mb-6">
            Как автоматизация бизнеса с помощью ИИ экономит деньги
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            {
              "Рутинные задачи «съедают» бюджет. Пока менеджеры вручную отвечают на типовые запросы, а HR разбирает сотни резюме, теряется прибыль"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {valueCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5 transition-all hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-amber-400">
                  {Icon ? (
                    <Icon className="w-7 h-7 text-neutral-950" />
                  ) : (
                    <span className="text-2xl font-semibold text-neutral-950">₽</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-950 mb-3">{card.title}</h3>
                <p className="text-neutral-700">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-neutral-950 rounded-3xl p-6 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <p className="text-white/85 text-[clamp(0.875rem,2.5vw,1.25rem)] md:text-xl leading-relaxed max-w-4xl">
            Оказываем услуги по внедрению ИИ: анализируем бизнес-процессы и показываем, где автоматизация с помощью
            нейросетей даст максимальный эффект: в продажах, маркетинге, юриспруденции, HR или в управлении
          </p>
        </div>
      </div>
    </section>
  )
}
