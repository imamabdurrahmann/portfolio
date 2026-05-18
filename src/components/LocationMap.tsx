"use client";

import { motion } from "framer-motion";

export function LocationMap() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      
      {/* Compass / Map graphic */}
      <motion.div 
        className="relative w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-dashed border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
        
        {/* Radar Line */}
        <motion.div 
          className="absolute w-1/2 h-[1px] bg-gradient-to-r from-transparent to-primary/50 top-1/2 right-1/2 origin-right"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Target */}
        <div className="w-2 h-2 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
        
        {/* Radar Ping effect */}
        <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping opacity-75" />
        
        {/* Coordinate Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <p className="text-[10px] font-mono text-primary/70 tracking-widest">
            3.7928° S, 102.2608° E
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
