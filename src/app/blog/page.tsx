"use client"

import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const articleCards = [
  {
    id: "rbk",
    title: "О нас в федеральных СМИ (РБК)",
    summary:
      "Глубокий материал про супераппы, азиатский путь и роль Ai for all в построении национальных ИИ-решений.",
    tag: "RBK",
    logo: "/RBK_logo.svg.png",
    link: "/blog/rbk",
  },
  {
    id: "ai-for-all",
    title: "ИИ для всех: как AFA переосмысливает бизнес-процессы",
    summary:
      "Интервью с Марией Аникиной: как гуманитарий стал лидером ИИ-агентства и помогает компаниям перестроить процессы.",
    tag: "TenChat",
    logo: "/tenchat2.png",
    link: "/blog/ai-for-all",
  },
  {
    id: "tbank",
    title: "Внедрить ИИ — это не «купить на него подписку»",
    summary:
      "По данным Smart Ranking рынок ИИ в РФ вырос на 25%, но только 5% сотрудников используют его эффективно. Мария Аникина объясняет, почему подписка на ChatGPT не меняет процессы и как правильно внедрять ИИ в компании.",
    tag: "Т-Бизнес секреты",
    logo: null,
    link: "/blog/tbank",
  },
]

export default function BlogPage() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Header variant="light" />
      <section className="bg-neutral-950 text-white px-6 md:px-10 py-16 pt-[110px]">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Блог и публикации</p>
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-tight mt-4">О нас в СМИ</h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl">
            Подборка материалов, где эксперты Ai for all делятся кейсами и мыслями о внедрении ИИ. Выберите
            раздел — и начните чтение.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {articleCards.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              className="group flex flex-col gap-4 rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-neutral-300"
            >
              <div className="flex items-center gap-3">
                {article.logo ? (
                  <div className="h-10 w-10">
                    <Image src={article.logo} alt={article.tag} width={40} height={40} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <div className="border border-neutral-900 rounded px-1 py-0.5 inline-block">
                    <span className="text-neutral-950 font-bold text-[8px] tracking-wide">
                      {article.tag}
                    </span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-neutral-950 leading-tight">{article.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{article.summary}</p>
              <div className="mt-auto flex items-center justify-between text-sm font-semibold text-neutral-500 transition group-hover:text-neutral-900">
                <span>Перейти к статье</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0-6-6m6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

