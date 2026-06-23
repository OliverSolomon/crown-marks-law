import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { PracticeList } from "@/components/PracticeList";
import { CTASection } from "@/components/CTASection";
import { GeometricPattern } from "@/components/GeometricPattern";
import { values } from "@/content/firm";
import { people, initials } from "@/content/people";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Approach />
      <Recognition />
      <PeoplePreview />
      <CTASection />
    </>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden bg-navy-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 60%)" }}
      />
      {/* Brand line-motif anchored to the lower edge */}
      <GeometricPattern
        rows={4}
        cols={18}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] w-full opacity-60 [mask-image:linear-gradient(to_top,black,transparent)]"
      />
      <Container className="relative pt-28 pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
          <Reveal>
            <h1 className="text-balance font-serif text-[2.9rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[5rem]">
              Counsel of <span className="italic text-gold-soft">consequence.</span>
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              A Nairobi law firm for commercial, corporate and dispute resolution work, trusted by
              clients across Kenya and beyond.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
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

/* ── About (text + photograph) ────────────────────────────────── */
function About() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-7">
            <Eyebrow>The firm</Eyebrow>
            <h2 className="text-balance font-serif text-[2rem] leading-[1.06] text-ink sm:text-4xl lg:text-[2.9rem]">
              At the forefront of law in Nairobi.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Crownmarks is a leading Kenyan firm, advising clients across sectors and borders.
              Recognised for integrity, efficiency and expertise, we serve a diverse clientele,
              individual and corporate, local and international.
            </p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/about" variant="outline" withArrow>
                Who we are
              </Button>
              <Button href="/people" variant="ghost" withArrow>
                Our people
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy-deep">
              <Image
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=75"
                alt="Modern architecture in the city"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(5,15,32,0.55) 100%)",
                }}
              />
              {/* gold corner accent */}
              <span aria-hidden className="absolute left-5 top-5 h-10 w-10 border-l border-t border-gold-soft/70" />
              <span aria-hidden className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-gold-soft/70" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Capabilities (signature navy + faded photo + list) ───────── */
function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=70"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.14]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-navy) 0%, rgba(11,34,64,0.92) 100%)",
        }}
      />
      <Container className="relative py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Capabilities"
            title="Solutions across the spectrum of legal services."
          />
        </Reveal>
        <div className="mt-14">
          <PracticeList tone="dark" />
        </div>
      </Container>
    </section>
  );
}

/* ── Approach / values (4-up principles) ──────────────────────── */
function Approach() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our approach" title="How we work alongside you." className="mb-16" />
        </Reveal>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70} className="flex flex-col gap-4">
              <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Recognition (navy stat band) ─────────────────────────────── */
function Recognition() {
  const awards = [
    { value: "2025", label: "Litigation Practitioner of the Year" },
    { value: "ICJ", label: "Former Kenya Jurist of the Year" },
    { value: "IAFL", label: "Fellows of the Academy of Family Lawyers" },
    { value: "Tier 1", label: "Standing among Kenya's leading firms" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <Eyebrow tone="light">Recognition</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-[2rem] leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
            Award-winning advocacy, recognised nationally.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            Home to litigators of national standing, including a former ICJ Kenya Jurist of the
            Year, the country&rsquo;s highest individual honour for legal excellence.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {awards.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 70}
              className="flex flex-col gap-2 border-t border-white/15 pt-5"
            >
              <span className="font-serif text-3xl text-gold-soft lg:text-4xl">{a.value}</span>
              <span className="text-sm leading-snug text-white/60">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── People preview (portrait monograms) ──────────────────────── */
function PeoplePreview() {
  const featured = people.slice(0, 4);
  return (
    <section className="bg-ivory py-24 lg:py-32">
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
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 font-serif text-2xl text-navy">
                {initials(p.name)}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg text-ink">{p.name}</h3>
                <p className="text-sm text-muted">{p.role}</p>
                {p.credentials ? <p className="text-[0.8rem] text-gold">{p.credentials}</p> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
