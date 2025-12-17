"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const cases = [
  {
    id: 1,
    title: "Кейс 1",
    client: "Коммерческий директор Ольга К.",
    avatar: "/case1-avatar.webp",
    task: "В компании много времени тратилось на поиск специализированной информации в Интернете (в том числе, на иностранных языках).",
    solution:
      "Настроен AI-ассистент, интегрированный в Telegram. Время поиска информации сократилось в 2 раза. Ассистент сэкономил деньги организации на ФОТ в 2 раза.",
    quote:
      "Спасибо Марии Аникиной и ее команде за оперативную и качественную работу! Очень профессиональное сопровождение как на этапе тестирования, так и на этапе работы. Учтены все требования. Очень рекомендую такие боты всем, особенно вечно занятым руководителям",
  },
  {
    id: 2,
    title: "Кейс 2",
    client: "Директор паркетной фабрики Андрей Д.",
    avatar: "/case2-avatar.jpeg",
    task: "Сотрудники паркетной фабрики работали в привычной парадигме: рутинные процессы, минимум использования современных AI-инструментов. Тема искусственного интеллекта казалась слишком сложной.",
    solution:
      "Проведен корпоративный практикум по ИИ. Команда фабрики получила системное понимание современных технологий. Сотрудники начали активно применять ИИ в работе, увидев ценность инструментов в реальных процессах. Каждый участник создал своего персонального ИИ-ассистента и значительно сократил затрачиваемое на работу время.",
    quote:
      "Обучение по искусственному интеллекту у Марии оставило исключительно положительные впечатления! Рекомендую курсы Марии всем, кто хочет освоить современные технологии и развиваться в сфере искусственного интеллекта! Готов лично ответить на все вопросы и дать положительные рекомендации!",
  },
  {
    id: 3,
    title: "Кейс 3",
    client: "Собственник онлайн-школы Ирина Б.",
    avatar: "/case3-avatar.png",
    task: "В онлайн-школе множество бизнес-процессов (анализ конкурентов, контент, стратегии продаж), требующих автоматизации.",
    solution: 'Внедрен ИИ-ассистент "Нейромаркетолог", который решает эти задачи за считанные секунды.',
    quote:
      "Огромную благодарность выражаю Марии за созданного мне нейромаркетолога! Я - основатель онлайн-школы, где происходит множество бизнес процессов. Очень дорогого стоит, когда важные вещи делаются за считанные секунды. Кто долго думает - не думайте! Анализ конкурентов, контент и даже стратегии продаж, все это может решить нейромаркетолог. Огромное спасибо!",
  },
  {
    id: 4,
    title: "Кейс 4",
    client: "Директор музея Владимир Ф.",
    avatar: "/case4-avatar.png",
    task: "Посты в социальных сетях публиковались 1-2 раза в неделю, их подготовка занимала до часа, часто не хватало вдохновения.",
    solution:
      "Настроен кастомный AI-ассистент по созданию контента и написанию постов, учитывающего культурный и исторический контекст. Теперь посты выходят 3-4 раза в неделю, подготовка занимает 5 минут, тексты пишутся в музейной стилистике.",
    quote: "Выражаю огромную благодарность за этот проект!",
  },
  {
    id: 5,
    title: "Кейс 5",
    client: "Бренд одежды Papa Jeans",
    avatar: "/case5-avatar.webp",
    task: "Создать систему для грамотной и вежливой обработки рекламаций и претензий клиентов 24/7.",
    solution:
      "Разработан и внедрен AI-ассистент по работе с обратной связью клиентов с проработанными сценариями диалогов.",
    quote:
      "Команда Марии Аникиной создала нам и внедрила ИИ-ассистента по рекламациям точно в срок, «под ключ», как договаривались. Сценарии диалогов проработаны грамотно, клиентские претензии разбираются вежливо и по существу, с возможностью вмешательства «живого» менеджера в любой момент диалога. В ходе работы над проектом команда оперативно реагировала на все вопросы, в конце провели небольшое обучение, разъяснили все технические вопросы и правила работы с промптингом. Внедрение ассистента прошло гладко и организованно. Рекомендуем к сотрудничеству - наши впечатления положительные",
  },
  {
    id: 6,
    title: "Кейс 6",
    client: "Психолог Юлия Г.",
    avatar: "/case6-avatar.webp",
    task: "Консультация по внедрению ИИ в бизнес",
    solution: "",
    quote:
      "Три лайфхака и целый исписанный лист. Таким образом у нас прошла консультация с Марией Аникиной из Ai for all. Я хочу выразить свою благодарность за возможность соприкоснуться и понять, как же искусственный интеллект может быть полезен в моем бизнесе, в моей работе, в моей экспертности. И, конечно же, я искренне рекомендую всем тем, кто хочет оптимизировать свою работу, бежать на консультацию к Марии до ещё возможного повышения цен и убедиться в том, что этот человек с огромнейшим энтузиазмом делает то, что он любит. Я уже в этом убедилась, поэтому предлагаю убедиться и вам",
  },
]

