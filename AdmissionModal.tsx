import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Flame, Loader2, MessageCircle, ShieldCheck, X } from "lucide-react";
import { CLASS_INTERESTS, PREFERRED_TIMINGS, waLink } from "../data";
import { useCta } from "../cta";
import { EASE } from "./ui";
import { cn } from "../utils/cn";

interface FormState {
  name: string;
  age: string;
  phone: string;
  interest: string;
  timing: string;
}

const INITIAL: FormState = {
  name: "",
  age: "",
  phone: "",
  interest: "Dance",
  timing: PREFERRED_TIMINGS[0],
};

function resolveInterest(raw?: string): string {
  if (!raw) return "Dance";
  if (raw.includes("Zumba")) return "Zumba Fitness";
  if (raw.includes("Wedding")) return "Wedding Choreography";
  if (raw.includes("Event")) return "Event Performance";
  return "Dance";
}

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/4 px-4.5 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-all duration-300 focus:border-gold-400/70 focus:bg-gold-400/4 focus:ring-2 focus:ring-gold-400/20";

export default function AdmissionModal() {
  const { isOpen, closeAdmission, interest } = useCta();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [phase, setPhase] = useState<"form" | "sending" | "done">("form");

  useEffect(() => {
    if (isOpen) {
      setPhase("form");
      setErrors({});
      setForm((f) => ({ ...INITIAL, name: f.name, phone: f.phone, age: f.age, interest: resolveInterest(interest) }));
    }
  }, [isOpen, interest]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAdmission();
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeAdmission]);

  const set = (k: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<FormState> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your full name";
    const age = Number(form.age);
    if (!form.age || age < 5 || age > 80) errs.age = "Age 5 – 80";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Enter a valid 10-digit number";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setPhase("sending");
    setTimeout(() => setPhase("done"), 1300);
  };

  const waConfirm = waLink(
    `Hi Vikings! I just submitted the admission form.\n\nName: ${form.name}\nAge: ${form.age}\nPhone: ${form.phone}\nClass: ${form.interest}\nPreferred Timing: ${form.timing}\n\nPlease confirm my free trial class.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-md"
          onClick={closeAdmission}
          role="dialog"
          aria-modal="true"
          aria-label="Admission form"
        >
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.55, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-lg overflow-hidden rounded-[1.8rem] border border-white/12 bg-gradient-to-b from-soot to-ink shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700" aria-hidden="true" />
            <button
              type="button"
              onClick={closeAdmission}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/12 text-cream/60 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              aria-label="Close admission form"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {phase !== "done" ? (
              <div className="p-7 md:p-9">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/8 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-gold-200">
                  <Flame className="h-3 w-3" />
                  {interest === "Free Trial Class" ? "Free Trial Booking" : "Admissions Open"}
                </span>
                <h3 className="mt-4 font-display text-3xl uppercase leading-none tracking-tight text-cream md:text-4xl">
                  Claim Your <span className="text-gold-grad">Free Trial</span>
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-fog">
                  Fill this in under 30 seconds. Our team will call you within a few hours to
                  confirm your batch. <span className="text-gold-300">Only 7 seats left.</span>
                </p>

                <form onSubmit={submit} className="mt-7 space-y-4" noValidate>
                  <div>
                    <label htmlFor="adm-name" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/55">
                      Full Name
                    </label>
                    <input
                      id="adm-name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Aarav Sharma"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      className={cn(inputCls, errors.name && "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15")}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-[1fr_1.6fr] gap-4">
                    <div>
                      <label htmlFor="adm-age" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/55">
                        Age
                      </label>
                      <input
                        id="adm-age"
                        type="number"
                        min={5}
                        max={80}
                        inputMode="numeric"
                        placeholder="14"
                        value={form.age}
                        onChange={(e) => set("age")(e.target.value)}
                        className={cn(inputCls, errors.age && "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15")}
                      />
                      {errors.age && <p className="mt-1.5 text-xs text-red-300">{errors.age}</p>}
                    </div>
                    <div>
                      <label htmlFor="adm-phone" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/55">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="adm-phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="numeric"
                        placeholder="80858 09825"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value.replace(/[^\d\s]/g, "").slice(0, 11))}
                        className={cn(inputCls, errors.phone && "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15")}
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-300">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adm-interest" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/55">
                      Class Interest
                    </label>
                    <select
                      id="adm-interest"
                      value={form.interest}
                      onChange={(e) => set("interest")(e.target.value)}
                      className={cn(inputCls, "appearance-none bg-soot [&>option]:bg-soot")}
                    >
                      {CLASS_INTERESTS.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="adm-timing" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.24em] text-cream/55">
                      Preferred Timing
                    </label>
                    <select
                      id="adm-timing"
                      value={form.timing}
                      onChange={(e) => set("timing")(e.target.value)}
                      className={cn(inputCls, "appearance-none bg-soot [&>option]:bg-soot")}
                    >
                      {PREFERRED_TIMINGS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={phase === "sending"}
                    className="btn-sheen mt-2 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 py-4.5 text-[13px] font-extrabold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:shadow-[0_18px_50px_-12px_rgba(212,175,55,0.6)] disabled:opacity-80"
                  >
                    {phase === "sending" ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin" />
                        Reserving your seat…
                      </>
                    ) : (
                      "Reserve My Free Trial"
                    )}
                  </button>
                  <p className="flex items-center justify-center gap-2 pt-1 text-[11px] text-cream/40">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold-400/70" />
                    No payment now. No spam. Your details stay with the studio.
                  </p>
                </form>
              </div>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center px-7 py-14 text-center md:px-12">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative grid h-24 w-24 place-items-center"
                >
                  <span className="absolute inset-0 animate-ping-soft rounded-full bg-gold-400/40" aria-hidden="true" />
                  <svg viewBox="0 0 100 100" className="h-24 w-24">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#goldStroke)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: EASE }}
                    />
                    <motion.path
                      d="M32 51 L45 64 L69 38"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
                    />
                    <defs>
                      <linearGradient id="goldStroke" x1="0" y1="0" x2="100" y2="100">
                        <stop stopColor="#f3e4b8" />
                        <stop offset="1" stopColor="#93741f" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 300, damping: 12 }}
                    className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-gold-400 text-ink"
                  >
                    <Check className="h-4 w-4" strokeWidth={3.5} />
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
                >
                  <h3 className="mt-7 font-display text-3xl uppercase tracking-tight text-cream md:text-4xl">
                    You're In, <span className="text-gold-grad">Viking.</span>
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-fog">
                    {form.name.split(" ")[0]}, your seat for the{" "}
                    <span className="text-gold-200">{form.interest}</span> trial is on hold.
                    Tap below to confirm it instantly on WhatsApp.
                  </p>
                  <div className="mt-8 flex w-full flex-col gap-3">
                    <a
                      href={waConfirm}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAdmission}
                      className="btn-sheen flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-[#2be07a] to-[#128c4b] py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white"
                    >
                      <MessageCircle className="h-4.5 w-4.5" />
                      Confirm on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={closeAdmission}
                      className="cursor-pointer rounded-xl border border-white/15 py-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-cream/70 transition-colors hover:border-gold-400/50 hover:text-gold-200"
                    >
                      Done — I'll Wait For The Call
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
