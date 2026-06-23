import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PracticeList } from "@/components/PracticeList";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "Eight core practice areas - corporate & commercial, dispute resolution, family law, foreign investment, Islamic law, energy & climate, construction, and intellectual property.",
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
