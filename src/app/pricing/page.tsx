"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Check, X as XIcon } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { name: "Rangers included", pilot: "Up to 5", pro: "Unlimited", agency: "Unlimited" },
  { name: "Report templates", pilot: "3 built-in", pro: "Custom", agency: "Custom" },
  { name: "Offline GPS pinning", pilot: true, pro: true, agency: true },
  { name: "Photo capture", pilot: true, pro: true, agency: true },
  { name: "Data retention", pilot: "14 days", pro: "Unlimited", agency: "Unlimited" },
  { name: "Agency dashboard", pilot: false, pro: true, agency: true },
  { name: "CSV & PDF export", pilot: false, pro: true, agency: true },
  { name: "SSO / SAML", pilot: false, pro: false, agency: true },
  { name: "Dedicated account manager", pilot: false, pro: false, agency: true },
  { name: "API access", pilot: false, pro: false, agency: true },
  { name: "SOC 2 compliance reports", pilot: false, pro: false, agency: true },
  { name: "SLA guarantee", pilot: false, pro: false, agency: true },
  { name: "Email support", pilot: true, pro: true, agency: true },
  { name: "Priority support", pilot: false, pro: true, agency: true },
];

const pricingFaqs = [
  { q: "Can I upgrade from Pilot to Professional?", a: "Yes. Your Pilot data transfers seamlessly to Professional. The $49 Pilot fee is not credited toward Professional pricing, but your data and ranger accounts carry over." },
  { q: "Is there a free trial for Professional?", a: "The Pilot plan serves as our trial — it's a one-time $49 fee with no recurring charges. If you need more than 5 rangers or longer retention, upgrade to Professional." },
  { q: "Do you support annual billing?", a: "Professional is billed monthly. Agency is billed annually with a significant per-user discount. Contact us for custom billing arrangements." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH transfers, and purchase orders for Agency plans. Government procurement billing is fully supported." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-text-primary py-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Find the right plan for your team
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className={`text-[14px] ${!annual ? "text-white" : "text-white/50"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-accent" : "bg-white/20"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${annual ? "left-6" : "left-0.5"}`} />
              </button>
              <span className={`text-[14px] ${annual ? "text-white" : "text-white/50"}`}>Annual</span>
              {annual && <span className="px-2.5 py-1 rounded-full bg-amber/30 text-amber-light text-[12px] font-medium">Saves 18%</span>}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-background py-16">
          <div className="max-w-[960px] mx-auto px-6">
            <div className="bg-surface rounded-xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-6 py-4 text-[12px] tracking-[0.06em] uppercase text-text-muted font-medium w-[40%]">Feature</th>
                      <th className="text-center px-4 py-4">
                        <div className="text-[14px] font-bold text-text-primary">Pilot</div>
                        <div className="text-[20px] font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>$49</div>
                        <div className="text-[12px] text-text-muted">one-time</div>
                      </th>
                      <th className="text-center px-4 py-4 bg-accent/5">
                        <div className="text-[14px] font-bold text-accent">Professional</div>
                        <div className="text-[20px] font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>$25</div>
                        <div className="text-[12px] text-text-muted">/user/mo</div>
                      </th>
                      <th className="text-center px-4 py-4">
                        <div className="text-[14px] font-bold text-text-primary">Agency</div>
                        <div className="text-[20px] font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>$49</div>
                        <div className="text-[12px] text-text-muted">/user/mo annual</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((f, i) => (
                      <tr key={f.name} className={`border-b border-border ${i % 2 === 1 ? "bg-background" : ""}`}>
                        <td className="px-6 py-3 text-[14px] text-text-primary">{f.name}</td>
                        {(["pilot", "pro", "agency"] as const).map((plan) => {
                          const val = f[plan];
                          return (
                            <td key={plan} className={`px-4 py-3 text-center ${plan === "pro" ? "bg-accent/5" : ""}`}>
                              {val === true ? (
                                <Check size={16} className="text-accent mx-auto" />
                              ) : val === false ? (
                                <XIcon size={16} className="text-text-muted/40 mx-auto" />
                              ) : (
                                <span className="text-[13px] text-text-secondary">{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-text-primary mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>Pricing FAQ</h2>
            <Accordion>
              {pricingFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`pf-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-[16px] font-bold text-text-primary py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-text-secondary pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Govt note */}
        <section className="bg-background pb-16">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="bg-accent-light/15 border border-accent/20 rounded-xl p-8 text-center">
              <h3 className="text-[18px] font-bold text-accent mb-2">Government Procurement</h3>
              <p className="text-[15px] text-accent/80">
                We support government procurement billing. Single annual invoice, PO-friendly.{" "}
                <Link href="/contact" className="underline font-medium">Contact us</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-16">
          <div className="max-w-[760px] mx-auto px-6 text-center">
            <h2 className="text-[28px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Start protecting data accuracy today
            </h2>
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-white text-accent text-[16px] font-medium px-7 py-3.5 hover:bg-white/90 transition-colors">
              Start your free pilot &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
