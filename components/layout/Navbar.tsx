"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor", label: "Start Journey" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-beige-200"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="container-custom h-20 flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="InnerLight Counselling — go to homepage"
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            {/* Inline SVG leaf/light icon */}
            <span className="relative w-9 h-9 flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="18" cy="18" r="18" fill="#7A9E87" opacity="0.15" />
                <path
                  d="M18 8C18 8 10 13 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 13 18 8 18 8Z"
                  fill="#7A9E87"
                />
                <path
                  d="M18 8L18 28"
                  stroke="#2D4A3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 22C18 22 14 18 12 16"
                  stroke="#2D4A3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 18C18 18 21 15 23 14"
                  stroke="#2D4A3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display font-semibold text-lg transition-colors duration-300 ${
                  scrolled ? "text-sage-900" : "text-white"
                } group-hover:text-sage-500`}
              >
                InnerLight
              </span>
              <span
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-sage-500" : "text-sage-200"
                }`}
              >
                Counselling
              </span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-sage-100 hover:text-sage-700 ${
                    scrolled ? "text-sage-800" : "text-white hover:text-sage-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="!px-6 !py-2.5"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-colors duration-200 hover:bg-sage-100 ${
              scrolled ? "text-sage-800" : "text-white"
            }`}
          >
            <span
              className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-sage-900/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-20 flex items-center justify-end px-6 border-b border-beige-200">
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-beige-100 transition-colors text-sage-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto p-6">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-sage-800 font-medium hover:bg-sage-50 hover:text-sage-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 border-t border-beige-200">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
