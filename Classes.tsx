import { ArrowUpRight } from "lucide-react";
import { CLASSES } from "../data";
import { useCta } from "../cta";
import { Reveal, SectionHead } from "./ui";

export default function Classes() {
  const { openAdmission } = useCta();

  return (
    <section id="classes" className="relative py-28 md:py-36" aria-label="Classes we offer">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Choose Your Arena"
          title={
            <>
              Classes We <span className="text-gold-grad">Offer</span>
            </>
          }
          sub="Four battle-tested programs. One standard: excellence. Pick your discipline and step onto the floor."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.09}>
              <button
                type="button"
                onClick={() => openAdmission(c.title)}
                className="group relative block h-[420px] w-full cursor-pointer overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
                aria-label={`Enquire about ${c.title}`}
              >
                <img
                  src={c.img}
                  alt={`${c.title} at Vikings Dance Studio`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-500 group-hover:border-gold-400/50" />

                {/* hover arrow */}
                <span className="absolute right-4 top-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full border border-gold-400/40 bg-ink/50 text-gold-300 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-gold-200 backdrop-blur-md">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-cream/65 opacity-90">
                    {c.desc}
                  </p>
                  <p className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-[10.5px] font-bold uppercase tracking-[0.24em] text-gold-300/90">
                    <span className="h-1 w-1 rounded-full bg-gold-400" />
                    {c.meta}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
