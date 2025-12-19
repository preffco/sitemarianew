"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeaderVariant = "dark" | "light"

type HeaderProps = {
  variant?: HeaderVariant
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 144 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 4H142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M2 20H142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function Header({ variant = "dark" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = useMemo(
    () => [
      { label: "О нас", href: "#expert" },
      { label: "Услуги", href: "#services" },
      { label: "Кейсы", href: "#cases" },
      { label: "Сертификаты", href: "#certificates" },
      { label: "Блог и публикации", href: "/blog" },
      { label: "Контакты", href: "#contact" },
      { label: "Обучение", href: "/education" },
    ],
    [],
  )
  const linkBase = variant === "light" ? "/" : ""

  useEffect(() => {
    if (!isMenuOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMenuOpen])

  const isLight = variant === "light"
  const headerBgClass = isLight
    ? "bg-white/95 shadow-[0_10px_40px_rgba(15,23,42,0.12)]"
    : "bg-neutral-950/95 backdrop-blur-sm"
  const brandTextClass = isLight ? "text-neutral-950" : "text-white"
  const badgeClass = isLight
    ? "hidden sm:inline-flex items-center rounded-full bg-neutral-900/5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.22em] text-neutral-900"
    : "hidden sm:inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.22em] text-white/70"
  const navLinkClass = `${isLight ? "text-neutral-900 hover:text-neutral-950" : "text-white/70 hover:text-white"} transition-colors text-base`
  const desktopButtonClass = "bg-amber-400 hover:bg-amber-500 text-neutral-950 rounded-full px-6 font-semibold"
  const mobileButtonClass = "w-full bg-amber-400 hover:bg-amber-500 text-neutral-950 rounded-full font-medium"
  const hamburgerTextClass = isLight ? "text-neutral-900" : "text-white"

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href={`${linkBase}#hero`} className="flex items-center gap-2">
                <span className={`${brandTextClass} font-semibold text-lg tracking-tight`}>Ai for all</span>
                <span className={badgeClass}>AFA</span>
              </Link>
            </div>

            <nav className="hidden xl:flex items-center gap-8">
              {links.map((link) => {
                const isExternalLink = link.href.startsWith("/")
                const isEducation = link.label === "Обучение"
                const educationClass = isEducation 
                  ? `${isLight ? "text-neutral-950 font-bold" : "text-white font-bold"} transition-colors text-base`
                  : navLinkClass
                return isExternalLink ? (
                  <Link key={link.href} href={link.href} className={educationClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={`${linkBase}${link.href}`} className={educationClass}>
                    {link.label}
                  </a>
                )
              })}
            </nav>

            <div className="hidden xl:block">
              <a href="#contact">
                <Button className={desktopButtonClass}>Получить аудит</Button>
              </a>
            </div>

            <button
              className={`xl:hidden flex items-center ${hamburgerTextClass} text-sm font-semibold`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={isMenuOpen}
            >
              <HamburgerIcon className="w-[120px] h-5 shrink-0" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] xl:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute inset-0 h-full w-full bg-white shadow-2xl transition-all duration-300 ease-out ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-[0.35em]">Меню</p>
                <Link href={`${linkBase}#hero`} className="text-lg font-semibold text-neutral-950">
                  Ai for all
                </Link>
              </div>
              <button className="text-neutral-700" onClick={() => setIsMenuOpen(false)} aria-label="Закрыть меню">
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => {
                const isExternalLink = link.href.startsWith("/")
                const isEducation = link.label === "Обучение"
                const educationClass = isEducation
                  ? "text-lg font-bold text-neutral-950 hover:text-neutral-950 transition-colors"
                  : "text-lg font-medium text-neutral-900 hover:text-neutral-950 transition-colors"
                return isExternalLink ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={educationClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={`${linkBase}${link.href}`}
                    className={educationClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>

            <div className="px-6 py-6 border-t border-neutral-200">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className={mobileButtonClass}>Получить аудит</Button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
