import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Featured Projects" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="card group block h-full rounded-xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span aria-hidden className="text-3xl">
                  🔗
                </span>
                <span className="text-slate-500 transition group-hover:text-emerald-400">
                  ↗
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-slate-100 transition group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-emerald-400/80">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-slate-500">
          More projects on my{" "}
          <a
            href="https://github.com/"
            className="text-emerald-400 underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
