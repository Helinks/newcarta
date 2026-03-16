"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Envelope({ isOpen, onClick }: EnvelopeProps) {
  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onClick={onClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Envelope Body */}
      <div className="relative w-72 h-48 sm:w-80 sm:h-52">
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fce4ec] to-[#f8bbd9] rounded-lg shadow-xl" />

        {/* Envelope Front */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-b from-[#ffe4e9] to-[#ffd1dc] rounded-b-lg shadow-lg">
          {/* Envelope Pattern Lines */}
          <div className="absolute inset-4 border-2 border-dashed border-[#f4a6b8]/30 rounded" />
        </div>

        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 origin-top"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <svg
            viewBox="0 0 320 100"
            className="w-full h-auto"
            style={{ backfaceVisibility: "hidden" }}
          >
            <path
              d="M0,0 L160,80 L320,0 L320,10 L0,10 Z"
              fill="url(#flapGradient)"
              className="drop-shadow-md"
            />
            <defs>
              <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fce4ec" />
                <stop offset="100%" stopColor="#f8bbd9" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Heart Seal */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#e85a71] to-[#d44960] rounded-full shadow-lg flex items-center justify-center">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-[#e85a71]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Click hint */}
        <motion.p
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#7a6b7d] font-sans whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ delay: 0.5 }}
        >
          Click para abrir
        </motion.p>
      </div>
    </motion.div>
  );
}
