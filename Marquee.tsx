import { Diamond } from "lucide-react";
import { cn } from "../utils/cn";

const ITEMS = [
  "Beyond Dance. Beyond Limits.",
  "Train Like a Viking",
  "Admissions Open",
  "Perform Like a Champion",
];

export default function Marquee({ invert = false }: { invert?: boolean }) {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={cn(
              "whitespace-nowrap px-7 font-display text-2xl uppercase tracking-wide md:text-3xl",
              i % 2 === 0 ? "text-cream" : "text-gold-400"
            )}
          >
            {t}
          </span>
          <Diamond className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-5",
        invert
          ? "border-gold-400/25 bg-gradient-to-r from-gold-700/25 via-gold-400/15 to-gold-700/25"
          : "border-white/7 bg-coal"
      )}
    >
      <div className="flex w-max animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
