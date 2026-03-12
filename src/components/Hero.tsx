"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Subtle scroll scaling and fading for luxury depth
  const scaleImage = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yText = useTransform(scrollY, [0, 400], [0, -40]);

  // Smooth mouse parallax logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring config for velvety smooth movement
  const springConfig = { stiffness: 40, damping: 25, mass: 1 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    smoothX.set(mousePosition.x);
    smoothY.set(mousePosition.y);
  }, [mousePosition, smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize coordinates from -1 to 1 based on screen size
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const bgMoveX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const bgMoveY = useTransform(smoothY, [-1, 1], [-15, 15]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100vh] overflow-hidden bg-eloisen-cream"
    >

      {/* Full-screen background image */}
      <motion.div
        style={{ scale: scaleImage, x: bgMoveX, y: bgMoveY }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <Image
          src="/img2.webp"
          alt="Eloisen Luxury Candle"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          priority
        />
        {/* Mobile bottom overlay for readability */}
        <div
          className="md:hidden absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))"
          }}
        />
      </motion.div>

      {/* Desktop overlay */}
      <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-b from-eloisen-cream/70 via-transparent to-eloisen-cream/30 pointer-events-none" />

      {/* Hero content */}
      <motion.div
        style={{ opacity: opacityText, y: yText }}
        className="relative z-20 flex flex-col items-center justify-center md:justify-start h-full pt-16 md:pt-44 lg:pt-52 px-6 pointer-events-none w-full"
      >

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="font-serif text-white md:text-[#1E3A34] text-5xl sm:text-6xl font-normal tracking-[0.2em] mb-6 text-center drop-shadow-md md:drop-shadow-sm"
        >
          Eloisen
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/90 md:text-[#1E3A34]/70 flex items-center justify-center w-full gap-5 mb-14 drop-shadow-sm md:drop-shadow-none text-center"
        >
          <span className="w-6 md:w-8 h-px bg-white/50 md:bg-[#1E3A34]/25 block shrink-0" />
          The Art of Luxury Scented Candles
          <span className="w-6 md:w-8 h-px bg-white/50 md:bg-[#1E3A34]/25 block shrink-0" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 pointer-events-auto w-full max-w-[280px] sm:max-w-none justify-center"
        >
          <a
            href="#Gallery"
            aria-label="View our product collection"
            className="flex items-center justify-center min-h-[48px] px-10 bg-white md:bg-[#1E3A34] text-[#1E3A34] md:text-eloisen-cream text-[10px] uppercase tracking-[0.22em] hover:bg-eloisen-cream md:hover:bg-eloisen-gold transition-colors duration-500 min-w-[180px] text-center font-medium shadow-xl md:shadow-none"
          >
            Our Products
          </a>
          <a
            href="#story"
            aria-label="Read the Eloisen brand story"
            className="flex items-center justify-center min-h-[48px] px-10 border border-white/50 md:border-[#1E3A34]/30 text-white md:text-[#1E3A34] text-[10px] uppercase tracking-[0.22em] hover:bg-white/10 md:hover:bg-[#1E3A34]/5 transition-all duration-500 min-w-[180px] text-center font-medium shadow-md md:shadow-none bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
          >
            Explore Story
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll line indicator */}
      <motion.div
        style={{ opacity: opacityText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#1E3A34]/40 font-sans">Scroll</span>
        <div className="w-px h-12 overflow-hidden bg-[#1E3A34]/10 relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-[#1E3A34]/40"
          />
        </div>
      </motion.div>

    </section>
  );
}
