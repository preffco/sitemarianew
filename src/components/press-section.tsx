"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getPublications, transformPublication } from "@/lib/strapi"

// Fallback data if Strapi is not available
const fallbackArticles = [
  {
    id: 1,
    publication: "МАХ",
    publicationLogo: "/RBK_logo.svg.png",
    title:
      "ИИ-агенты и супераппы в Азии — Россия рискует остаться в стороне, если не появится свой «умный» MAX. Мария Аникина объясняет, как запустить такой проект",
    url: "/blog/rbk",
  },
  {
    id: 2,
    publication: "TenChat",
    publicationLogo: "/tenchat2.png",
    title:
      "Мария Аникина рассказывает, как гуманитарий с юриспруденцией создала Ai for all и теперь помогает компаниям интегрировать ИИ в рутинные процессы",
    url: "/blog/ai-for-all",
  },
]

interface Article {
  id: number
  publication: string
  publicationLogo: string | null
  title: string
  url: string
}

export function PressSection() {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const publications = await getPublications()
        
        if (publications.length > 0) {
          const transformed = publications.map((pub) => {
            const transformed = transformPublication(pub)
            return {
              id: transformed.id,
              publication: transformed.source,
              publicationLogo: transformed.publicationLogo,
              title: transformed.title,
              url: transformed.url,
            }
          })
          setArticles(transformed)
        }
      } catch (error) {
        console.error('Error loading publications:', error)
        // Keep fallback articles on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])
  return (
    <section id="press" className="bg-neutral-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(1.8rem,3.5vw,4.15rem)] font-black text-neutral-950 tracking-tight leading-[0.98] mb-10 sm:mb-12">
          О нас пишут
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-none pt-4 sm:pt-5 px-4 sm:px-5 pb-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col min-h-[280px] sm:min-h-[300px] animate-pulse"
              >
                <div className="h-8 w-32 bg-neutral-200 rounded mb-3"></div>
                <div className="flex-grow"></div>
                <div className="h-20 bg-neutral-200 rounded mb-4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {articles.map((article, index) => {
              // Determine if this is TenChat article (for special styling)
              const isTenChat = article.publicationLogo?.includes('tenchat') || article.publication === 'TenChat'
              
              return (
                <Link
                  key={article.id}
                  href={article.url}
                  className={`bg-white rounded-none ${isTenChat ? 'pt-0 sm:pt-1' : 'pt-4 sm:pt-5'} px-4 sm:px-5 pb-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow group flex flex-col min-h-[280px] sm:min-h-[300px]`}
                >
                  {/* Publication logo/name */}
                  <div className={isTenChat ? 'mb-0 -ml-2 sm:ml-0' : 'mb-3'}>
                    {article.publicationLogo ? (
                      <Image
                        src={article.publicationLogo}
                        alt={article.publication}
                        width={isTenChat ? 240 : 120}
                        height={isTenChat ? 80 : 40}
                        className={`${isTenChat ? 'h-16' : 'h-8'} w-auto object-contain brightness-0 opacity-85`}
                        unoptimized={isTenChat}
                        priority={index === 0}
                      />
                    ) : (
                      <div className="border border-neutral-900 rounded px-3 py-1.5 inline-block">
                        <span className="text-neutral-950 font-bold text-sm tracking-wide">
                          {article.publication}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Spacer to push content down */}
                  <div className="flex-grow"></div>

                  {/* Bottom section: title and arrow */}
                  <div className="flex items-end justify-between gap-4 pb-4 sm:pb-5">
                    <h3 className="text-base sm:text-lg font-medium text-neutral-950 leading-relaxed flex-1">
                      {article.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center transition-colors flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-neutral-700" />
                    </div>
                  </div>
                </Link>
            )
            })}
          </div>
        )}

        {/* CTA button */}
        <Link
          href="/blog"
          className="w-full bg-neutral-100 border border-neutral-900 text-neutral-950 font-bold px-8 py-5 rounded-full text-center text-xl hover:!bg-neutral-950 hover:!border-neutral-950 hover:text-white transition-all duration-300 ease-in-out inline-flex justify-center"
        >
          Больше публикаций о нас
        </Link>
      </div>
    </section>
  )
}

