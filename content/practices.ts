// The eight core practice areas of Crownmarks Law LLP.
// Copy is adapted from the firm's draft profile. (References to "Silk
// Advocates LLP" in the source draft were corrected to Crownmarks.)

export type ServiceGroup = {
  heading?: string;
  items: string[];
};

export type Practice = {
  slug: string;
  index: string; // editorial numbering, e.g. "01"
  title: string;
  tagline: string; // short positioning line
  intro: string[]; // lead paragraphs
  servicesHeading: string;
  services: ServiceGroup[];
  clientsHeading: string;
  clients: string[];
  whyHeading: string;
  why: { title: string; body: string }[];
  leadSlugs: string[]; // links into people.ts
};

export const practices: Practice[] = [
  {
    slug: "corporate-commercial",
    index: "01",
    title: "Corporate & Commercial Law",
    tagline: "Structuring success from the inside out.",
    intro: [
      "We deliver top-of-the-market corporate and commercial counsel. Our multidisciplinary team - advocates who are dual-qualified as Company Secretaries, Chartered Accountants, Actuaries, MBAs and an LLM in Financial Services Law - offers seamless, strategic advice across legal, financial and regulatory domains.",
      "We don't just advise; we partner with you to build resilient, compliant and growth-ready businesses, bringing commercial acumen and a genuine business sense to every negotiation.",
    ],
    servicesHeading: "How we help",
    services: [
      {
        items: [
          "Company formation & restructuring",
          "Corporate governance & board advisory",
          "Shareholder agreements & joint ventures",
          "Mergers, acquisitions & disposals (M&A)",
          "Regulatory compliance (CMA, CBK, RBA)",
          "Director duties & ESG frameworks",
          "Company secretarial services",
          "Commercial contracts & service agreements",
          "Franchise, agency & distribution arrangements",
          "Employment & executive compensation",
          "Data protection & digital compliance",
          "Procurement & supply-chain risk",
          "Business valuations & due diligence",
          "Financial structuring & capital raising",
          "Actuarial modelling (insurance, pensions, risk)",
          "Tax compliance",
          "Fintech & financial services regulation",
        ],
      },
    ],
    clientsHeading: "Who we serve",
    clients: [
      "Startups & SMEs",
      "Multinational corporations",
      "Financial institutions & fintechs",
      "Real estate & infrastructure firms",
      "NGOs & public-private partnerships",
    ],
    whyHeading: "Why Crownmarks",
    why: [
      {
        title: "One integrated team",
        body: "Legal, financial and actuarial insight under one roof - no hand-offs, no gaps.",
      },
      {
        title: "Commercially attuned",
        body: "Advice that aligns with both local regulation and international business standards.",
      },
    ],
    leadSlugs: ["judith-kamoing", "charles-ndolo", "mark-oroko", "sian-rapei", "lilian-kamau"],
  },
  {
    slug: "dispute-resolution",
    index: "02",
    title: "Arbitration & Dispute Resolution",
    tagline: "Resolving conflict with precision, privacy and professionalism.",
    intro: [
      "Disputes - whether commercial, contractual or regulatory - disrupt business and erode value. Our Arbitration & Dispute Resolution practice offers strategic, efficient and confidential alternatives to litigation, helping clients resolve conflict while preserving relationships and reputations.",
      "We are proud to be home to award-winning litigators, including a former ICJ Kenya Jurist of the Year - the country's highest individual honour for legal excellence and human-rights advocacy. Our partners are regularly shortlisted at the Nairobi Legal Awards and won 2025 Litigation Practitioner of the Year.",
    ],
    servicesHeading: "Arbitration services",
    services: [
      {
        items: [
          "Drafting & enforcing arbitration clauses",
          "Representation in ICC, LCIA, SIAC & ad hoc tribunals",
          "Arbitrator appointment & tribunal strategy",
          "Evidence preparation & procedural management",
          "Enforcement of arbitral awards (New York Convention)",
        ],
      },
      {
        heading: "Wider dispute resolution",
        items: [
          "Domestic & international arbitration",
          "Mediation & negotiation",
          "High-stakes commercial litigation",
        ],
      },
    ],
    clientsHeading: "Who we represent",
    clients: [
      "Corporations & SMEs",
      "Financial institutions & fintechs",
      "Real estate & construction firms",
      "Government agencies & regulators",
      "High-net-worth individuals & families",
    ],
    whyHeading: "The Crownmarks edge",
    why: [
      {
        title: "Multidisciplinary strength",
        body: "Lawyers who are also qualified arbitrators, tax specialists, engineers, accountants and certified mediators - a 360° view of every dispute.",
      },
      {
        title: "Global perspective",
        body: "Experience with international arbitration and enforcement, backed by strategic alliances to meet your needs anywhere.",
      },
      {
        title: "Confidential & efficient",
        body: "Discreet handling of sensitive disputes, with resolution plans tailored to your commercial goals.",
      },
    ],
    leadSlugs: ["ochiel-dudley"],
  },
  {
    slug: "family-law",
    index: "03",
    title: "Family Law & Private Client",
    tagline: "Discreet, compassionate and strategic - at home and across borders.",
    intro: [
      "Crownmarks is widely recognised as one of the top family law firms in Kenya, with a distinguished reputation for divorce, child custody, matrimonial property, surrogacy and cross-border family matters.",
      "Our practice is led by highly experienced family lawyers, including Ilham Hisham (Islamic family law) and Ochiel Dudley, a sought-after Fellow of the International Academy of Family Lawyers (IAFL) - a mark of global excellence that lets us serve your family-law needs in Kenya and across the globe.",
      "We provide discreet, compassionate and strategic support in high-stakes disputes: international divorce, child relocation and abduction, custody battles and complex asset division. Our clients - from high-net-worth individuals to expatriates and multinational families - trust our command of both Kenyan family law and international frameworks.",
    ],
    servicesHeading: "Our family law services",
    services: [
      {
        items: [
          "Divorce & separation - contested, uncontested, judicial separation, annulment",
          "Child custody & access - parental responsibility, visitation, relocation disputes",
          "Matrimonial property & financial settlements - asset division, spousal maintenance, business valuations",
          "Child maintenance & support - enforcement and variation of orders",
          "Prenuptial & postnuptial agreements - drafting and enforcement",
          "Cross-border family law - international divorce, child abduction, Hague Convention matters",
          "Adoption & guardianship - local and international adoption, guardianship applications",
        ],
      },
    ],
    clientsHeading: "Who we serve",
    clients: [
      "High-net-worth individuals & families",
      "Expatriates & multinational families",
      "Parents in cross-border custody disputes",
      "Clients seeking pre- and post-nuptial planning",
    ],
    whyHeading: "Why clients choose us",
    why: [
      {
        title: "Proven track record",
        body: "Top-rated family lawyers in Nairobi with a record across the most sensitive matters.",
      },
      {
        title: "International reach",
        body: "IAFL membership and cross-border expertise for disputes that span jurisdictions.",
      },
      {
        title: "Empathy & discretion",
        body: "A client-focused approach combining strategic clarity with genuine care and privacy.",
      },
    ],
    leadSlugs: ["ochiel-dudley", "ilham-hisham"],
  },
  {
    slug: "foreign-investment",
    index: "04",
    title: "Foreign Investment & Market Entry",
    tagline: "Empowering foreign investors entering the Kenyan market.",
    intro: [
      "Kenya continues to attract foreign direct investment as a gateway to East and Central Africa. As a full-service Nairobi firm, we help international clients navigate the legal, regulatory and operational landscape with confidence - from company registration and investment licensing to cross-border transactions, joint ventures and ongoing compliance.",
      "Our multidisciplinary team - lawyers, company secretaries, a chartered accountant, an actuary and MBA-qualified professionals - delivers commercially attuned solutions that align with both local regulation and international business standards.",
    ],
    servicesHeading: "Legal services for foreign investors",
    services: [
      {
        items: [
          "Business setup & incorporation - legal structures, shareholder agreements, KenInvest registration",
          "Company formation & structuring - incorporation strategy, legal-entity advice",
          "Corporate restructuring - reorganisation, insolvency advisory, exit strategies",
          "Corporate governance & secretarial services - board advisory, statutory filings",
          "Commercial agreements - drafting and negotiating high-value contracts and MOUs",
          "Cross-border transactions - structuring international deals, joint ventures, capital inflows",
          "Investment certificates & work permits - Investment Promotion Certificates and immigration approvals",
          "Mergers & acquisitions - due diligence, structuring, competition compliance, integration",
          "Regulatory advisory - sector-specific requirements across finance, telecoms, energy and trade",
          "Private equity & venture capital - investment structuring, term sheets, capital raising",
        ],
      },
    ],
    clientsHeading: "Who we serve",
    clients: [
      "Multinational corporations",
      "Development finance institutions",
      "Expatriate entrepreneurs",
      "Private equity & venture capital funds",
    ],
    whyHeading: "Why Crownmarks",
    why: [
      {
        title: "Investment-law fluency",
        body: "Deep understanding of Kenyan investment law and international business standards.",
      },
      {
        title: "Seamless coordination",
        body: "Direct working relationships with KenInvest, immigration authorities and sector regulators.",
      },
      {
        title: "Built for the long term",
        body: "A commitment to efficiency, confidentiality and long-term client success.",
      },
    ],
    leadSlugs: ["judith-kamoing", "sian-rapei", "lilian-kamau"],
  },
  {
    slug: "islamic-law",
    index: "05",
    title: "Islamic Law",
    tagline: "Sharia-compliant counsel with a modern, professional approach.",
    intro: [
      "Crownmarks is a leading Kenyan firm for Sharia-compliant legal services, serving individuals, families and businesses who seek counsel rooted in Islamic principles, cultural sensitivity and unwavering integrity.",
      "Our clients include Kenyan Muslim families navigating personal and financial matters, foreign nationals seeking Sharia-compliant representation in Kenya, Islamic institutions and charities, and non-Muslim clients seeking culturally informed support. Our team combines deep knowledge of Kenyan law and Islamic jurisprudence - guidance that is both legally sound and spiritually aligned.",
    ],
    servicesHeading: "Practice areas",
    services: [
      {
        heading: "Family law",
        items: ["Nikah contracts", "Islamic divorce (Talaq / Khula)", "Custody & guardianship"],
      },
      {
        heading: "Inheritance & wills",
        items: ["Sharia-compliant estate planning", "Probate", "Wasiyyah drafting"],
      },
      {
        heading: "Business & finance",
        items: ["Halal investment structuring", "Islamic banking compliance", "Zakat advisory"],
      },
      {
        heading: "Dispute resolution & rights",
        items: [
          "Mediation & arbitration under Islamic ethics",
          "Advocacy for faith-based rights and anti-discrimination matters",
        ],
      },
    ],
    clientsHeading: "Cultural sensitivity",
    clients: [
      "Multilingual support - Arabic, Urdu, Somali, Bengali",
      "Gender-sensitive representation options",
      "Community outreach & legal-education programmes",
    ],
    whyHeading: "Why choose Crownmarks",
    why: [
      {
        title: "Faith-aligned expertise",
        body: "Legal solutions that honour Islamic values without compromising on rigour.",
      },
      {
        title: "Global reach",
        body: "Serving clients across Africa, the Middle East and Europe with fully qualified advocates.",
      },
      {
        title: "Discreet & professional",
        body: "Your privacy and dignity are treated as a priority at every stage.",
      },
    ],
    leadSlugs: ["abubakar-kon", "ilham-hisham"],
  },
  {
    slug: "energy-climate",
    index: "06",
    title: "Energy, Climate & Conservation",
    tagline: "Powering Kenya's green transition - legally and sustainably.",
    intro: [
      "We provide strategic counsel at the intersection of energy law, climate policy and environmental conservation. As Kenya accelerates its transition to clean energy and climate resilience, we advise clients on regulatory compliance, project development and environmental governance.",
      "Our team combines legal precision with multidisciplinary insight, supporting renewable-energy developers, carbon-market participants, conservation NGOs, government agencies and foreign investors navigating Kenya's evolving regulatory landscape.",
    ],
    servicesHeading: "What we cover",
    services: [
      {
        heading: "Energy law & infrastructure",
        items: [
          "Licensing and compliance under the Energy Act",
          "Power Purchase Agreements (PPAs) and IPP frameworks",
          "Legal support for solar, wind, geothermal and mini-grid projects",
          "Land acquisition and community engagement",
        ],
      },
      {
        heading: "Climate change & carbon markets",
        items: [
          "Advisory on the Climate Change Act and NCCAP",
          "Structuring of carbon-credit projects and REDD+ initiatives",
          "ESG compliance and climate-related disclosures",
          "Cross-border climate finance and green-investment frameworks",
        ],
      },
      {
        heading: "Environmental & conservation law",
        items: [
          "Environmental Impact Assessments and NEMA licensing",
          "Biodiversity conservation, protected areas and wildlife corridors",
          "Community land rights and benefit-sharing agreements",
          "Litigation and dispute resolution in environmental matters",
        ],
      },
    ],
    clientsHeading: "Who we serve",
    clients: [
      "Renewable-energy developers",
      "Carbon-market participants",
      "Conservation NGOs",
      "Government agencies & development partners",
      "Foreign investors",
    ],
    whyHeading: "Why Crownmarks",
    why: [
      {
        title: "Regulatory command",
        body: "Deep understanding of Kenya's energy and environmental regulatory framework.",
      },
      {
        title: "Climate-finance experience",
        body: "Advising on climate finance, carbon trading and clean-energy investment.",
      },
      {
        title: "Trusted at every level",
        body: "By international investors, development partners and local communities alike.",
      },
    ],
    leadSlugs: ["mark-oroko"],
  },
  {
    slug: "construction-infrastructure",
    index: "07",
    title: "Construction, Projects & Infrastructure",
    tagline: "End-to-end counsel across the full project lifecycle.",
    intro: [
      "Our Construction, Projects & Infrastructure practice delivers end-to-end legal solutions across the full project lifecycle - from greenfield development to operational management and dispute resolution.",
      "We don't just interpret contracts; our team uniquely combines qualified engineers with legal training, so we understand how projects are actually built. That dual expertise lets us strategise proactively, advise with technical precision and - when disputes arise - deliver decisive results in arbitration and court.",
    ],
    servicesHeading: "Core services",
    services: [
      {
        items: [
          "Project structuring & procurement - EPC, EPCM, DBB, DBFO and PPP models",
          "Contract drafting & negotiation - complex agreements, subcontracts and consortium arrangements",
          "Regulatory & permitting - environmental approvals, planning, zoning and safety compliance",
          "Risk management & insurance - surety bonds, performance guarantees, latent-defect cover",
          "Construction finance & security - project financing, security packages, direct agreements",
          "Dispute resolution & claims - adjudication, arbitration, delay and disruption claims",
          "Sustainable & green construction - LEED, carbon-neutrality mandates, ESG-linked standards",
        ],
      },
      {
        heading: "Focus areas",
        items: [
          "Digital construction & BIM legal frameworks",
          "Modular & off-site construction",
          "Smart infrastructure & IoT integration",
          "Energy-transition projects - hydrogen, carbon capture, grid-scale storage",
          "Climate resilience & adaptation contracting",
        ],
      },
    ],
    clientsHeading: "Who we serve",
    clients: [
      "Developers & EPC contractors",
      "Public-sector & PPP project sponsors",
      "Lenders & project financiers",
      "Infrastructure & utility operators",
    ],
    whyHeading: "Why Crownmarks",
    why: [
      {
        title: "Engineers who are lawyers",
        body: "Technical fluency that turns contract advice into practical, build-ready strategy.",
      },
      {
        title: "Lifecycle coverage",
        body: "One team from procurement and financing through to claims and dispute resolution.",
      },
    ],
    leadSlugs: ["mark-oroko"],
  },
  {
    slug: "intellectual-property",
    index: "08",
    title: "Intellectual Property",
    tagline: "Protecting what drives your competitive advantage.",
    intro: [
      "We protect the ideas, brands, technology and creative works that drive competitive advantage - across every jurisdiction and industry, from technology and life sciences to media, luxury, automotive and telecommunications.",
      "Our prosecution teams are informed by litigation strategy from day one, with dual-qualified attorneys who hold advanced degrees in engineering, life sciences and computer science.",
    ],
    servicesHeading: "Core services",
    services: [
      {
        heading: "Patents",
        items: [
          "Global patent prosecution & portfolio management",
          "Freedom-to-operate & invalidity analysis",
          "Patent litigation & opposition proceedings",
          "Standard-essential patents & FRAND licensing",
          "Life-sciences patent strategy (SPCs, biosimilars)",
        ],
      },
      {
        heading: "Trademarks & brands",
        items: [
          "Worldwide clearance, filing & enforcement",
          "Brand architecture & portfolio audits",
          "Anti-counterfeiting & border enforcement",
          "Domain recovery & UDRP proceedings",
        ],
      },
      {
        heading: "Copyright, design & trade secrets",
        items: [
          "Registration & licensing of creative works",
          "Software & digital-content protection",
          "Confidentiality programmes & restrictive covenants",
          "Trade-secret litigation & injunctive relief",
        ],
      },
      {
        heading: "Cutting-edge focus",
        items: [
          "AI-generated IP & machine-learning patents",
          "Blockchain, NFTs & digital assets",
          "Biotech & gene-editing (CRISPR) landscapes",
          "Data rights & database protection",
          "Green-tech IP & sustainability licensing",
        ],
      },
    ],
    clientsHeading: "Industries we serve",
    clients: [
      "Technology & telecommunications",
      "Pharmaceuticals & biotech",
      "Financial services",
      "Energy & cleantech",
      "Media, entertainment & luxury",
    ],
    whyHeading: "Why Crownmarks",
    why: [
      {
        title: "Unified global practice",
        body: "Single-point coordination across major IP offices and litigation forums.",
      },
      {
        title: "Technical depth",
        body: "Dual-qualified attorneys with advanced degrees in engineering and the sciences.",
      },
      {
        title: "Commercial focus",
        body: "IP advice aligned with business objectives - not just legal risk.",
      },
    ],
    leadSlugs: ["judith-kamoing"],
  },
];

export const practiceMap: Record<string, Practice> = Object.fromEntries(
  practices.map((p) => [p.slug, p]),
);
