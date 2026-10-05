import { motion } from "framer-motion";
import { MessageCircle, Phone, Zap } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "../data";
import { useCta } from "../cta";
import { EASE, GhostButton, GoldButton, Reveal } from "./ui";

export default function FinalCTA() {
  const { openAdmission } = useCta();

  return (
    <section className="relative overflow-hidden" aria-label="Join Vikings Dance Studio">
      {/* backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/stage.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.9)_90%)]" />
      </div>

      {/* rotating gold rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="h-full w-full rounded-full border border-gold-400/10"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="h-full w-full rounded-full border border-dashed border-gold-400/15"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-32 text-center md:px-8 md:py-44">
        <Reveal>
          <span className="inline-flex items-center gap-3 rounded-full border border-gold-400/30 bg-ink/50 px-6 py-2.5 backdrop-blur-md">
            <Zap className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gold-200">
              Admissions Open — Limited Seats Available
            </span>
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[13vw] uppercase leading-[0.98] tracking-tight text-cream sm:text-7xl md:text-8xl">
            Your Dance Journey
            <br />
            <span className="text-gold-grad">Starts Today.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            One decision. One class. One version of you that the world hasn't met yet.{" "}
            <span className="font-accent italic text-gold-200">Beyond Dance. Beyond Limits.</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <GoldButton onClick={() => openAdmission()} ariaLabel="Join Vikings Dance Studio" className="px-10 py-5">
              Join Now
            </GoldButton>
            <GhostButton
              href={waLink("Hi Vikings! I'm ready to start my dance journey. Please share admission details.")}
              external
              ariaLabel="Chat with us on WhatsApp"
              className="px-10 py-5"
            >
              <MessageCircle className="h-4 w-4 text-wa" />
              WhatsApp Us
            </GhostButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.a
            href={`tel:${PHONE_TEL}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="mt-12 inline-flex items-center gap-3 text-cream/50 transition-colors hover:text-gold-300"
          >
            <Phone className="h-4 w-4" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em]">Or call us —</span>
            <span className="font-display text-2xl tracking-wide text-gold-grad md:text-3xl">
              80858 09825
            </span>
            <span className="sr-only">{PHONE_DISPLAY}</span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
