"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/kits", label: "Kits" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-purple rounded-2xl flex items-center justify-center text-white text-lg font-black">
              🤖
            </div>
            <span className="text-xl font-black text-brand-navy">
              Robotix<span className="text-brand-purple">Academy</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-brand-navy hover:text-brand-purple transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-orange text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-orange-500 transition-all hover:scale-105"
            >
              Enroll Now 🚀
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl text-brand-navy"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brand-navy hover:text-brand-purple px-2 py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-brand-orange text-white text-sm font-bold px-5 py-2 rounded-full text-center"
            >
              Enroll Now 🚀
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
