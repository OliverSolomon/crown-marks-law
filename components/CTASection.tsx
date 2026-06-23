import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { firm } from "@/content/firm";

export function CTASection({
  title = "Let's talk about your matter.",
  body = "Whether you're entering the Kenyan market, navigating a dispute, or planning for your family's future, a confidential first conversation is the right place to start.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-ink text-white">
      {/* Atmospheric backdrop under a heavy navy wash */}
      <Image
        src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=2000&q=70"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--color-navy-ink) 22%, rgba(8,26,51,0.82) 60%, rgba(5,15,32,0.55) 100%)",
        }}
      />
      <Container className="relative py-24 lg:py-32">
        <Reveal className="flex max-w-2xl flex-col gap-7">
          <span aria-hidden className="h-px w-12 bg-gold-soft" />
          <h2 className="text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">{body}</p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="gold" withArrow>
              Book a consultation
            </Button>
            <a
              href={firm.contact.phoneHref}
              className="link-underline w-fit text-white/80 hover:text-white"
            >
              or call {firm.contact.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
