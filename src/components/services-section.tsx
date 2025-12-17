"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Bot, MessageSquare, Search, Users, Shield, GraduationCap, Headset } from "lucide-react"

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
      'Создаем кастомных ИИ-ассистентов "под ключ". Интегрируем их в ваши CRM (Bitrix24, AMO) и бизнес-процессы.',
    icon: <Bot className="w-6 h-6" />,
    iconBg: "bg-[#FF6B4A]",
  },
  {
    id: 2,
    title: "Сценарии внедрения",
    description: "Гипотезы, KPI, пилот и масштабирование.",
    icon: <MessageSquare className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 3,
    title: "Поиск по базе знаний",
    description: "Ответы по документам за секунды.",
    icon: <Search className="w-6 h-6" />,
    iconBg: "bg-[#A8C5F0]",
  },
  {
    id: 4,
    title: "ИИ-ассистент в чатах",
    description: "Telegram/виджеты, квалификация и поддержка.",
    icon: <MessageSquare className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 5,
    title: "Интеграция CRM",
    description: "Bitrix24/AMO: лиды, задачи, контроль диалогов.",
    icon: <Users className="w-6 h-6" />,
    iconBg: "bg-[#FFE066]",
  },
  {
    id: 6,
    title: "152-ФЗ и риски",
    description: "Проектируем безопасно и прозрачно.",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-[#E8E8E8]",
  },
  {
    id: 7,
    title: "Обучение команды",
    description: "Практика нейросетей за 1 день.",
    icon: <GraduationCap className="w-6 h-6" />,
    iconBg: "bg-[#90EE90]",
  },
  {
    id: 8,
    title: "Сопровождение",
    description: "Поддержка, улучшения и масштабирование.",
    icon: <Headset className="w-6 h-6" />,
    iconBg: "bg-[#FF6B4A]",
  },
]

export function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="bg-[#EFEFEF] py-16 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-[clamp(2.4rem,4.2vw,4.15rem)] font-black tracking-tight leading-[0.98] text-neutral-950">
          Наши услуги: от консалтинга
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
                    onClick={() => setActiveCard(idx)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-8">
                {[1, 4, 7].map((idx) => (
                  <ServiceCardItem
                    key={serviceCards[idx].id}
                    card={serviceCards[idx]}
                    isActive={activeCard === idx}
                    onClick={() => setActiveCard(idx)}
                  />
                ))}
              </div>
              <div className="hidden md:flex flex-col gap-3 mt-16">
                {[2, 5].map((idx) => (
                  <ServiceCardItem
                    key={serviceCards[idx].id}
                    card={serviceCards[idx]}
                    isActive={activeCard === idx}
                    onClick={() => setActiveCard(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-[#212121] rounded-2xl p-8 md:p-10 h-full min-h-[520px] flex flex-col">
              <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white mb-auto leading-tight">
                {serviceCards[activeCard].title}
              </h3>

              <div className="my-4 flex flex-col sm:flex-row gap-4 items-start -ml-10 md:-ml-20">
                <div className="relative w-[520px] sm:w-[600px] md:w-[680px] flex-shrink-0">
                  <Image
                    src="/services-chat-screenshot.png"
                    alt="Интерфейс чата"
                    width={220}
                    height={440}
                    className="w-full h-auto object-contain transform -translate-x-16 md:-translate-x-28"
                  />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-3xl max-w-[560px] shadow-[0_30px_90px_rgba(0,0,0,0.35)] mt-6 sm:mt-0">
                  <Image
                    src="/services-masterclass.webp"
                    alt="Мастер-класс по ИИ"
                    width={420}
                    height={240}
                    className="w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <p className="text-xs text-white/90">Практикум по ИИ для бизнеса</p>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-[#CCCCCC] leading-relaxed mt-auto">
                {serviceCards[activeCard].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      className={`relative p-4 rounded-xl text-left transition-all duration-200 ${
        isActive ? "bg-[#2b2b2b] text-white" : "bg-white hover:bg-gray-50 text-[#1A1A1A]"
      }`}
    >
      <span className={`text-sm ${isActive ? "text-white/60" : "text-[#999]"}`}>
        {String(card.id).padStart(2, "0")}
      </span>

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center my-4 ${
          isActive ? "bg-[#2b2b2b]" : card.iconBg
        }`}
      >
        <span className={isActive ? "text-white" : "text-[#1A1A1A]"}>{card.icon}</span>
      </div>

      <p className="text-sm font-medium leading-tight">{card.title}</p>
    </button>
  )
}
