import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import MenuPricing from "@/components/MenuPricing";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Testimonials />
      <Gallery />
      <HowItWorks />
      <MenuPricing />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
