"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Portfolio message from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-sm text-slate-400">
            Your name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-sm text-slate-400">
            Your email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-mono text-sm text-slate-400">
          Message
        </span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi Rakib, I found your portfolio and..."
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        className="card rounded-lg px-6 py-3 font-medium text-emerald-400"
      >
        Send Message →
      </button>
    </form>
  );
}
