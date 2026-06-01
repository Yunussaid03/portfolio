"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.1,
      }}
      className="min-h-screen bg-black text-white"
    >
      {children}
    </ReactLenis>
  );
}
