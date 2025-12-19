"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Bot, MessageSquare, Search, Users, Shield, GraduationCap, Headset, X } from "lucide-react"

interface ServiceCard {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  iconBg: string
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "Разработка ИИ-ассистентов",
    description:
      'Создаем кастомных ИИ-ассистентов «под ключ». Интегрируем их в CRM (Bitrix24, AMO) и бизнес-процессы',
    icon: <Bot className="w-6 h-6" />,
    iconBg: "bg-[#FF6B4A]",
  },
  {
    id: 2,
    title: "Корпоративные мастер-классы\nпо ИИ",
    description:
      "Проводим практические мастер-классы для команд. Учим сотрудников эффективно применять ИИ (ChatGPT, Gemini, Claude, DeepSeek, Manus, Genspark, Skywork, Perplexity, YandexGPT, GigaChat и др.) для решения ежедневных задач. Повышаем эффективность команды за 1 день",
    icon: <GraduationCap className="w-6 h-6" />,
    iconBg: "bg-[#90EE90]",
  },
  {
    id: 3,
    title: "Поиск по базе знаний",
    description: "Ответы по документам за секунды: подключаем внутренние базы знаний, регламенты и файлы (PDF/Word/таблицы) и даём сотрудникам поиск «как в Google». Ассистент находит нужный фрагмент, цитирует первоисточник и собирает краткий ответ без воды. Сокращаем время на поиск информации и снижаем количество ошибок из‑за устаревших версий документов. Настраиваем индексацию, обновление базы и контроль доступа — чтобы каждый сотрудник получал актуальную информацию по своей зоне ответственности",
    icon: <Search className="w-6 h-6" />,
    iconBg: "bg-[#A8C5F0]",
  },
  {
    id: 4,
    title: "ИИ-ассистент в чатах",
    description: "Telegram и виджеты: ассистент встречает клиента, уточняет задачу, собирает контекст и квалифицирует обращение по правилам бизнеса. Закрывает типовые вопросы, а сложные кейсы передаёт человеку с полной историей диалога и кратким резюме. Настраиваем сценарии продаж/поддержки, контроль качества и безопасные ограничения — чтобы ответы были точными и одинаково «в стиле бренда». Интегрируем с системами учета и аналитикой для полной картины по каждому клиенту",
    icon: <MessageSquare className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 5,
    title: "Интеграция CRM",
    description: "Bitrix24/AMO: связываем чаты, звонки и заявки в единый поток. Ассистент создаёт лиды и задачи, заполняет поля, ставит напоминания, фиксирует итоги диалога и следит за дисциплиной обработки. Руководитель видит контроль качества коммуникаций и узкие места в воронке, а менеджеры избавляются от рутины и фокусируются на закрытии сделок. Настраиваем автоматическую синхронизацию данных, ведение истории взаимодействий и аналитические дашборды для принятия решений",
    icon: <Users className="w-6 h-6" />,
    iconBg: "bg-[#FFE066]",
  },
  {
    id: 6,
    title: "152-ФЗ и риски",
    description: "Проектируем безопасно и прозрачно: строим архитектуру и процессы под 152‑ФЗ и требования бизнеса. Настраиваем хранение и доступы, логирование, аудит и контроль качества ответов. Ассистент работает только в разрешённом периметре, не «утекает» с данными и соблюдает правила обработки персональной информации. Делаем понятные регламенты для команды и снижаем юридические и репутационные риски. Проводим аудит безопасности, настраиваем шифрование и контролируем доступ к конфиденциальным данным на всех этапах работы системы",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 7,
    title: "Сценарии внедрения",
    description: "Гипотезы, KPI, пилот и масштабирование: начинаем с задач, где есть быстрый эффект — и сразу фиксируем метрики (скорость, качество, конверсия, экономия времени). Готовим сценарии, чек‑листы, матрицу решений и план интеграций, чтобы пилот не «умер» после демонстрации. Проводим тестирование, сбор обратной связи и доработки до стабильной версии. Затем масштабируем на новые отделы и каналы без потери качества. Строим дорожную карту развития, обучаем команду и обеспечиваем плавный переход от пилота к полноценной эксплуатации",
    icon: <MessageSquare className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 8,
    title: "Сопровождение",
    description: "Поддержка, улучшения и масштабирование: после запуска держим систему в рабочем состоянии и улучшаем её по данным. Настраиваем мониторинг качества, обновления сценариев, расширение базы знаний и обучение команды. Регулярно анализируем диалоги, ищем точки просадки и повышаем точность ответов. Добавляем новые каналы и функции по мере роста — чтобы ИИ давал результат не «первую неделю», а постоянно. Обеспечиваем техническую поддержку, резервное копирование и плановые обновления для стабильной работы без простоев",
    icon: <Headset className="w-6 h-6" />,
    iconBg: "bg-[#FF6B4A]",
  },
]

