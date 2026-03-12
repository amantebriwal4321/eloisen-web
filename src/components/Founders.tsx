"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Rishit Goel",
    role: "Co-Founder",
    image: "/C01_image.webp",
    bio: "Driven by a passion for impeccable design and intentional living, Rishit co-created Eloisen to bring artisanal luxury into everyday spaces.",
  },
  {
    name: "Mitakshi Bhutani",
    role: "Co-Founder",
    image: "/C02_img.webp",
    bio: "With a deep commitment to sustainable luxury, Mitakshi brings the philosophy of conscious craftsmanship to every Eloisen creation.",
  },
];

export default function Founders() {
  return (
    <section id="story" className="py-24 md:py-32 bg-eloisen-cream text-eloisen-green">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-4">The Visionaries</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-eloisen-green">Meet the Founders</h2>
          <div className="w-12 h-px bg-eloisen-gold/50 mx-auto mt-8" />
        </motion.div>

        {/* Founder Cards — side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Portrait image */}
              <div className="w-full max-w-sm aspect-[3/4] relative overflow-hidden mb-8 shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-serif text-3xl md:text-4xl lg:text-[36px] font-normal text-eloisen-green mb-3 tracking-wide mt-2">
                {founder.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-eloisen-gold font-medium mb-8">
                {founder.role}
              </p>
              
              <div className="w-8 h-px bg-eloisen-green/20 mb-8" />
              
              <p className="text-base md:text-lg lg:text-[19px] font-light leading-[1.8] text-eloisen-green/80 max-w-sm">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand story pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-32 md:mt-40 text-center max-w-4xl mx-auto"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-[28px] font-light leading-relaxed text-eloisen-green/90 italic tracking-wide">
            "Together, we set out to create something that transcends the ordinary — a candle that is not just lit, but felt."
          </p>
          <div className="w-16 h-px bg-eloisen-gold/50 mx-auto mt-12 mb-8" />
        </motion.div>

      </div>
    </section>
  );
}
