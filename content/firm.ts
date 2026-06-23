// Firm-wide facts, navigation and contact details for Crownmarks Law LLP.
// Content sourced from the firm's draft profile.

// Canonical production origin (placeholder; update to the live domain).
export const siteUrl = "https://crownmarkslaw.co.ke";

export const firm = {
  name: "Crownmarks Law LLP",
  shortName: "Crownmarks",
  tagline: "Make it happen.",
  city: "Nairobi",
  country: "Kenya",
  description:
    "A Nairobi-based law firm for commercial law, corporate advisory and dispute resolution across complex, multi-jurisdictional matters.",
  // Placeholder contact details - wire to the firm's real channels before launch.
  contact: {
    email: "hello@crownmarkslaw.co.ke",
    phone: "+254 20 765 4300",
    phoneHref: "tel:+254207654300",
    address: ["Riverside Square, Riverside Drive", "Westlands, Nairobi", "Kenya"],
    hours: "Monday - Friday, 8:30 - 18:00 EAT",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
} as const;

export const nav = [
  {
    label: "About",
    href: "/about",
    description:
      "A leading Nairobi firm rooted in integrity, with depth across corporate, dispute and private-client work.",
  },
  {
    label: "Practices",
    href: "/practices",
    description:
      "Eight core practice areas, from corporate and commercial law to arbitration, family law and intellectual property.",
  },
  {
    label: "People",
    href: "/people",
    description:
      "Partners and senior practitioners, including advocates who are also accountants, engineers and IAFL Fellows.",
  },
  {
    label: "Contact",
    href: "/contact",
    description:
      "Book a confidential consultation with the right specialist for your matter in Nairobi.",
  },
] as const;

// Credentials strip - drawn strictly from the firm profile, no invented figures.
export const credentials = [
  { value: "Tier-one", label: "Standing among Kenya's leading firms" },
  { value: "08", label: "Core practice areas" },
  { value: "IAFL", label: "Fellows of the International Academy of Family Lawyers" },
  { value: "2025", label: "Litigation Practitioner of the Year" },
] as const;

export type Value = { title: string; body: string };

export const values: Value[] = [
  {
    title: "Integrity first",
    body: "Resolute advocacy in the courtroom and candid, pragmatic advice in the boardroom - grounded in the same standard of integrity.",
  },
  {
    title: "Multidisciplinary depth",
    body: "Advocates who are also Company Secretaries, Chartered Accountants, Actuaries, engineers and MBAs - one team, a 360° view of every matter.",
  },
  {
    title: "Local roots, global reach",
    body: "Deep command of the Kenyan legal system, strengthened by an international outlook and strategic law-firm alliances.",
  },
  {
    title: "Commercial clarity",
    body: "From contract structuring to cross-border arbitration, we bring clarity, confidence and proactivity to every engagement.",
  },
];
