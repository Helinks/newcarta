"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Envelope } from "@/components/love-letter/envelope";
import { LetterCard } from "@/components/love-letter/letter-card";
import { FloatingPetals } from "@/components/love-letter/floating-petals";

export default function LoveLetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fde7ef] via-[#fce4ec] to-[#fde7ef] overflow-x-hidden">
      <FloatingPetals />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              className="flex flex-col items-center"
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-serif text-[#e85a71] mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Tienes una carta
              </motion.h2>
              <Envelope isOpen={isOpen} onClick={handleOpenEnvelope} />
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              className="w-full max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <LetterCard isVisible={isOpen} />
              
              {/* Close/Reset button */}
              <motion.button
                className="mt-6 mx-auto block text-sm text-[#7a6b7d] hover:text-[#e85a71] transition-colors font-sans cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsOpen(false)}
              >
                Cierra la carta
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
