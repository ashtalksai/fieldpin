"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, Target, Megaphone, Palette, Presentation, Menu, X } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "research",
    label: "Research",
    icon: FileText,
    title: "Research Documents",
    summary: "Field research findings, user interviews, and competitive analysis from our six-month discovery phase with park rangers across three states.",
    docs: [
      { name: "Field Research Report", desc: "Ethnographic research with 24 rangers across Yellowstone, Olympic, and Glacier National Parks" },
      { name: "User Interview Synthesis", desc: "Key findings from 40+ interviews with rangers, supervisors, and agency administrators" },
      { name: "Competitive Analysis", desc: "Analysis of 12 existing field data collection tools and their limitations" },
    ],
  },
  {
    id: "gtm",
    label: "GTM",
    icon: Target,
    title: "Go-to-Market Strategy",
    summary: "Launch strategy, pricing validation, channel analysis, and growth projections for the Fieldpin pilot program.",
    docs: [
      { name: "GTM Strategy v2", desc: "Revised go-to-market plan focused on state-level partnerships" },
      { name: "Pricing Validation", desc: "Willingness-to-pay analysis from survey of 120 agency decision-makers" },
      { name: "Channel Strategy", desc: "Direct sales, conference presence, and government procurement pathways" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    title: "Marketing Materials",
    summary: "Brand messaging, content strategy, and campaign assets for ranger acquisition and agency partnerships.",
    docs: [
      { name: "Messaging Framework", desc: "Core positioning, value propositions, and persona-specific messaging" },
      { name: "Content Calendar Q2 2026", desc: "Blog posts, case studies, and social content for April-June" },
      { name: "Conference Playbook", desc: "Strategy for NPS Annual Conference and Western Association of Fish & Wildlife Agencies" },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    icon: Palette,
    title: "Brand Assets",
    summary: "Design system documentation, brand guidelines, and asset library for consistent Fieldpin branding.",
    docs: [
      { name: "Brand Guidelines", desc: "Logo usage, color palette, typography, and brand voice documentation" },
      { name: "Design System", desc: "Component library, spacing system, and interaction patterns" },
      { name: "Asset Library", desc: "Logos, social templates, and presentation decks" },
    ],
  },
  {
    id: "pitch",
    label: "Pitch",
    icon: Presentation,
    title: "Pitch Materials",
    summary: "Investor pitch deck, one-pager, and supporting materials for fundraising and partnership conversations.",
    docs: [
      { name: "Pitch Deck", desc: "9-slide investor presentation with product demo and financials" },
      { name: "One-Pager", desc: "Single-page overview for quick partnership conversations" },
      { name: "Financial Model", desc: "3-year revenue projections with unit economics" },
    ],
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const section = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 min-h-screen">
        <div className="flex">
          {/* Mobile sidebar toggle */}
          <button
            className="lg:hidden fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Sidebar */}
          <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-64px)] w-[260px] bg-surface border-r border-border p-4 z-40 transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <h3 className="text-[12px] tracking-[0.06em] uppercase text-text-muted font-medium mb-4 px-2">
              Documents
            </h3>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setActiveSection(s.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-left transition-colors ${
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
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-[680px] mx-auto px-6 py-12 lg:ml-0">
            <h1
              className="text-[28px] md:text-[32px] font-bold text-text-primary mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {section.title}
            </h1>
            <p className="text-[16px] text-text-secondary leading-relaxed mb-8">
              {section.summary}
            </p>

            <div className="space-y-4">
              {section.docs.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-surface rounded-lg border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-start gap-3">
                    <section.icon size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-[16px] font-bold text-text-primary mb-1">{doc.name}</h3>
                      <p className="text-[14px] text-text-secondary">{doc.desc}</p>
                      <span className="inline-block mt-2 text-[13px] text-accent hover:underline">
                        View Document &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
