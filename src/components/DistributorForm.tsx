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
  "mb-2 block text-[10px] font-semibold uppercase tracking-wide-sm text-paper/50";
const fieldClass =
  "w-full border-0 border-b border-paper/25 bg-transparent px-0 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-terra-bright [&>option]:text-ink";

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
      <div className="border border-paper/20 bg-paper/5 p-12 text-center">
        <p className="font-serif text-3xl text-sand">Inquiry received.</p>
        <p className="mt-3 text-sm text-paper/60">We respond within 3–5 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input name="fullName" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Email Address *</label>
        <input type="email" name="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Company / Organisation</label>
        <input name="company" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Your Region *</label>
        <select name="region" required defaultValue="" className={fieldClass}>
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
        <label className={labelClass}>Distribution Channel *</label>
        <select name="channel" required defaultValue="" className={fieldClass}>
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
        <label className={labelClass}>Message *</label>
        <textarea name="message" required rows={3} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-3 rounded-full bg-terra px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-paper transition-colors hover:bg-terra-bright disabled:opacity-60"
        >
          {status === "loading" ? "Submitting…" : "Submit Inquiry"}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        {status === "error" && <p className="mt-4 text-xs text-terra-bright">{error}</p>}
        <p className="mt-4 text-[11px] uppercase tracking-wide-sm text-paper/40">
          We respond within 3–5 business days.
        </p>
      </div>
    </form>
  );
}
