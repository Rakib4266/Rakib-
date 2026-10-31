import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, skillGroups, experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: `Learn more about ${profile.name}, a ${profile.role} & ${profile.specialty} from ${profile.location}.`,
};

const quickFacts = [
  { label: "Location", value: profile.location, icon: "📍" },
  { label: "University", value: profile.university, icon: "🎓" },
  { label: "Focus", value: "Blockchain & Web3 Development", icon: "⛓️" },
  { label: "Currently", value: "Studying & building dApps", icon: "⚡" },
];

const interests = [
  {
    title: "Web3 & DeFi",
    detail:
      "Exploring decentralized finance protocols, tokenomics and how smart contracts reshape traditional systems.",
    icon: "🌐",
  },
  {
    title: "Smart Contract Security",
    detail:
      "Studying common vulnerabilities like reentrancy and overflow attacks — because security is the foundation of trustless systems.",
    icon: "🛡️",
  },
  {
    title: "Open Source",
    detail:
      "Contributing to web3 tooling and learning in public. Git, community and shared knowledge move ecosystems forward.",
    icon: "🧩",
  },
  {
    title: "Hackathons",
    detail:
      "Competing in web3 hackathons to turn ideas into working prototypes under pressure — the fastest way to learn.",
    icon: "🚀",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="glow -top-40 right-1/4 h-[24rem] w-[24rem] bg-emerald-500/25"
      />
      <div
        aria-hidden
        className="glow top-1/2 left-0 h-[20rem] w-[20rem] bg-indigo-500/20"
      />

      <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-emerald-400">
            {"// more about me"}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            {profile.role} · {profile.specialty} — {profile.location}
          </p>
        </Reveal>

        {/* Bio */}
        <Reveal delay={100}>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-slate-400">
            <p>{profile.about}</p>
            <p>
              My journey started with curiosity about how money, trust and code
              can come together. That led me deep into blockchain — writing
              Solidity, deploying contracts on testnets, and building
              decentralized frontends that talk to the chain. Along the way I
              also became a solid full-stack engineer, because every great dApp
              needs a great app behind it.
            </p>
            <p>
              Right now I&apos;m looking for internships, freelance work and
              collaborations where I can contribute to real web3 products while
              continuing to grow as a developer.
            </p>
          </div>
        </Reveal>

        {/* Quick facts */}
        <Reveal delay={150}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="card rounded-xl p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  <span aria-hidden className="mr-2">
                    {fact.icon}
                  </span>
                  {fact.label}
                </p>
                <p className="mt-2 font-medium text-slate-100">{fact.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* What I'm passionate about */}
        <Reveal>
          <div className="mt-24">
            <SectionHeading index="⚡" title="What Drives Me" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {interests.map((item) => (
                <div key={item.title} className="card rounded-xl p-6">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
                    <span aria-hidden>{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills overview */}
        <Reveal>
          <div className="mt-24">
            <SectionHeading index="🧰" title="My Toolbox" />
            <div className="mt-12 space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 font-semibold text-slate-100">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Journey */}
        <Reveal>
          <div className="mt-24">
            <SectionHeading index="🧭" title="My Journey" />
            <div className="mt-12 max-w-3xl">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="relative border-l border-slate-800 pb-10 pl-8 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-slate-950" />
                  <p className="font-mono text-xs text-emerald-400">
                    {exp.period}
                  </p>
                  <h3 className="mt-1 font-semibold text-slate-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-400">{exp.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {exp.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-100">
              Want to work together?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              I&apos;m open to internships, freelance projects and web
              development collaborations — especially anything involving
              blockchain.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
              >
                Say Hello
              </a>
              <Link
                href="/#projects"
                className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                See My Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
