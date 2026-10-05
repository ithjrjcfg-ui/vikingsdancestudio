export const STUDIO = "Vikings Dance Studio";
export const TAGLINE = "Beyond Dance. Beyond Limits.";
export const PHONE_DISPLAY = "80858 09825";
export const PHONE_TEL = "+918085809825";
export const WHATSAPP = "918085809825";

/* ─── EDIT THIS: your real Instagram profile ───
   1. Open instagram.com and go to your profile
   2. Copy the URL from the address bar, e.g. https://instagram.com/YOUR_HANDLE
   3. Paste it below + set the handle shown on the site                  */
export const INSTAGRAM_URL = "https://instagram.com/vikingsdancestudio";
export const INSTAGRAM_HANDLE = "@vikingsdancestudio";
export const LOGO_URL = "https://i.ibb.co/3yL48mYq/logo.png";

export const ADDRESS =
  "Happy Tower, Front of King George School, Mishrilal Nagar, Kela Devi Road, Dewas, Madhya Pradesh";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Happy+Tower,+King+George+School,+Mishrilal+Nagar,+Kela+Devi+Road,+Dewas,+Madhya+Pradesh";

export const MAPS_EMBED =
  "https://www.google.com/maps?q=King%20George%20School,%20Kela%20Devi%20Road,%20Dewas,%20Madhya%20Pradesh&output=embed";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 120, suffix: "+", label: "Stage Performances" },
  { value: 25, suffix: "+", label: "Awards & Titles" },
];

export const WHY_POINTS = [
  {
    icon: "graduation",
    title: "Expert Training",
    desc: "Learn from an instructor trained under India's biggest names — refined technique, real industry insight, zero shortcuts.",
  },
  {
    icon: "studio",
    title: "Professional Studio",
    desc: "Mirrored walls, performance-grade flooring and a focused atmosphere engineered for serious growth.",
  },
  {
    icon: "trophy",
    title: "Performance Opportunities",
    desc: "Stage shows, competitions and event platforms — every Viking gets their moment under the spotlight.",
  },
  {
    icon: "flame",
    title: "Confidence Building",
    desc: "We don't just build dancers. We build stage-ready personalities that carry confidence into life.",
  },
];

export const CREDENTIALS = [
  "8+ years of professional dance experience",
  "Trained under Bollywood choreographer Ganesh Acharya",
  "Trained with dance icon Dharmesh Yelande",
  "Trained with world-champion crew Kings United",
  "Urban Dance Weeks, Pune — intensive program",
  "Specialist in Hip-Hop, Urban, Bollywood & Freestyle",
];

export const CLASSES = [
  {
    id: "dance",
    title: "Dance",
    tag: "Hip-Hop · Urban · Bollywood",
    desc: "Foundation to pro-level choreography with discipline, style and stagecraft built into every session.",
    meta: "Kids 6+ · Teens · Adults",
    img: "/images/gallery-hiphop.jpg",
  },
  {
    id: "zumba",
    title: "Zumba Fitness",
    tag: "Burn · Tone · Glow",
    desc: "High-energy sessions that torch calories and lift moods — fitness that feels like a party.",
    meta: "Morning & Evening Batches",
    img: "/images/gallery-zumba.jpg",
  },
  {
    id: "wedding",
    title: "Wedding Choreography",
    tag: "Sangeet · Couple · Family",
    desc: "Signature couple entries, sangeet acts and full-family performances, choreographed to perfection.",
    meta: "Custom Packages",
    img: "/images/gallery-wedding.jpg",
  },
  {
    id: "events",
    title: "Event Performances",
    tag: "Stage · Corporate · Competitions",
    desc: "Competition prep and show-stopping group acts for schools, corporates and public events.",
    meta: "Audition & Stage Prep",
    img: "/images/gallery-performance.jpg",
  },
];

export const TIMETABLE = [
  {
    name: "Dance Batches",
    note: "Monday – Saturday",
    rows: [
      { batch: "Evening Batch I", time: "5:00 – 6:00 PM", who: "Kids & Beginners" },
      { batch: "Evening Batch II", time: "7:00 – 8:00 PM", who: "Teens & Adults" },
    ],
  },
  {
    name: "Zumba Batches",
    note: "Monday – Saturday",
    rows: [
      { batch: "Morning Batch", time: "6:30 – 7:30 AM", who: "All Fitness Levels" },
      { batch: "Evening Batch", time: "6:00 – 7:00 PM", who: "All Fitness Levels" },
    ],
  },
];

