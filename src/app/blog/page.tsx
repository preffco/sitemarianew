"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"

const sections = [
  {
    title: "Morgan Stanley и азиатская модель",
    content:
      "Morgan Stanley спрогнозировал, что следующей стадией развития мессенджеров в мире станут ИИ-агенты. По мнению экспертов, Азия раньше всех придет к модели супераппов с внедренным универсальным ИИ-агентом. Как результат — банк повысил целевые цены акций южнокорейской компании Kakao и подтвердил рейтинг «выше рынка» для Tencent.",
  },
  {
    title: "ИИ-ассистенты и агенты",
    content:
      "ИИ-агент — это полностью проактивная автономная система, способная самостоятельно принимать решения и выполнять задачи без постоянных инструкций. ИИ-ассистент с агентским функционалом — реактивный инструмент, выполняющий команды пользователя и частично способный к автономным действиям. Чем больше задач решает ассистент, тем сильнее сетевой эффект.",
  },
  {
    title: "Азиатский путь к супераппам",
    content:
      "WeChat, LINE и Kakao выросли из мессенджеров в супераппы благодаря мини-программам, платежным экосистемам и сервисам «единого окна». Пользователи получают доступ ко всему — от финансов до обслуживания города — не покидая чат. Такая модель оказалась возможной благодаря высокой мобильности, плотности населения и отсутствию инфраструктурных сервисов.",
  },
  {
    title: "Российский контекст",
    content:
      "Российский рынок развивается «снизу» вокруг банков, поисковиков и социальных сетей. Telegram остается медиаплатформой, а не экосистемой. MAX, с государственной поддержкой, пытается заполнить пробел «сверху». Но структурные ограничения, регуляция и зависимость от платежных экосистем не дают мгновенно перейти на азиатскую модель.",
  },
  {
    title: "Два сценария будущего",
    content:
      "Сценарий 1: локальный суперапп развивается вокруг Яндекса, VK или MAX и позволяет пользователям работать через ИИ-агентов. Сценарий 2: фрагментация и нишевое использование — ИИ-агенты остаются вспомогательными и не заменяют универсальные дигитальные ассистенты.",
  },
]

const articleSections = [
  {
    id: "article-1",
    title: "О нас в федеральных СМИ (РБК)",
    description:
      "Эпидемия ИИ-агентов: что говорят Morgan Stanley и азиатские супераппы, и как Россия может создать собственную экосистему.",
  },
  {
    id: "article-2",
    title: "ИИ для всех: как AFA переосмысливает бизнес-процессы",
    description:
      "Мария Аникина о том, как гуманитарий нашел свой путь в ИИ и помогает клиентам автоматизировать рутину без страха.",
  },
]

export default function BlogPage() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Header variant="light" />
      <section className="bg-neutral-950 text-white px-6 md:px-10 py-16 pt-[110px]">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Блог и публикации</p>
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-tight mt-4">
            О нас в федеральных СМИ (РБК)
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl">
            Morgan Stanley спрогнозировал, что следующей стадией развития мессенджеров в мире станут ИИ-агенты.
            По мнению экспертов, Азия раньше всех придет к модели супераппов, а российская экосистема пока выстраивается вокруг финансов.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-wrap gap-3">
          {articleSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/90 px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-white"
            >
              <span>{section.title}</span>
              <span className="hidden text-xs font-normal text-neutral-500 md:inline">{section.description}</span>
            </a>
          ))}
        </div>
      </div>

      <section className="px-6 md:px-10 py-14" id="article-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-1/2 space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="bg-white border border-black/10 p-7 shadow-[0_15px_60px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-semibold text-neutral-950 mb-3">{section.title}</h2>
                <p className="text-neutral-700 leading-relaxed">{section.content}</p>
              </article>
            ))}
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/screen1.jpeg"
                alt="Скриншот телефона"
                width={600}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14" id="article-2">
        <div className="max-w-7xl mx-auto">
          <article className="bg-white border border-black/10 p-8 md:p-12 shadow-[0_15px_60px_rgba(15,23,42,0.08)] space-y-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
                  ИИ для всех
                </p>
                <h2 className="text-[clamp(2rem,3.6vw,3.6rem)] font-black text-neutral-950 leading-tight">
                  ИИ для всех: как AFA переосмысливает бизнес-процессы
                </h2>
              </div>
              <div className="text-sm text-neutral-500 text-right">
                <p>4 месяца назад</p>
                <p>Просмотрено 1.6K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Юрист по образованию, Мария Аникина делает ставку на смысл и структуру: ИИ долгое время
                  казался только технарям, и сегодня её агентство Ai for all доказывает, что экосистема
                  побеждает, когда понимает бизнес-процессы клиента глубоко.
                </p>
                <p>
                  Мария учит видеть готовность к внедрению по реальной боли и желанию менять процессы. Малый
                  бизнес без рутины приходит решительно, тогда как крупные структуры теряются из-за согласований.
                </p>
                <p>
                  Переоценены универсальные ИИ-боты и модные аватары; недооценено внедрение в рекрутинг, онбординг,
                  обработку документов и внутренние знания. ИИ по её мнению — партнёр человека, сохраняющий за ним
                  стратегию и смысл.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-black/10 shadow-[0_30px_60px_rgba(15,23,42,0.15)]">
                  <Image
                    src="/screen2.webp"
                    alt="Мария Аникина в интервью"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 text-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-950">Ключевые мысли</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Сложности внедрения — не технологии, а скепсис людей, привыкших к старым процессам.</li>
                <li>Качественный ИИ-ассистент — кастомный продукт, построенный на сценариях клиента, а не на шаблонах.</li>
                <li>Лучшие кейсы приходят от малого бизнеса, который готов быстро тестировать и адаптировать решения.</li>
                <li>ИИ не заменяет человека, он освобождает от рутины, сохраняя стратегию за человеком.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}

