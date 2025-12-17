"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"

type Logo = {
  src: string
  alt: string
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export function MasterclassLogosCarousel({
  logos,
  perPage = 3,
  title,
  autoPlay = true,
  intervalMs = 3000,
}: {
  logos: Logo[]
  perPage?: number
  title?: ReactNode
  autoPlay?: boolean
  intervalMs?: number
}) {
  const pages = useMemo(() => chunk(logos, perPage), [logos, perPage])
  const pageCount = pages.length
  const [pageIndex, setPageIndex] = useState(0)
  const touchStartX = useRef(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const clampIndex = (next: number) => {
    if (pageCount <= 0) return 0
    return ((next % pageCount) + pageCount) % pageCount
  }

  const goTo = (next: number) => setPageIndex(clampIndex(next))
  const next = () => goTo(pageIndex + 1)
  const prev = () => goTo(pageIndex - 1)

  const animateTick = () => {
    setIsAnimating(true)
    window.setTimeout(() => setIsAnimating(false), 220)
  }

  const goToAnimated = (nextIndex: number) => {
    goTo(nextIndex)
    animateTick()
  }

  const nextAnimated = () => goToAnimated(pageIndex + 1)
  const prevAnimated = () => goToAnimated(pageIndex - 1)

  // touch swipe (minimal, no extra lib)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? 0
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0]?.clientX ?? 0
    const delta = endX - touchStartX.current
    if (Math.abs(delta) < 50) return
    if (delta < 0) nextAnimated()
    else prevAnimated()
  }

  if (pageCount === 0) return null

  useEffect(() => {
    if (!autoPlay) return
    if (isHovered) return
    if (pageCount <= 1) return

    const id = window.setInterval(() => {
      setPageIndex((i) => ((i + 1) % pageCount + pageCount) % pageCount)
      animateTick()
    }, intervalMs)

    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, intervalMs, isHovered, pageCount])

  return (
    <div className="w-full">
      {title ? (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <h3 className="text-[clamp(2.4rem,4.2vw,4.15rem)] font-black text-neutral-950 tracking-tight leading-[0.98] max-w-3xl">
            {title}
          </h3>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={prevAnimated}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
              aria-label="Предыдущие логотипы"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              type="button"
              onClick={nextAnimated}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors"
              aria-label="Следующие логотипы"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>
      ) : null}

      <div className="relative">
        <div
          className="overflow-hidden rounded-2xl bg-white"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex transition-transform duration-500 ease-out will-change-transform ${
              isAnimating ? "opacity-90" : "opacity-100"
            } transition-opacity`}
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {pages.map((page, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 divide-x divide-neutral-200">
                  {page.map((logo) => (
                    <div key={logo.src} className="flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
                      <div className="relative h-14 sm:h-16 md:h-20 w-full max-w-[260px]">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="(min-width: 1024px) 260px, 33vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal controls (still accessible even without title controls) */}
        {!title ? (
          <div className="sr-only">
            <button type="button" onClick={prevAnimated}>
              Предыдущие логотипы
            </button>
            <button type="button" onClick={nextAnimated}>
              Следующие логотипы
            </button>
          </div>
        ) : null}
      </div>

      {/* Minimal page indicator (like in the reference screenshot) */}
      <div className="mt-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToAnimated(i)}
              aria-label={`Показать страницу ${i + 1} из ${pageCount}`}
              className={`h-1 w-16 rounded-full transition-colors ${
                i === pageIndex ? "bg-sky-400" : "bg-black/20 hover:bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


