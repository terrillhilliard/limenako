"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const REGIONS = [
  "Sub-Saharan Africa",
  "North Africa & Middle East",
  "Southeast Asia",
  "East Asia",
  "Europe",
  "North America",
  "Latin America",
  "Australia & Pacific",
  "Other",
];

const CHANNELS = [
  "Retail (Boutique / Store)",
  "Spa & Wellness",
  "E-commerce",
  "Wholesale / Distribution",
  "Hotel & Hospitality",
  "Other",
];

const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50";
const fieldClass =
  "w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-2/30 focus:border-accent [&>option]:bg-paper-2 [&>option]:text-ink";

export default function DistributorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      company: data.get("company"),
      region: data.get("region"),
      channel: data.get("channel"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/distributor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(json?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-lit rounded-[10px] p-12 text-center">
        <p className="display text-3xl text-accent">inquiry received.</p>
        <p className="mt-3 text-[13px] text-ink-2/60">we respond within 3–5 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      <div>
        <label htmlFor="dist-name" className={labelClass}>Full Name *</label>
        <input id="dist-name" name="fullName" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="dist-email" className={labelClass}>Email Address *</label>
        <input id="dist-email" type="email" name="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="dist-company" className={labelClass}>Company / Organisation</label>
        <input id="dist-company" name="company" autoComplete="organization" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="dist-region" className={labelClass}>Your Region *</label>
        <select id="dist-region" name="region" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select your region
          </option>
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dist-channel" className={labelClass}>Distribution Channel *</label>
        <select id="dist-channel" name="channel" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            How would you distribute?
          </option>
          {CHANNELS.map((channel) => (
            <option key={channel} value={channel}>
              {channel}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dist-message" className={labelClass}>Message *</label>
        <textarea id="dist-message" name="message" required rows={3} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[12px] text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "submitting…" : "submit inquiry"}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        {status === "error" && <p className="mt-4 text-[12px] text-accent">{error}</p>}
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/40">
          We respond within 3–5 business days.
        </p>
      </div>
    </form>
  );
}