export function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [modalOpen, setModalOpen] = useState<number | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const active = serviceCards[activeCard]
  const showPhone = active.id === 1
  const showWide = active.id === 2
  const mediaSlotHeight = "h-[clamp(240px,22vw,360px)]"

  const handleCardClick = (idx: number) => {
    setActiveCard(idx)
    // Открываем модальное окно (будет показано только на мобильных через CSS класс lg:hidden)
    setIsClosing(false)
    setModalOpen(serviceCards[idx].id)
  }

  // Эффект для плавного открытия модального окна
  useEffect(() => {
    if (modalOpen && !isClosing) {
      setIsOpening(true)
      // Небольшая задержка для запуска анимации открытия
      const timer = setTimeout(() => {
        setIsOpening(false)
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setIsOpening(false)
    }
  }, [modalOpen, isClosing])

  const handleCloseModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalOpen(null)
      setIsClosing(false)
    }, 300) // Длительность анимации
  }

  const modalCard = modalOpen ? serviceCards.find(card => card.id === modalOpen) : null

  return (
    <>
      <section className="bg-[#EFEFEF] py-16 md:py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-14 text-[clamp(2.4rem,4.2vw,4.15rem)] font-black tracking-tight leading-[0.98] text-neutral-950">
            Мы оказываем услуги: от консалтинга
            <br />
            до разработки AI-ассистентов
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-3">
                  {[0, 3, 6].map((idx) => (
                    <ServiceCardItem
                      key={serviceCards[idx].id}
                      card={serviceCards[idx]}
                      isActive={activeCard === idx}
                      onClick={() => handleCardClick(idx)}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  {[1, 4, 7].map((idx) => (
                    <ServiceCardItem
                      key={serviceCards[idx].id}
                      card={serviceCards[idx]}
                      isActive={activeCard === idx}
                      onClick={() => handleCardClick(idx)}
                    />
                  ))}
                </div>
                <div className="hidden md:flex flex-col gap-3 mt-16">
                  {[2, 5].map((idx) => (
                    <ServiceCardItem
                      key={serviceCards[idx].id}
                      card={serviceCards[idx]}
                      isActive={activeCard === idx}
                      onClick={() => handleCardClick(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop card - показывается только на lg и выше */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
              <div className="bg-[#212121] rounded-2xl p-9 md:p-11 h-full min-h-[560px] flex flex-col">
                <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
                  {active.title}
                </h3>

                {/* Media slot (varies by active card) */}
                <div className="mt-6 flex-1 flex flex-col">
                  {active.id <= 2 ? (
                    <>
                      {showPhone ? (
                        <div className={`mx-auto w-full max-w-[520px] ${mediaSlotHeight} relative overflow-hidden rounded-3xl bg-neutral-900/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)]`}>
                          <Image
                            src="/photo/phone.png"
                            alt="Интерфейс чата"
                            fill
                            className="object-cover scale-[1.03]"
                            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 40vw, 100vw"
                          />
                        </div>
                      ) : showWide ? (
                        <div className={`w-full ${mediaSlotHeight} relative overflow-hidden rounded-3xl bg-neutral-900/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)]`}>
                          <Image
                            src="/services-masterclass.webp"
                            alt="Мастер-класс по ИИ"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 44vw, (min-width: 768px) 80vw, 100vw"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
                        </div>
                      ) : (
                        <div className={mediaSlotHeight} aria-hidden="true" />
                      )}
                      <p className="text-base md:text-lg text-[#CCCCCC] leading-relaxed mt-auto">
                        {active.description}
                      </p>
                    </>
                  ) : (
                    <div className="text-base md:text-lg text-[#CCCCCC] leading-relaxed overflow-y-auto">
                      <p>{active.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - показывается только на мобильных устройствах */}
      {modalOpen && modalCard && (
        <div 
          className={`fixed inset-0 z-50 bg-[#212121] flex items-center justify-center p-4 md:p-8 lg:hidden transition-opacity duration-300 ${
            isClosing || isOpening ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleCloseModal}
        >
          <div 
            className={`w-full h-full max-w-7xl flex flex-col relative px-6 md:px-12 py-8 md:py-12 transition-all duration-300 ${
              isClosing ? 'scale-95 opacity-0' : isOpening ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-10 text-amber-400 hover:text-amber-500 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              {/* Title at top */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8 md:mb-12">
                {modalCard.title}
              </h3>

              {/* Image slot for specific cards */}
              {modalCard.id === 1 && (
                <div className="mx-auto w-full max-w-[200px] sm:max-w-[240px] md:max-w-[320px] aspect-[9/16] relative overflow-hidden rounded-3xl bg-neutral-900/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)] mb-8 md:mb-12">
                  <Image
                    src="/photo/phone.png"
                    alt="Интерфейс чата"
                    fill
                    className="object-cover w-full h-full scale-125"
                    sizes="(min-width: 768px) 320px, (min-width: 640px) 240px, 200px"
                  />
                </div>
              )}

              {modalCard.id === 2 && (
                <div className="w-full h-[240px] md:h-[300px] lg:h-[360px] relative overflow-hidden rounded-3xl bg-neutral-900/30 shadow-[0_30px_90px_rgba(0,0,0,0.35)] mb-8 md:mb-12">
                  <Image
                    src="/services-masterclass.webp"
                    alt="Мастер-класс по ИИ"
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              )}

              {/* Description at bottom */}
              <div className={`text-base md:text-lg lg:text-xl text-white leading-relaxed space-y-4 max-w-4xl ${modalCard.id <= 2 ? 'mt-auto' : ''}`}>
                <p>{modalCard.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ServiceCardItem({
  card,
  isActive,
  onClick,
}: {
  card: ServiceCard
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
    className={`relative flex flex-col justify-between p-4 py-5 rounded-tr-xl text-left transition-all duration-200 min-h-[200px] ${
        isActive ? "bg-[#2b2b2b] text-white" : "bg-white hover:bg-gray-50 text-[#1A1A1A]"
      }`}
    >
      <div
        className={`absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center ${card.iconBg} ${
          isActive ? "ring-2 ring-amber-400" : ""
        }`}
      >
        <span className="text-[#1A1A1A]">{card.icon}</span>
      </div>

      <span className={`text-sm ${isActive ? "text-white/60" : "text-[#999]"}`}>
        {String(card.id).padStart(2, "0")}
      </span>

      <p className="text-sm font-medium leading-tight mt-6">{card.title}</p>
    </button>
  )
}
