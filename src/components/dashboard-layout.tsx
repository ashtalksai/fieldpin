"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  ChevronDown,
  Bell,
} from "lucide-react";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Map", href: "/dashboard/map", icon: Map },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Rangers", href: "/dashboard/rangers", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-16 bg-surface border-b border-border flex items-center px-4 md:px-6 shrink-0" style={{ boxShadow: "var(--shadow-card)" }}>
        <button
          className="lg:hidden mr-3 text-text-primary"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={22} />
        </button>
        <Link
          href="/dashboard"
          className="text-lg font-bold text-accent mr-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Fieldpin
        </Link>
        <span className="text-[14px] font-bold text-text-primary hidden sm:inline">Demo Agency</span>
        <span className="hidden sm:inline-flex items-center gap-1.5 ml-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[12px] text-text-muted">Synced</span>
        </span>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber/15 text-amber-hover text-[12px] font-medium">
            <Bell size={12} />
            2 Pending
          </span>
          <div className="w-8 h-8 rounded-full bg-accent-light/30 flex items-center justify-center text-accent text-[13px] font-bold">
            DR
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-[260px] bg-surface border-r border-border p-4 animate-in slide-in-from-left">
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-accent" style={{ fontFamily: "var(--font-display)" }}>Fieldpin</span>
                <button onClick={() => setSidebarOpen(false)}><X size={20} /></button>
              </div>
              <SidebarNav pathname={pathname} onSelect={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-[260px] bg-surface border-r border-border p-4 shrink-0">
          <SidebarNav pathname={pathname} />
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarNav({ pathname, onSelect }: { pathname: string; onSelect?: () => void }) {
  return (
    <nav className="space-y-1">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onSelect}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
              isActive
                ? "bg-accent/10 text-accent font-medium border-l-[3px] border-accent"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
            }`}
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
