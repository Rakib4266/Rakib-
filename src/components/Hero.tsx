"use client";

import { useEffect, useState } from "react";
import { profile, typedLines } from "@/lib/data";

/** Types and deletes each line from `lines` in an endless loop. */
function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[line % lines.length];
    const done = text === current;
    const timeout = setTimeout(
      () => {
        if (!deleting && done) {
          setDeleting(true);
          return;
        }
        if (deleting && text === "") {
          setDeleting(false);
          setLine((l) => (l + 1) % lines.length);
          return;
        }
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      },
      deleting ? 45 : done ? 1800 : 90,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, line, lines]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(typedLines);

  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="glow -top-32 left-1/4 h-[28rem] w-[28rem] bg-emerald-500/30"
      />
      <div
        aria-hidden
        className="glow top-1/3 right-0 h-[24rem] w-[24rem] bg-indigo-500/25"
      />
      <div
        aria-hidden
        className="glow bottom-0 left-0 h-[20rem] w-[20rem] bg-cyan-500/20"
      />

      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="mb-4 font-mono text-sm text-emerald-400">
          {"// hello world, I'm"}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <h2 className="gradient-text mt-3 text-2xl font-semibold sm:text-4xl md:text-5xl">
          {typed}
          <span className="caret" aria-hidden />
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.tagline} Currently studying at{" "}
          <span className="text-slate-200">{profile.university}</span>, based in{" "}
          {profile.location}.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Get In Touch
          </a>
        </div>
      </div>
      

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-emerald-400"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-600 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-emerald-400" />
        </span>
      </a>
    </header>
  );
}
