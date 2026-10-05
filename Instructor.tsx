import { Check, Quote } from "lucide-react";
import { CREDENTIALS } from "../data";
import { useCta } from "../cta";
import { GoldButton, Reveal, SectionHead } from "./ui";

const MENTORS = ["Ganesh Acharya", "Dharmesh Yelande", "Kings United", "Urban Dance Weeks Pune"];

export default function Instructor() {
  const { openAdmission } = useCta();

  return (
    <section
      id="instructor"
      className="relative overflow-hidden bg-coal py-28 md:py-36"
      aria-label="Meet your instructor"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full bg-gold-400/6 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gold-600/5 blur-[120px]"
        aria-hidden="true"
      />
      {/* ghost display word */}
      <span
        className="pointer-events-none absolute -right-6 top-10 hidden select-none font-display text-[11rem] leading-none uppercase text-white/3 lg:block"
        aria-hidden="true"
      >
        Coach
      </span>

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <SectionHead
          eyebrow="Meet Your Instructor"
          title={
            <>
              Trained by Legends.
              <br />
              <span className="text-gold-grad">Forged to Lead.</span>
            </>
          }
          sub="Your coach didn't learn dance from the sidelines. He trained inside India's most elite rooms — Bollywood sets, national champion crews and intensive urban programs — and brought every lesson home to Dewas."
        />

        <Reveal delay={0.1}>
          <ul className="glass grid gap-x-10 gap-y-5 rounded-3xl p-8 text-left sm:grid-cols-2 md:p-11">
            {CREDENTIALS.map((c) => (
              <li key={c} className="group flex items-start gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300 transition-all duration-400 group-hover:bg-gold-400 group-hover:text-ink">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-cream/80 md:text-[15px]">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {MENTORS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-gold-400/25 bg-gold-400/6 px-4 py-2 text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-gold-200 transition-colors duration-300 hover:border-gold-400/60 hover:bg-gold-400/15"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <figure className="mx-auto mt-12 max-w-2xl">
            <Quote className="mx-auto h-8 w-8 rotate-180 text-gold-400/40" aria-hidden="true" />
            <blockquote className="mt-4 font-accent text-xl italic leading-relaxed text-gold-200/95 md:text-2xl">
              "Technique is earned. Confidence is trained. Both live here."
            </blockquote>
            <figcaption className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.32em] text-cream/45">
              Head Coach — Vikings Dance Studio
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-11">
            <GoldButton onClick={() => openAdmission()} ariaLabel="Train with the head coach">
              Train With The Best
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
