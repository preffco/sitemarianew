import { TrendingDown, Clock, DollarSign } from "lucide-react"

export function BusinessValueSection() {
  return (
    <section className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="text-[clamp(2.4rem,4.2vw,4.15rem)] font-black text-neutral-950 tracking-tight leading-[0.98] mb-6">
            Как автоматизация бизнеса с помощью ИИ экономит ваши деньги
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            {
              "Рутинные задачи 'съедают' бюджет. Пока ваши менеджеры вручную отвечают на типовые запросы, а HR разбирает сотни резюме, вы теряете прибыль."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5">
            <div className="w-14 h-14 bg-neutral-200 rounded-2xl flex items-center justify-center mb-6">
              <TrendingDown className="w-7 h-7 text-neutral-950" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-950 mb-3">Потеря прибыли</h3>
            <p className="text-neutral-700">Рутинные операции отнимают до 40% рабочего времени сотрудников</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5">
            <div className="w-14 h-14 bg-neutral-200 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-neutral-950" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-950 mb-3">Время на рутину</h3>
            <p className="text-neutral-700">Обработка заявок, резюме и документов — часы работы каждый день</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5">
            <div className="w-14 h-14 bg-neutral-200 rounded-2xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-neutral-950" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-950 mb-3">Экономия с ИИ</h3>
            <p className="text-neutral-700">Автоматизация сокращает расходы и повышает эффективность в 3-5 раз</p>
          </div>
        </div>

        <div className="bg-neutral-950 rounded-3xl p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-4xl">
            Наше агентство по внедрению ИИ анализирует ваши бизнес-процессы и показывает, где автоматизация с помощью
            нейросетей даст максимальный эффект: в продажах, маркетинге, юриспруденции или HR.
          </p>
        </div>
      </div>
    </section>
  )
}
