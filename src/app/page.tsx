"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Clock,
  AlertCircle,
  Unlink2,
  CheckCircle2,
  MapPin,
  WifiOff,
  ClipboardList,
  Camera,
  RefreshCw,
  LayoutDashboard,
  Network,
  ArrowRight,
  Check,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopoPattern } from "@/components/topo-pattern";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PhoneMockup } from "@/components/phone-mockup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesBento />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ─── Section 1: HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <TopoPattern />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-light/20 text-accent text-[12px] mb-6"
            >
              <Leaf size={12} />
              Built for field teams, not GIS analysts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[40px] md:text-[64px] leading-[1.05] font-bold text-text-primary mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Field data that doesn&apos;t wait for Wi-Fi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-[18px] text-text-secondary leading-[1.6] max-w-[520px] mb-8"
            >
              Fieldpin works offline, exactly where rangers work. Drop a pin, log the
              sighting, take the photo — it all syncs the moment signal returns. No
              pencil. No re-entry. No lost data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-white text-[16px] font-medium px-7 py-3.5 hover:bg-accent-hover transition-colors hover:scale-[1.01]"
              >
                Start your free pilot
              </Link>
              <a
                href="#how-it-works"
                className="text-accent text-[15px] hover:underline"
              >
                See how it works &darr;
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-[13px] text-text-muted"
            >
              500+ rangers in beta &middot; 4.9&#9733; rating
            </motion.p>
          </div>

          {/* Right — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col items-center"
          >
            <div className="transform rotate-[3deg] lg:rotate-[6deg]">
              <PhoneMockup variant="map" />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <span className="flex items-center gap-1.5 text-[13px] text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-pin-wildlife inline-block" />
                Wildlife
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-pin-incident inline-block" />
                Incident
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-pin-trail inline-block" />
                Trail
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: SOCIAL PROOF BAR ─── */
function SocialProofBar() {
  const items = [
    "Trusted by ranger teams in 3 states",
    <span key="pins" style={{ fontFamily: "var(--font-mono)" }} className="font-bold">10,234</span>,
    "pins synced",
    "4.9&#9733; from field users",
    "SOC 2 compliant",
  ];
  return (
    <section className="bg-surface border-y border-border py-6">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[14px] text-text-secondary">
        <span>Trusted by ranger teams in <strong>3 states</strong></span>
        <span className="hidden md:block w-px h-5 bg-border" />
        <span>
          <span className="font-bold" style={{ fontFamily: "var(--font-mono)" }}>10,234</span> pins synced
        </span>
        <span className="hidden md:block w-px h-5 bg-border" />
        <span><strong>4.9&#9733;</strong> from field users</span>
        <span className="hidden md:block w-px h-5 bg-border" />
        <span>SOC 2 compliant</span>
      </div>
    </section>
  );
}

/* ─── Section 3: PROBLEM ─── */
function ProblemSection() {
  const cards = [
    {
      icon: <Clock size={28} className="text-amber" />,
      title: "The re-entry tax",
      body: "Rangers return from 6-hour patrols and spend 2 more hours re-entering notes. GPS coordinates are approximate. Photos are disconnected from locations. The data that shapes habitat decisions is already wrong.",
      stat: "5 days of data degradation",
    },
    {
      icon: <AlertCircle size={28} className="text-amber" />,
      title: "Software that wasn't built for them",
      body: "Existing GIS tools require weeks of training, constant connectivity, and a desk. Rangers need something that works in rain, in gloves, in the backcountry — not another enterprise platform.",
      stat: "3-day training minimum",
    },
    {
      icon: <Unlink2 size={28} className="text-amber" />,
      title: "Nobody talks to nobody",
      body: "One ranger spots an injured animal. Another finds illegal camping. A third marks a trail washout. Three observations that together tell a story — but they never connect because each one lives in a separate notebook.",
      stat: "Zero cross-ranger visibility",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-text-primary max-w-[680px] mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conservation decisions run on whatever survives the trip back to base
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08}>
              <div className="bg-surface rounded-lg border border-border p-8 h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-[18px] font-bold text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.65] mb-4">
                  {card.body}
                </p>
                <p
                  className="text-[12px] text-amber font-medium"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {card.stat}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: SOLUTION ─── */
function SolutionSection() {
  const points = [
    "Offline-first architecture — not a feature bolted on",
    "Pre-built ranger templates — not a form builder",
    "10-minute setup — not a 3-day training",
  ];
  return (
    <section className="bg-accent text-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.12em] uppercase text-white/70 mb-4">
              THE FIELDPIN APPROACH
            </p>
            <h2
              className="text-[32px] md:text-[48px] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for hands that might be wearing gloves
            </h2>
            <p className="text-[17px] text-white/85 leading-[1.7] mb-8 max-w-[540px]">
              Fieldpin isn&apos;t another form tool with an offline mode. It&apos;s an
              offline tool that happens to sync. Every interaction is designed for
              sunlight-washed screens, cold fingers, and split-second observations.
            </p>
            <div className="space-y-4">
              {points.map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-light mt-0.5 shrink-0" />
                  <span className="text-[16px] text-white/90">{pt}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex justify-center">
            <PhoneMockup variant="form" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: FEATURES BENTO GRID ─── */
function FeaturesBento() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-text-primary mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything a ranger needs. Nothing they don&apos;t.
          </h2>
          <p className="text-[17px] text-text-secondary max-w-[600px] mx-auto">
            Purpose-built features for field data collection, not another Swiss Army knife SaaS.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Feature 1: Offline GPS — large */}
          <ScrollReveal delay={0} className="md:col-span-7 md:row-span-2">
            <div className="bg-text-primary text-white rounded-xl p-7 h-full relative overflow-hidden min-h-[280px]">
              <TopoPattern opacity={0.15} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={24} className="text-amber-light" />
                  <WifiOff size={14} className="text-amber-light" />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-2">Offline GPS pinning</h3>
                <p className="text-[15px] text-white/80 max-w-[400px] mb-6">
                  Drop a pin at the exact GPS coordinate — no cell signal needed. The device&apos;s GPS
                  chip works without data. Fieldpin captures it, stores it, syncs it later.
                </p>
                <div className="font-mono text-amber-light text-[18px] tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                  44.1234°N, -110.5678°W
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2: Templates */}
          <ScrollReveal delay={0.04} className="md:col-span-5 md:row-span-2">
            <div className="bg-accent text-white rounded-xl p-7 h-full min-h-[280px]">
              <ClipboardList size={24} className="text-white mb-3" />
              <h3 className="text-[22px] font-bold text-white mb-2">Pre-built ranger templates</h3>
              <p className="text-[15px] text-white/80 mb-6">
                Three field-tested templates — no form builder needed.
              </p>
              <div className="space-y-2">
                {["🦌 Wildlife Sighting", "⚠️ Incident Report", "🥾 Trail Condition"].map((t) => (
                  <div key={t} className="bg-white/15 rounded-lg px-4 py-2.5 text-[14px] text-white/90">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3: Photo Capture */}
          <ScrollReveal delay={0.08} className="md:col-span-5">
            <div className="bg-surface rounded-xl p-7 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Camera size={24} className="text-accent mb-3" />
              <h3 className="text-[18px] font-bold text-text-primary mb-1">Photo capture per pin</h3>
              <p className="text-[14px] text-text-secondary">
                Attach photos directly to each pin. Geotagged, timestamped, stored offline.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 4: Auto-Sync */}
          <ScrollReveal delay={0.12} className="md:col-span-4">
            <div className="bg-amber text-text-primary rounded-xl p-7">
              <RefreshCw size={24} className="text-text-primary mb-3" />
              <h3 className="text-[18px] font-bold text-text-primary mb-1">Smart auto-sync</h3>
              <p className="text-[14px] text-text-primary/80">
                Data syncs automatically when connectivity returns. No manual upload.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 5: Dashboard */}
          <ScrollReveal delay={0.16} className="md:col-span-3 md:row-span-2">
            <div className="bg-surface rounded-xl p-7 border border-border h-full" style={{ boxShadow: "var(--shadow-card)" }}>
              <LayoutDashboard size={24} className="text-accent mb-3" />
              <h3 className="text-[18px] font-bold text-text-primary mb-1">Agency manager dashboard</h3>
              <p className="text-[14px] text-text-secondary">
                See every ranger&apos;s pins on one map. Filter by type, date, ranger. Export reports in one click.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 6: Network — full width */}
          <ScrollReveal delay={0.2} className="md:col-span-12">
            <div className="bg-border rounded-xl p-7 flex items-center gap-4 flex-wrap">
              <Network size={24} className="text-text-muted" />
              <h3 className="text-[18px] font-bold text-text-muted">Cross-ranger data network</h3>
              <span className="px-3 py-1 rounded-full bg-amber/20 text-amber-hover text-[12px] font-medium">
                COMING SOON
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Drop a pin",
      desc: "Tap your location on the map. Fieldpin captures precise GPS coordinates, even without cell signal.",
      variant: "map" as const,
    },
    {
      num: "02",
      title: "Fill the form",
      desc: "Choose a template — wildlife, incident, or trail — and fill it out with large, glove-friendly inputs.",
      variant: "form" as const,
    },
    {
      num: "03",
      title: "It syncs itself",
      desc: "Walk back into signal range and your data flows to the web dashboard automatically. No button to press.",
      variant: "dashboard" as const,
    },
  ];

  return (
    <section id="how-it-works" className="bg-surface py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-text-primary mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From sighting to report in under 60 seconds
          </h2>
          <p className="text-[14px] text-accent" style={{ fontFamily: "var(--font-mono)" }}>
            Average report time: 47 seconds
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="transform scale-[0.65]">
                    <PhoneMockup variant={step.variant} />
                  </div>
                </div>
                <p
                  className="text-[48px] font-bold text-border mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {step.num}
                </p>
                <h3 className="text-[20px] font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-text-secondary">
                  {step.desc}
                </p>
              </div>
              {i < 2 && (
                <div className="hidden md:flex justify-center mt-[-200px]">
                  <ArrowRight size={24} className="text-border" />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-[14px] text-text-muted">
            Works with your existing agency processes. No IT ticket required.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Section 7: TESTIMONIALS ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I used to spend my Sunday nights re-entering data from the week. Now it's done before I leave the trailhead.",
      name: "Sarah Martinez",
      role: "Wildlife Biologist, Yellowstone NP",
    },
    {
      quote:
        "We went from approximate GPS points on sticky notes to sub-meter accuracy with photos attached. The habitat data is actually trustworthy now.",
      name: "James Okonkwo",
      role: "Lead Ranger, Olympic NP",
    },
    {
      quote:
        "The offline piece isn't a gimmick — it actually works. I've logged sightings 20 miles from the nearest cell tower.",
      name: "Maria Chen",
      role: "Field Researcher, Glacier NP",
    },
  ];

  const stats = [
    { num: "500+", label: "rangers in beta" },
    { num: "94%", label: "sync success rate" },
    { num: "10.2", label: "hrs/week saved per ranger" },
  ];

  return (
    <section className="py-24" style={{ background: "linear-gradient(to bottom, #F5F1E8, #EDE9E0)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What rangers are saying
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="bg-surface rounded-lg p-8 relative h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <span
                  className="absolute top-4 left-6 text-[80px] text-accent/20 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;
                </span>
                <p className="text-[16px] italic text-text-secondary leading-[1.7] mb-6 relative z-10 pt-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-light/30 flex items-center justify-center text-accent text-[14px] font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-text-primary">{t.name}</p>
                    <p className="text-[13px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.06} className="text-center">
              <p
                className="text-[28px] md:text-[36px] font-bold text-text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.num}
              </p>
              <p className="text-[14px] text-text-muted">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: PRICING ─── */
function PricingSection() {
  const plans = [
    {
      badge: "Most Popular for new teams",
      name: "Pilot",
      price: "$49",
      period: "one-time",
      features: [
        "Up to 5 rangers",
        "3 report templates",
        "Offline GPS pinning",
        "Photo capture",
        "14-day data retention",
        "Email support",
      ],
      cta: "Start Pilot",
      highlighted: false,
    },
    {
      badge: "Recommended",
      name: "Professional",
      price: "$25",
      period: "/user/mo",
      features: [
        "Unlimited rangers",
        "Custom report templates",
        "Offline GPS pinning",
        "Photo + video capture",
        "Unlimited data retention",
        "Agency dashboard",
        "CSV & PDF export",
        "Priority support",
      ],
      cta: "Start Professional",
      highlighted: true,
    },
    {
      badge: "Best value for full teams",
      name: "Agency",
      price: "$49",
      period: "/user/mo",
      periodNote: "billed annually",
      features: [
        "Everything in Professional",
        "SSO / SAML integration",
        "Dedicated account manager",
        "Custom onboarding",
        "API access",
        "SOC 2 compliance reports",
        "SLA guarantee",
      ],
      cta: "Contact for Agency",
      highlighted: false,
      ghost: true,
    },
  ];

  return (
    <section className="bg-text-primary py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start with the pilot. Stay for the data.
          </h2>
          <p className="text-[17px] text-white/70 max-w-[600px] mx-auto">
            Government procurement moves slowly. The Pilot gets your team using Fieldpin
            before IT reviews start.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.08}>
              <div
                className={`bg-surface rounded-xl p-8 relative h-full flex flex-col ${
                  plan.highlighted ? "border-l-[3px] border-l-accent" : ""
                }`}
                style={{ boxShadow: "var(--shadow-elevated)" }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-white text-[12px] text-center py-1.5 rounded-t-xl">
                    Recommended
                  </div>
                )}
                <div className={plan.highlighted ? "mt-4" : ""}>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-amber-light/30 text-amber-hover text-[11px] font-medium mb-4">
                    {plan.badge}
                  </span>
                  <h3 className="text-[20px] font-bold text-text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className="text-[56px] font-bold text-text-primary leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[14px] text-text-muted">{plan.period}</span>
                  </div>
                  {plan.periodNote && (
                    <p className="text-[12px] text-text-muted -mt-4 mb-4">{plan.periodNote}</p>
                  )}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[14px] text-text-secondary">
                        <Check size={16} className="text-accent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ghost ? "/contact" : "/signup"}
                    className={`w-full inline-flex items-center justify-center rounded-lg text-[15px] font-medium px-5 py-3 transition-colors ${
                      plan.ghost
                        ? "border border-border text-text-secondary hover:bg-surface-hover"
                        : "bg-accent text-white hover:bg-accent-hover"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-[13px] text-white/50 mt-8">
          14-day money-back guarantee. No setup fees.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 9: FAQ ─── */
function FAQSection() {
  const faqs = [
    {
      q: "Does it really work without any internet connection?",
      a: "Yes. Fieldpin uses your device's built-in GPS chip, which works independently of cell signal. All data is stored locally on the device and syncs automatically when you return to connectivity — Wi-Fi or cellular.",
    },
    {
      q: "How accurate is the GPS without cell signal?",
      a: "Modern smartphone GPS chips provide 3-5 meter accuracy using satellite signals alone. Fieldpin captures this raw GPS data, which is significantly more accurate than hand-recorded coordinates or post-hoc approximations.",
    },
    {
      q: "Can I customize the report templates?",
      a: "The Pilot plan includes three pre-built templates (Wildlife Sighting, Incident Report, Trail Condition). Professional and Agency plans allow custom templates tailored to your agency's specific reporting requirements.",
    },
    {
      q: "What happens if my phone dies before data syncs?",
      a: "All data is persisted to device storage the moment you save it. Even if your phone dies and restarts, your pins are safe and will sync when connectivity returns. We use the same persistence approach as banking apps.",
    },
    {
      q: "Do you support government procurement and PO billing?",
      a: "Yes. We support single annual invoicing, purchase orders, and government procurement billing cycles. Contact us for a W-9 and vendor registration forms. Many of our agency customers go through standard procurement.",
    },
    {
      q: "How long does it take to set up for my team?",
      a: "The Pilot can be set up in under 10 minutes. You create an account, invite your rangers via email, and they download the app. No IT department involvement needed. Professional and Agency plans include dedicated onboarding support.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="max-w-[760px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[40px] font-bold text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real questions from real rangers
          </h2>
        </ScrollReveal>

        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-[16px] font-bold text-text-primary py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-text-secondary pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center mt-8 text-[14px]">
          Still have questions?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Contact us &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Section 10: FINAL CTA ─── */
function FinalCTA() {
  return (
    <section
      className="py-28 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B4332 0%, #6B3A1F 100%)",
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-[760px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2
            className="text-[36px] md:text-[56px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One pilot season. That&apos;s all it takes.
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/80 mb-10 max-w-[540px] mx-auto">
            See the difference when field data is captured at the moment of observation,
            not reconstructed hours later at a desk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-white text-accent text-[16px] font-medium px-7 py-4 hover:bg-white/90 transition-colors"
            >
              Start the $49 Pilot &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white text-[15px] font-medium px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Book a demo for your agency
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
