"use client";

import { motion } from "framer-motion";
import { Scissors, Flame, Wind, Clock } from "lucide-react";

const steps = [
  { icon: Scissors, title: "Trim the Wick", desc: "Always trim your wick to 1/4 inch before each lighting to prevent black soot and ensure a clean burn." },
  { icon: Flame, title: "The First Burn", desc: "Allow the wax to melt completely to the edges of the vessel to prevent tunneling." },
  { icon: Wind, title: "Avoid Drafts", desc: "Keep the candle away from drafts, windows, and fans to maintain a steady, smoke-free flame." },
  { icon: Clock, title: "Know When to Stop", desc: "Use the candle for 2-3 hours to prevent the glass from overheating." },
];

export default function CandleCare() {
  return (
    <section className="py-24 md:py-32 bg-eloisen-green text-eloisen-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-4">Preserving Perfection</h4>
          <h2 className="text-4xl md:text-5xl font-serif">Candle Care Guide</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border border-eloisen-gold/30 flex items-center justify-center mb-6 text-eloisen-gold">
                <step.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-3">{step.title}</h3>
              <p className="text-sm font-light leading-relaxed text-eloisen-cream/70">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
