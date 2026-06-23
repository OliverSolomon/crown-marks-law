import { Container } from "@/components/Container";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-ink text-white">
      <Container className="flex flex-col items-start gap-6 py-32">
        <span className="font-serif text-6xl text-gold-soft">404</span>
        <h1 className="text-balance font-serif text-4xl leading-tight sm:text-5xl">
          This page couldn&rsquo;t be found.
        </h1>
        <p className="max-w-md text-lg text-white/65">
          The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back on track.
        </p>
        <Button href="/" variant="gold" withArrow>
          Return home
        </Button>
      </Container>
    </section>
  );
}
