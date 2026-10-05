import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { LOGO_URL, NAV_LINKS, waLink } from "../data";
import { useCta } from "../cta";
import { EASE } from "./ui";
import { cn } from "../utils/cn";

function LogoMark() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Vikings Dance Studio — Home">
      <img 
        src={LOGO_URL}
        alt="Vikings Dance Studio" 
        className="h-12 w-12 rounded-full object-contain transition-transform duration-500 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
      />
      <span className="leading-none hidden sm:block">
        <span className="block font-display text-lg tracking-wide text-cream">
          VIKINGS
        </span>
        <span className="mt-0.5 block text-[8.5px] font-bold uppercase tracking-[0.42em] text-gold-400">
          Dance Studio
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openAdmission } = useCta();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/7 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        {/* gold scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200"
          aria-hidden="true"
        />
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8"
          aria-label="Primary"
        >
          <LogoMark />

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[12.5px] font-bold uppercase tracking-[0.2em] text-cream/70 transition-colors duration-300 hover:text-cream"
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold-400 transition-all duration-400 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Hi Vikings! I want to know more about admissions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/80 transition-all duration-300 hover:border-wa/60 hover:text-wa md:grid"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>
            <button
              type="button"
              onClick={() => openAdmission()}
              className="btn-sheen hidden cursor-pointer items-center gap-2 rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(212,175,55,0.6)] sm:inline-flex"
            >
              Join Now
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold-400/60 hover:text-gold-300 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/96 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <LogoMark />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 text-cream hover:border-gold-400/60 hover:text-gold-300"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -36 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: EASE }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/6 py-5"
                    >
                      <span className="font-display text-4xl uppercase tracking-wide text-cream transition-colors group-hover:text-gold-300">
                        {l.label}
                      </span>
                      <ArrowUpRight className="h-6 w-6 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                className="mt-10 flex flex-col gap-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openAdmission();
                  }}
                  className="btn-sheen cursor-pointer rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 py-4 text-[13px] font-extrabold uppercase tracking-[0.2em] text-ink"
                >
                  Join Now — Limited Seats
                </button>
                <a
                  href={waLink("Hi Vikings! I'd like to book a free trial class.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 py-4 text-center text-[13px] font-extrabold uppercase tracking-[0.2em] text-cream"
                >
                  Book a Free Trial
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
