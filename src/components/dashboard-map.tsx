"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pins = [
  { lat: 44.4280, lng: -110.5885, type: "wildlife", label: "Black Bear sighting" },
  { lat: 44.4605, lng: -110.8281, type: "incident", label: "Fallen tree on trail" },
  { lat: 44.5246, lng: -110.4018, type: "trail", label: "Trail washout" },
  { lat: 44.3847, lng: -110.5524, type: "wildlife", label: "Elk herd (12)" },
  { lat: 44.4960, lng: -110.6298, type: "wildlife", label: "Bald Eagle nest" },
  { lat: 44.4180, lng: -110.7085, type: "incident", label: "Illegal campsite" },
  { lat: 44.5050, lng: -110.5100, type: "trail", label: "Bridged creek flooding" },
];

const pinColors: Record<string, string> = {
  wildlife: "#2D6A4F",
  incident: "#D4550A",
  trail: "#2D6080",
};

export default function DashboardMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([44.46, -110.58], 10);
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    pins.forEach((pin) => {
      const color = pinColors[pin.type] || "#2D6A4F";
      const marker = L.circleMarker([pin.lat, pin.lng], {
        radius: 8,
        fillColor: color,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      }).addTo(map);
      marker.bindPopup(`<strong>${pin.label}</strong><br/><span style="color:${color}">${pin.type}</span>`);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}
