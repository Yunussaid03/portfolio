"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3,000 3D Star points (exact replica of DevHQ's 3200 stars)
    const starCount = 1800;
    const stars: { x: number; y: number; z: number; o: number }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 1500 + 100,
        o: Math.random() * 0.7 + 0.3,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.0008;
      targetMouseY = (e.clientY - height / 2) * 0.0008;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const render = () => {
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 400;

      for (let i = 0; i < starCount; i++) {
        const star = stars[i];

        // Rotation & drift
        star.z -= 0.6;
        if (star.z <= 10) {
          star.z = 1500;
          star.x = (Math.random() - 0.5) * 2000;
          star.y = (Math.random() - 0.5) * 2000;
        }

        // Apply mouse tilt
        const rotX = star.x + mouseX * star.z * 0.3;
        const rotY = star.y + mouseY * star.z * 0.3;

        // Perspective 3D projection
        const scale = fov / (fov + star.z);
        const px = cx + rotX * scale;
        const py = cy + rotY * scale;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.6, (1 - star.z / 1500) * 2.4);
          const alpha = (1 - star.z / 1500) * star.o;

          // Render glowing star
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          // Subtle warm tint matching the orange theme
          ctx.fillStyle = `rgba(255, 235, 215, ${alpha})`;
          ctx.shadowBlur = size > 1.8 ? 6 : 0;
          ctx.shadowColor = "rgba(249, 115, 22, 0.6)";
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
