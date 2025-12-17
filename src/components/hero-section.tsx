import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, ShieldCheck, Users } from "lucide-react"
import { FeatureCardsRow } from "@/components/feature-cards-row"

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
  },
  {
    title: "CRM и поддержка",
    description: "Автоматизация лидов, задач и сопровождения.",
    icon: Users,
    highlight: true,
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
          <div className="w-full max-w-3xl">
            <p className="text-white/70 font-medium mb-5 text-base sm:text-lg tracking-wide">
              {"Агентство 'Ai for all'"}
            </p>
            <h1 className="text-[clamp(1.8rem,3.5vw,4.6rem)] font-black text-white leading-[0.98] tracking-tight mb-5">
              <span className="block">Внедрение ИИ</span>
              <span className="block">в бизнес:</span>
              <span className="block mt-2 text-white/90">AI-ассистенты и мастер-классы</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg md:text-lg leading-relaxed mb-8">
              Разрабатываем ИИ-ассистентов для продаж, маркетинга и HR. Проводим корпоративные мастер-классы по
              нейросетям для руководителей и сотрудников
            </p>
            <a href="#contact">
              <Button className="mt-14 mx-auto block h-12 md:h-16 w-full max-w-[720px] rounded-full bg-amber-400 text-neutral-950 text-base md:text-[1.5rem] font-bold transition hover:bg-amber-500 hover:shadow-none focus-visible:ring-2 focus-visible:ring-amber-300">
                Получить бесплатный аудит
              </Button>
            </a>

            {/* Mobile: swipeable row under CTA */}
            <div className="md:hidden mt-10">
              <FeatureCardsRow items={heroCardData} variant="carousel" />
            </div>
          </div>

          {/* Tablet/Desktop: grid (no horizontal scroll) */}
          <div className="hidden md:block">
            <FeatureCardsRow items={heroCardData} variant="grid" />
          </div>
        </div>
      </div>
    </section>
  )
}





