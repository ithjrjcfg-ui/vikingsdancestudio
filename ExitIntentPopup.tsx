import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, X } from "lucide-react";
import { useCta } from "../cta";
import { EASE } from "./ui";

const STORAGE_KEY = "viking-exit-shown";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const { openAdmission, isOpen } = useCta();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage unavailable — continue */
    }
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let armed = false;
    const arm = setTimeout(() => {
      armed = true;
    }, 14000);

    const onLeave = (e: MouseEvent) => {
      if (!armed || isOpen) return;
      if (e.clientY <= 8 && !e.relatedTarget) {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* storage unavailable — continue */
        }
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(arm);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isOpen]);

  const claim = () => {
    setShow(false);
    openAdmission("Free Trial Class");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/85 p-4 backdrop-blur-md"
          onClick={() => setShow(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Free trial class offer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.6, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-gold-400/25 bg-gradient-to-b from-soot to-ink shadow-[0_60px_140px_-30px_rgba(0,0,0,0.95)]"
          >
            <button
              type="button"
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/12 bg-ink/60 text-cream/70 backdrop-blur-md transition-colors hover:border-gold-400/50 hover:text-gold-300"
              aria-label="Close offer"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="grid sm:grid-cols-[0.85fr_1.15fr]">
              <div className="relative hidden sm:block">
                <img
                  src="/images/gallery-hiphop.jpg"
                  alt="Dancer in golden spotlight"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-soot/80" />
              </div>
              <div className="p-8 md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-gold-400/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-gold-200">
                  <Gift className="h-3.5 w-3.5" />
                  Wait — A Gift For You
                </span>
                <h3 className="mt-5 font-display text-3xl uppercase leading-[1.02] tracking-tight text-cream md:text-[2.6rem]">
                  Your First Class
                  <br />
                  <span className="text-gold-grad">Is On The House.</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  Before you go — claim a{" "}
                  <span className="font-bold text-cream">100% free trial class</span> at Vikings.
                  No fees, no forms at the door. Just show up and dance.
                </p>
                <button
                  type="button"
                  onClick={claim}
                  className="btn-sheen mt-7 w-full cursor-pointer rounded-xl bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 py-4 text-[13px] font-extrabold uppercase tracking-[0.2em] text-ink transition-shadow duration-300 hover:shadow-[0_18px_50px_-12px_rgba(212,175,55,0.6)]"
                >
                  Claim My Free Trial
                </button>
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="mt-4 w-full cursor-pointer text-center text-[11px] font-bold uppercase tracking-[0.2em] text-cream/35 transition-colors hover:text-cream/60"
                >
                  No thanks, I'll skip the spotlight
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
