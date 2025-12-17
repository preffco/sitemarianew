import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Users, ShieldCheck, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="bg-neutral-950 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <p className="text-white/70 font-medium mb-5 text-base sm:text-lg tracking-wide">
              {"Агентство 'Ai for all'"}
            </p>
            <h1 className="text-[clamp(2.4rem,4.8vw,4.6rem)] font-black text-white leading-[0.98] tracking-tight mb-5">
              <span className="block">Внедрение ИИ</span>
              <span className="block">в бизнес:</span>
              <span className="block mt-2 text-white/90">AI-ассистенты и мастер‑классы</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg md:text-lg leading-relaxed mb-8 max-w-xl">
              Разрабатываем ИИ-ассистентов для продаж, маркетинга и HR. Проводим корпоративные мастер-классы по
              нейросетям для руководителей и сотрудников
            </p>
            <a href="#contact">
              <Button className="mt-14 mx-auto block h-16 w-full max-w-[720px] rounded-full bg-amber-400 text-neutral-950 text-[1.5rem] font-bold transition hover:bg-amber-500 hover:shadow-none focus-visible:ring-2 focus-visible:ring-amber-300">
                Получить бесплатный аудит
              </Button>
            </a>
          </div>

          {/* Right mosaic (reference-like cards) */}
          <div className="hidden lg:flex gap-6 justify-end">
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl bg-white px-8 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] border border-black/5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-neutral-950 font-semibold leading-tight">Аудит процессов</p>
                  <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  Структурируем задачи, находим точки роста.
                </p>
              </div>
              <div className="rounded-3xl bg-white px-8 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-black/5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-neutral-950 font-semibold leading-tight">AI-ассистенты</p>
                  <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  Под ключ, интеграции в CRM и чаты.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="rounded-3xl bg-white px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-black/5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-neutral-950 font-semibold leading-tight">CRM и поддержка</p>
                  <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                    <Users className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  Автоматизация лидов, задач и сопровождения.
                </p>
              </div>
              <div className="rounded-3xl bg-white px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-black/5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-neutral-950 font-semibold leading-tight">152‑ФЗ и риски</p>
                  <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-neutral-950" />
                  </div>
                </div>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  Проектируем решения с учетом норм.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
