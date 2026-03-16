"use client";

import { motion } from "framer-motion";

export function LoveMessage() {
  return (
    <motion.div
      className="text-center px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p className="text-base sm:text-lg leading-relaxed text-[#4a3f4f] font-sans">
      </p>

    </motion.div>
  );
}
