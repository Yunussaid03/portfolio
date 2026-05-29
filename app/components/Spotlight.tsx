type SpotlightProps = {
  className?: string;
};

export function Spotlight({ className = "" }: SpotlightProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_28%,transparent_70%)] blur-3xl" />
      <div className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-2xl" />
      <div className="absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full border border-white/10 bg-white/5 blur-2xl" />
    </div>
  );
}
