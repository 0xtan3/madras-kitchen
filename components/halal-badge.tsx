"use client"

import { motion } from "framer-motion"

export function HalalBadge() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 left-6 z-50 flex items-center bg-black/80 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default select-none"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse pointer-events-none" />
      
      {/* Halal Logo */}
      <img src="/images/halal.png" alt="Halal Certified" className="w-10 h-10 object-contain" />
      
      {/* Expanding Text on Hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-serif text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap pl-0 group-hover:pl-3 pr-0 group-hover:pr-2">
        100% Halal
      </span>
    </motion.div>
  )
}
