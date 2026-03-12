"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ScentExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.3, 1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-[120vh] bg-eloisen-green text-eloisen-cream flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image Layer */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 origin-center"
      >
        <Image
          src="/imgw.webp"
          alt="Scent Experience Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eloisen-green/90 via-eloisen-green/60 to-eloisen-green/90" />
      </motion.div>

      {/* Floating particles/particles effect purely via CSS/Framer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {mounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{
              y: "-10vh",
              x: Math.random() * window.innerWidth,
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute bottom-0 w-2 h-2 rounded-full bg-eloisen-gold/40 blur-[2px]"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          style={{ y: yParallax }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.3em] text-eloisen-gold text-xs font-semibold mb-8"
          >
            The Scent Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-12 drop-shadow-lg"
          >
            An invisible luxury that transforms your sanctuary.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-1/2 md:w-1/4 h-px bg-eloisen-gold/50 mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl font-light text-eloisen-cream/80 leading-relaxed max-w-2xl mx-auto"
          >
            Our master perfumers meticulously blend rare botanicals, exotic spices, and precious woods. Each breath invites a moment of stillness, evoking memories of rain-kissed earth and gilded evenings.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
