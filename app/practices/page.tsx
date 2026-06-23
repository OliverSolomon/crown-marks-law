import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PracticeList } from "@/components/PracticeList";
import { CTASection } from "@/components/CTASection";

const description =
  "Eight core practice areas: corporate and commercial, dispute resolution, family law, foreign investment, Islamic law, energy and climate, construction, and intellectual property.";

export const metadata: Metadata = {
  title: "Practices",
  description,
  alternates: { canonical: "/practices" },
  openGraph: { title: "Practice Areas · Crownmarks Law LLP", description, url: "/practices" },
};

export default function PracticesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Practice areas."
        lede="Deep specialisation across the matters that move businesses, families and institutions - coordinated under one integrated, multidisciplinary team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Practices" }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <PracticeList />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
