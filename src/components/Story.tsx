"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-32 bg-eloisen-cream relative overflow-hidden flex items-center justify-center text-center">
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-eloisen-green">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-8">Our Genesis</h4>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-snug mb-10 text-eloisen-green">
            "Eloisen was created to bridge the gap between profound olfactive art and sustainable, mindful living. We believe lighting a candle is not just a habit, but a sacred ritual of returning home."
          </h2>
          <div className="w-24 h-px bg-eloisen-gold mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
