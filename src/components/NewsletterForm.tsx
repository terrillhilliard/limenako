"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-gold-soft">
        You&rsquo;re in. Welcome to the ritual.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full rounded-full border border-cream/25 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-gold-soft sm:w-72"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest-xl text-navy-deep transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-300 sm:self-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
