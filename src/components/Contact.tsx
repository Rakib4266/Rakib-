import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="05" title="Get In Touch" />
      </Reveal>

      <Reveal>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg text-slate-400">
            I&apos;m always open to new opportunities, collaborations, or a
            friendly chat about blockchain and web development. Whether you have
            a question or just want to say hi — my inbox is always open.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="card rounded-lg px-6 py-3 font-medium text-emerald-400"
            >
              ✉️ {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card rounded-lg px-6 py-3 font-medium text-slate-200"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="card rounded-lg px-6 py-3 font-medium text-slate-200"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
