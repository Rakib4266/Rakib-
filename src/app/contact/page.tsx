import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name}, ${profile.role} & ${profile.specialty} based in ${profile.location}.`,
};

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/rakibulhasan4266", href: profile.linkedin },
  { label: "GitHub", value: "github.com", href: profile.github },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <Reveal>
        <SectionHeading index="05" title="Contact Me" />
      </Reveal>

      <Reveal delay={50}>
        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          I&apos;m always open to new opportunities, collaborations, or a
          friendly chat about blockchain and web development. Fill in the form
          below or reach out directly through one of the channels — my inbox is
          always open.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={100}>
          <div className="card rounded-xl p-8">
            <h3 className="mb-6 font-mono text-emerald-400">$ send-message</h3>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="card block rounded-xl p-6"
              >
                <p className="font-mono text-sm text-slate-400">{c.label}</p>
                <p className="mt-1 break-all font-medium text-emerald-400">
                  {c.value}
                </p>
              </a>
            ))}
            <div className="card rounded-xl p-6">
              <p className="font-mono text-sm text-slate-400">Location</p>
              <p className="mt-1 font-medium text-slate-200">
                {profile.location}
              </p>
              <p className="mt-4 font-mono text-sm text-slate-400">
                Availability
              </p>
              <p className="mt-1 flex items-center gap-2 font-medium text-slate-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Open to opportunities
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
