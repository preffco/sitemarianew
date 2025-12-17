import { Button } from "@/components/ui/button"
import { Bot, GraduationCap, MessageSquare, ShieldCheck, Users } from "lucide-react"

const heroCardData = [
  {
    title: "Аудит процессов",
    description: "Структурируем задачи, находим точки роста.",
    icon: Bot,
  },
  {
    title: "AI-ассистенты",
    description: "Под ключ, интеграции в CRM и чаты.",
    icon: MessageSquare,
    highlight: true,
  },
  {
    title: "CRM и поддержка",
    description: "Автоматизация лидов, задач и сопровождения.",
    icon: Users,
  },
  {
    title: "152‑ФЗ и риски",
    description: "Проектируем решения с учетом норм.",
    icon: ShieldCheck,
    highlight: true,
  },
]

export function HeroSection() {
  return (
    <section id="hero" className="bg-neutral-950 pt-24 pb-16 px-0 lg:px-6">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="w-full">
            <p className="text-white/70 font-medium mb-5 text-base sm:text-lg tracking-wide">
              {"Агентство 'Ai for all'"}
            </p>
            <h1 className="text-[clamp(1.8rem,3.5vw,4.6rem)] font-black text-white leading-[0.98] tracking-tight mb-5">
              <span className="block">Внедрение ИИ</span>
              <span className="block">в бизнес:</span>
              <span className="block mt-2 text-white/90">AI-ассистенты и мастер‑классы</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg md:text-lg leading-relaxed mb-8 max-w-xl">
              Разрабатываем ИИ-ассистентов для продаж, маркетинга и HR. Проводим корпоративные мастер-классы по
              нейросетям для руководителей и сотрудников
            </p>
            <a href="#contact">
              <Button className="mt-14 mx-auto block h-12 md:h-16 w-full max-w-[720px] rounded-full bg-amber-400 text-neutral-950 text-base md:text-[1.5rem] font-bold transition hover:bg-amber-500 hover:shadow-none focus-visible:ring-2 focus-visible:ring-amber-300">
                Получить бесплатный аудит
              </Button>
            </a>

            {/* Mobile cards - показываются только на мобильных */}
            <div className="lg:hidden mt-12">
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory">
                  <div className="flex gap-4" style={{ width: 'max-content' }}>
                    {heroCardData.map((card, idx) => (
                      <div
                        key={card.title}
                        className={`flex-shrink-0 w-[calc(50vw-32px)] snap-start rounded-3xl px-5 py-5 border min-h-[140px] ${
                          card.highlight 
                            ? 'border-sky-600 bg-sky-400' 
                            : 'border-black/5 bg-white'
                        } shadow-none`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <p className={`font-semibold leading-tight text-sm ${
                            card.highlight ? 'text-white' : 'text-neutral-950'
                          }`}>
                            {card.title}
                          </p>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            card.highlight ? 'bg-amber-400' : 'bg-neutral-200'
                          }`}>
                            <card.icon className="h-4 w-4 text-neutral-950" />
                          </div>
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          card.highlight ? 'text-white/80' : 'text-neutral-600'
                        }`}>
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Индикатор скролла - стрелка вправо */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <div className="flex items-center gap-1 bg-neutral-950/60 backdrop-blur-sm rounded-full px-2 py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                    <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right mosaic (reference-like cards) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4">
            {[heroCardData[0], heroCardData[2]].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl px-7 py-6 border border-black/5 bg-white shadow-none min-h-[140px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold leading-tight text-neutral-950">{card.title}</p>
                  <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center">
                    <card.icon className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{card.description}</p>
              </div>
            ))}
            {[heroCardData[1], heroCardData[3]].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl px-7 py-6 border border-sky-600 bg-sky-400 shadow-none min-h-[140px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold leading-tight text-white">{card.title}</p>
                  <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center">
                    <card.icon className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}





