import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Users, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="bg-neutral-950 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          <div>
            <p className="text-amber-400 font-medium mb-4 text-lg">{"Агентство 'Ai for all'"}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              <span className="block">Внедрение ИИ&nbsp;в&nbsp;бизнес:</span>
              <span className="block mt-2">AI-ассистенты и&nbsp;мастер-классы по&nbsp;нейросетям</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Разрабатываем ИИ-ассистентов для продаж, маркетинга и HR. Проводим корпоративные мастер-классы по
              нейросетям для руководителей и сотрудников
            </p>
            <a href="#contact">
              <Button className="bg-amber-400 hover:bg-amber-500 text-neutral-950 rounded-full px-8 py-6 text-lg font-semibold">
                Получить бесплатный аудит
              </Button>
            </a>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="text-white font-semibold mb-2">AI-ассистенты</h3>
                <p className="text-neutral-500 text-sm">Кастомные решения под ваш бизнес</p>
              </div>
              <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
                <div className="w-12 h-12 bg-sky-400 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="text-white font-semibold mb-2">Мастер-классы</h3>
                <p className="text-neutral-500 text-sm">Обучение команды за 1 день</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
                <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="text-white font-semibold mb-2">Интеграция CRM</h3>
                <p className="text-neutral-500 text-sm">Bitrix24, AMO CRM и другие</p>
              </div>
              <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
                <div className="w-12 h-12 bg-rose-400 rounded-2xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="text-white font-semibold mb-2">Безопасно и по 152‑ФЗ</h3>
                <p className="text-neutral-500 text-sm">Проектируем решения с учетом закона и рисков</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
