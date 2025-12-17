import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function ExpertSection() {
  return (
    <section id="expert" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Заголовок и подзаголовок - сначала на мобильных */}
          <div className="lg:order-2 lg:hidden">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-2 text-balance">
              Мария Аникина
            </h2>
            <p className="text-xl text-neutral-600 mb-8">Ваш эксперт по автоматизации бизнеса</p>
          </div>

          {/* Фотка - вторая на мобильных */}
          <div className="relative flex justify-start order-2 lg:order-1 pl-6 lg:pl-0">
            <div className="relative lg:ml-5" style={{ width: "66.67%" }}>
              <div className="aspect-[4/5] bg-neutral-200 rounded-tr-3xl overflow-hidden">
                <Image
                  src="/maria-anikina.jpg"
                  alt="Мария Аникина"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center">
                    <span className="text-neutral-950 font-bold text-[10px] tracking-wide">AFA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-950">Owner</p>
                    <p className="text-neutral-500 text-sm">{"Агентства 'Ai for all'"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Остальной контент - третий на мобильных */}
          <div className="order-3 lg:order-2">
            {/* Заголовок и подзаголовок - скрыты на мобильных, видны на десктопе */}
            <div className="hidden lg:block">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-2 text-balance">
                Мария Аникина
              </h2>
              <p className="text-xl text-neutral-600 mb-8">Ваш эксперт по автоматизации бизнеса</p>
            </div>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Я, Мария Аникина — основатель агентства Ai for all, эксперт в теме внедрения ИИ в бизнес, преподаватель
              практикумов по работе с нейросетями. Официальный партнер CRM Bitrix24 и AMO CRM.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {
                "Моя команда не просто 'продает нейросети', а глубоко погружается в ваши процессы, чтобы ИИ приносил реальную, измеримую пользу."
              }
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2f56ff]" />
                <span className="text-neutral-700">Партнер Bitrix24</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2f56ff]" />
                <span className="text-neutral-700">Партнер AMO CRM</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2f56ff]" />
                <span className="text-neutral-700">Преподаватель практикумов по ИИ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
