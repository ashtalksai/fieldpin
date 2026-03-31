"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Download, FileText } from "lucide-react";

const demoReports = [
  { date: "2026-03-31 14:32", ranger: "Martinez", type: "wildlife", typeColor: "bg-pin-wildlife", location: "44.428°N, -110.589°W", summary: "Black Bear sighting, adult male" },
  { date: "2026-03-31 13:15", ranger: "Okonkwo", type: "trail", typeColor: "bg-pin-trail", location: "44.461°N, -110.828°W", summary: "Trail washout after rain" },
  { date: "2026-03-31 11:47", ranger: "Chen", type: "incident", typeColor: "bg-pin-incident", location: "44.525°N, -110.402°W", summary: "Illegal campsite remains" },
  { date: "2026-03-30 16:20", ranger: "Martinez", type: "wildlife", typeColor: "bg-pin-wildlife", location: "44.385°N, -110.552°W", summary: "Elk herd, 12 individuals" },
  { date: "2026-03-30 10:55", ranger: "Kim", type: "wildlife", typeColor: "bg-pin-wildlife", location: "44.496°N, -110.630°W", summary: "Bald Eagle nest active" },
  { date: "2026-03-29 09:30", ranger: "Torres", type: "trail", typeColor: "bg-pin-trail", location: "44.505°N, -110.510°W", summary: "Bridge flooding, impassable" },
];

const typeLabels: Record<string, string> = {
  wildlife: "Wildlife",
  incident: "Incident",
  trail: "Trail",
};

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[24px] font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>Reports</h1>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-[13px] font-medium hover:bg-accent-hover transition-colors">
            <Download size={14} /> Export CSV
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-secondary text-[13px] font-medium hover:bg-surface-hover transition-colors">
            <FileText size={14} /> Export PDF
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface rounded-lg border border-border p-4 mb-6 flex flex-wrap gap-3" style={{ boxShadow: "var(--shadow-card)" }}>
        <input type="date" className="h-9 rounded-lg border border-border px-3 text-[13px] bg-background" />
        <select className="h-9 rounded-lg border border-border px-3 text-[13px] bg-background text-text-secondary">
          <option>All Rangers</option>
          <option>Martinez</option>
          <option>Okonkwo</option>
          <option>Chen</option>
          <option>Kim</option>
          <option>Torres</option>
        </select>
        <div className="flex items-center gap-3">
          {["wildlife", "incident", "trail"].map((t) => (
            <label key={t} className="flex items-center gap-1.5 text-[13px] text-text-secondary cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border text-accent focus:ring-accent" />
              {typeLabels[t]}
            </label>
          ))}
        </div>
      </div>

      <p className="text-[13px] text-text-muted mb-3">Showing {demoReports.length} reports matching your filters</p>

      {/* Results table */}
      <div className="bg-surface rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Timestamp", "Ranger", "Type", "Location", "Summary"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[12px] tracking-[0.06em] uppercase text-text-muted font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {demoReports.map((r, i) => (
                <tr key={i} className={`border-b border-border hover:bg-surface-hover transition-colors ${i % 2 === 1 ? "bg-background" : ""}`}>
                  <td className="px-4 py-3 text-[13px] text-text-muted whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>{r.date}</td>
                  <td className="px-4 py-3 text-[14px] text-text-primary font-medium">{r.ranger}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[12px] font-medium text-white ${r.typeColor}`}>
                      {typeLabels[r.type]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-text-muted whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>{r.location}</td>
                  <td className="px-4 py-3 text-[14px] text-text-secondary">{r.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
