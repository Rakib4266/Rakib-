import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center">
      <p className="font-mono text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name} · Built with{" "}
        <span className="text-emerald-400">Next.js</span> &amp;{" "}
        <span className="text-emerald-400">Tailwind CSS</span>
      </p>
      <p className="mt-2 text-xs text-slate-600">{profile.location}</p>
    </footer>
  );
}
