import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { EASE, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Testimonials() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => {
      setIndex(([i]) => [(i + d + TESTIMONIALS.length) % TESTIMONIALS.length, d]);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [paused, go]);

  const item = TESTIMONIALS[index];
  const initials = item.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-28 md:py-36"
      aria-label="Student testimonials"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-gold-400/5 blur-[130px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHead
          eyebrow="Voices of the Tribe"
          title={
            <>
              What Our <span className="text-gold-grad">Vikings</span> Say
            </>
          }
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass relative min-h-[380px] overflow-hidden rounded-[2rem] px-7 py-12 text-center sm:min-h-[340px] md:px-16 md:py-14">
            <Quote
              className="absolute left-6 top-6 h-16 w-16 text-gold-400/12 md:left-10 md:top-10"
              aria-hidden="true"
            />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 90, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: dir * -90, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="flex justify-center gap-1.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="mx-auto mt-7 max-w-2xl font-accent text-xl italic leading-relaxed text-cream/90 md:text-2xl">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-9 flex items-center justify-center gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 font-display text-lg text-ink ring-2 ring-gold-400/30 ring-offset-2 ring-offset-ink">
                    {initials}
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-extrabold uppercase tracking-[0.16em] text-cream">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-gold-300/80">{item.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={cn(
                    "h-2 cursor-pointer rounded-full transition-all duration-500",
                    i === index ? "w-8 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
