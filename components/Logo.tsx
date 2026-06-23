import Image from "next/image";
import Link from "next/link";
import { firm } from "@/content/firm";

/**
 * Brand wordmark. Background-free PNGs (derived from the supplied mark) so it
 * sits cleanly on any surface:
 *   - tone="light": navy + gold mark, for light grounds
 *   - tone="dark":  reversed white mark, for dark navy grounds
 */
export function Logo({
  tone = "light",
  className = "",
  priority = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const src = tone === "dark" ? "/logo-reversed.png" : "/logo-navy.png";

  return (
    <Link
      href="/"
      aria-label={`${firm.name} - home`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={src}
        alt={firm.name}
        width={1080}
        height={251}
        priority={priority}
        className="h-auto w-full select-none"
      />
    </Link>
  );
}
