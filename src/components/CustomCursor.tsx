"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(animate);
    };

    const grow = () => outline.classList.add("cursor-hover");
    const shrink = () => outline.classList.remove("cursor-hover");

    document.addEventListener("mousemove", move);
    requestAnimationFrame(animate);

    document.querySelectorAll("a, button, .hero-cta, .hero-cta-secondary, .contact-tile, .tech-tag, .social-icon, .theme-toggle")
      .forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
