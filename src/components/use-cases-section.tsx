import { TrendingUp, Users, Megaphone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    icon: TrendingUp,
    title: "ИИ для отдела продаж",
    description: "Автоматизация первичных консультаций, квалификация лидов, подготовка коммерческих предложений",
    color: "bg-amber-400",
  },
  {
    icon: Users,
    title: "ИИ для HR и кадров",
    description: "Скрининг резюме, первичные интервью, ответы на вопросы сотрудников, онбординг",
    color: "bg-sky-400",
  },
  {
    icon: Megaphone,
    title: "ИИ для маркетинга",
    description: "Генерация контента, анализ конкурентов, персонализация рассылок, работа с отзывами",
    color: "bg-emerald-400",
  },
  {
    icon: Search,
    title: "ИИ-поисковик по базе знаний",
    description: "Мгновенный поиск по документам, регламентам, инструкциям и корпоративной wiki",
    color: "bg-rose-400",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4 text-balance leading-tight">
            Какие задачи решают ИИ-ассистенты для бизнеса
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">Популярные сценарии внедрения нейросетей в бизнес</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-neutral-100 rounded-3xl p-6 hover:bg-neutral-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${useCase.color} rounded-2xl flex items-center justify-center`}>
                  <useCase.icon className="w-7 h-7 text-neutral-950" />
                </div>
                <span className="text-neutral-400 text-sm font-medium">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://t.me/katenikolaeva1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full rounded-[999px] border-2 border-neutral-900 bg-white px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-4 md:py-5 lg:py-5 text-sm min-[360px]:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-neutral-900 whitespace-nowrap transition duration-300 ease-in-out hover:bg-neutral-900 hover:text-white"
          >
            Протестировать ИИ-ассистента для отдела продаж
          </a>
        </div>
      </div>
    </section>
  )
}
