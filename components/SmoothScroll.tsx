"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Global Lenis smooth-scroll root. Motion must be motivated and accessible:
 * we disable it entirely for visitors who prefer reduced motion, falling back
 * to the browser's native scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  // Default on so SSR and the common client path agree; disable only when the
  // visitor has asked for reduced motion.
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Defensive: this app ships no service worker, but localhost is often
  // polluted by one left behind by a previous project, which can intercept
  // requests and cause ChunkLoadError. Unregister any stray workers.
  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.serviceWorker) return;
    navigator.serviceWorker.getRegistrations?.().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // Calm, premium feel: a touch of inertia without floatiness.
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: true,
        anchors: { offset: -88 }, // clear the fixed header on in-page jumps
      }}
    >
      {children}
    </ReactLenis>
  );
}
