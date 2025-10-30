import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { MicroserviceCTA } from "@/components/MicroserviceCTA";
import { EmployerSection } from "@/components/EmployerSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <HowItWorks />
        <Features />
        <MicroserviceCTA />
        <EmployerSection />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
