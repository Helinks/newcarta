"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/images/foto1.jpg", alt: "Romantic sunset", rotation: -3 },
  { src: "/images/foto2.jpg", alt: "Holding hands", rotation: 2 },
  { src: "/images/foto3.jpg", alt: "Beautiful roses", rotation: -2 },
  { src: "/images/foto4.jpg", alt: "Romantic dinner", rotation: 3 },
  
];

export function PhotoCollage() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mx-auto">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.src}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          style={{ transform: `rotate(${photo.rotation}deg)` }}
        >
          {/* Polaroid frame */}
          <div className="bg-white p-2 pb-6 shadow-md rounded-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 40vw, 150px"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
