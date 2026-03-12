"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-eloisen-cream/80 backdrop-blur-md border-b border-eloisen-green/10 py-4 shadow-sm"
          : "bg-transparent py-6"
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button aria-label="Toggle mobile menu" className="md:hidden text-eloisen-green focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Links Left */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#Gallery" aria-label="View Eloisen products" className="hover:text-eloisen-gold transition-colors duration-300">Products</a>
          <a href="#Gallery" aria-label="Read our story" className="hover:text-eloisen-gold transition-colors duration-300">Story</a>
        </div>

        {/* Logo */}
        <a href="#" className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center pt-2">
          <Image
            src="/logo1_nav.png"
            alt="Eloisen Brand Logo"
            width={300}
            height={100}
            className="w-auto h-[60px] md:h-[80px] lg:h-[100px] object-contain"
            priority
          />
        </a>

        {/* Desktop Links Right & Cart */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
            <a href="#experience" aria-label="Explore the scent experience" className="hover:text-eloisen-gold transition-colors duration-300">Experience</a>
            <a href="#contact" aria-label="Contact us" className="hover:text-eloisen-gold transition-colors duration-300">Contact</a>
          </div>
          <button aria-label="Open shopping cart" className="flex items-center hover:text-eloisen-gold transition-colors duration-300">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
