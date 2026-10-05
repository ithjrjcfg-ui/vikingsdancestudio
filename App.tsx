import { CtaProvider } from "./cta";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WhyVikings from "./components/WhyVikings";
import Instructor from "./components/Instructor";
import Classes from "./components/Classes";
import Timings from "./components/Timings";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import AdmissionModal from "./components/AdmissionModal";
import ExitIntentPopup from "./components/ExitIntentPopup";

export default function App() {
  return (
    <CtaProvider>
      {/* Film grain + ambient gold atmosphere */}
      <div className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" aria-hidden="true" />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-3 focus:text-xs focus:font-extrabold focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <WhyVikings />
        <Instructor />
        <Marquee invert />
        <Classes />
        <Timings />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingActions />
      <AdmissionModal />
      <ExitIntentPopup />
    </CtaProvider>
  );
}
