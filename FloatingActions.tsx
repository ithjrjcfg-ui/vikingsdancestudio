import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { waLink } from "../data";
import { useCta } from "../cta";
import { EASE } from "./ui";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const { openAdmission, isOpen } = useCta();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.85 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-7 md:right-7"
        >
          {/* Book a Free Trial */}
          <motion.button
            type="button"
            onClick={() => openAdmission("Free Trial Class")}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
            className="btn-sheen group flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 py-3 pl-5 pr-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink shadow-[0_14px_40px_-10px_rgba(212,175,55,0.65)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            aria-label="Book a free trial class"
          >
            <CalendarCheck className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
            Free Trial Class
          </motion.button>

          {/* WhatsApp */}
          <a
            href={waLink("Hi Vikings! I want to book a class.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#2be07a] to-[#128c4b] text-white shadow-[0_14px_40px_-10px_rgba(34,193,94,0.7)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa"
            aria-label="Chat with Vikings Dance Studio on WhatsApp"
          >
            <span className="absolute inset-0 animate-ping-soft rounded-full bg-wa/60" aria-hidden="true" />
            <MessageCircle className="relative h-6 w-6 fill-white/20 transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-full border border-white/10 bg-ink/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cream opacity-0 backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
              Replies in minutes
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
