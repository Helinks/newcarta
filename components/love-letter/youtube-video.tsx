"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface YouTubeVideoProps {
  videoId?: string;
}

export function YouTubeVideo({ videoId = "dQw4w9WgXcQ" }: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-[#fce4ec]">
        {!isLoaded ? (
          <button
            onClick={() => setIsLoaded(true)}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f4a6b8] to-[#e85a71] group cursor-pointer"
            aria-label="Play video"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#e85a71] ml-1" fill="currentColor" />
            </div>
            <span className="absolute bottom-4 text-white/90 text-sm font-sans">
              Click to play our song
            </span>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Our special song"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
}
