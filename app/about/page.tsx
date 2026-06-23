import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { firm, values, credentials } from "@/content/firm";

const description =
  "Crownmarks Law LLP is a Nairobi firm for commercial law, corporate advisory and dispute resolution, rooted in integrity and strengthened by an international outlook.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About · Crownmarks Law LLP", description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the firm"
        title="A Nairobi firm built for complex, cross-border matters."
        lede={firm.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Narrative */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <Reveal>
            <span aria-hidden className="mb-8 block h-px w-10 bg-gold" />
            <h2 className="max-w-3xl text-balance font-serif text-3xl leading-[1.08] text-ink sm:text-4xl lg:text-[2.9rem]">
              Depth, specialisation and a global outlook.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-16 gap-y-8 text-lg leading-relaxed lg:grid-cols-2">
            <Reveal>
              <p className="text-ink/85">
                Our partner count places us firmly beside Kenya&rsquo;s other tier-one firms,
                guaranteeing depth and specialisation across our legal services. We serve a diverse
                clientele, local and international, individual, family and corporate, across many
                sectors.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-muted">
                From contract structuring and risk management to high-stakes litigation and
                cross-border arbitration, our clients include multinational corporations, financial
                institutions, government bodies, families and start-ups. Grounded in deep local
                expertise and strengthened by an international outlook, we help clients navigate
                legal complexity with clarity and confidence in Kenya and beyond.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="border-y border-line bg-canvas py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {credentials.map((c, i) => (
              <Reveal key={c.label} delay={i * 70} className="flex flex-col gap-2 pr-6">
                <span className="font-serif text-4xl text-navy">{c.value}</span>
                <span className="text-sm leading-snug text-muted">{c.label}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What guides us" title="Principles we hold to." className="mb-14" />
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 70}
                className="flex flex-col gap-3 bg-canvas p-8 lg:p-10"
              >
                <span className="font-serif text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-ink">{v.title}</h3>
                <p className="leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="A trusted partner for what matters most."
        body="From the boardroom to the courtroom, Crownmarks brings precision, discretion and commercial sense to every engagement."
      />
    </>
  );
}
