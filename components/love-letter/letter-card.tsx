"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { PhotoCollage } from "./photo-collage";
import { LoveMessage } from "./love-message";
import { YouTubeVideo } from "./youtube-video";
import { AudioPlayer } from "./audio-player";
import { Dedication } from "./dedication";

interface LetterCardProps {
  isVisible: boolean;
}

export function LetterCard({ isVisible }: LetterCardProps) {
  if (!isVisible) return null;
  const sender= "Kevin";
  const receiver= "Ota";


  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <div className="bg-[#fffaf6] rounded-2xl shadow-2xl overflow-hidden">
        {/* Letter Header */}
        <div className="text-center pt-8 pb-4 px-6 bg-gradient-to-b from-[#fff5f8] to-transparent">
          <motion.p
            className="text-sm tracking-widest text-[#f4a6b8] font-sans uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
           {sender} & {receiver}
          </motion.p>
          
          <motion.h1
            className="text-4xl sm:text-5xl font-serif text-[#e85a71] mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Carta para ti
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="w-12 h-px bg-[#f4a6b8]" />
            <Heart className="w-4 h-4 text-[#e85a71]" fill="currentColor" />
            <div className="w-12 h-px bg-[#f4a6b8]" />
          </motion.div>
          
          <motion.p
            className="text-sm text-[#7a6b7d] font-serif italic mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Nosotros
          </motion.p>
        </div>

        {/* Letter Content */}
        <div className="px-6 pb-8 space-y-6">
          <PhotoCollage />
          <LoveMessage />
          <YouTubeVideo />
          <AudioPlayer />
          <Dedication />
        </div>
      </div>
    </motion.div>
  );
}