export function CasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goToSlide = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return
      setDirection(dir)
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 400)
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % cases.length
    goToSlide(newIndex, "right")
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + cases.length) % cases.length
    goToSlide(newIndex, "left")
  }, [currentIndex, goToSlide])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  const currentCase = cases[currentIndex]

  return (
    <section
      id="cases"
        className="bg-neutral-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,4.15rem)] font-black text-neutral-950 tracking-tight leading-[0.98] max-w-3xl">
            Наши кейсы: успешное внедрение ИИ в&nbsp;российских компаниях
          </h2>

          {/* Carousel controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              aria-label="Предыдущий кейс"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              aria-label="Следующий кейс"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Main carousel card with animation */}
        <div className="relative overflow-hidden">
          <div
            className={`grid lg:grid-cols-2 gap-4 sm:gap-6 transition-all duration-400 ease-out ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* Left: Case info */}
            <div className="bg-neutral-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[#2f56ff] font-semibold text-sm sm:text-base">Кейс {currentCase.id}</span>
                <span className="text-neutral-500 text-sm sm:text-base">
                  0{currentCase.id}/0{cases.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-balance">
                {currentCase.title}
              </h3>
              <p className="text-[#2f56ff] font-medium mb-6 sm:mb-8 text-sm sm:text-base">{currentCase.client}</p>

              {currentCase.task && (
                <div className="mb-4 sm:mb-6">
                  <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wide block mb-2">
                    Задача (Точка А)
                  </span>
                  <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">{currentCase.task}</p>
                </div>
              )}

              {currentCase.solution && (
                <div>
                  <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wide block mb-2">
                    Решение (Точка Б)
                  </span>
                  <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">{currentCase.solution}</p>
                </div>
              )}
            </div>

            {/* Right: Quote with avatar */}
            <div className="bg-neutral-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col">
              <div className="flex items-start gap-4 mb-4 sm:mb-6">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#2f56ff] ring-offset-2">
                  <Image
                    src={currentCase.avatar || "/placeholder.svg"}
                    alt={currentCase.client}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900 text-sm sm:text-base lg:text-lg">{currentCase.client}</p>
                  <p className="text-[#2f56ff] text-xs sm:text-sm mt-1">Отзыв о сотрудничестве</p>
                </div>
              </div>

              <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#2f56ff] mb-4" />
              <blockquote className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed flex-1">
                "{currentCase.quote}"
              </blockquote>
            </div>
          </div>

          {/* Progress bar */}
            <div className="h-1 bg-neutral-200 rounded-full mt-6 sm:mt-8 overflow-hidden">
            <div
              className="h-full bg-sky-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / cases.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Dots pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 sm:w-8 bg-sky-400" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Перейти к кейсу ${index + 1}`}
            />
          ))}
        </div>

        {/* Mini cards preview with avatars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-12">
          {cases.map((caseItem, index) => (
            <button
              key={caseItem.id}
              onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all ${
                index === currentIndex
                  ? "bg-sky-400 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={caseItem.avatar || "/placeholder.svg"}
                    alt={caseItem.client}
                    fill
                    className="object-cover"
                  />
                </div>
                <span
                  className={`text-xs font-semibold ${index === currentIndex ? "text-sky-100" : "text-neutral-400"}`}
                >
                  0{caseItem.id}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium line-clamp-2">{caseItem.title.split(" (")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
