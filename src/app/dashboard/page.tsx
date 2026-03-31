"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { TrendingUp, TrendingDown, MapPin, Users, RefreshCw, FileText, Bird, AlertTriangle, Footprints } from "lucide-react";
import dynamic from "next/dynamic";

const DashboardMap = dynamic(() => import("@/components/dashboard-map"), { ssr: false });

const stats = [
  { label: "Total Pins This Month", value: "127", delta: "+12%", up: true, icon: MapPin },
  { label: "Active Rangers Today", value: "8", delta: "+3", up: true, icon: Users },
  { label: "Pending Syncs", value: "4", delta: "-2", up: false, icon: RefreshCw },
  { label: "Reports Generated", value: "23", delta: "+5", up: true, icon: FileText },
];

const activities = [
  { name: "Ranger Martinez", action: "dropped a wildlife pin", time: "14:32", type: "wildlife" },
  { name: "Ranger Okonkwo", action: "reported trail washout", time: "13:15", type: "trail" },
  { name: "Ranger Chen", action: "logged incident report", time: "11:47", type: "incident" },
  { name: "Ranger Martinez", action: "synced 6 pins", time: "10:20", type: "wildlife" },
  { name: "Ranger Kim", action: "dropped a wildlife pin", time: "09:55", type: "wildlife" },
  { name: "Ranger Okonkwo", action: "logged trail condition", time: "08:30", type: "trail" },
];

const typeColors: Record<string, string> = {
  wildlife: "bg-pin-wildlife",
  incident: "bg-pin-incident",
  trail: "bg-pin-trail",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Demo banner */}
      <div className="bg-amber-light/30 border border-amber/30 rounded-lg p-3 mb-6 flex flex-wrap items-center gap-3">
        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber text-white uppercase">Demo Data</span>
        <span className="text-[14px] text-text-secondary">
          This is demo data. Your rangers&apos; real pins will appear here after their first sync.
        </span>
        <button className="ml-auto px-4 py-1.5 rounded-lg bg-accent text-white text-[13px] font-medium hover:bg-accent-hover transition-colors">
          Set up my rangers &rarr;
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface rounded-lg border border-border p-5" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center justify-between mb-2">
              <s.icon size={18} className="text-text-muted" />
              <span className={`inline-flex items-center gap-1 text-[12px] font-medium ${s.up ? "text-success" : "text-destructive"}`}>
                {s.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {s.delta}
              </span>
            </div>
            <p className="text-[32px] font-bold text-text-primary leading-none mb-1" style={{ fontFamily: "var(--font-mono)" }}>
              {s.value}
            </p>
            <p className="text-[12px] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Map + Activity */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="bg-surface rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="text-[14px] font-bold text-text-primary">Pin Map</h3>
            <div className="flex gap-2">
              {["This week", "This month", "3 months"].map((t) => (
                <button key={t} className="px-2.5 py-1 text-[12px] rounded bg-surface-hover text-text-secondary hover:text-text-primary transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[400px] lg:h-[500px]">
            <DashboardMap />
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-surface rounded-lg border border-border p-4" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-[14px] font-bold text-text-primary mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-light/20 flex items-center justify-center text-accent text-[11px] font-bold shrink-0">
                  {a.name.split(" ")[1]?.[0] || "R"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-text-primary">
                    <strong>{a.name}</strong> {a.action}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`w-2 h-2 rounded-full ${typeColors[a.type]}`} />
                    <span className="text-[11px] text-text-muted" style={{ fontFamily: "var(--font-mono)" }}>{a.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
