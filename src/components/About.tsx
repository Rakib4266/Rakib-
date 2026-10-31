import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About Me" />
      </Reveal>

      <Reveal>
        <div className="mt-8 max-w-3xl space-y-6 text-slate-400">
          <p className="text-lg leading-relaxed">{profile.about}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card rounded-xl p-5">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
                <span aria-hidden>🎓</span> Education
              </h3>
              <p className="text-sm leading-relaxed">
                {profile.university}
                <br />
                Software Engineering / CSE — Dhaka, Bangladesh
              </p>
            </div>
            <div className="card rounded-xl p-5">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
                <span aria-hidden>⚡</span> What I Do
              </h3>
              <p className="text-sm leading-relaxed">
                Smart contracts, dApps, and full-stack web applications — from
                Solidity and Hardhat to React and Node.js.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link
              href="/about"
              className="font-mono text-sm text-emerald-400 transition hover:text-emerald-300"
            >
              read more about me →
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
