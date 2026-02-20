"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Sorenkein
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-white text-sm font-medium">
          <Link href="#services" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="#work" className="hover:text-primary transition">
            Portfolio
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition">
            Testimonials
          </Link>

          <Link
            href="#contact"
            className="bg-primary px-6 py-2 rounded-full text-white hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
