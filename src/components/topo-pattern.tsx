export function TopoPattern({ className = "", opacity = 0.06 }: { className?: string; opacity?: number }) {
  const svgStr = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M0 24 L24 0' stroke='%232D6A4F' stroke-width='0.5' opacity='${opacity}'/></svg>`;
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgStr}")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
