"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Heart } from "lucide-react";

interface AudioPlayerProps {
  audioSrc?: string;
}

export function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!audioSrc) {
    return (
      <motion.div
        className="w-full max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4a6b8] to-[#e85a71] flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#7a6b7d] font-sans">Voice message</p>
            <p className="text-sm text-[#4a3f4f] font-sans">Add your audio file</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="w-full max-w-xs mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4a6b8] to-[#e85a71] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
          )}
        </button>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Heart className="w-3 h-3 text-[#e85a71]" fill="currentColor" />
            <span className="text-xs text-[#7a6b7d] font-sans">Voice message</span>
          </div>
          <div className="mt-1.5 h-1.5 bg-[#fce4ec] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f4a6b8] to-[#e85a71] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
