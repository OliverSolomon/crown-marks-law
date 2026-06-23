// Crownmarks Law LLP - partners and senior practitioners.
// Roles and specialisms are drawn from the firm profile; bios stay within
// the credentials stated there.

export type Person = {
  slug: string;
  name: string;
  role: string;
  credentials?: string; // post-nominals / qualifications
  practices: string[]; // practice slugs
  bio: string;
};

export const people: Person[] = [
  {
    slug: "judith-kamoing",
    name: "Judith Kamoing",
    role: "Partner - Corporate & Commercial",
    credentials: "LLM, Financial Services Law",
    practices: ["corporate-commercial", "foreign-investment", "intellectual-property"],
    bio: "Judith leads the firm's corporate and commercial practice, pairing an LLM in Financial Services Law with sharp commercial instinct. She guides clients through company formation, governance, M&A and capital raising, and is a trusted adviser to financial institutions and growth-stage businesses.",
  },
  {
    slug: "charles-ndolo",
    name: "Charles Ndolo",
    role: "Partner - Corporate & Commercial",
    practices: ["corporate-commercial"],
    bio: "Charles advises on the full spectrum of corporate transactions and commercial agreements, from shareholder arrangements and joint ventures to complex contracts. Clients value his pragmatic, business-first approach to negotiation.",
  },
  {
    slug: "mark-oroko",
    name: "Eng. Mark Oroko",
    role: "Partner - Projects & Infrastructure",
    credentials: "Advocate & Engineer",
    practices: ["construction-infrastructure", "energy-climate", "corporate-commercial"],
    bio: "Dual-qualified as an advocate and engineer, Mark anchors the firm's construction, energy and infrastructure work. He understands how projects are built, allowing him to structure contracts proactively and resolve technical disputes with precision.",
  },
  {
    slug: "sian-rapei",
    name: "Sian Rapei",
    role: "Partner - Corporate & Commercial",
    practices: ["corporate-commercial", "foreign-investment"],
    bio: "Sian advises corporates and foreign investors on market entry, regulatory compliance and cross-border transactions, helping international clients navigate the Kenyan landscape with confidence.",
  },
  {
    slug: "lilian-kamau",
    name: "Lilian Kamau",
    role: "Company Secretary",
    practices: ["corporate-commercial", "foreign-investment"],
    bio: "Lilian leads the firm's company secretarial and governance services, ensuring clients meet both their legal and fiduciary standards through board advisory, statutory filings and compliance.",
  },
  {
    slug: "ochiel-dudley",
    name: "Ochiel Dudley",
    role: "Partner - Family Law & Dispute Resolution",
    credentials: "Fellow, IAFL",
    practices: ["family-law", "dispute-resolution"],
    bio: "An award-winning litigator and a sought-after Fellow of the International Academy of Family Lawyers, Ochiel handles complex international family disputes and high-stakes litigation. He is frequently asked to represent clients in cross-border matters and to give legal opinion across jurisdictions.",
  },
  {
    slug: "ilham-hisham",
    name: "Ilham Hisham",
    role: "Partner - Family & Islamic Law",
    practices: ["family-law", "islamic-law"],
    bio: "Ilham leads the firm's Islamic family law work, combining deep knowledge of Kenyan law and Islamic jurisprudence. She supports families through Nikah contracts, Islamic divorce, custody and inheritance with discretion and cultural sensitivity.",
  },
  {
    slug: "abubakar-kon",
    name: "Abubakar Kon",
    role: "Partner - Islamic Law",
    practices: ["islamic-law"],
    bio: "Abubakar heads the Islamic Law practice, advising individuals, families, institutions and businesses on Sharia-compliant matters - from estate planning and Wasiyyah drafting to halal investment structuring and dispute resolution.",
  },
];

export const peopleMap: Record<string, Person> = Object.fromEntries(
  people.map((p) => [p.slug, p]),
);

export function initials(name: string): string {
  return name
    .replace(/^Eng\.\s+/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}
