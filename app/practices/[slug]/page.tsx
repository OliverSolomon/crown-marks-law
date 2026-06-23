import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { practices, practiceMap } from "@/content/practices";
import { peopleMap, initials } from "@/content/people";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = practiceMap[slug];
  if (!practice) return {};
  return {
    title: practice.title,
    description: `${practice.tagline} ${practice.intro[0]}`.slice(0, 155),
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = practiceMap[slug];
  if (!practice) notFound();

  const leads = practice.leadSlugs.map((s) => peopleMap[s]).filter(Boolean);

  // Prev / next for the editorial pager.
  const idx = practices.findIndex((p) => p.slug === slug);
  const prev = practices[(idx - 1 + practices.length) % practices.length];
  const next = practices[(idx + 1) % practices.length];

  return (
    <>
      <PageHeader
        eyebrow="Practice area"
        title={practice.title}
        lede={practice.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Practices", href: "/practices" },
          { label: practice.title },
        ]}
      />

      {/* Intro + content */}
      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.55fr_0.85fr] lg:gap-20">
            {/* Main column */}
            <div className="flex flex-col gap-16">
              <Reveal className="flex flex-col gap-6">
                {practice.intro.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-xl leading-relaxed text-ink/90"
                        : "text-lg leading-relaxed text-muted"
                    }
                  >
                    {para}
                  </p>
                ))}
              </Reveal>

              {/* Services */}
              <Reveal className="flex flex-col gap-9">
                <h2 className="flex items-center gap-3 text-2xl text-ink">
                  <span aria-hidden className="h-px w-8 bg-gold" />
                  {practice.servicesHeading}
                </h2>
                <div className="flex flex-col gap-9">
                  {practice.services.map((group, gi) => (
                    <div key={gi} className="flex flex-col gap-4">
                      {group.heading ? (
                        <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-navy">
                          {group.heading}
                        </h3>
                      ) : null}
                      <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/80">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Why */}
              <Reveal className="flex flex-col gap-7">
                <h2 className="flex items-center gap-3 text-2xl text-ink">
                  <span aria-hidden className="h-px w-8 bg-gold" />
                  {practice.whyHeading}
                </h2>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {practice.why.map((w) => (
                    <div key={w.title} className="flex flex-col gap-2 bg-canvas p-7">
                      <h3 className="text-lg text-ink">{w.title}</h3>
                      <p className="leading-relaxed text-muted">{w.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-line bg-canvas p-7">
                <h3 className="font-serif text-lg text-ink">{practice.clientsHeading}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {practice.clients.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-[0.95rem] leading-snug text-ink/80"
                    >
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {leads.length ? (
                <div className="rounded-2xl border border-line bg-canvas p-7">
                  <h3 className="font-serif text-lg text-ink">Practice contacts</h3>
                  <ul className="mt-5 flex flex-col gap-5">
                    {leads.map((p) => (
                      <li key={p.slug} className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/10 font-serif text-base text-navy">
                          {initials(p.name)}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[0.95rem] font-medium text-ink">{p.name}</span>
                          <span className="text-[0.82rem] text-muted">{p.role}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-2xl bg-navy-ink p-7 text-white">
                <p className="font-serif text-xl leading-snug">Have a matter in this area?</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">
                  Tell us what you&rsquo;re facing - your enquiry is confidential.
                </p>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy-ink transition-all duration-300 hover:bg-gold-soft"
                >
                  Get in touch
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Pager */}
      <section className="border-t border-line bg-canvas">
        <Container className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <PagerLink dir="Previous" practice={prev} align="left" />
          <PagerLink dir="Next" practice={next} align="right" />
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function PagerLink({
  dir,
  practice,
  align,
}: {
  dir: string;
  practice: (typeof practices)[number];
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/practices/${practice.slug}`}
      className={`group flex flex-col gap-2 py-8 transition-colors hover:bg-ivory ${
        align === "right" ? "sm:items-end sm:pl-10 sm:text-right" : "sm:pr-10"
      }`}
    >
      <span className="text-[0.85rem] text-faint">{dir}</span>
      <span className="font-serif text-xl text-ink transition-colors group-hover:text-navy sm:text-2xl">
        {practice.title}
      </span>
    </Link>
  );
}
