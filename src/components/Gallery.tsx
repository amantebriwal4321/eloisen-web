"use client";

import { motion } from "framer-motion";

const storySections = [
  {
    src: "/g1.jpeg",
    title: "The Workshop",
    type: "image"
  },
  {
    src: "/vid2.mp4",
    title: "Our Process",
    type: "video"
  },
  {
    src: "/g2.jpeg",
    title: "Raw Materials",
    type: "image"
  },
  {
    src: "/img.png",
    title: "The Final Touch",
    type: "image"
  },
];

export default function Gallery() {
  return (
    <section id="Gallery" className="py-24 md:py-32 bg-eloisen-beige text-eloisen-green overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-4">Our Story</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Behind the Brand</h2>
          <p className="max-w-2xl mx-auto text-lg font-light opacity-80">
            Every candle we pour is a chapter in our ongoing story. Explore the workshop, the materials, and the passion that breathe life into our creations.
          </p>
        </motion.div>

        {/* Editorial Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {storySections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={`relative overflow-hidden group cursor-pointer bg-white/5 ${index === 0 ? "md:col-span-8 h-[400px] md:h-[600px]" :
                index === 1 ? "md:col-span-4 h-[400px] md:h-[600px]" :
                  index === 2 ? "md:col-span-5 h-[400px] md:h-[500px]" :
                    "md:col-span-7 h-[400px] md:h-[500px]"
                }`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              )}

              {/* Refined Luxury Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center">
                <p className="text-eloisen-gold text-[10px] uppercase tracking-[0.4em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Explore</p>
                <h3 className="text-white font-serif italic text-3xl md:text-4xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                  {item.title}
                </h3>
                <div className="w-16 h-px bg-eloisen-gold/50 mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-150" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
