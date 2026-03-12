"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Pure Soy Wax",
    description: "We use only the finest meticulously sourced eco-friendly pure soy wax, promising a clean, slow, and even burn that preserves the delicate integrity of our curated fragrances.",
  },
  {
    number: "02",
    title: "Cotton Wick",
    description: "Our natural cotton wax-dipped wicks are carefully selected and hand-placed to ensure a beautiful, smoke-free flame, creating a warm and consistent glow.",
  },
  {
    number: "03",
    title: "Hand-Poured",
    description: "Every vessel is hand-poured with intention and care by skilled artisans in our studio. We believe true luxury lies in the human touch woven into every creation.",
  }
];

export default function Craftsmanship() {
  return (
    <section className="py-32 md:py-48 bg-eloisen-cream relative overflow-hidden text-eloisen-green">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <h4 className="uppercase tracking-[0.2em] text-eloisen-gold text-[10px] md:text-xs font-semibold mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-eloisen-gold/30"></span>
            The Process
            <span className="w-8 h-[1px] bg-eloisen-gold/30"></span>
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-wide">
            Artisanal Craftsmanship
          </h2>
        </motion.div>

        {/* Horizontal Desktop / Vertical Mobile Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col relative"
            >
              {/* Top divider line */}
              <div className="w-full h-[1px] bg-eloisen-green/10 mb-8 md:mb-12" />

              <div className="flex flex-col h-full">
                {/* Large elegant number */}
                <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-light text-eloisen-green/20 mb-6 md:mb-8 tracking-tighter">
                  {step.number}
                </span>
                
                {/* Step Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-eloisen-green mb-6 md:mb-8 tracking-wide">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm md:text-base lg:text-[17px] font-sans font-light text-eloisen-green/70 leading-[1.8] max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
