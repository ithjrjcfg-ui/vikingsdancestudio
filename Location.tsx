import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { ADDRESS, MAPS_DIR, MAPS_EMBED, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data";
import { GhostButton, GoldButton, Reveal } from "./ui";

export default function Location() {
  return (
    <section id="contact" className="relative bg-coal py-28 md:py-36" aria-label="Location and contact">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Info */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-gold-400 md:text-xs">
                Find The Battleground
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl md:text-6xl">
              In The Heart <br />
              <span className="text-gold-grad">Of Dewas</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <address className="mt-8 flex not-italic items-start gap-4 rounded-2xl border border-white/8 bg-white/3 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-400/12 text-gold-300">
                <MapPin className="h-5.5 w-5.5" />
              </span>
              <p className="pt-1 text-sm leading-relaxed text-cream/80">
                {ADDRESS}
              </p>
            </address>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-6 py-4 transition-all duration-300 hover:border-gold-400/50"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/12 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-cream/45">
                    Click to call
                  </span>
                  <span className="text-base font-extrabold tracking-wide text-cream">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-6 py-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/12 text-gold-300">
                  <Clock className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-cream/45">
                    Open Mon – Sat
                  </span>
                  <span className="text-sm font-bold text-cream">6:30 AM – 8:00 PM</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton href={MAPS_DIR} ariaLabel="Get directions on Google Maps">
                <Navigation className="h-4 w-4" />
                Get Directions
              </GoldButton>
              <GhostButton
                href={waLink("Hi Vikings! I'd like to visit the studio. Please share the location.")}
                external
                ariaLabel="Message us on WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-wa" />
                WhatsApp Us
              </GhostButton>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.15}>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
            <iframe
              title="Vikings Dance Studio location — Happy Tower, King George School, Dewas"
              src={MAPS_EMBED}
              className="map-dark h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            <div className="glass absolute bottom-5 left-5 right-5 flex items-center gap-3.5 rounded-2xl p-4 sm:right-auto sm:max-w-sm">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-600 text-ink">
                <MapPin className="h-5 w-5" />
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-gold-400/50" />
              </span>
              <div>
                <p className="font-display text-sm uppercase tracking-wider text-cream">
                  Vikings Dance Studio
                </p>
                <p className="text-xs text-cream/55">Front of King George School, Dewas</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
