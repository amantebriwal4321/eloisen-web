"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Recycle, Wind, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Mind Relaxing", description: "Designed to soothe the mind and guide you into a state of deep tranquility." },
  { icon: Leaf, title: "Eco-Friendly", description: "Created with nature in mind, leaving no harmful footprints." },
  { icon: Award, title: "Luxury", description: "Crafted to perfection, offering a premium sensory experience." },
  { icon: Recycle, title: "Sustainable", description: "Ethically sourced materials in reusable elegant packaging." },
  { icon: Wind, title: "Smoke-Free", description: "Clean burning cotton wicks ensuring a pure atmosphere." },
];

export default function BrandStatement() {
  return (
    <section className="py-24 md:py-32 bg-eloisen-beige text-eloisen-green">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Statement text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xl md:text-3xl font-serif font-light leading-relaxed mb-6">
            "To redefine home ambiance by becoming a symbol of luxury, comfort, and mindful living."
          </p>
          <div className="w-16 h-px bg-eloisen-gold mx-auto"></div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-eloisen-green/20 flex items-center justify-center mb-6 group-hover:border-eloisen-gold transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-eloisen-green/80 group-hover:text-eloisen-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm font-light leading-relaxed opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
