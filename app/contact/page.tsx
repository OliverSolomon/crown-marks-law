import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { firm } from "@/content/firm";

const description = `Speak with Crownmarks Law LLP in ${firm.city}, ${firm.country}. Book a confidential consultation by phone, email or enquiry form.`;

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact · Crownmarks Law LLP", description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk."
        lede="Reach out for a confidential first conversation. Tell us a little about your matter and the right specialist will respond within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Details */}
            <Reveal className="flex flex-col gap-10">
              <ContactBlock label="By phone" >
                <a href={firm.contact.phoneHref} className="link-underline w-fit text-lg text-ink hover:text-navy">
                  {firm.contact.phone}
                </a>
                <span className="text-sm text-faint">{firm.contact.hours}</span>
              </ContactBlock>

              <ContactBlock label="By email">
                <a
                  href={`mailto:${firm.contact.email}`}
                  className="link-underline w-fit text-lg text-ink hover:text-navy"
                >
                  {firm.contact.email}
                </a>
              </ContactBlock>

              <ContactBlock label="Visit us">
                <address className="not-italic text-lg leading-relaxed text-ink">
                  {firm.contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactBlock>

              <div className="rounded-2xl border border-line bg-canvas p-6">
                <p className="text-[0.92rem] leading-relaxed text-muted">
                  All enquiries are treated in the strictest confidence and protected by legal
                  professional privilege.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-t border-line pt-6">
      <span className="font-serif text-base text-navy">{label}</span>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
