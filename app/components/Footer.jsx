"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaReddit,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Sorenkein</span>{" "}
            <span className="text-red-600">Agency</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            We craft modern digital experiences that help brands grow. From
            websites to full-scale platforms, we build with performance and
            creativity in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <p className="text-gray-400 text-sm mb-2">
            📧{" "}
            <a
              href="mailto:sreecharan@gmail.com"
              className="hover:text-white transition"
            >
              sreecharan@gmail.com
            </a>
          </p>

          <p className="text-gray-400 text-sm mb-2">
            📞{" "}
            <a href="tel:+917569070041" className="hover:text-white transition">
              +91 75690 70041
            </a>
          </p>

          <p className="text-gray-400 text-sm mb-4">📍 Bangalore, India</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 text-gray-400">
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://reddit.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaReddit />
            </a>

            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-red-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Let’s Talk
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
        © {year} Sorenkein Agency. All rights reserved.
      </div>
    </footer>
  );
}
