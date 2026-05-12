"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo on the left */}
        <a href="#top" className="flex items-center gap-3">
          <div className="relative w-12 h-12 lg:w-14 lg:h-14">
            <Image
              src="/logo.webp"
              alt="BCN-Immobilier"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Center nav */}
        <nav
          className={`hidden lg:flex items-center gap-10 text-sm font-medium ${
            scrolled ? "text-ink" : "text-ink"
          }`}
        >
          <a href="#expertise" className="hover:text-orange transition-colors">
            Expertise
          </a>
          <a href="#services" className="hover:text-orange transition-colors">
            Services
          </a>
          <a href="#processus" className="hover:text-orange transition-colors">
            Processus
          </a>
          <a href="#clients" className="hover:text-orange transition-colors">
            Clients
          </a>
        </nav>

        {/* Contact CTA */}
        <a href="#contact" className="hidden lg:inline-flex btn-pill text-xs">
          Contactez-nous
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ink"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-transform ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-transform ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-black/5 mt-3">
          <div className="px-6 py-6 flex flex-col gap-4">
            {["Expertise", "Services", "Processus", "Clients", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  onClick={() => setOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium py-2 border-b border-black/5"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
