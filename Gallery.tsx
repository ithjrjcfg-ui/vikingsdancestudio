import { Plus } from "lucide-react";
import { GALLERY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data";
import { InstagramIcon, Reveal } from "./ui";
import { cn } from "../utils/cn";

const SIZES: Record<string, string> = {
  tall: "aspect-[3/4]",
  normal: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36" aria-label="Studio gallery">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8 md:mb-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400/60" />
                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-gold-400 md:text-xs">
                  Inside The Studio
                </span>
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl md:text-6xl">
                Where Champions <br />
                <span className="text-gold-grad">Are Made</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/3 px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-cream/70 transition-all duration-300 hover:border-gold-400/50 hover:text-gold-200"
              aria-label="Follow Vikings Dance Studio on Instagram"
            >
              <InstagramIcon className="h-4 w-4 text-gold-400 transition-transform duration-500 group-hover:rotate-12" />
              {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.img + g.caption} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <figure className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/7">
                <div className={cn("w-full overflow-hidden", SIZES[g.span])}>
                  <img
                    src={g.img}
                    alt={`${g.caption} — Vikings Dance Studio Dewas`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 grid h-10 w-10 scale-50 place-items-center rounded-full bg-gold-400 text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Plus className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-2 block h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-14" />
                  <span className="font-display text-lg uppercase tracking-wide text-cream">
                    {g.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
