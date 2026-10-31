import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Experience & Education" />
      </Reveal>

      <div className="mt-12 max-w-3xl">
        {experiences.map((exp, i) => (
          <Reveal key={exp.title} delay={i * 100}>
            <div className="relative border-l border-slate-800 pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-slate-950" />
              <p className="font-mono text-xs text-emerald-400">{exp.period}</p>
              <h3 className="mt-1 font-semibold text-slate-100">{exp.title}</h3>
              <p className="text-sm text-slate-400">{exp.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {exp.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
