"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { UserPlus, X } from "lucide-react";

const demoRangers = [
  { name: "Sarah Martinez", email: "s.martinez@parkservice.gov", lastSync: "2 hours ago", pins: 34, status: "Active" },
  { name: "James Okonkwo", email: "j.okonkwo@parkservice.gov", lastSync: "4 hours ago", pins: 28, status: "Active" },
  { name: "Maria Chen", email: "m.chen@parkservice.gov", lastSync: "1 day ago", pins: 41, status: "Active" },
  { name: "Alex Kim", email: "a.kim@parkservice.gov", lastSync: "3 days ago", pins: 12, status: "Inactive" },
  { name: "David Torres", email: "d.torres@parkservice.gov", lastSync: "6 hours ago", pins: 19, status: "Active" },
];

export default function RangersPage() {
  const [showInvite, setShowInvite] = useState(false);
  const inviteCode = "482913";

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[24px] font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>Rangers</h1>
        <button
          onClick={() => setShowInvite(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition-colors"
        >
          <UserPlus size={16} /> Invite Ranger
        </button>
      </div>

      {/* Table */}
      <div className="bg-surface rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Name", "Email", "Last Sync", "Pins This Month", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[12px] tracking-[0.06em] uppercase text-text-muted font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {demoRangers.map((r, i) => (
                <tr key={r.email} className={`border-b border-border hover:bg-surface-hover transition-colors cursor-pointer ${i % 2 === 1 ? "bg-background" : ""}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent-light/20 flex items-center justify-center text-accent text-[12px] font-bold">
                        {r.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-[14px] font-medium text-text-primary">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[14px] text-text-secondary">{r.email}</td>
                  <td className="px-4 py-3 text-[13px] text-text-muted" style={{ fontFamily: "var(--font-mono)" }}>{r.lastSync}</td>
                  <td className="px-4 py-3 text-[14px] text-text-primary font-medium" style={{ fontFamily: "var(--font-mono)" }}>{r.pins}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[12px] font-medium ${
                      r.status === "Active"
                        ? "bg-accent/10 text-accent"
                        : "bg-text-muted/10 text-text-muted"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite modal */}
      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowInvite(false)} />
          <div className="relative bg-surface rounded-xl p-8 max-w-[480px] w-full mx-4" style={{ boxShadow: "var(--shadow-modal)" }}>
            <button className="absolute top-4 right-4 text-text-muted" onClick={() => setShowInvite(false)}>
              <X size={20} />
            </button>
            <h2 className="text-[20px] font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>Invite a Ranger</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-text-primary mb-1.5">Ranger email</label>
                <input
                  type="email"
                  className="w-full h-11 rounded-lg border border-border bg-background px-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="ranger@parkservice.gov"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-text-primary mb-1.5">Invite Code</label>
                <div className="h-11 rounded-lg bg-background border border-border px-3 flex items-center text-[18px] font-bold tracking-[0.2em] text-accent" style={{ fontFamily: "var(--font-mono)" }}>
                  {inviteCode}
                </div>
                <p className="text-[12px] text-text-muted mt-1">Share this code with the ranger to complete setup.</p>
              </div>
              <button className="w-full h-11 rounded-lg bg-accent text-white text-[15px] font-medium hover:bg-accent-hover transition-colors">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
