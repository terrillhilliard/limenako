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
    return <p className="display text-lg text-accent">you are in. welcome to the ritual.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-rule py-2 focus-within:border-accent">
      <input
        type="email"
        required
        aria-label="Email address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email address"
        className="flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-ink-2/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-accent transition-colors hover:text-ink disabled:opacity-60"
      >
        {status === "loading" ? "…" : "subscribe →"}
      </button>
      {status === "error" && <span className="font-mono text-[11px] text-accent">retry</span>}
    </form>
  );
}
