"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WifiOff, ClipboardList, Sun } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Mission Hero */}
        <section className="bg-accent py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[11px] tracking-[0.12em] uppercase text-white/60 mb-4">OUR MISSION</p>
            <h1
              className="text-[32px] md:text-[48px] font-bold text-white leading-tight max-w-[760px] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fieldpin exists so that the moment of observation is also the moment of record.
            </h1>
            <p className="text-[18px] text-white/80 max-w-[620px] leading-relaxed">
              We build tools for the professionals who protect wild places — tools that work as hard as they do, in conditions where other software gives up.
            </p>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="bg-background py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <blockquote
                  className="text-[24px] md:text-[28px] text-text-primary leading-snug italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;A ranger completes a 6-hour patrol and spends 2 more hours re-entering notes. The GPS coordinates are approximate. The data that shapes habitat decisions is already wrong.&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-[16px] text-text-secondary leading-[1.8]">
                  We spent six months shadowing park rangers, wildlife officers, and field researchers. We rode in trucks, hiked through backcountry, and watched people scribble GPS coordinates on waterproof paper. Every evening, we watched the same ritual: rangers returning to base, transcribing paper notes into clunky software that was designed for someone sitting at a desk.
                </p>
                <p className="text-[16px] text-text-secondary leading-[1.8] mt-4">
                  The data that informs conservation decisions — habitat assessments, wildlife population counts, trail conditions, incident reports — was being degraded at every step. Approximate GPS coordinates. Fading memories of exact conditions. Photos disconnected from locations. We knew there had to be a better way.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-surface py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <ClipboardList size={28} className="text-accent" />, title: "Templates for ranger forms — not a generic tool", desc: "Every field in Fieldpin was designed for the specific data rangers collect. Wildlife sightings, incident reports, trail conditions — pre-built and field-tested." },
                { icon: <WifiOff size={28} className="text-accent" />, title: "Offline-first architecture — not a feature bolted on", desc: "We didn't add offline mode to a cloud app. We built an offline app that syncs to the cloud. The difference is fundamental and you'll feel it in the field." },
                { icon: <Sun size={28} className="text-accent" />, title: "We think about the gloved hand in sunlight", desc: "44px touch targets. High-contrast screens. Forms designed to be filled in 47 seconds. Every pixel serves the person in the field, not the analyst in the office." },
              ].map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 0.08}>
                  <div className="bg-surface rounded-lg border border-border p-8 h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="mb-4">{d.icon}</div>
                    <h3 className="text-[18px] font-bold text-text-primary mb-3">{d.title}</h3>
                    <p className="text-[15px] text-text-secondary leading-relaxed">{d.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-[32px] font-bold text-text-primary mb-8" style={{ fontFamily: "var(--font-display)" }}>Built by ChimeStream</h2>
              <div className="bg-surface rounded-xl border border-border border-l-4 border-l-accent p-8 max-w-[640px]" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-[16px] text-text-secondary leading-relaxed mb-4">
                  ChimeStream is a product studio that builds purpose-built tools for underserved professional workflows. Fieldpin is our first product — born from months of field research with park rangers and wildlife officers across three states.
                </p>
                <p className="text-[14px] text-text-muted">
                  getfieldpin.com
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-20">
          <div className="max-w-[760px] mx-auto px-6 text-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Ready to see what accurate field data looks like?
            </h2>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-white text-accent text-[16px] font-medium px-7 py-3.5 hover:bg-white/90 transition-colors"
            >
              Start your free pilot &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
