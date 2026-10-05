import { Building2, Flame, GraduationCap, Trophy } from "lucide-react";
import { WHY_POINTS } from "../data";
import { Reveal, SectionHead } from "./ui";

const ICONS: Record<string, typeof Flame> = {
  graduation: GraduationCap,
  studio: Building2,
  trophy: Trophy,
  flame: Flame,
};

export default function WhyVikings() {
  return (
    <section id="why" className="relative py-28 md:py-36" aria-label="Why choose Vikings">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-400/5 blur-[140px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="The Vikings Standard"
          title={
            <>
              Why Dancers Choose <span className="text-gold-grad">Vikings</span>
            </>
          }
          sub="Not a hobby class. A training ground. Every element of the studio is engineered to turn beginners into performers."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="group glass relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:shadow-[0_24px_60px_-20px_rgba(212,175,55,0.25)]">
                  <span
                    className="text-stroke pointer-events-none absolute -right-2 -top-4 font-display text-7xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <span className="grid h-13 w-13 place-items-center rounded-xl border border-gold-400/30 bg-gold-400/8 text-gold-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-cream">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{p.desc}</p>
                  </div>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200 transition-all duration-700 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
