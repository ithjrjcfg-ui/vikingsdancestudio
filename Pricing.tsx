import { BadgeCheck, Check, Crown } from "lucide-react";
import { PLANS } from "../data";
import { useCta } from "../cta";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Pricing() {
  const { openAdmission } = useCta();

  return (
    <section id="pricing" className="relative overflow-hidden py-28 md:py-36" aria-label="Pricing">
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-gold-400/6 blur-[150px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Simple, Honest Pricing"
          title={
            <>
              Invest In <span className="text-gold-grad">Yourself</span>
            </>
          }
          sub="Championship-level training at neighbourhood prices. No hidden fees. No lock-ins. Just growth."
        />

        <Reveal>
          <div className="mx-auto mb-12 flex w-fit items-center gap-3 rounded-full border border-gold-400/35 bg-gold-400/8 px-6 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping-soft rounded-full bg-gold-400" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-gold-400" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold-200 md:text-xs">
              Only 7 seats left this month
            </span>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 md:p-9",
                  p.popular
                    ? "border border-gold-400/50 bg-gradient-to-b from-gold-400/13 via-white/4 to-transparent shadow-[0_30px_80px_-30px_rgba(212,175,55,0.4)] lg:scale-[1.04]"
                    : "glass hover:border-white/25"
                )}
              >
                {p.popular && (
                  <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink shadow-lg">
                    <Crown className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.3em] text-cream/60">
                  {p.name}
                </h3>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "font-display text-6xl tracking-tight md:text-7xl",
                      p.popular ? "text-gold-grad" : "text-cream"
                    )}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest text-cream/45">
                    {p.per}
                  </span>
                </p>

                <ul className="mt-8 flex-1 space-y-3.5 border-t border-white/10 pt-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cream/75">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.popular ? "bg-gold-400 text-ink" : "bg-gold-400/15 text-gold-300"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openAdmission(p.name)}
                  className={cn(
                    "mt-9 w-full cursor-pointer rounded-full py-4 text-[12px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400",
                    p.popular
                      ? "btn-sheen bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-ink hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(212,175,55,0.6)]"
                      : "border border-white/20 bg-white/3 text-cream hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-200"
                  )}
                >
                  Claim Your Seat
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-cream/50 md:text-sm">
            <BadgeCheck className="h-4 w-4 text-gold-400" />
            One-time registration of ₹200 applies on enrolment · Free trial class before you commit
          </p>
        </Reveal>
      </div>
    </section>
  );
}
