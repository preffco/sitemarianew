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
              <Button className="h-16 w-full max-w-[640px] rounded-full bg-amber-400 hover:bg-amber-500 text-neutral-950 text-lg font-semibold shadow-[0_18px_50px_rgba(245,255,98,0.22)] hover:shadow-[0_22px_60px_rgba(245,255,98,0.28)] transition-shadow">
                <span className="flex-1 text-center">Получить бесплатный аудит</span>
              </Button>
            </a>
          </div>

          {/* Right mosaic (reference-like cards) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 items-end">
              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-neutral-950 font-semibold leading-tight">Аудит процессов</p>
                    <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-neutral-950" />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-sky-400 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-white font-semibold leading-tight">AI-ассистенты</p>
                    <div className="h-10 w-10 rounded-2xl bg-white/15 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="mt-3 text-white/80 text-sm">Под ключ, с интеграциями</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-neutral-950 font-semibold leading-tight">CRM и поддержка</p>
                    <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                      <Users className="w-5 h-5 text-neutral-950" />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-neutral-950 font-semibold leading-tight">152‑ФЗ и риски</p>
                    <div className="h-10 w-10 rounded-2xl bg-neutral-200 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-neutral-950" />
                    </div>
                  </div>
                  <p className="mt-3 text-neutral-600 text-sm">Проектируем безопасно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
