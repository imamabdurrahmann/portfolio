"use client";

import { useEffect } from "react";

export function EasterEgg() {
  useEffect(() => {
    // Console easter egg - hidden message for developers
    console.log(`
%c ╔═══════════════════════════════════════════╗
%c ║                                           ║
%c ║   👋 Hey, thanks for checking the console!  ║
%c ║                                           ║
%c ║   Built with Next.js, Tailwind, and       ║
%c ║   way too much coffee                   ║
%c ║                                           ║
%c ║   — Imam                                   ║
%c ║                                           ║
%c ╚═══════════════════════════════════════════╝
    `,
      'color: #fb923c; font-weight: bold; font-size: 14px;',
      'color: #fafaf9;',
      'color: #fb923c;',
      'color: #fafaf9;',
      'color: #fb923c;',
      'color: #fafaf9;',
      'color: #fb923c;',
      'color: #fafaf9;',
      'color: #fb923c;',
      'color: #fafaf9;'
    );

    // Konami code easter egg
    const konamiCode = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg activated!
          document.body.style.animation = 'none';
          document.body.offsetHeight; // Trigger reflow

          // Show secret message
          const toast = document.createElement('div');
          toast.innerHTML = `
            <div style="
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              padding: 1rem 1.5rem;
              background: linear-gradient(135deg, #fb923c, #ea580c);
              color: white;
              border-radius: 1rem;
              font-family: 'DM Sans', sans-serif;
              font-size: 0.875rem;
              font-weight: 600;
              box-shadow: 0 10px 40px rgba(251, 146, 60, 0.4);
              z-index: 9999;
              animation: slideIn 0.5s ease;
            ">
              🎮 Nice! You found the secret!
              <br>
              <span style="font-size: 0.75rem; font-weight: 400; opacity: 0.9;">
                Thanks for being curious like a true developer
              </span>
            </div>
            <style>
              @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
            </style>
          `;
          document.body.appendChild(toast);
          setTimeout(() => {
            toast.remove();
          }, 4000);

          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
}