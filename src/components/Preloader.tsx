"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0, borderRadius: "0px" }}
          exit={{ 
            y: "-100vh", 
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
          }}
          className="preloader"
        >
          <motion.div exit={{ opacity: 0, transition: { duration: 0.3 } }} className="preloader-content">
            <div className="preloader-name">IMAM</div>
            <div className="preloader-line" />
            <div className="preloader-role">Flutter Developer</div>
            <div className="preloader-count">{Math.min(count, 100)}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
