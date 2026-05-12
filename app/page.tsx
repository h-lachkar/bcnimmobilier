import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-cream">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
