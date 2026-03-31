"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Clock, AlertTriangle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-background py-24">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Get in touch — or book a demo
            </h1>
            <p className="text-[17px] text-text-secondary max-w-[540px] mx-auto">
              Whether you have a question about Fieldpin or want to see it in action for your team, we&apos;re here.
            </p>
          </div>
        </section>

        {/* Form + info */}
        <section className="bg-background pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-[60%_40%] gap-8">
              {/* Form */}
              <ScrollReveal>
                <div className="bg-surface rounded-xl border border-border p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Mail size={28} className="text-accent" />
                      </div>
                      <h3 className="text-[20px] font-bold text-text-primary mb-2">Message sent!</h3>
                      <p className="text-[15px] text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[14px] font-medium text-text-primary mb-1.5">Name</label>
                          <input required className="w-full h-11 rounded-lg border border-border bg-background px-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-[14px] font-medium text-text-primary mb-1.5">Agency name</label>
                          <input className="w-full h-11 rounded-lg border border-border bg-background px-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Park Service, etc." />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-text-primary mb-1.5">Role</label>
                        <select className="w-full h-11 rounded-lg border border-border bg-background px-3 text-[15px] text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent">
                          <option>Ranger</option>
                          <option>Lead Ranger / Supervisor</option>
                          <option>Agency Administrator</option>
                          <option>IT / Technical</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-text-primary mb-1.5">Rangers in team</label>
                        <select className="w-full h-11 rounded-lg border border-border bg-background px-3 text-[15px] text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent">
                          <option>1-5</option>
                          <option>6-20</option>
                          <option>21-50</option>
                          <option>50+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[14px] font-medium text-text-primary mb-1.5">Message</label>
                        <textarea required rows={4} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your team and what you're looking for..." />
                      </div>
                      <label className="flex items-center gap-2 text-[14px] text-text-secondary cursor-pointer">
                        <input type="checkbox" className="rounded border-border text-accent focus:ring-accent" />
                        I&apos;d like a live demo
                      </label>
                      <button type="submit" className="w-full h-11 rounded-lg bg-accent text-white text-[15px] font-medium hover:bg-accent-hover transition-colors">
                        Send message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Info card */}
              <ScrollReveal delay={0.1}>
                <div className="bg-surface rounded-xl border border-border p-8 space-y-6" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold text-text-primary mb-1">Email</h4>
                      <p className="text-[14px] text-text-secondary">support@getfieldpin.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold text-text-primary mb-1">Response time</h4>
                      <p className="text-[14px] text-text-secondary">We respond within 24 hours on business days. Agency plan customers get priority support with 4-hour response.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold text-text-primary mb-1">Urgent field issues</h4>
                      <p className="text-[14px] text-text-secondary">If you&apos;re experiencing a sync failure in the field, email urgent@getfieldpin.com for immediate assistance.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
