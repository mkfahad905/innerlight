"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useState, useEffect } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "/#session-fee", label: "Session Fee" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "/start-your-journey", label: "Start Journey" },
];

const SCROLL_THRESHOLD = 48;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");
  const reduceMotion = useReducedMotion();

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);

    if (window.location.pathname !== "/") return;

    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    event.preventDefault();
    if (window.location.hash !== "#home") {
      window.history.pushState(null, "", "/#home");
    }
    setActiveHref("#home");
    homeSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleSessionFeeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setActiveHref("#session-fee");
    setMobileOpen(false);

    if (window.location.pathname !== "/") return;

    const sessionFeeSection = document.getElementById("session-fee");
    if (!sessionFeeSection) return;

    event.preventDefault();
    if (window.location.hash !== "#session-fee") {
      window.history.pushState(null, "", "/#session-fee");
    }
    sessionFeeSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        setScrolled((current) => {
          const next = window.scrollY > SCROLL_THRESHOLD;
          return current === next ? current : next;
        });
        frameId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const updateActiveHref = () => {
      if (window.location.pathname === "/start-your-journey") {
        setActiveHref("/start-your-journey");
        return;
      }

      setActiveHref(window.location.hash || "#about");
    };

    updateActiveHref();
    window.addEventListener("hashchange", updateActiveHref);
    return () => window.removeEventListener("hashchange", updateActiveHref);
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
    <LazyMotion features={domAnimation}>
      <m.header
        role="banner"
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-beige-50/92 backdrop-blur-md shadow-[0_8px_28px_-24px_rgba(45,74,62,0.42)] border-b border-beige-200/80"
            : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="container-custom flex h-18 items-center justify-between lg:h-20"
        >
          {/* Logo */}
          <m.div
            className="flex flex-shrink-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <Link
              href="/#home"
              aria-label="InnerLight Counselling — go to homepage"
              className="flex items-center gap-2.5 group"
              onClick={handleLogoClick}
            >
              <Image
                src={scrolled ? "/innerlight-logo-light.svg" : "/innerlight-logo-dark.svg"}
                alt=""
                width={200}
                height={61}
                className="h-auto w-[172px] lg:w-[200px]"
                aria-hidden="true"
              />
            </Link>
          </m.div>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={
                    link.href === "/#session-fee"
                      ? handleSessionFeeClick
                      : undefined
                  }
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:opacity-55 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    scrolled
                      ? "text-sage-800 hover:bg-sage-100 hover:text-sage-700"
                      : "text-white/92 hover:text-white"
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
              href="/start-your-journey"
              variant="primary"
              size="sm"
              className={`!px-6 !py-2.5 ${
                scrolled
                  ? ""
                  : "border border-white/70 !bg-white/10 !text-white shadow-none backdrop-blur-sm hover:!bg-white hover:!text-sage-900 hover:shadow-[0_10px_28px_-18px_rgba(255,255,255,0.85)]"
              }`}
            >
              Book Your Session
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
      </m.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <m.div
              className="absolute inset-0 bg-[rgba(25,25,25,0.25)] backdrop-blur-[6px]"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Drawer */}
            <m.div
              className="absolute right-0 top-0 flex h-full w-72 max-w-[88vw] flex-col overflow-hidden rounded-l-[2rem] border-l border-white/70 bg-[rgba(247,244,238,0.92)] shadow-[0_24px_80px_-24px_rgba(45,74,62,0.45)] backdrop-blur-[20px]"
              initial={reduceMotion ? false : { opacity: 0, x: 64 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: 64 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-18 items-center justify-between gap-4 border-b border-sage-200/50 px-5">
                <Link
                  href="/#home"
                  aria-label="InnerLight Counselling homepage"
                  className="flex min-w-0 items-center"
                  onClick={handleLogoClick}
                >
                  <Image
                    src="/innerlight-logo-light.svg"
                    alt=""
                    width={170}
                    height={52}
                    className="h-auto w-[170px] max-w-full"
                    aria-hidden="true"
                  />
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800 transition-colors duration-200 hover:bg-sage-900 hover:text-white"
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

              <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-4">
                <m.ul
                  className="flex flex-col gap-2"
                  role="list"
                  initial={reduceMotion ? false : "hidden"}
                  animate={reduceMotion ? undefined : "visible"}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.08,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => {
                    const isActive =
                      activeHref === link.href ||
                      (link.href === "/#session-fee" &&
                        activeHref === "#session-fee");

                    return (
                      <m.li
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={(event) => {
                            if (link.href === "/#session-fee") {
                              handleSessionFeeClick(event);
                              return;
                            }
                            setActiveHref(link.href);
                            setMobileOpen(false);
                          }}
                          className={`flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold transition-all duration-200 hover:translate-x-1.5 hover:bg-sage-100/70 hover:text-sage-900 ${
                            isActive
                              ? "bg-sage-100 text-sage-900"
                              : "text-sage-800"
                          }`}
                        >
                          {link.label}
                        </a>
                      </m.li>
                    );
                  })}
                </m.ul>
              </nav>

              <div className="border-t border-sage-200/50 p-5">
                <Button
                  as="a"
                  href="/start-your-journey"
                  variant="primary"
                  size="md"
                  className="w-full bg-sage-900! hover:bg-sage-700!"
                  onClick={() => {
                    setActiveHref("/start-your-journey");
                    setMobileOpen(false);
                  }}
                >
                  Book Your Session
                </Button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
