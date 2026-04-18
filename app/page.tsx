import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import { CTA, Footer } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Pillars />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
