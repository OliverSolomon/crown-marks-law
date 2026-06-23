import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { people, initials } from "@/content/people";
import { practiceMap } from "@/content/practices";

const description =
  "Meet the partners and senior practitioners of Crownmarks Law LLP, advocates who are also Company Secretaries, Chartered Accountants, Actuaries, engineers and IAFL Fellows.";

export const metadata: Metadata = {
  title: "People",
  description,
  alternates: { canonical: "/people" },
  openGraph: { title: "Our People · Crownmarks Law LLP", description, url: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our people"
        title="The team behind the work."
        lede="A multidisciplinary bench of advocates, arbitrators, engineers, accountants and company secretaries - bringing a 360° view to every matter."
        crumbs={[{ label: "Home", href: "/" }, { label: "People" }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {people.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80} className="flex flex-col gap-5 bg-canvas p-8 lg:p-10">
                <div className="flex items-center gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy/10 font-serif text-2xl text-navy">
                    {initials(p.name)}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h2 className="text-xl text-ink">{p.name}</h2>
                    <p className="text-sm text-muted">{p.role}</p>
                    {p.credentials ? <p className="text-[0.8rem] text-gold">{p.credentials}</p> : null}
                  </div>
                </div>
                <p className="leading-relaxed text-muted">{p.bio}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.practices.map((slug) => {
                    const pr = practiceMap[slug];
                    if (!pr) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/practices/${slug}`}
                        className="rounded-full border border-line px-3 py-1 text-[0.78rem] text-ink/70 transition-colors hover:border-navy hover:text-navy"
                      >
                        {pr.title}
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Speak to the right specialist."
        body="Tell us about your matter and we'll connect you with the partner best placed to help."
      />
    </>
  );
}
