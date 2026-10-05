import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, waLink } from "../data";
import { EASE, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHead
          eyebrow="Before You Ask"
          title={
            <>
              Questions, <span className="text-gold-grad">Answered</span>
            </>
          }
        />

        <div className="space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-all duration-500",
                    isOpen && "border-gold-400/40 bg-gold-400/4"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-gold-400 md:px-8 md:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span
                      className={cn(
                        "text-[15px] font-bold tracking-wide transition-colors duration-300 md:text-base",
                        isOpen ? "text-gold-200" : "text-cream/85"
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-gold-400 bg-gold-400 text-ink"
                          : "border-white/15 text-cream/60"
                      )}
                    >
                      <Plus className="h-4.5 w-4.5" strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-fog md:px-8 md:text-[15px]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-cream/50">
            Still curious?{" "}
            <a
              href={waLink("Hi Vikings! I have a question about the classes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold-300 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-gold-200"
            >
              Ask us on WhatsApp
            </a>{" "}
            — we reply fast.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
