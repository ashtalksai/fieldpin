"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FileText, Target, Megaphone, Palette, Presentation,
  Menu, X, ExternalLink, TrendingUp, Users, Globe,
  DollarSign, Clock, Mail, Link2, Hash, BarChart3,
  Check, AlertTriangle, Zap, MapPin, Shield, ChevronRight,
} from "lucide-react";
import Link from "next/link";

/* ─── Types ─── */
interface Section {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

/* ─── Section definitions ─── */
const sections: Section[] = [
  { id: "research", label: "Research", icon: FileText },
  { id: "gtm", label: "GTM Plan", icon: Target },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "brand", label: "Brand", icon: Palette },
  { id: "pitch", label: "Pitch Deck", icon: Presentation },
];

/* ─── Shared card component ─── */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-surface rounded-xl border border-border p-6 ${className}`} style={{ boxShadow: "var(--shadow-card)" }}>
      {children}
    </div>
  );
}

function StatCard({ label, value, desc, accent = false }: { label: string; value: string; desc: string; accent?: boolean }) {
  return (
    <Card className={accent ? "bg-accent text-accent-foreground" : ""}>
      <span className={`text-xs font-bold font-mono uppercase tracking-wider ${accent ? "text-amber-light" : "text-accent"}`}>{label}</span>
      <div className={`text-2xl md:text-3xl font-bold font-mono mt-1 ${accent ? "text-white" : "text-text-primary"}`}>{value}</div>
      <p className={`text-xs mt-1 ${accent ? "text-white/70" : "text-text-muted"}`}>{desc}</p>
    </Card>
  );
}

function SectionHeader({ icon: Icon, label, title }: { icon: React.ComponentType<{ className?: string }>; label: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </span>
        <span className="text-xs uppercase tracking-widest text-text-muted font-mono">{label}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── RESEARCH SECTION ─── */
/* ═══════════════════════════════════════════════════════════ */
function ResearchContent() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={FileText} label="Research" title="Market Research & Validation" />

      {/* Executive Summary */}
      <Card className="bg-accent text-accent-foreground">
        <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Executive Summary</h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          Fieldpin addresses the &ldquo;double-entry problem&rdquo; in conservation field data — rangers record observations on paper in the field, 
          then re-type everything at a desk. This wastes 10+ hours per week per ranger and creates data silos across agencies.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold font-mono text-amber-light">9/10</div>
            <div className="text-[10px] text-white/60">Opportunity Score</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold font-mono text-amber-light">9/10</div>
            <div className="text-[10px] text-white/60">Problem Severity</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold font-mono text-amber-light">$1M–$10M</div>
            <div className="text-[10px] text-white/60">ARR Potential</div>
          </div>
        </div>
      </Card>

      {/* The Problem */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>The Problem</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: FileText, title: "The Re-Entry Tax", desc: "Paper in the field, spreadsheet at the desk. Same data, entered twice, every day. Rangers lose 10+ hours/week." },
            { icon: DollarSign, title: "The Wrong Tool", desc: "Enterprise GIS costs $500+/user/year and needs an IT team. Most rangers never use it. ArcGIS was built for analysts." },
            { icon: Users, title: "Data Silos", desc: "Each ranger's notes are isolated. Agencies can't see migration patterns or trends without manually combining everything." },
          ].map((p) => (
            <Card key={p.title}>
              <p.icon className="w-5 h-5 text-pin-incident mb-3" />
              <h4 className="text-sm font-bold text-text-primary mb-2">{p.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Size */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Market Opportunity</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard label="TAM" value="$1.2B+" desc="400K+ field staff, 3K+ agencies globally" accent />
          <StatCard label="SAM" value="$450M" desc="150K staff in US/English markets" />
          <StatCard label="SOM (Y1)" value="$294K" desc="50 agencies, avg 10 users" />
        </div>
      </div>

      {/* Competitive Landscape */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Competitive Landscape</h3>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-text-muted font-mono text-xs">Feature</th>
                  <th className="p-3 text-center text-xs font-bold text-accent">Fieldpin</th>
                  <th className="p-3 text-center text-xs text-text-secondary">ArcGIS</th>
                  <th className="p-3 text-center text-xs text-text-secondary">Fulcrum</th>
                  <th className="p-3 text-center text-xs text-text-secondary">ODK</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  { f: "Built for rangers", us: "✅", arc: "❌", ful: "❌", odk: "❌" },
                  { f: "Offline-first", us: "✅", arc: "⚠️", ful: "⚠️", odk: "✅" },
                  { f: "Ranger templates", us: "✅", arc: "❌", ful: "❌", odk: "❌" },
                  { f: "Setup time", us: "10 min", arc: "Days + IT", ful: "Hours", odk: "Days" },
                  { f: "Price", us: "$25-49/mo", arc: "$500+/yr", ful: "$25-65/mo", odk: "Free" },
                ].map((row) => (
                  <tr key={row.f} className="border-b border-border/50">
                    <td className="p-3 text-text-secondary font-medium">{row.f}</td>
                    <td className="p-3 text-center font-bold text-accent">{row.us}</td>
                    <td className="p-3 text-center text-text-muted">{row.arc}</td>
                    <td className="p-3 text-center text-text-muted">{row.ful}</td>
                    <td className="p-3 text-center text-text-muted">{row.odk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Validation Signals */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Validation Signals</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { signal: "r/NationalPark", detail: "1.2M members — active discussions about field tech frustrations" },
            { signal: '"arcgis map viewer" keyword', detail: "2,900/month searches, +392% growth — rangers searching for simpler tools" },
            { signal: "Conservation forums", detail: "Consistent complaints about paper forms and re-entry time" },
            { signal: "Facebook Groups", detail: '"Conservation Technology Professionals" — 50K+ members' },
          ].map((s) => (
            <Card key={s.signal} className="flex items-start gap-3">
              <BarChart3 className="w-4 h-4 text-amber mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-bold text-text-primary">{s.signal}</span>
                <p className="text-xs text-text-secondary mt-1">{s.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── GTM SECTION ─── */
/* ═══════════════════════════════════════════════════════════ */
function GTMContent() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Target} label="Go-to-Market" title="GTM Plan — Launch Strategy" />

      {/* Overview */}
      <Card className="bg-accent text-accent-foreground">
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Launch Overview</h3>
        <p className="text-sm text-white/80 mb-4">
          Fieldpin launches targeting park rangers and wildlife agencies frustrated with paper forms and overpriced GIS tools. 
          The $49 Pilot bypasses government procurement cycles, creating internal champions who push full subscriptions.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-sm font-bold font-mono text-amber-light">Product Hunt</div>
            <div className="text-[10px] text-white/60">Day 1 Launch</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-sm font-bold font-mono text-amber-light">100+</div>
            <div className="text-[10px] text-white/60">Week 1 Signups</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-sm font-bold font-mono text-amber-light">$9.8K</div>
            <div className="text-[10px] text-white/60">Month 6 MRR Goal</div>
          </div>
        </div>
      </Card>

      {/* Target Personas */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Target Personas</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-accent" />
              </span>
              <h4 className="text-sm font-bold text-text-primary">Field Rangers</h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Park rangers, wildlife officers, conservation field staff aged 25–50. Work in remote areas with no connectivity. 
              Currently use paper forms + WhatsApp photos. Lose 10+ hrs/week to double-entry.
            </p>
            <div className="flex flex-wrap gap-2">
              {["iPhone/Android", "Gloves on", "No GIS training", "Paper forms daily"].map((t) => (
                <span key={t} className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-amber" />
              </span>
              <h4 className="text-sm font-bold text-text-primary">Agency Managers</h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Conservation directors, operations managers, data coordinators at mid-size agencies (20–200 rangers). 
              Need compliance-ready exports. Gets PDF scans or manually transcribed spreadsheets.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Budget authority", "Compliance-focused", "Needs live visibility", "Reports to gov/NGO"].map((t) => (
                <span key={t} className="text-[10px] bg-amber/10 text-amber px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* 90-Day Timeline */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>90-Day Plan</h3>
        <div className="space-y-4">
          {[
            { phase: "Week 1 — Launch", items: ["Product Hunt (Tuesday)", "Reddit: r/NationalPark, r/conservation, r/forestry", "LinkedIn founder story + announcement", "Show HN submission", "200 cold emails to agency contacts"], color: "border-l-accent" },
            { phase: "Week 2–4 — Build Momentum", items: ["Follow up cold email replies, book demos", "Daily LinkedIn posts (problem/solution/feature)", "First free webinar: \"Eliminate paper field notes in 30 days\"", "Submit to conservation tech newsletters", "Outreach to 5 wildlife agency YouTubers"], color: "border-l-amber" },
            { phase: "Month 2–3 — Channel Doubling", items: ["Double down on best-performing channel", "3 SEO comparison pages (vs ArcGIS, vs Fulcrum, best offline apps)", "Attend 1 virtual conservation conference", "First paid agency case study"], color: "border-l-pin-trail" },
            { phase: "Month 4–6 — Scale", items: ["AppSumo lifetime deal launch", "Press outreach: conservation tech journalists", "Agency referral program (1 month free per referral)"], color: "border-l-pin-incident" },
          ].map((p) => (
            <Card key={p.phase} className={`border-l-4 ${p.color}`}>
              <h4 className="text-sm font-bold text-text-primary mb-3">{p.phase}</h4>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                    <ChevronRight className="w-3 h-3 text-text-muted mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Launch Channels */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Channel Strategy</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { channel: "Product Hunt", budget: "0%", expected: "200–500 upvotes, 50–150 signups Day 1", icon: Zap },
            { channel: "Reddit", budget: "0%", expected: "500–2000 views/post, 20–100 signups", icon: Hash },
            { channel: "LinkedIn", budget: "Small test", expected: "5K–15K impressions, 20–50 inquiries", icon: Link2 },
            { channel: "Cold Email", budget: "$99/mo", expected: "200 emails → 10+ replies → 3–5 demos", icon: Mail },
          ].map((c) => (
            <Card key={c.channel} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <c.icon className="w-4 h-4 text-accent" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-text-primary">{c.channel}</h4>
                <p className="text-xs text-text-secondary mt-1">{c.expected}</p>
                <span className="text-[10px] text-text-muted font-mono">Budget: {c.budget}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Strategy */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Pricing Strategy</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <h4 className="text-sm font-bold text-text-primary mb-1">Pilot</h4>
            <div className="text-2xl font-bold text-accent font-mono">$49</div>
            <div className="text-xs text-text-muted mb-2">one-time</div>
            <p className="text-xs text-text-secondary">Bypasses procurement. Under purchase card limits. Gets foot in door.</p>
          </Card>
          <Card className="ring-2 ring-accent">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Most Popular</span>
            <h4 className="text-sm font-bold text-text-primary mb-1">Professional</h4>
            <div className="text-2xl font-bold text-accent font-mono">$25</div>
            <div className="text-xs text-text-muted mb-2">/user/month</div>
            <p className="text-xs text-text-secondary">Unlimited rangers. Full reporting + CSV export.</p>
          </Card>
          <Card>
            <h4 className="text-sm font-bold text-text-primary mb-1">Agency</h4>
            <div className="text-2xl font-bold text-accent font-mono">$49</div>
            <div className="text-xs text-text-muted mb-2">/user/mo (annual)</div>
            <p className="text-xs text-text-secondary">Priority support, compliance reporting, SSO.</p>
          </Card>
        </div>
      </div>

      {/* Budget */}
      <Card>
        <h4 className="text-sm font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Month 1 Budget</h4>
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { item: "LinkedIn Ads", cost: "$200" },
            { item: "Email Tool", cost: "$99" },
            { item: "Webinar", cost: "$0" },
            { item: "Total", cost: "~$300" },
          ].map((b) => (
            <div key={b.item}>
              <div className="text-lg font-bold text-accent font-mono">{b.cost}</div>
              <div className="text-[10px] text-text-muted">{b.item}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-4 text-center">Break-even: 7 Pilot purchases ($343). Very achievable.</p>
      </Card>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── MARKETING SECTION ─── */
/* ═══════════════════════════════════════════════════════════ */
function MarketingContent() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Megaphone} label="Marketing" title="Marketing Plan — Positioning & Content" />

      {/* Brand Voice */}
      <Card className="bg-accent text-accent-foreground">
        <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Brand Voice</h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          Grounded. Direct. Field-tested. Fieldpin sounds like a well-worn field GPS device — purposeful, no wasted words, no fluff. 
          Never sounds like SaaS marketing. Sounds like a tool someone actually uses in the rain.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="text-xs font-bold text-amber-light mb-2">✅ WE SAY</h5>
            <ul className="space-y-1 text-xs text-white/70">
              <li>&ldquo;Works where rangers work&rdquo;</li>
              <li>&ldquo;No GIS degree required&rdquo;</li>
              <li>&ldquo;10 minutes to first report&rdquo;</li>
              <li>&ldquo;Built for gloved hands&rdquo;</li>
              <li>&ldquo;Field data that doesn&apos;t wait for Wi-Fi&rdquo;</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="text-xs font-bold text-pin-incident mb-2">❌ WE NEVER SAY</h5>
            <ul className="space-y-1 text-xs text-white/70">
              <li>&ldquo;Revolutionize your workflow&rdquo;</li>
              <li>&ldquo;Cutting-edge AI-powered platform&rdquo;</li>
              <li>&ldquo;Seamless experience&rdquo;</li>
              <li>&ldquo;Enterprise-grade&rdquo;</li>
              <li>&ldquo;Leverage synergies&rdquo;</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Positioning */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Positioning</h3>
        <Card>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">For</span><span className="text-text-primary">park rangers and wildlife officers</span></div>
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">Who</span><span className="text-text-primary">lose 10+ hrs/week re-entering field data</span></div>
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">Fieldpin</span><span className="text-text-primary">is an offline-first field reporting tool</span></div>
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">That</span><span className="text-text-primary">eliminates double-entry with ranger-specific templates and auto-sync</span></div>
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">Unlike</span><span className="text-text-primary">ArcGIS (expensive, complex) or Fulcrum (generic inspections)</span></div>
            <div className="flex gap-3"><span className="text-text-muted font-bold w-16 shrink-0">We</span><span className="text-text-primary">were built for the person in the field with gloves on</span></div>
          </div>
        </Card>
      </div>

      {/* Content Strategy */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Content Strategy — Blog Topics</h3>
        <div className="space-y-3">
          {[
            { title: "ArcGIS vs Fieldpin: Which is right for your ranger team?", target: 'Targets "arcgis alternatives" — 2.9K volume, +392% growth' },
            { title: "How to eliminate paper field notes in 30 days", target: 'Targets "field data collection" keywords. Captures agency managers.' },
            { title: "Best offline data collection apps for conservation (2026)", target: "Roundup post. Fieldpin appears as top ranger-specific option." },
            { title: "Fulcrum vs Fieldpin: Why rangers need a different tool", target: "Direct comparison targeting Fulcrum users considering alternatives." },
            { title: "How Fieldpin calculates wildlife migration patterns", target: "Aspirational content showing long-term data value of pin data." },
          ].map((post) => (
            <Card key={post.title} className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-text-primary">{post.title}</h4>
                <p className="text-xs text-text-muted mt-1">{post.target}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Media Cadence */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Social Media Cadence</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { platform: "LinkedIn", freq: "3x/week", days: "Mon, Wed, Fri", content: "Founder story, problem/solution, feature highlights" },
            { platform: "Twitter/X", freq: "Daily", days: "Every day", content: "Conservation observations, product announcements" },
            { platform: "Reddit", freq: "2x/week", days: "Tue, Thu", content: "Value-first posts in r/NationalPark, r/conservation" },
          ].map((s) => (
            <Card key={s.platform}>
              <h4 className="text-sm font-bold text-text-primary mb-1">{s.platform}</h4>
              <div className="text-xs text-accent font-mono mb-2">{s.freq} — {s.days}</div>
              <p className="text-xs text-text-secondary">{s.content}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Email Sequence */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Welcome Email Sequence</h3>
        <div className="space-y-3">
          {[
            { day: "Day 0", subject: "Welcome — your first field report in 10 minutes", type: "Quick start guide" },
            { day: "Day 2", subject: "How rangers stopped losing 10 hours/week", type: "Case study" },
            { day: "Day 5", subject: "Your 3 form templates explained", type: "Deep dive — wildlife/incident/trail" },
            { day: "Day 10", subject: "Invite your rangers — here's how", type: "Drives activation" },
            { day: "Day 21", subject: "How to export your first compliance report", type: "Shows ROI to manager" },
          ].map((e) => (
            <Card key={e.day} className="flex items-center gap-4">
              <span className="text-xs font-bold text-accent font-mono w-14 shrink-0">{e.day}</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-text-primary">{e.subject}</h4>
                <p className="text-xs text-text-muted">{e.type}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Week 1–2 Content Calendar</h3>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 text-text-muted font-mono">Day</th>
                  <th className="p-2 text-left text-text-muted font-mono">Platform</th>
                  <th className="p-2 text-left text-text-muted font-mono">Content</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: "Mon Apr 6", platform: "PH + LinkedIn + HN", content: "Launch post + The Problem post + Show HN" },
                  { day: "Tue Apr 7", platform: "Reddit + Twitter", content: "r/NationalPark post + launch tweet" },
                  { day: "Wed Apr 8", platform: "LinkedIn + Reddit", content: "The Solution post + r/conservation" },
                  { day: "Thu Apr 9", platform: "Twitter + Email", content: "Double-entry problem + 100 cold emails" },
                  { day: "Fri Apr 10", platform: "LinkedIn + Twitter", content: "The Numbers post + ArcGIS search data" },
                  { day: "Mon Apr 13", platform: "Email + LinkedIn", content: "100 park contacts + Offline GPS deep dive" },
                  { day: "Fri Apr 17", platform: "LinkedIn + Twitter", content: "Founder story + Show HN recap" },
                ].map((row) => (
                  <tr key={row.day} className="border-b border-border/50">
                    <td className="p-2 text-text-secondary font-mono">{row.day}</td>
                    <td className="p-2 text-text-secondary">{row.platform}</td>
                    <td className="p-2 text-text-secondary">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Brand Copy */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Brand Copy</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-2">Tagline</h4>
            <p className="text-lg font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>&ldquo;Field data that doesn&apos;t wait for Wi-Fi.&rdquo;</p>
          </Card>
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-2">Elevator Pitch</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Fieldpin is an offline field reporting tool for park rangers. Rangers log wildlife sightings, incidents, and trail conditions 
              without Wi-Fi — it syncs automatically when back in range. Unlike ArcGIS, no GIS training required. First report in 10 minutes.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── BRAND SECTION ─── */
/* ═══════════════════════════════════════════════════════════ */
function BrandContent() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Palette} label="Brand" title="Brand Spec & Design System" />

      {/* Color Palette */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Forest Green", hex: "#2D6A4F", role: "Primary / Accent" },
            { name: "Amber Gold", hex: "#D4A017", role: "Secondary / Highlights" },
            { name: "Parchment", hex: "#F5F1E8", role: "Background" },
            { name: "Dark Soil", hex: "#1C1A14", role: "Text Primary" },
            { name: "Warm Gray", hex: "#8A7D65", role: "Text Muted" },
            { name: "Incident Orange", hex: "#D4550A", role: "Pin: Incident" },
            { name: "Trail Blue", hex: "#2D6080", role: "Pin: Trail" },
            { name: "Light Green", hex: "#52B788", role: "Accent Light" },
          ].map((c) => (
            <div key={c.hex} className="rounded-xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="h-20" style={{ backgroundColor: c.hex }} />
              <div className="p-3 bg-surface">
                <div className="text-xs font-bold text-text-primary">{c.name}</div>
                <div className="text-[10px] font-mono text-text-muted">{c.hex}</div>
                <div className="text-[10px] text-text-muted">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Typography</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Display</h4>
            <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Libre Baskerville</div>
            <p className="text-xs text-text-muted mt-2">Used for headings, hero text, and slide titles. Pairs with the topographic field aesthetic.</p>
          </Card>
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Body</h4>
            <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-body)" }}>DM Sans</div>
            <p className="text-xs text-text-muted mt-2">Clean, readable body text. Used for paragraphs, descriptions, and UI elements.</p>
          </Card>
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Mono</h4>
            <div className="text-3xl font-bold font-mono">JetBrains Mono</div>
            <p className="text-xs text-text-muted mt-2">Used for data, statistics, prices, and technical labels. Gives precision to numbers.</p>
          </Card>
        </div>
      </div>

      {/* Component Patterns */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Component Patterns</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Buttons</h4>
            <div className="space-y-3">
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium">Start Your Free Pilot →</button>
              <br />
              <button className="bg-amber text-white px-4 py-2 rounded-lg text-sm font-medium">Book a Demo</button>
              <br />
              <button className="border border-border text-text-primary px-4 py-2 rounded-lg text-sm font-medium">See How It Works</button>
            </div>
          </Card>
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Pin Types</h4>
            <div className="space-y-3">
              {[
                { type: "Wildlife", color: "bg-pin-wildlife", hex: "#2D6A4F" },
                { type: "Incident", color: "bg-pin-incident", hex: "#D4550A" },
                { type: "Trail Condition", color: "bg-pin-trail", hex: "#2D6080" },
              ].map((p) => (
                <div key={p.type} className="flex items-center gap-3">
                  <span className={`w-4 h-4 rounded-full ${p.color}`} />
                  <span className="text-sm text-text-primary">{p.type}</span>
                  <span className="text-xs text-text-muted font-mono ml-auto">{p.hex}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Spacing & Elevation */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Design Tokens</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Border Radius</h4>
            <div className="space-y-3">
              {[
                { name: "sm", value: "0.3rem" },
                { name: "md", value: "0.4rem" },
                { name: "lg", value: "0.5rem" },
                { name: "xl", value: "0.7rem" },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 border border-accent/20" style={{ borderRadius: r.value }} />
                  <span className="text-xs text-text-secondary font-mono">{r.name}: {r.value}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Elevation</h4>
            <div className="space-y-4">
              {[
                { name: "Card", shadow: "var(--shadow-card)" },
                { name: "Dropdown", shadow: "var(--shadow-dropdown)" },
                { name: "Modal", shadow: "var(--shadow-modal)" },
              ].map((e) => (
                <div key={e.name} className="bg-surface p-4 rounded-lg border border-border" style={{ boxShadow: e.shadow }}>
                  <span className="text-xs font-mono text-text-muted">{e.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Brand Voice */}
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Imagery Style</h3>
        <Card>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-success mb-2">✅ DO</h4>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Topographic line patterns for backgrounds</li>
                <li>• Warm, earthy palette with green/amber accents</li>
                <li>• Monospace for data and statistics</li>
                <li>• Map pin iconography for field actions</li>
                <li>• Clean, utilitarian UI — tool-first</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-destructive mb-2">❌ DON&apos;T</h4>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Stock photography of generic nature</li>
                <li>• Bright neon gradients or tech-bro vibes</li>
                <li>• Generic SaaS dashboard screenshots</li>
                <li>• Clipart or cartoon illustrations</li>
                <li>• Complex 3D renders that feel disconnected</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── PITCH SECTION ─── */
/* ═══════════════════════════════════════════════════════════ */
function PitchContent() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Presentation} label="Pitch Deck" title="Investor Pitch — 9 Slides" />

      <Card className="bg-accent text-accent-foreground">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Interactive Pitch Deck</h3>
            <p className="text-sm text-white/70">Full-screen, animated presentation with keyboard navigation.</p>
          </div>
          <Link href="/pitch" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            Open Deck <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </Card>

      <div className="space-y-3">
        {[
          { num: 1, title: "Title", desc: "Fieldpin — Field data that doesn't wait for Wi-Fi. Topographic visual with brand pins." },
          { num: 2, title: "The Problem", desc: "Rangers fill in the same form twice. 10+ hrs/week lost. Three pain points: re-entry tax, wrong tools, data silos." },
          { num: 3, title: "The Solution", desc: "Drop a pin → Fill the form → Walk away. Offline GPS, ranger templates, auto-sync." },
          { num: 4, title: "Market Size", desc: "TAM $1.2B+ / SAM $450M / SOM $294K. 400K+ field staff globally. +392% search growth." },
          { num: 5, title: "How It Works", desc: "4 steps: Manager setup (5 min) → Ranger fields (offline) → Auto-sync → Compliance export." },
          { num: 6, title: "Traction & Validation", desc: "9/10 opportunity score. 2,900/mo searches. Live MVP at fieldpin.ashketing.com. 59/60 QA tests." },
          { num: 7, title: "Business Model", desc: "Pilot $49 → Pro $25/user/mo → Agency $49/user/mo. LTV:CAC 60:1. Year 2 target: $1.8M ARR." },
          { num: 8, title: "Competition", desc: "Fieldpin vs ArcGIS vs Fulcrum vs ODK. Only tool built for rangers with offline-first + templates." },
          { num: 9, title: "GTM & Ask", desc: "90-day launch plan. PH + Reddit + LinkedIn + cold email. Asking for feedback, intros, early adopters." },
        ].map((slide) => (
          <Card key={slide.num} className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">{slide.num}</span>
            <div>
              <h4 className="text-sm font-bold text-text-primary">{slide.title}</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">{slide.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h4 className="text-xs font-bold text-accent font-mono uppercase tracking-wider mb-3">Navigation</h4>
        <div className="grid grid-cols-3 gap-4 text-center text-xs text-text-secondary">
          <div>
            <div className="text-lg mb-1">← →</div>
            <div>Arrow keys</div>
          </div>
          <div>
            <div className="text-lg mb-1">👆</div>
            <div>Swipe on mobile</div>
          </div>
          <div>
            <div className="text-lg mb-1">●●●</div>
            <div>Click dots to jump</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/* ─── MAIN DOCS PAGE ─── */
/* ═══════════════════════════════════════════════════════════ */
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* Close sidebar on escape */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "research": return <ResearchContent />;
      case "gtm": return <GTMContent />;
      case "marketing": return <MarketingContent />;
      case "brand": return <BrandContent />;
      case "pitch": return <PitchContent />;
      default: return <ResearchContent />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 min-h-screen bg-background">
        <div className="flex">
          {/* Mobile sidebar toggle */}
          <button
            className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Sidebar overlay (mobile) */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Sidebar */}
          <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-64px)] w-[260px] bg-surface border-r border-border z-40 transition-transform lg:translate-x-0 flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-4 flex-1">
              <h3 className="text-[10px] tracking-[0.08em] uppercase text-text-muted font-mono font-bold mb-4 px-2">
                Documentation
              </h3>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                      activeSection === s.id
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    <s.icon size={18} />
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-border">
              <div className="space-y-2">
                <Link href="/" className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors px-2 py-1">
                  <ExternalLink size={14} /> Live Site
                </Link>
                <Link href="/pitch" className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors px-2 py-1">
                  <Presentation size={14} /> Pitch Deck
                </Link>
                <a href="https://github.com/ashtalksai/fieldpin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors px-2 py-1">
                  <Globe size={14} /> GitHub
                </a>
              </div>
            </div>
          </aside>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[900px] mx-auto px-6 py-10">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