export const PLANS = [
  {
    name: "Dance Program",
    price: "₹800",
    per: "/month",
    popular: true,
    features: [
      "2 batches every evening",
      "Hip-Hop, Urban & Bollywood styles",
      "Stage performance opportunities",
      "Competition training access",
      "Progress tracking & feedback",
    ],
  },
  {
    name: "Zumba Fitness",
    price: "₹1000",
    per: "/month",
    popular: false,
    features: [
      "Morning & evening batches",
      "Certified high-energy sessions",
      "Weight-loss & toning focus",
      "Music-driven fun workouts",
      "All fitness levels welcome",
    ],
  },
  {
    name: "Registration",
    price: "₹200",
    per: " one-time",
    popular: false,
    features: [
      "Lifetime studio membership",
      "Welcome orientation session",
      "Access to all workshops",
      "Event participation eligibility",
      "Vikings community access",
    ],
  },
];

export const GALLERY = [
  { img: "/images/gallery-performance.jpg", caption: "Stage Performance '25", span: "tall" },
  { img: "/images/gallery-studio.jpg", caption: "The Studio", span: "wide" },
  { img: "/images/gallery-kids.jpg", caption: "Kids Batch", span: "normal" },
  { img: "/images/gallery-battle.jpg", caption: "Urban Workshop", span: "normal" },
  { img: "/images/gallery-hiphop.jpg", caption: "Freestyle Lab", span: "tall" },
  { img: "/images/gallery-wedding.jpg", caption: "Wedding Choreography", span: "wide" },
  { img: "/images/gallery-zumba.jpg", caption: "Zumba Energy", span: "normal" },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent — Kids Batch",
    quote:
      "My 8-year-old was too shy to speak in class. Six months at Vikings and she performed solo on stage in front of 500 people. The transformation is unreal.",
  },
  {
    name: "Arjun Mehta",
    role: "College Student — Dance",
    quote:
      "Training here feels like being part of a professional crew. Sir's techniques from Kings United workshops show in every single class. Worth every rupee.",
  },
  {
    name: "Neha Agrawal",
    role: "Zumba Member",
    quote:
      "I've lost 7 kg in four months — and I've never had this much fun working out. The 6:30 AM batch is the best alarm clock in Dewas.",
  },
  {
    name: "Rohan & Kavya",
    role: "Wedding Choreography",
    quote:
      "We had two left feet and three weeks. Vikings turned our sangeet into the most talked-about moment of the wedding and our guests are still talking about it.",
  },
  {
    name: "Devansh Singh",
    role: "Teen Batch — 3 Years",
    quote:
      "Sir pushes you like an athlete and backs you like family. I've won three inter-school competitions since joining. This studio changes people.",
  },
];

export const FAQS = [
  {
    q: "What is the minimum age to join?",
    a: "Kids can join from age 6. We run dedicated batches for kids, teens and adults so everyone trains with their own age group and at their own level.",
  },
  {
    q: "I'm a complete beginner. Can I still join?",
    a: "Absolutely — most of our champions started from zero. Our 5 PM batch is built for beginners, starting with foundations, rhythm and body control before choreography.",
  },
  {
    q: "Do you offer a free trial class?",
    a: "Yes. Your first class is completely free — no registration fee, no obligation. Walk in, train like a Viking, and decide after you've felt the energy yourself.",
  },
  {
    q: "What are the fees?",
    a: "Dance is ₹800/month and Zumba is ₹1000/month. There is a one-time registration fee of ₹200 when you enrol. No hidden charges, ever.",
  },
  {
    q: "How do I register for admission?",
    a: "Fill the admission form on this page or message us on WhatsApp at 80858 09825. Seats are limited per batch, so we reserve on a first-come, first-served basis.",
  },
  {
    q: "What should I wear to class?",
    a: "Any comfortable athletic wear — t-shirt, track pants or joggers, and clean sports shoes. For Zumba, bring a water bottle and a small towel.",
  },
  {
    q: "Will I get performance opportunities?",
    a: "Yes — stage shows, competitions and event performances are core to the Vikings method. Every committed student gets real stage exposure throughout the year.",
  },
];

export const CLASS_INTERESTS = [
  "Dance",
  "Zumba Fitness",
  "Wedding Choreography",
  "Event Performance",
];

export const PREFERRED_TIMINGS = [
  "5:00 – 6:00 PM (Dance)",
  "7:00 – 8:00 PM (Dance)",
  "6:30 – 7:30 AM (Zumba)",
  "6:00 – 7:00 PM (Zumba)",
  "Flexible / Not sure yet",
];
