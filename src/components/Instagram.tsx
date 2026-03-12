"use client";

import { motion } from "framer-motion";
import { Instagram as IgIcon } from "lucide-react";
import Image from "next/image";

const instaImages = [
  { src: "/so.jpeg", alt: "Eloisen workshop" },
  { src: "/imgc1 .jpeg", alt: "Raw candle materials" },
  { src: "imgc2.jpeg", alt: "Signature eloisen candle" },
  { src: "/img2.png", alt: "The final touch" },
  { src: "/main_img2.jpeg", alt: "Candle aesthetic" },
  { src: "/img.png", alt: "Studio moments" },
];

const InstagramCTA = () => (
  <a
    href="https://instagram.com/eloisencandles"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-10 py-5 bg-eloisen-green text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-eloisen-gold transition-all duration-500 shadow-xl hover:scale-105 active:scale-95"
  >
    Follow on Instagram
  </a>
);

export default function Instagram() {
  return (
    <section className="py-24 md:py-32 bg-eloisen-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* LEFT SIDE: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-eloisen-gold/10 p-2 rounded-full">
                <IgIcon className="w-5 h-5 text-eloisen-gold" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-eloisen-gold">Connection</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-eloisen-green mb-8 leading-tight">
              Join the <br className="hidden md:block" /> Community
            </h2>

            <p className="text-xl font-light text-eloisen-green/80 mb-4 italic">
              @eloisencandles
            </p>

            <p className="text-lg font-light text-eloisen-green/70 mb-10 leading-relaxed max-w-md">
              Follow Eloisen on Instagram for daily rituals, candle inspiration, and behind-the-scenes moments from our studio.
            </p>

            <div className="hidden lg:block">
              <InstagramCTA />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Instagram Visual Gallery */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 mb-10 lg:mb-0">
              {instaImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 bg-white/5"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    priority={index < 3}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <IgIcon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile-only CTA */}
            <div className="lg:hidden flex justify-center">
              <InstagramCTA />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
