import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "../utils/cn";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3">
          {align === "center" && <span className="h-px w-8 bg-gold-400/60" />}
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold-400/60" />
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl leading-[1.02] uppercase tracking-tight text-cream sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-sm leading-relaxed text-fog md:text-base",
              align === "center" && "mx-auto"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */
export function GoldButton({
  children,
  onClick,
  href,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
    </>
  );
  const cls = cn(
    "btn-sheen group inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-ink shadow-[0_8px_32px_-8px_rgba(212,175,55,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-8px_rgba(212,175,55,0.65)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 active:translate-y-0",
    className
  );
  if (href)
    return (
      <a href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  href,
  className,
  ariaLabel,
  external,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
}) {
  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
  );
  const cls = cn(
    "group inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/3 px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/70 hover:bg-gold-400/10 hover:text-gold-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 active:translate-y-0",
    className
  );
  if (href)
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  value,
  suffix = "",
  duration = 1.8,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ---------- Instagram brand icon (lucide removed brand icons) ---------- */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ---------- Magnetic hover wrapper ---------- */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.6 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.6 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
