import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/CTASection";
import { firm, values } from "@/content/firm";
import { practices } from "@/content/practices";
import { people, initials } from "@/content/people";

export default function Home() {
  return (
    <>
      <Hero />
      <SubNav />
      <Intro />
      <HotTopics />
      <Approach />
      <LegalDNA />
      <Experience />
      <Recognition />
      <PeoplePreview />
      <Insights />
      <CTASection />
    </>
  );
}

/* ── Hero banner (photographic, title + tagline over teal wash) ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-ink text-white">
      <Image
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=75"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(104deg, rgba(6,47,46,0.92) 0%, rgba(9,79,77,0.82) 48%, rgba(12,107,104,0.55) 100%)",
        }}
      />
      <Container className="relative">
        <div className="flex min-h-[62vh] max-w-3xl flex-col justify-center gap-6 py-20 lg:py-28">
          <Reveal>
            <Eyebrow tone="light">{firm.city} · {firm.country}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.9rem]">
              Commercial, corporate and dispute resolution counsel.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Integrated. Multidisciplinary. Trusted across borders. One team of advocates,
              company secretaries, accountants and engineers, working on the matters that decide
              how businesses and families move forward.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="gold" withArrow>
                Book a consultation
              </Button>
              <Button href="/practices" variant="outline-light" withArrow>
                Explore our practices
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Sub-navigation tabs (CC hub-style) ─────────────────────────── */
function SubNav() {
  const tabs = [
    { label: "Overview", href: "/", active: true },
    { label: "Practices", href: "/practices" },
    { label: "Our people", href: "/people" },
    { label: "About the firm", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="sticky top-[4.75rem] z-30 border-b border-line bg-canvas/95 backdrop-blur md:top-[7rem]">
      <Container className="flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className={`relative whitespace-nowrap px-4 py-4 text-[0.9rem] font-medium transition-colors ${
              t.active ? "text-navy" : "text-ink/65 hover:text-navy"
            }`}
          >
            {t.label}
            {t.active ? (
              <span aria-hidden className="absolute inset-x-4 bottom-0 h-0.5 bg-gold-bright" />
            ) : null}
          </Link>
        ))}
      </Container>
    </div>
  );
}

/* ── Intro (CC "the world is being disrupted" block) ────────────── */
function Intro() {
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-balance text-[2rem] leading-[1.1] text-ink sm:text-4xl lg:text-[2.7rem]">
              A single firm for complex, cross-border matters.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
            <p>
              Crownmarks is a Nairobi firm for commercial law, corporate advisory and dispute
              resolution. We act for a broad clientele, local and international, from individuals
              and families to financial institutions, government bodies and start-ups.
            </p>
            <p>
              Our partner count places us among Kenya&rsquo;s tier-one firms, with the depth and
              specialisation that complex work demands. From contract structuring and risk
              management to high-stakes litigation and cross-border arbitration, we bring clarity
              and confidence to every matter in Kenya and beyond.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Hot topics (pill links to practice areas) ──────────────────── */
function HotTopics() {
  return (
    <section className="border-y border-line bg-ivory py-16 lg:py-20">
      <Container>
        <Reveal>
          <Eyebrow>Hot topics</Eyebrow>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {practices.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 40}>
              <Link
                href={`/practices/${p.slug}`}
                className="group inline-flex items-center gap-2 rounded-sm border border-line bg-canvas px-4 py-2.5 text-[0.9rem] font-medium text-ink transition-colors hover:border-navy hover:text-navy"
              >
                {p.title}
                <span
                  aria-hidden
                  className="text-gold-bright transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Approach (CC "a new approach to solving challenges") ────────── */
function Approach() {
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="text-balance text-[1.9rem] leading-[1.12] text-ink sm:text-3xl lg:text-[2.4rem]">
              We break down the boundaries between practice areas.
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Crownmarks brings advocates who are also Company Secretaries, Chartered Accountants,
              Actuaries, engineers and MBAs into one integrated team. That gives clients a 360°
              view of every matter, with legal, financial and technical judgement under one roof.
            </p>
            <Button href="/about" variant="outline" withArrow>
              Who we are
            </Button>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="flex flex-col gap-3 bg-canvas p-7">
                <span className="text-sm font-semibold tabular-nums text-gold-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg text-ink">{v.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Legal DNA (CC accordion of capability themes) ──────────────── */
const dnaItems = [
  {
    title: "Corporate deals and market entry",
    body: "The success of most businesses now runs on getting the structure right. We advise on company formation, governance, M&A and capital raising, and we help foreign investors enter the Kenyan market, from KenInvest registration to cross-border transactions and joint ventures.",
    href: "/practices/corporate-commercial",
  },
  {
    title: "Disputes, arbitration and investigations",
    body: "Our litigators have national standing, including a former ICJ Kenya Jurist of the Year. We handle domestic and international arbitration under ICC, LCIA and SIAC rules, commercial litigation, and the enforcement of awards under the New York Convention.",
    href: "/practices/dispute-resolution",
  },
  {
    title: "Family and private client",
    body: "As Fellows of the International Academy of Family Lawyers, we act on divorce, custody, matrimonial property and cross-border disputes, including child relocation, abduction and Hague Convention matters, with discretion and care.",
    href: "/practices/family-law",
  },
  {
    title: "Advisory, compliance and regulation",
    body: "We advise on the full range of regulatory and compliance work: data protection, financial services licensing, IP monetisation, ESG frameworks and sector-specific approvals across finance, telecoms, energy and trade.",
    href: "/practices/intellectual-property",
  },
];

function LegalDNA() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="In our legal DNA"
            title="How we help your business survive and thrive."
            className="mb-12"
          />
        </Reveal>
        <div className="border-b border-line">
          {dnaItems.map((item) => (
            <details key={item.title} className="cc-acc group">
              <summary>
                <h3 className="text-xl text-ink transition-colors group-hover:text-navy sm:text-2xl">
                  {item.title}
                </h3>
                <span aria-hidden className="cc-acc-sign" />
              </summary>
              <div className="cc-acc-body max-w-3xl">
                <p className="text-lg leading-relaxed text-muted">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-medium text-navy link-underline"
                >
                  Read more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Representative work (CC "client highlights") ───────────────── */
const experience = [
  {
    tag: "Arbitration",
    body: "Representing corporates and financial institutions in domestic and international arbitration before ICC, LCIA and SIAC tribunals, and enforcing awards across jurisdictions.",
  },
  {
    tag: "Foreign investment",
    body: "Guiding multinational investors into the Kenyan market, coordinating with KenInvest and immigration authorities on incorporation, licensing and cross-border structuring.",
  },
  {
    tag: "Family law",
    body: "Acting in complex cross-border family disputes, including international divorce, child relocation and Hague Convention matters, for high-net-worth and expatriate families.",
  },
  {
    tag: "Energy and infrastructure",
    body: "Advising renewable-energy developers and sponsors on Power Purchase Agreements, project structuring and community engagement under the Energy Act.",
  },
  {
    tag: "Corporate and M&A",
    body: "Leading multi-jurisdictional M&A, joint ventures and capital raising for growth-stage businesses, corporates and development finance institutions.",
  },
  {
    tag: "Intellectual property",
    body: "Building and defending patent and trademark portfolios, including FRAND and standard-essential patent strategy for technology and life-sciences clients.",
  },
];

function Experience() {
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Representative work"
            title="Where we make it happen."
            lede="A snapshot of the matters our teams handle across sectors and jurisdictions."
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e, i) => (
            <Reveal key={e.tag} delay={(i % 3) * 60} className="flex flex-col gap-4 bg-canvas p-8">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                {e.tag}
              </span>
              <p className="leading-relaxed text-muted">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Recognition (teal stat band) ───────────────────────────────── */
function Recognition() {
  const awards = [
    { value: "2025", label: "Litigation Practitioner of the Year" },
    { value: "ICJ", label: "Former Kenya Jurist of the Year" },
    { value: "IAFL", label: "Fellows of the Academy of Family Lawyers" },
    { value: "Tier 1", label: "Standing among Kenya's leading firms" },
  ];
  return (
    <section className="bg-navy-deep text-white">
      <Container className="py-20 lg:py-24">
        <Reveal>
          <Eyebrow tone="light">Recognition</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance text-[1.9rem] leading-[1.1] sm:text-3xl lg:text-[2.5rem]">
            Award-winning advocacy, recognised nationally.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {awards.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 70}
              className="flex flex-col gap-2 border-t border-white/15 pt-5"
            >
              <span className="text-3xl font-semibold text-gold-soft lg:text-4xl">{a.value}</span>
              <span className="text-sm leading-snug text-white/60">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── People preview ─────────────────────────────────────────────── */
function PeoplePreview() {
  const featured = people.slice(0, 4);
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading eyebrow="Our people" title="Lawyers who think like your business." />
          </Reveal>
          <Reveal delay={100}>
            <Link href="/people" className="link-underline text-[0.95rem] font-medium text-navy">
              Meet the full team →
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} className="flex flex-col gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 text-2xl font-semibold text-navy">
                {initials(p.name)}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg text-ink">{p.name}</h3>
                <p className="text-sm text-muted">{p.role}</p>
                {p.credentials ? (
                  <p className="text-[0.8rem] font-medium text-gold">{p.credentials}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Insights (CC news/insights row) ────────────────────────────── */
const insights = [
  {
    topic: "Foreign investment",
    title: "Setting up in Kenya: a practical route for foreign investors",
    href: "/practices/foreign-investment",
  },
  {
    topic: "Dispute resolution",
    title: "Choosing arbitration over litigation for cross-border commercial disputes",
    href: "/practices/dispute-resolution",
  },
  {
    topic: "Family law",
    title: "When a family dispute crosses borders: what the Hague Convention means for you",
    href: "/practices/family-law",
  },
];

function Insights() {
  return (
    <section className="border-t border-line bg-ivory py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading eyebrow="Insights" title="Reading room." />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((n, i) => (
            <Reveal key={n.title} delay={i * 70}>
              <Link
                href={n.href}
                className="group flex h-full flex-col gap-4 rounded-sm border border-line bg-canvas p-7 transition-colors hover:border-navy"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                  {n.topic}
                </span>
                <h3 className="text-lg leading-snug text-ink transition-colors group-hover:text-navy">
                  {n.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-auto text-navy transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
