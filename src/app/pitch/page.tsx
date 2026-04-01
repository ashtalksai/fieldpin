"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, AlertTriangle, Zap, Globe, Footprints, TrendingUp, 
  DollarSign, Shield, Rocket, ChevronLeft, ChevronRight,
  Wifi, WifiOff, FileText, Users, BarChart3, Clock,
  Check, X as XIcon, Minus
} from "lucide-react";

/* ─── Topo background pattern ─── */
function TopoLines({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M0 30 Q15 10 30 30 Q45 50 60 30' fill='none' stroke='%232D6A4F' stroke-width='0.8' opacity='${opacity}'/><path d='M0 50 Q15 30 30 50 Q45 70 60 50' fill='none' stroke='%23D4A017' stroke-width='0.5' opacity='${opacity * 0.6}'/></svg>")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

/* ─── Slide wrapper ─── */
function Slide({ children, bg = "bg-[#1C1A14]", className = "" }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <div className={`h-full w-full flex items-center justify-center px-6 md:px-16 relative overflow-hidden ${bg} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Slide 1: Title ─── */
function TitleSlide() {
  return (
    <Slide>
      <TopoLines opacity={0.08} />
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2D6A4F] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Fieldpin
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-lg">
            Field data that doesn&apos;t wait for Wi-Fi.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span className="font-mono">fieldpin.ashketing.com</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Offline-first field reporting for park rangers</span>
          </div>
          <div className="flex gap-3 mt-10">
            {["#2D6A4F", "#D4A017", "#2D6080"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 2: Problem ─── */
function ProblemSlide() {
  return (
    <Slide bg="bg-[#1C1A14]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#D4550A]/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-[#D4550A]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/40 font-mono">The Problem</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Rangers fill in the same form twice.<br />Every day.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "The Re-Entry Tax", desc: "Paper in the field, spreadsheet at the desk. Same data, entered twice, every single day.", icon: FileText },
            { title: "The Wrong Tool", desc: "Enterprise GIS costs $500+/user/year and needs an IT team. Most rangers never use it.", icon: DollarSign },
            { title: "Data Silos", desc: "Each ranger's notes are isolated. Agencies can't see migration patterns without manually combining everything.", icon: Users },
          ].map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p.icon className="w-5 h-5 text-[#D4550A] mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { num: "10+", label: "hrs/week lost to re-entry" },
            { num: "2,900", label: "monthly searches for simpler tools" },
            { num: "$500+", label: "/user/yr for enterprise GIS" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#D4550A] font-mono">{s.num}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 3: Solution ─── */
function SolutionSlide() {
  return (
    <Slide bg="bg-[#2D6A4F]">
      <TopoLines opacity={0.1} />
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#F2C94C]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/60 font-mono">The Solution</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Drop a pin. Fill the form.<br />Walk away.
        </h2>
        <p className="text-xl text-white/70 mb-12">It syncs itself.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              { step: "01", title: "Drop a pin", desc: "Offline GPS — works without any signal" },
              { step: "02", title: "Fill ranger-specific form", desc: "Wildlife sighting / incident / trail condition templates" },
              { step: "03", title: "Auto-sync when connectivity returns", desc: "No upload button. No manual action. It just syncs." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="text-sm font-bold text-[#F2C94C] font-mono w-8 shrink-0">{s.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-sm text-white/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-sm font-bold text-[#F2C94C] mb-4 font-mono uppercase tracking-wide">The Result</h4>
            <ul className="space-y-3">
              {[
                "No re-entry at the desk",
                "Agency manager sees all pins on a live map",
                "Export to CSV/PDF for compliance in one click",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/80">
                  <Check className="w-4 h-4 text-[#F2C94C] mt-0.5 shrink-0" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 italic">
                &ldquo;Every competitor was built for office analysts, then marketed to rangers. Fieldpin was built for the person in the field with gloves on.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 4: Market ─── */
function MarketSlide() {
  return (
    <Slide bg="bg-[#1C1A14]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-[#2D6A4F]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/40 font-mono">Market Size</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" style={{ fontFamily: "var(--font-display)" }}>
          $1M–$10M ARR opportunity.<br />Government procurement as moat.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "TAM", value: "$1.2B+", desc: "400K+ field staff globally, 3K+ conservation agencies", color: "bg-[#2D6A4F]", textColor: "text-white" },
            { label: "SAM", value: "$450M", desc: "150K ranger-equivalent staff in US/English markets", color: "bg-white/5 border border-white/10", textColor: "text-white" },
            { label: "SOM", value: "$294K", desc: "50 agencies, avg 10 users — Year 1 conservative", color: "bg-white/5 border border-white/10", textColor: "text-white" },
          ].map((m) => (
            <div key={m.label} className={`rounded-xl p-6 ${m.color}`}>
              <span className="text-xs font-bold text-[#D4A017] font-mono uppercase tracking-wider">{m.label}</span>
              <div className={`text-3xl md:text-4xl font-bold mt-2 mb-3 font-mono ${m.textColor}`}>{m.value}</div>
              <p className="text-sm text-white/50">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#2D6A4F]/10 rounded-xl p-6 border border-[#2D6A4F]/20">
          <h4 className="text-sm font-bold text-[#2D6A4F] mb-3 font-mono uppercase tracking-wide">Why Now</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              '"arcgis map viewer" keyword growing +392%',
              "Conservation tech investment accelerating globally",
              "COVID pushed government digital transformation",
              "US mandates driving modern field tool adoption",
            ].map((w) => (
              <div key={w} className="flex items-start gap-2 text-sm text-white/60">
                <TrendingUp className="w-4 h-4 text-[#2D6A4F] mt-0.5 shrink-0" />
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 5: How It Works ─── */
function HowItWorksSlide() {
  return (
    <Slide bg="bg-[#F5F1E8]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
            <Footprints className="w-5 h-5 text-[#2D6A4F]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-[#8A7D65] font-mono">How It Works</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1A14] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          First login to first field report:
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-[#2D6A4F] mb-10 font-mono">10 minutes.</p>
        
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Manager Sets Up", time: "5 min", items: ["Signup → set agency name", "Invite rangers via email", "See demo pins immediately"] },
            { step: "2", title: "Ranger Goes to Field", time: "Ongoing", items: ["GPS locks without network", "Drops a pin at location", "Fills template (5–8 fields)", "Photo attached to pin"] },
            { step: "3", title: "Auto-Sync", time: "Automatic", items: ["Connectivity returns → sync", "No upload button needed", "Manager sees new pins live"] },
            { step: "4", title: "Export for Compliance", time: "2 min", items: ["Filter by date/ranger/type", "Export to CSV or PDF", "Compliance report in minutes"] },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-5 border border-[#D4CDB8]" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#2D6A4F] text-white text-xs font-bold flex items-center justify-center">{s.step}</span>
                <span className="text-xs text-[#8A7D65] font-mono">{s.time}</span>
              </div>
              <h3 className="text-sm font-bold text-[#1C1A14] mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#4A4535]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 6: Traction ─── */
function TractionSlide() {
  return (
    <Slide bg="bg-[#1C1A14]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#D4A017]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/40 font-mono">Traction & Validation</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Rangers are already looking for this.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-bold text-[#D4A017] mb-4 font-mono uppercase tracking-wide">Community Signals</h4>
            <div className="space-y-3">
              {[
                { signal: "r/NationalPark", detail: "1.2M members, active field tech discussions" },
                { signal: '"arcgis map viewer"', detail: "2,900/mo searches, +392% growth" },
                { signal: "Conservation forums", detail: "Consistent complaints about paper + re-entry" },
                { signal: "Facebook Groups", detail: "50K+ members in Conservation Tech Professionals" },
              ].map((s) => (
                <div key={s.signal} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/5">
                  <BarChart3 className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-white">{s.signal}</span>
                    <p className="text-xs text-white/50">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2D6A4F] mb-4 font-mono uppercase tracking-wide">IdeaBrowser Scores</h4>
            <div className="space-y-3 mb-6">
              {[
                { label: "Opportunity", score: "9/10", tag: "Exceptional" },
                { label: "Problem Severity", score: "9/10", tag: "Severe Pain" },
                { label: "Why Now", score: "9/10", tag: "Perfect Timing" },
                { label: "Revenue Potential", score: "$1M–$10M", tag: "ARR" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/5">
                  <span className="text-sm text-white/70">{s.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#2D6A4F] font-mono">{s.score}</span>
                    <span className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded">{s.tag}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#2D6A4F]/10 rounded-lg p-4 border border-[#2D6A4F]/20">
              <h5 className="text-xs font-bold text-[#2D6A4F] mb-2 font-mono">PRODUCT STATUS</h5>
              <p className="text-sm text-white/60">Live at fieldpin.ashketing.com • Full MVP: 19 routes • QA: 59/60 tests passing</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 7: Business Model ─── */
function BusinessModelSlide() {
  return (
    <Slide bg="bg-[#1C1A14]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-[#D4A017]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/40 font-mono">Business Model</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Three tiers. Procurement wedge built in.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { name: "Pilot", price: "$49", period: "one-time", desc: "Small agencies, first season", note: "Bypasses procurement", featured: false },
            { name: "Professional", price: "$25", period: "/user/mo", desc: "Mid-size agencies, monthly", note: "Most popular", featured: true },
            { name: "Agency", price: "$49", period: "/user/mo annual", desc: "Large agencies, compliance + SSO", note: "Full enterprise", featured: false },
          ].map((t) => (
            <div key={t.name} className={`rounded-xl p-6 relative ${t.featured ? "bg-[#2D6A4F] text-white" : "bg-white/5 border border-white/10 text-white"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-6 bg-[#D4A017] text-[#1C1A14] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm font-medium opacity-70 mb-1">{t.name}</h3>
              <div className="text-4xl font-bold font-mono mb-1">{t.price}</div>
              <div className="text-sm opacity-50 mb-4">{t.period}</div>
              <p className="text-sm opacity-70">{t.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h4 className="text-xs font-bold text-[#D4A017] mb-3 font-mono uppercase tracking-wide">Unit Economics</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { metric: "60:1", label: "LTV:CAC" },
                { metric: "$150", label: "CAC" },
                { metric: "$9K", label: "3-yr LTV" },
              ].map((u) => (
                <div key={u.label} className="text-center">
                  <div className="text-xl font-bold text-[#D4A017] font-mono">{u.metric}</div>
                  <div className="text-[10px] text-white/40 mt-1">{u.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h4 className="text-xs font-bold text-[#2D6A4F] mb-3 font-mono uppercase tracking-wide">Revenue Projections</h4>
            <div className="grid grid-cols-4 gap-3">
              {[
                { period: "M3", arr: "$24K" },
                { period: "M6", arr: "$75K" },
                { period: "M12", arr: "$216K" },
                { period: "Y2", arr: "$1.8M" },
              ].map((r) => (
                <div key={r.period} className="text-center">
                  <div className="text-xs text-white/40 font-mono mb-1">{r.period}</div>
                  <div className="text-sm font-bold text-[#2D6A4F] font-mono">{r.arr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 8: Competition ─── */
function CompetitionSlide() {
  const competitors = [
    { name: "Fieldpin", ranger: true, offline: true, templates: true, setup: "10 min", price: "$25-49/mo", highlight: true },
    { name: "ArcGIS Field Maps", ranger: false, offline: "partial", templates: false, setup: "Days + IT", price: "$500+/yr", highlight: false },
    { name: "Fulcrum", ranger: false, offline: "partial", templates: false, setup: "Hours", price: "$25-65/mo", highlight: false },
    { name: "ODK/KoBoToolbox", ranger: false, offline: true, templates: false, setup: "Days", price: "Free", highlight: false },
  ];

  function StatusIcon({ val }: { val: boolean | string }) {
    if (val === true) return <Check className="w-4 h-4 text-[#2D6A4F]" />;
    if (val === false) return <XIcon className="w-4 h-4 text-[#D4550A]" />;
    return <Minus className="w-4 h-4 text-[#D4A017]" />;
  }

  return (
    <Slide bg="bg-[#F5F1E8]">
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#2D6A4F]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-[#8A7D65] font-mono">Competition</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1A14] mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Built for rangers. Not retrofitted.
        </h2>
        
        <div className="bg-white rounded-xl border border-[#D4CDB8] overflow-hidden mb-10" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4CDB8]">
                  <th className="text-left p-4 text-[#8A7D65] font-mono text-xs uppercase tracking-wider">Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`p-4 text-center text-xs font-bold uppercase tracking-wider ${c.highlight ? "bg-[#2D6A4F]/5 text-[#2D6A4F]" : "text-[#4A4535]"}`}>{c.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Built for rangers", key: "ranger" as const },
                  { label: "Offline-first", key: "offline" as const },
                  { label: "Ranger templates", key: "templates" as const },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-[#D4CDB8]/50">
                    <td className="p-4 text-[#4A4535] font-medium">{row.label}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className={`p-4 text-center ${c.highlight ? "bg-[#2D6A4F]/5" : ""}`}>
                        <div className="flex justify-center"><StatusIcon val={c[row.key]} /></div>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-[#D4CDB8]/50">
                  <td className="p-4 text-[#4A4535] font-medium">Setup time</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`p-4 text-center font-mono text-xs ${c.highlight ? "bg-[#2D6A4F]/5 text-[#2D6A4F] font-bold" : "text-[#4A4535]"}`}>{c.setup}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-[#4A4535] font-medium">Price</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`p-4 text-center font-mono text-xs ${c.highlight ? "bg-[#2D6A4F]/5 text-[#2D6A4F] font-bold" : "text-[#4A4535]"}`}>{c.price}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Ranger-specific templates", desc: "Wildlife, incident, trail — matching agency report formats" },
            { title: "Offline-first architecture", desc: "Built from day 1, not bolted on" },
            { title: "Glove-friendly UX", desc: "44px touch targets, high contrast for sunlight" },
            { title: "Procurement bypass", desc: "$49 pilot under most agency purchase card limits" },
          ].map((m) => (
            <div key={m.title} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[#D4CDB8]">
              <Check className="w-4 h-4 text-[#2D6A4F] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-bold text-[#1C1A14]">{m.title}</span>
                <p className="text-xs text-[#8A7D65]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slide 9: GTM & Ask ─── */
function GTMAskSlide() {
  return (
    <Slide bg="bg-[#2D6A4F]">
      <TopoLines opacity={0.08} />
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-[#F2C94C]" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/60 font-mono">Go-to-Market & Ask</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Launch. Learn. Scale to $1M ARR.
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {[
            { phase: "Week 1", action: "PH + Reddit + HN launch", goal: "100+ signups, 5 pilots" },
            { phase: "Week 2–4", action: "Cold email 300 agencies + webinar", goal: "10 demos, 3 paid" },
            { phase: "Month 2", action: "LinkedIn campaign + SEO pages", goal: "20+ agency trials" },
            { phase: "Month 3", action: "Case study + referral program", goal: "10+ paying agencies" },
          ].map((p, i) => (
            <div key={p.phase} className="bg-white/10 rounded-xl p-5 border border-white/10 relative">
              {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[2px] bg-white/20" />}
              <span className="text-[10px] font-bold text-[#F2C94C] font-mono uppercase tracking-wider">{p.phase}</span>
              <h3 className="text-sm font-bold text-white mt-2 mb-2">{p.action}</h3>
              <p className="text-xs text-white/50">{p.goal}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 rounded-xl p-6 border border-white/10 mb-8">
          <h4 className="text-xs font-bold text-[#F2C94C] mb-4 font-mono uppercase tracking-wide">What We&apos;re Asking For</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { ask: "Feedback", desc: "From conservation agency professionals — would you use this?" },
              { ask: "Introductions", desc: "To wildlife agency ops leads or NGO field directors" },
              { ask: "Early Adopters", desc: "Agencies for case studies — 50% discount for testimonial" },
            ].map((a) => (
              <div key={a.ask} className="text-center">
                <h5 className="text-sm font-bold text-white mb-1">{a.ask}</h5>
                <p className="text-xs text-white/50">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/70 mb-2 italic" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;The first field reporting tool built for rangers, not analysts.&rdquo;
          </p>
          <p className="text-sm text-white/40 font-mono">fieldpin.ashketing.com — ChimeStream</p>
        </div>
      </div>
    </Slide>
  );
}

/* ─── Slides array ─── */
const slides = [
  { id: 1, component: <TitleSlide /> },
  { id: 2, component: <ProblemSlide /> },
  { id: 3, component: <SolutionSlide /> },
  { id: 4, component: <MarketSlide /> },
  { id: 5, component: <HowItWorksSlide /> },
  { id: 6, component: <TractionSlide /> },
  { id: 7, component: <BusinessModelSlide /> },
  { id: 8, component: <CompetitionSlide /> },
  { id: 9, component: <GTMAskSlide /> },
];

/* ─── Main Pitch Deck ─── */
export default function PitchPage() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  /* Touch support */
  useEffect(() => {
    let startX = 0;
    function onTouchStart(e: TouchEvent) { startX = e.touches[0].clientX; }
    function onTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) { dx < 0 ? goNext() : goPrev(); }
    }
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => { window.removeEventListener("touchstart", onTouchStart); window.removeEventListener("touchend", onTouchEnd); };
  }, [goNext, goPrev]);

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col select-none">
      {/* Progress bar */}
      <div className="h-1 bg-black/20 w-full shrink-0 relative z-20">
        <motion.div
          className="h-full bg-[#2D6A4F]"
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide content */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#1C1A14] relative z-20">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-[#2D6A4F] w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-20 text-xs font-mono text-white/30">
        {current + 1} / {slides.length}
      </div>

      {/* Click areas */}
      <button
        className="absolute left-0 top-0 bottom-12 w-1/5 z-10 cursor-w-resize opacity-0"
        onClick={goPrev}
        aria-label="Previous slide"
      />
      <button
        className="absolute right-0 top-0 bottom-12 w-1/5 z-10 cursor-e-resize opacity-0"
        onClick={goNext}
        aria-label="Next slide"
      />
    </div>
  );
}
