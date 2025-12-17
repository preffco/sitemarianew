import { ArrowUpRight, Bot, GraduationCap, Search, TrendingUp, Users } from "lucide-react"

const useCases = [
  {
    title: "ИИ для отдела продаж",
    description: "Квалификация лидов, ответы на вопросы, подготовка КП и сопровождение клиента 24/7.",
    highlight: true,
  },
  {
    title: "ИИ для HR и кадров",
    description: "Скрининг резюме, первичные интервью, ответы сотрудникам и онбординг.",
  },
  {
    title: "ИИ для маркетинга",
    description: "Контент, анализ конкурентов, персонализация рассылок и работа с отзывами.",
  },
  {
    title: "ИИ-поисковик по базе знаний",
    description: "Мгновенные ответы по регламентам, инструкциям и внутренней документации.",
  },
  {
    title: "Интеграция с CRM",
    description: "Bitrix24, AMO и другие: протоколы, заметки, задачи, контроль качества диалогов.",
  },
  {
    title: "Корпоративное обучение",
    description: "Мастер‑классы по нейросетям для руководителей и команд. Практика за 1 день.",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-[clamp(2.5rem,4.4vw,4.25rem)] font-black text-neutral-950 tracking-tight leading-[0.98]">
            Какие задачи мы решаем
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-neutral-950 leading-tight">{item.title}</h3>
                <div
                  className={`h-11 w-11 rounded-full flex items-center justify-center ${
                    item.highlight ? "bg-sky-400 text-white" : "bg-neutral-200 text-neutral-950"
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="mt-4 text-neutral-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Reference-like blue bar + white pill CTA */}
        <div className="mt-12 rounded-3xl bg-sky-400 p-8 sm:p-10">
          <a
            href="https://t.me/katenikolaeva1"
            target="_blank"
            rel="noreferrer"
            className="mx-auto block w-full max-w-4xl rounded-[999px] bg-white px-8 py-6 text-center text-[clamp(1.1rem,2.4vw,1.8rem)] font-semibold text-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-transform active:scale-[0.99]"
          >
            Протестировать ИИ‑ассистента для отдела продаж
          </a>
        </div>
      </div>
    </section>
  )
}
