"use client";

import dynamic from "next/dynamic";
import { Layers, Printer } from "lucide-react";

const DashboardMap = dynamic(() => import("@/components/dashboard-map"), { ssr: false });

export default function FullscreenMapPage() {
  return (
    <div className="h-screen w-screen relative">
      <DashboardMap />
      {/* Floating controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
        <div className="bg-surface rounded-lg border border-border p-2 flex flex-col gap-1" style={{ boxShadow: "var(--shadow-dropdown)" }}>
          {["Satellite", "Terrain", "Topo"].map((label) => (
            <button
              key={label}
              className="px-3 py-1.5 text-[12px] text-text-secondary hover:bg-surface-hover rounded transition-colors text-left"
            >
              {label}
            </button>
          ))}
        </div>
        <button className="bg-surface rounded-lg border border-border p-2.5 hover:bg-surface-hover transition-colors" style={{ boxShadow: "var(--shadow-dropdown)" }}>
          <Printer size={16} className="text-text-secondary" />
        </button>
      </div>
      {/* Back link */}
      <div className="absolute top-4 left-4 z-[1000]">
        <a href="/dashboard" className="bg-surface rounded-lg border border-border px-4 py-2 text-[13px] font-medium text-text-primary hover:bg-surface-hover transition-colors inline-block" style={{ boxShadow: "var(--shadow-dropdown)" }}>
          &larr; Dashboard
        </a>
      </div>
    </div>
  );
}
