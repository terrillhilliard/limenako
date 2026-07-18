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
      <p className="font-serif text-lg italic text-sand">
        You&rsquo;re in. Welcome to the ritual.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-paper/25 py-2 focus-within:border-sand">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 bg-transparent text-sm text-paper outline-none placeholder:text-paper/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="shrink-0 text-[11px] font-semibold uppercase tracking-wide-sm text-sand transition-colors hover:text-paper disabled:opacity-60"
      >
        {status === "loading" ? "…" : "Subscribe →"}
      </button>
      {status === "error" && (
        <span className="text-[11px] text-terra-bright">Try again</span>
      )}
    </form>
  );
}
