import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Mobile App", href: "/#features" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/about" },
  { label: "Careers", href: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span
              className="text-xl font-bold text-accent-light block mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fieldpin
            </span>
            <p className="text-[14px] text-white/60 leading-relaxed mb-4">
              Field reporting that works where you work.
            </p>
            <p className="text-[12px] text-white/40">
              &copy; 2026 Fieldpin. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] tracking-[0.1em] uppercase text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.1em] uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] tracking-[0.1em] uppercase text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-white/60 mt-4">
              support@getfieldpin.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-[12px] italic text-white/30 text-center">
            Built for rangers who work without signal.
          </p>
        </div>
      </div>
    </footer>
  );
}
