"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "L'Éternel Signature",
    size: "100ml",
    burnTime: "25+ hours",
    description: "A delicate balance of warmth and earthiness, anchoring your space in pure serenity.",
    image: "/C01_image.webp"
  },
  {
    id: 2,
    name: "La Nuit Profonde",
    size: "130ml",
    burnTime: "40+ hours",
    description: "Deep, mysterious, and captivating. Designed for long evenings of reflection.",
    image: "/C02_img.webp"
  },
  {
    id: 3,
    name: "Jardin de Rose",
    size: "100ml",
    burnTime: "25+ hours",
    description: "A fresh, blooming bouquet of wild roses kissed by morning dew.",
    image: "/main_img2.webp"
  },
  {
    id: 4,
    name: "Bois de Santal",
    size: "200ml",
    burnTime: "60+ hours",
    description: "Rich sandalwood mixed with subtle spice to ground your living room.",
    image: "/Main_image.webp"
  }
];

export default function ProductCollection() {
  return (
    <section id="collection" className="py-24 md:py-32 bg-eloisen-beige">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-4">Curated Selection</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-eloisen-green">Our Collection</h2>
          </div>
          <a href="#" className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-eloisen-gold transition-colors duration-300">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-[500px] overflow-hidden bg-eloisen-cream mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Hover overlay for 'View Product' */}
                <div className="absolute inset-0 bg-eloisen-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-8 py-3 bg-eloisen-cream text-eloisen-green text-sm uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Product
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-eloisen-green">{product.name}</h3>
                  <p className="text-sm font-light opacity-70 max-w-sm mb-4">{product.description}</p>
                  <p className="text-xs uppercase tracking-widest font-semibold opacity-60">Burn Time: {product.burnTime}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-eloisen-cream border border-eloisen-green/10 text-xs tracking-widest uppercase">
                    {product.size}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest border-b border-eloisen-green pb-1">
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
