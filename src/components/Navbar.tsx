"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-semibold">
          <span className="text-emerald-400">&lt;</span>
          rakib
          <span className="gradient-text">.dev</span>
          <span className="text-emerald-400">/&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={
                  pathname === l.href
                    ? "text-emerald-400"
                    : "transition hover:text-emerald-400"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-slate-300 transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-300 transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-300 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-slate-800/60 px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.label} className="py-2">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block ${pathname === l.href ? "text-emerald-400" : "text-slate-300"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
