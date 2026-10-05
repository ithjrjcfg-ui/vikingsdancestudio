import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle, Play } from "lucide-react";
import { HERO_STATS } from "../data";
import { useCta } from "../cta";
import { Counter, EASE, GoldButton, Magnetic } from "./ui";

function HeadlineLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const { openAdmission } = useCta();

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero.jpg"
          alt="Dancer mid-leap in golden light at Vikings Dance Studio"
          className="h-full w-full animate-kenburns object-cover object-[72%_center] sm:object-center"
          fetchPriority="high"
        />
        {/* light-shaping gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold-400/14 blur-[130px] animate-drift" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-600/12 blur-[110px] animate-drift-rev" />
      </div>

      {/* vertical side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-4 xl:flex"
        aria-hidden="true"
      >
        <span className="h-24 w-px bg-gradient-to-b from-transparent via-gold-400/70 to-transparent rotate-180" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-cream/40 [writing-mode:vertical-rl]">
          Est. Dewas — Madhya Pradesh
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-36 pb-10 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-gold-400/30 bg-gold-400/7 px-5 py-2.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-gold-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold-200">
            Admissions Open — Limited Seats
          </span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[13.5vw] leading-[0.98] uppercase tracking-[-0.01em] text-cream sm:text-7xl md:text-8xl xl:text-[7.4rem]">
          <HeadlineLine delay={0.7}>Train Like a</HeadlineLine>
          <HeadlineLine delay={0.82}>
            <span className="text-gold-grad">Viking.</span> Perform
          </HeadlineLine>
          <HeadlineLine delay={0.94}>Like a Champion.</HeadlineLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg"
        >
          Where discipline meets artistry. Build{" "}
          <em className="font-accent text-gold-200 not-italic italic">unshakeable confidence</em>,
          razor-sharp creativity and championship-level performance — from your very first class.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <GoldButton onClick={() => openAdmission()} ariaLabel="Join Vikings Dance Studio now">
              Join Now
              <Play className="h-4 w-4 fill-ink" />
            </GoldButton>
          </Magnetic>
          <Magnetic>
            <GoldButton
              onClick={() => openAdmission("Free Trial Class")}
              ariaLabel="Book a free trial class"
              className="from-transparent via-transparent to-transparent border border-cream/30 bg-none text-cream shadow-none backdrop-blur-md hover:border-gold-400/70 hover:bg-gold-400/10 hover:text-gold-100"
            >
              <MessageCircle className="h-4 w-4" />
              Book Free Trial
            </GoldButton>
          </Magnetic>
        </motion.div>

        {/* Stats bar */}
        <motion.dl
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: EASE }}
          className="glass mt-16 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl md:grid-cols-4"
        >
          {HERO_STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                "relative px-6 py-5 " +
                (i > 0 ? "border-l border-white/7 " : "") +
                (i >= 2 ? "max-md:border-t max-md:border-white/7 " : "") +
                (i === 2 ? "max-md:border-l-0" : "")
              }
            >
              <dd className="font-display text-3xl text-gold-grad md:text-[2.1rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-cream/50">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/40 transition-colors hover:text-gold-300 md:flex"
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
