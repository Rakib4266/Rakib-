import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

const icons: Record<string, string> = {
  Blockchain: "⛓️",
  Frontend: "🖥️",
  "Backend & Tools": "🛠️",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Skills & Technologies" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="card h-full rounded-xl p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-100">
                <span aria-hidden>{icons[group.title] ?? "💻"}</span>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
