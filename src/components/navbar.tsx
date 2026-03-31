"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200 ${
          scrolled
            ? "bg-background/95 backdrop-blur border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-accent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fieldpin
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[15px] text-text-secondary hover:text-text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground text-[15px] font-medium px-5 py-2.5 hover:bg-accent-hover transition-colors"
            >
              Start Pilot
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-background flex flex-col animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between p-6">
              <span
                className="text-xl font-bold text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fieldpin
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] text-text-secondary hover:text-text-primary py-3 border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-[16px] text-text-secondary hover:text-text-primary py-3 border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
            </div>
            <div className="p-6">
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground text-[15px] font-medium px-5 py-3 hover:bg-accent-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start Pilot
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
