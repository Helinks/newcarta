"use client";

import { motion } from "framer-motion";

const petals = [
  { id: 1, x: "10%", delay: 0, duration: 15 },
  { id: 2, x: "30%", delay: 3, duration: 18 },
  { id: 3, x: "70%", delay: 5, duration: 16 },
  { id: 4, x: "85%", delay: 8, duration: 20 },
];

export function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-4 h-4 opacity-40"
          style={{ left: petal.x, top: -20 }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, 30, -20, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#f4a6b8]">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
