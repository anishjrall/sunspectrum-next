import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import Statement from "@/components/home/Statement";
import Products from "@/components/home/Products";
import WhySunspectrum from "@/components/home/WhySunspectrum";
import Projects from "@/components/home/Projects";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Contact from "@/components/home/Contact";
import FloatingEnquiry from "@/components/FloatingEnquiry";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <Statement />
      <Products />
      <WhySunspectrum />
      <Projects />
      <Industries />
      <Process />
      <Contact />

      <FloatingEnquiry />
    </main>
  );
}