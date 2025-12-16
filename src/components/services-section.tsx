import { Bot, GraduationCap, ArrowRight } from "lucide-react"
import Image from "next/image"
import { MasterclassLogosCarousel } from "@/components/masterclass-logos-carousel"

const masterclassLogos = Array.from({ length: 12 }, (_, i) => ({
  src: `/logos/logo-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Логотип компании ${i + 1}`,
}))

export function ServicesSection() {
  return (
    <section id="services" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4">Наши услуги</h2>
          <p className="text-neutral-600 text-lg">От консалтинга до разработки AI-ассистентов</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 group hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-neutral-950" />
              </div>
              <div className="relative flex w-10 items-center justify-center">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-transparent transition-all duration-300 group-hover:bg-neutral-950" />
                <span className="relative z-10 text-neutral-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  01
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              Внедрение и разработка ИИ-ассистентов
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              {
                "Создаем кастомных ИИ-ассистентов 'под ключ'. Интегрируем их в ваши CRM (Bitrix24, AMO) и бизнес-процессы. Решаем задачи: от 'нейропродавца' в чате до интеллектуального поиска по базе знаний."
              }
            </p>
            
            {/* Chat screenshot */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/services-chat-screenshot.png"
                alt="Скриншот чата ИИ-ассистента"
                width={500}
                height={889}
                className="rounded-2xl scale-[1.35]"
              />
            </div>

            <a href="#use-cases" className="flex items-center gap-2 text-neutral-950 font-medium group-hover:gap-4 transition-all mt-auto">
              <span>Подробнее</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 group hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-neutral-950" />
              </div>
              <div className="relative flex w-10 items-center justify-center">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-transparent transition-all duration-300 group-hover:bg-neutral-950" />
                <span className="relative z-10 text-neutral-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  02
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">Корпоративные мастер-классы по ИИ</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Проводим практические мастер-классы для ваших команд. Учим сотрудников эффективно применять ИИ (ChatGPT,
              Gemini, Claude, DeepSeek, Manus, Genspark, Skywork, Perplexity, YandexGPT, GigaChat и др.) для решения
              ежедневных задач. Повышаем эффективность команды за 1 день.
            </p>
            
            {/* 16:9 image container */}
            <div className="mb-6 relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
                <Image
                  src="/services-masterclass.webp"
                  alt="Корпоративный мастер-класс по ИИ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <a href="#education" className="flex items-center gap-2 text-neutral-950 font-medium group-hover:gap-4 transition-all">
              <span>Подробнее</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div id="masterclasses" className="mt-20">
          <MasterclassLogosCarousel
            title={
              <>
                Мы провели <span className="whitespace-nowrap">мастер-классы</span> по ИИ для
              </>
            }
            logos={masterclassLogos}
            perPage={3}
            autoPlay
            intervalMs={3000}
          />
        </div>
      </div>
    </section>
  )
}
