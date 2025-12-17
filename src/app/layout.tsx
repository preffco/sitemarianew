import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://preffco.github.io/sitemarianew"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ai for all — Внедрение ИИ в бизнес",
  description:
    "Разрабатываем ИИ-ассистентов для продаж, маркетинга и HR. Проводим корпоративные мастер-классы по нейросетям для руководителей и сотрудников.",
  applicationName: "Ai for all",
  keywords: [
    "ИИ-ассистенты",
    "внедрение нейросетей",
    "AI-ассистенты",
    "мастер-классы по ИИ",
    "Ai for all",
    "интеграция CRM Bitrix24",
  ],
  openGraph: {
    title: "Ai for all — агентство по внедрению ИИ",
    description:
      "Ai for all создаёт кастомных AI-ассистентов и проводит корпоративные мастер-классы по нейросетям для коммерческих команд.",
    url: siteUrl,
    siteName: "Ai for all",
    type: "website",
    images: [
      {
        url: `${siteUrl}/public/maria-anikina.jpg`,
        width: 800,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai for all — внедрение ИИ в бизнес",
    description:
      "Looking for AI-assistants or hands-on master-classes about neural networks? Ai for all builds tailored solutions with CRM integration.",
    site: "@afterlyf3",
    creator: "@afterlyf3",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ai for all",
  url: siteUrl,
  logo: `${siteUrl}/public/logo/lgkK8cm3GHz3zFpaiLvk.jpg.webp`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7 985 061-40-40",
      contactType: "customer service",
      email: "ai-for-all@yandex.ru",
    },
  ],
  sameAs: [
    "https://t.me/anikina_mariia",
    "https://ai-for-all.ru/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <CookieConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
