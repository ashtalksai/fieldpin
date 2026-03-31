"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TopoPattern } from "@/components/topo-pattern";

const slides = [
  {
    title: "Fieldpin",
    subtitle: "Offline field reporting for park rangers",
    bg: "bg-text-primary",
    content: (
      <div className="relative text-center">
        <TopoPattern opacity={0.1} />
        <h1 className="text-[48px] md:text-[72px] font-bold text-white relative z-10" style={{ fontFamily: "var(--font-display)" }}>Fieldpin</h1>
        <p className="text-[20px] text-white/70 mt-4 relative z-10">Field data that doesn&apos;t wait for Wi-Fi</p>
      </div>
    ),
  },
  {
    title: "The Problem",
    subtitle: "3 pain points",
    bg: "bg-text-primary",
    content: (
      <div className="grid md:grid-cols-3 gap-6 max-w-[900px]">
        {[
          { title: "The Re-Entry Tax", desc: "Rangers spend 2+ hours re-entering data from every patrol" },
          { title: "Wrong Tools", desc: "GIS software requires desks, connectivity, and weeks of training" },
          { title: "No Visibility", desc: "Cross-ranger data never connects — insights are lost" },
        ].map((p) => (
          <div key={p.title} className="bg-white/10 rounded-xl p-6">
            <h3 className="text-[18px] font-bold text-white mb-2">{p.title}</h3>
            <p className="text-[14px] text-white/70">{p.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "The Solution",
    subtitle: "Fieldpin approach",
    bg: "bg-accent",
    content: (
      <div className="max-w-[600px] text-center">
        <h2 className="text-[36px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>Capture at the moment of observation</h2>
        <div className="space-y-3 text-left">
          {["Offline-first GPS pinning", "Pre-built ranger templates", "Auto-sync when signal returns"].map((f) => (
            <div key={f} className="flex items-center gap-3 text-white/90 text-[16px]">
              <span className="w-2 h-2 rounded-full bg-amber-light shrink-0" />
              {f}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Product Demo",
    subtitle: "Dashboard view",
    bg: "bg-text-primary",
    content: (
      <div className="max-w-[700px] w-full bg-white/5 rounded-xl p-8 border border-white/10">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[["127", "Pins"], ["8", "Rangers"], ["4", "Pending"], ["23", "Reports"]].map(([n, l]) => (
            <div key={l} className="bg-white/10 rounded-lg p-3 text-center">
              <div className="text-[24px] font-bold text-white" style={{ fontFamily: "var(--font-mono)" }}>{n}</div>
              <div className="text-[11px] text-white/50">{l}</div>
            </div>
          ))}
        </div>
        <div className="h-48 bg-white/5 rounded-lg flex items-center justify-center text-white/30 text-[14px]">
          Live map with real-time pin data
        </div>
      </div>
    ),
  },
  {
    title: "Market",
    subtitle: "TAM / SAM / SOM",
    bg: "bg-text-primary",
    content: (
      <div className="max-w-[600px]">
        <div className="space-y-6">
          {[
            { label: "TAM", value: "$2.4B", desc: "Global field data collection software" },
            { label: "SAM", value: "$340M", desc: "US government park & wildlife agencies" },
            { label: "SOM", value: "$12M", desc: "Initial target: 3 states, 500 rangers" },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-6">
              <span className="text-[14px] font-bold text-amber-light w-12" style={{ fontFamily: "var(--font-mono)" }}>{m.label}</span>
              <span className="text-[36px] font-bold text-white" style={{ fontFamily: "var(--font-mono)" }}>{m.value}</span>
              <span className="text-[14px] text-white/50">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Business Model",
    subtitle: "Pricing tiers",
    bg: "bg-text-primary",
    content: (
      <div className="grid md:grid-cols-3 gap-4 max-w-[800px]">
        {[
          { name: "Pilot", price: "$49", period: "one-time", desc: "Up to 5 rangers" },
          { name: "Professional", price: "$25", period: "/user/mo", desc: "Unlimited rangers" },
          { name: "Agency", price: "$49", period: "/user/mo annual", desc: "Full enterprise" },
        ].map((p) => (
          <div key={p.name} className="bg-white/10 rounded-xl p-6 text-center">
            <h3 className="text-[16px] font-bold text-white mb-2">{p.name}</h3>
            <div className="text-[32px] font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{p.price}</div>
            <div className="text-[13px] text-white/50 mb-2">{p.period}</div>
            <div className="text-[13px] text-white/70">{p.desc}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Traction",
    subtitle: "Key metrics",
    bg: "bg-accent",
    content: (
      <div className="grid grid-cols-3 gap-8 max-w-[700px]">
        {[
          { num: "500+", label: "Rangers in beta" },
          { num: "10,234", label: "Pins synced" },
          { num: "4.9★", label: "Field user rating" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[48px] font-bold text-white" style={{ fontFamily: "var(--font-mono)" }}>{s.num}</div>
            <div className="text-[14px] text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Team",
    subtitle: "ChimeStream",
    bg: "bg-text-primary",
    content: (
      <div className="max-w-[500px] text-center">
        <h2 className="text-[32px] font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>ChimeStream</h2>
        <p className="text-[16px] text-white/70 leading-relaxed">
          Product studio building purpose-built tools for underserved professional workflows. Six months of field research with rangers across three states.
        </p>
      </div>
    ),
  },
  {
    title: "The Ask",
    subtitle: "Get started",
    bg: "bg-text-primary",
    content: (
      <div className="text-center relative">
        <TopoPattern opacity={0.08} />
        <div className="relative z-10">
          <h2 className="text-[40px] font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>One pilot season.</h2>
          <p className="text-[18px] text-white/70 mb-8">That&apos;s all it takes to see the difference.</p>
          <div className="inline-flex px-8 py-4 rounded-lg bg-accent text-white text-[16px] font-medium">
            Start the $49 Pilot &rarr;
          </div>
        </div>
      </div>
    ),
  },
];

export default function DeckPage() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div className="h-screen w-screen bg-text-primary overflow-hidden relative flex flex-col">
      {/* Progress bar */}
      <div className="h-1 bg-white/10 w-full shrink-0">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center px-8 ${slides[current].bg}`}
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-2 py-4 shrink-0 bg-text-primary relative z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-accent" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Click areas for navigation */}
      <button
        className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-w-resize opacity-0"
        onClick={goPrev}
        aria-label="Previous slide"
      />
      <button
        className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-e-resize opacity-0"
        onClick={goNext}
        aria-label="Next slide"
      />
    </div>
  );
}
