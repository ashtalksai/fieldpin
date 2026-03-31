"use client";

export function PhoneMockup({ variant = "map" }: { variant?: "map" | "form" | "dashboard" }) {
  return (
    <div
      className="relative mx-auto w-[240px] h-[480px] md:w-[280px] md:h-[560px] rounded-[36px] border-[6px] border-text-primary bg-text-primary"
      style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-text-primary rounded-b-xl z-10" />
      {/* Screen */}
      <div className="w-full h-full rounded-[30px] overflow-hidden bg-[#e8e4d8] relative">
        {variant === "map" && <MapScreen />}
        {variant === "form" && <FormScreen />}
        {variant === "dashboard" && <DashboardScreen />}
      </div>
    </div>
  );
}

function MapScreen() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#d4e6c3] via-[#c8ddb5] to-[#b8d4a2]">
      {/* Topo lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <path d="M0 80 Q60 60 120 90 T240 70" fill="none" stroke="#2D6A4F" strokeWidth="1" />
        <path d="M0 140 Q80 120 160 150 T280 130" fill="none" stroke="#2D6A4F" strokeWidth="1" />
        <path d="M0 200 Q70 180 140 210 T280 190" fill="none" stroke="#2D6A4F" strokeWidth="1" />
        <path d="M0 260 Q90 240 180 270 T280 250" fill="none" stroke="#2D6A4F" strokeWidth="1" />
        <path d="M20 320 Q100 300 200 330 T280 310" fill="none" stroke="#2D6A4F" strokeWidth="1" />
        <path d="M0 380 Q60 360 120 390 T280 370" fill="none" stroke="#2D6A4F" strokeWidth="1" />
      </svg>
      {/* Trail path */}
      <svg className="absolute inset-0 w-full h-full">
        <path d="M40 400 Q80 300 100 250 T140 180 T180 120 T200 60" fill="none" stroke="#8B7355" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
      </svg>
      {/* Wildlife pin (green) */}
      <div className="absolute top-[25%] left-[30%]">
        <div className="w-6 h-6 rounded-full bg-pin-wildlife border-2 border-white shadow-md" />
      </div>
      {/* Incident pin (orange) */}
      <div className="absolute top-[45%] right-[25%]">
        <div className="w-6 h-6 rounded-full bg-pin-incident border-2 border-white shadow-md" />
      </div>
      {/* Trail pin (blue) */}
      <div className="absolute top-[65%] left-[45%]">
        <div className="w-6 h-6 rounded-full bg-pin-trail border-2 border-white shadow-md" />
      </div>
      {/* Add button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl font-light">+</span>
        </div>
      </div>
    </div>
  );
}

function FormScreen() {
  return (
    <div className="w-full h-full bg-surface p-4 pt-8">
      <div className="text-[10px] font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-body)" }}>Wildlife Sighting</div>
      <div className="space-y-3 mt-4">
        <div>
          <div className="text-[8px] text-text-muted mb-1">Species</div>
          <div className="h-7 bg-background rounded border border-border px-2 flex items-center text-[9px] text-text-primary">Black Bear</div>
        </div>
        <div>
          <div className="text-[8px] text-text-muted mb-1">Threat Level</div>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded-full bg-pin-incident/15 text-pin-incident text-[8px] font-medium">High</span>
          </div>
        </div>
        <div>
          <div className="text-[8px] text-text-muted mb-1">GPS Location</div>
          <div className="h-7 bg-background rounded border border-border px-2 flex items-center text-[9px]" style={{ fontFamily: "var(--font-mono)" }}>44.1°N, -110.5°W</div>
        </div>
        <div>
          <div className="text-[8px] text-text-muted mb-1">Photo</div>
          <div className="w-16 h-12 bg-accent/10 rounded border border-accent/20 flex items-center justify-center">
            <span className="text-accent text-[8px]">📷</span>
          </div>
        </div>
        <div className="h-7 bg-accent rounded flex items-center justify-center text-white text-[9px] font-medium mt-4">Submit Report</div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-background p-3 pt-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-[9px] font-bold text-accent" style={{ fontFamily: "var(--font-display)" }}>Fieldpin</div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[7px] text-text-muted">Synced</span>
        </div>
      </div>
      {/* Mini stat cards */}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        {[["24", "Pins"], ["3", "Rangers"], ["2", "Pending"], ["6", "Reports"]].map(([n, l]) => (
          <div key={l} className="bg-surface rounded p-1.5 border border-border">
            <div className="text-[11px] font-bold text-text-primary" style={{ fontFamily: "var(--font-mono)" }}>{n}</div>
            <div className="text-[7px] text-text-muted">{l}</div>
          </div>
        ))}
      </div>
      <div className="bg-accent-light/20 rounded p-2 text-[7px] text-accent font-medium flex items-center gap-1">
        <span>✓</span> 4 pins synced just now
      </div>
    </div>
  );
}
