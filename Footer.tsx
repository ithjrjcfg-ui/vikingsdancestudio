import { ArrowUp, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, INSTAGRAM_URL, LOGO_URL, MAPS_DIR, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data";
import { InstagramIcon } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/7 bg-coal" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
              <img 
                src={LOGO_URL}
                alt="Vikings Dance Studio" 
                className="h-14 w-14 rounded-full object-contain shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              />
              <span className="leading-none">
                <span className="block font-display text-xl tracking-wide text-cream">VIKINGS</span>
                <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.42em] text-gold-400">
                  Dance Studio
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs font-accent text-lg italic text-gold-200/90">
              Beyond Dance. Beyond Limits.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">
              Dewas' premium dance & fitness studio — building champions on stage and in life.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: INSTAGRAM_URL, label: "Instagram", external: true },
                { icon: MessageCircle, href: waLink("Hi Vikings!"), label: "WhatsApp", external: true },
                { icon: MapPin, href: MAPS_DIR, label: "Google Maps", external: true },
                { icon: Phone, href: `tel:${PHONE_TEL}`, label: `Call ${PHONE_DISPLAY}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-cream/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:text-gold-300"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-gold-400">
              Explore
            </h3>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-cream/60 transition-colors hover:text-gold-200"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-gold-400">
              Programs
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm font-semibold text-cream/60">
              <li><a href="#classes" className="transition-colors hover:text-gold-200">Dance — ₹800/mo</a></li>
              <li><a href="#classes" className="transition-colors hover:text-gold-200">Zumba Fitness — ₹1000/mo</a></li>
              <li><a href="#classes" className="transition-colors hover:text-gold-200">Wedding Choreography</a></li>
              <li><a href="#classes" className="transition-colors hover:text-gold-200">Event Performances</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-gold-400">
              Get In Touch
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-cream/60">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 transition-colors hover:text-gold-200">
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi Vikings!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-gold-200"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                  WhatsApp — Fast Reply
                </a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/7 pt-8">
          <p className="text-xs text-cream/40">
            © {year} Vikings Dance Studio, Dewas. All rights reserved.
          </p>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-cream/35">
            Train Hard <span className="mx-1.5 text-gold-400">·</span> Perform Harder
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-cream/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:text-gold-300"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
