import { HeroSection } from "@/components/hero-section"
import { ExpertSection } from "@/components/expert-section"
import { BusinessValueSection } from "@/components/business-value-section"
import { ServicesSection } from "@/components/services-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { EducationSection } from "@/components/education-section"
import { CasesSection } from "@/components/cases-section"
import { PressSection } from "@/components/press-section"
import { CertificatesSection } from "@/components/certificates-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExpertSection />
      <BusinessValueSection />
      <ServicesSection />
      <UseCasesSection />
      <EducationSection />
      <CasesSection />
      <PressSection />
      <CertificatesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
