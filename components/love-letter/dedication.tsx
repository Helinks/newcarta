"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface DedicationProps {
  to?: string;
  from?: string;
}

export function Dedication({ to , from  }: DedicationProps) {
  return (
    <motion.div
      className="text-center py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-8 h-px bg-[#f4a6b8]" />
        <Heart className="w-4 h-4 text-[#e85a71]" fill="currentColor" />
        <div className="w-8 h-px bg-[#f4a6b8]" />
      </div>
      
      <p className="text-lg text-[#4a3f4f] font-serif italic">
        Para: <span className="text-[#e85a71]">{to}</span>
      </p>
      <p className="text-lg text-[#4a3f4f] font-serif mt-2">
        Con amor, <span className="font-semibold">{from}</span>
      </p>
    </motion.div>
  );
}
