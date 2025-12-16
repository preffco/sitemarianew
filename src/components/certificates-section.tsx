"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const certificates = Array.from({ length: 17 }, (_, index) => ({
  id: index + 1,
  title: `Сертификат ${index + 1}`,
  image: `/certificates/cert-${String(index + 1).padStart(2, "0")}.png`,
}))

export function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null)

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }, [])

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % certificates.length
    goToSlide(newIndex, "right")
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + certificates.length) % certificates.length
    goToSlide(newIndex, "left")
  }, [currentIndex, goToSlide])

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  useEffect(() => {
    const container = thumbnailContainerRef.current
    const thumbnail = thumbnailRefs.current[currentIndex]
    if (!container || !thumbnail) return

    const thumbnailCenter = thumbnail.offsetLeft + thumbnail.offsetWidth / 2
    const scrollPosition = thumbnailCenter - container.clientWidth / 2
    container.scrollTo({ left: scrollPosition, behavior: "smooth" })
  }, [currentIndex])

  return (
    <section
      id="certificates"
      className="bg-neutral-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 text-balance max-w-2xl">
            Наши сертификаты об&nbsp;экспертизе в&nbsp;области&nbsp;ИИ
          </h2>

          {/* Navigation controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Предыдущий сертификат"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Следующий сертификат"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Main image carousel */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg mx-auto max-w-[1020px] w-full">
            <div className="aspect-video relative bg-neutral-50 rounded-2xl overflow-hidden">
              <div
                className={`absolute inset-0 transition-all duration-300 ease-out ${
                  isAnimating
                    ? direction === "right"
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <Image
                  src={certificates[currentIndex].image || "/placeholder.svg"}
                  alt={certificates[currentIndex].title}
                  fill
                  className="object-contain p-6 sm:p-8"
                />
              </div>
            </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-200">
            <div
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / certificates.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div ref={thumbnailContainerRef} className="flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-2 overflow-x-auto pb-2">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              ref={(el) => {
                thumbnailRefs.current[index] = el
              }}
              onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}
              className={`relative flex-shrink-0 w-16 h-10 sm:w-24 sm:h-14 md:w-32 md:h-20 rounded-lg sm:rounded-xl overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-4 ring-amber-500 ring-offset-2 ring-offset-white"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Перейти к сертификату ${index + 1}`}
            >
              <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Dots pagination for mobile */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-amber-500" : "w-2 bg-neutral-300"
              }`}
              aria-label={`Перейти к сертификату ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
