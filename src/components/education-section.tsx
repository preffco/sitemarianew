import { ArrowRight, Users, Sparkles, Briefcase } from "lucide-react"

const programs = [
  {
    icon: Users,
    title: "Практикум для сотрудников (Базовый)",
    level: "Начальный уровень",
    duration: "4 часа",
    description:
      "Интенсив на 4 часа. Демонстрируем эффективный промптинг (постановка задач ИИ), работу с текстами (письма, отчеты), генерацию изображений, основы безопасности данных при работе с нейросетями.",
    color: "bg-sky-400",
    iconColor: "text-white",
  },
  {
    icon: Sparkles,
    title: "Практикум для профи (Продвинутый)",
    level: "Продвинутый уровень",
    duration: "8 часов",
    description:
      "Полный день (8 часов). Включает Базовый практикум + методы анализа данных и визуализации, создание персональных ИИ-агентов (no-code), обзор и сравнение российских нейросетей (YandexGPT, GigaChat) с зарубежными",
    color: "bg-amber-400",
    iconColor: "text-neutral-950",
  },
  {
    icon: Briefcase,
    title: "Мастер-класс для руководителей",
    level: "Для топ-менеджмента",
    duration: "4 часа",
    description:
      "Стратегический семинар на 4 часа. Разбираем, как строить стратегию внедрения ИИ, как подбирать сотрудников с помощью ИИ, как ставить KPI для AI-проектов и управлять рисками (работа с персональными данными, безопасность)",
    color: "bg-amber-400",
    iconColor: "text-neutral-950",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4">Программы обучения</h2>
          <p className="text-neutral-600 text-lg">Практические мастер-классы для команд любого уровня</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 flex flex-col hover:shadow-lg transition-shadow group">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center`}>
                  <program.icon className={`w-7 h-7 ${program.iconColor || "text-neutral-950"}`} />
                </div>
              </div>

              <div className="flex gap-2 mb-4 overflow-x-auto pb-1 sm:overflow-visible">
                <span className="flex-shrink-0 whitespace-nowrap bg-neutral-100 text-neutral-600 text-xs px-3 py-1 rounded-full">
                  {program.level}
                </span>
                <span className="flex-shrink-0 whitespace-nowrap bg-neutral-100 text-neutral-600 text-xs px-3 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-950 mb-3">{program.title}</h3>
              
              <a
                href="https://t.me/anikina_mariia"
                target="_blank"
                rel="noreferrer"
                className="mt-auto border border-transparent bg-white p-5 transition-colors duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900"
              >
                <div className="flex flex-col gap-5">
                  <p className="text-neutral-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-neutral-950 font-medium group-hover:text-white group-hover:gap-4 transition-all duration-300">
                    <span>Узнать больше</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
