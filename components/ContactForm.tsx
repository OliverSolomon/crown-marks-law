"use client";

import { useState, type FormEvent } from "react";
import { practices } from "@/content/practices";

type Status = "idle" | "submitting" | "success";

const fieldBase =
  "w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none transition-colors duration-200 placeholder:text-faint focus:border-navy focus:ring-2 focus:ring-navy/15";
const labelBase = "mb-2 block text-[0.82rem] font-medium tracking-tight text-ink/80";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // No backend is wired up; this validates and simulates a submission so the
  // experience is complete. Point handleSubmit at your endpoint to go live.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-canvas p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="text-2xl text-ink">Thank you - message received.</h3>
        <p className="max-w-md text-muted">
          A member of our team will respond within one business day. For urgent matters, please call
          us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-canvas p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Full name
          </label>
          <input id="name" name="name" required className={fieldBase} placeholder="Jane Mwangi" />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldBase}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-faint">(optional)</span>
          </label>
          <input id="phone" name="phone" className={fieldBase} placeholder="+254 …" />
        </div>
        <div>
          <label htmlFor="practice" className={labelBase}>
            Area of interest
          </label>
          <select id="practice" name="practice" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a practice
            </option>
            {practices.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldBase} resize-none`}
          placeholder="Tell us a little about your matter. Everything you share is treated in the strictest confidence."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.8rem] leading-relaxed text-faint">
          Your enquiry is confidential and protected by legal professional privilege.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
