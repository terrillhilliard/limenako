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

const inputClass =
  "w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-sm text-navy placeholder:text-navy/40 outline-none focus:border-gold";

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
      <div className="rounded-2xl border border-gold/30 bg-cream-soft p-10 text-center">
        <p className="font-display text-2xl text-navy">Inquiry received.</p>
        <p className="mt-3 text-sm text-navy/70">
          We respond within 3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Full Name *
        </label>
        <input name="fullName" required className={inputClass} />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Email Address *
        </label>
        <input type="email" name="email" required className={inputClass} />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Company / Organisation
        </label>
        <input name="company" className={inputClass} />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Your Region *
        </label>
        <select name="region" required defaultValue="" className={inputClass}>
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
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Distribution Channel *
        </label>
        <select name="channel" required defaultValue="" className={inputClass}>
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
        <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
          Message *
        </label>
        <textarea name="message" required rows={4} className={inputClass} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-navy px-8 py-4 text-xs font-semibold uppercase tracking-widest-xl text-cream transition-colors hover:bg-gold hover:text-navy-deep disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Submitting…" : "Submit Inquiry"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-xs text-red-600">{error}</p>
        )}
        <p className="mt-3 text-xs text-navy/50">
          We respond within 3–5 business days.
        </p>
      </div>
    </form>
  );
}
