import { CalendarDays, Clock, Zap } from "lucide-react";
import { TIMETABLE } from "../data";
import { Reveal, SectionHead } from "./ui";

export default function Timings() {
  return (
    <section id="timings" className="relative overflow-hidden bg-coal py-28 md:py-36" aria-label="Class timings">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-gold-400/5 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          eyebrow="The Daily Grind"
          title={
            <>
              Batch <span className="text-gold-grad">Timings</span>
            </>
          }
          sub="Morning burners to evening crews — find the slot that fits your life. Same energy, six days a week."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {TIMETABLE.map((t, ti) => (
            <Reveal key={t.name} delay={ti * 0.12}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-gold-400/35 md:p-10">
                <span
                  className="text-stroke pointer-events-none absolute -right-3 -top-7 font-display text-[7rem] opacity-60"
                  aria-hidden="true"
                >
                  {ti + 1}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-cream md:text-3xl">
                    {t.name}
                  </h3>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-400/30 bg-gold-400/8 text-gold-300 transition-transform duration-500 group-hover:rotate-12">
                    {ti === 0 ? <Clock className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-gold-300/80">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {t.note}
                </p>

                <ul className="mt-8 space-y-4">
                  {t.rows.map((r) => (
                    <li
                      key={r.batch}
                      className="group/row flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/7 bg-white/2 px-5 py-4 transition-all duration-400 hover:border-gold-400/40 hover:bg-gold-400/5"
                    >
                      <div>
                        <p className="text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/50">
                          {r.batch}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-cream/75">{r.who}</p>
                      </div>
                      <p className="font-display text-xl tracking-wide text-gold-grad md:text-2xl">
                        {r.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 flex w-fit max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/3 px-6 py-3 text-center text-xs text-cream/60 md:text-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute h-full w-full animate-ping-soft rounded-full bg-gold-400" />
              <span className="relative h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Batches are capped at small sizes — reserve your slot on WhatsApp before it fills.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
