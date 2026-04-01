"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Save, Building2, User, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-[24px] font-bold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Settings
        </h1>
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition-colors"
        >
          <Save size={16} />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6 max-w-[720px]">
        {/* Agency Info */}
        <div
          className="bg-surface rounded-lg border border-border p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Building2 size={20} className="text-accent" />
            <h2 className="text-[16px] font-bold text-text-primary">
              Agency Information
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                Agency Name
              </label>
              <input
                type="text"
                defaultValue="Demo Agency"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                  Region / Park
                </label>
                <input
                  type="text"
                  defaultValue="Yellowstone National Park"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                  Country
                </label>
                <input
                  type="text"
                  defaultValue="United States"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                Default Map Center (lat, lng)
              </label>
              <input
                type="text"
                defaultValue="44.4280, -110.5885"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div
          className="bg-surface rounded-lg border border-border p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <User size={20} className="text-accent" />
            <h2 className="text-[16px] font-bold text-text-primary">
              Account
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Demo Ranger"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="demo@fieldpin.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-medium text-text-secondary mb-1.5">
                Role
              </label>
              <select
                defaultValue="admin"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="ranger">Ranger</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div
          className="bg-surface rounded-lg border border-border p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Bell size={20} className="text-accent" />
            <h2 className="text-[16px] font-bold text-text-primary">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "Email me when a ranger syncs new pins", defaultChecked: true },
              { label: "Email me when an incident report is filed", defaultChecked: true },
              { label: "Weekly summary of all field activity", defaultChecked: false },
              { label: "Alert when a ranger hasn't synced in 48 hours", defaultChecked: true },
            ].map((n) => (
              <label key={n.label} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked={n.defaultChecked}
                  className="w-4 h-4 rounded border-border text-accent focus:ring-accent/30 accent-[var(--accent)]"
                />
                <span className="text-[14px] text-text-secondary group-hover:text-text-primary transition-colors">
                  {n.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div
          className="bg-surface rounded-lg border border-destructive/30 p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Shield size={20} className="text-destructive" />
            <h2 className="text-[16px] font-bold text-text-primary">
              Danger Zone
            </h2>
          </div>
          <p className="text-[14px] text-text-secondary mb-4">
            Deleting your agency account will remove all rangers, pins, and reports permanently. This action cannot be undone.
          </p>
          <button className="px-4 py-2 rounded-lg border border-destructive/40 text-destructive text-[13px] font-medium hover:bg-destructive/10 transition-colors">
            Delete Agency Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
