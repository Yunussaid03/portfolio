"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outlinePos, setOutlinePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only activate cursor for desktop mice with fine pointer tracking
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth trailing outline animation loop
    const followCursor = () => {
      setOutlinePos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(followCursor);
    };

    // Attach hover listeners to interactable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest(".interactive") ||
          target.closest(".glass-card") ||
          target.closest("input") ||
          target.closest("textarea"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);
    animId = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Exact cursor dot from DevHQ */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? "6px" : "8px",
          height: isHovered ? "6px" : "8px",
        }}
      />

      {/* Exact trailing cursor outline with hover scale from DevHQ */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${
          isHovered
            ? "w-16 h-16 border border-orange-400 bg-orange-500/15 shadow-[0_0_25px_rgba(249,115,22,0.4)]"
            : "w-10 h-10 border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
        }`}
        style={{
          left: `${outlinePos.x}px`,
          top: `${outlinePos.y}px`,
        }}
      />
    </>
  );
}
