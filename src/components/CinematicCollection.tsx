"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CinematicCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      let mm = gsap.matchMedia();

      // Mobile Optimized Animation
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1200", // Shorter scroll distance for mobile
            scrub: 1,
            pin: true,
          }
        });

        // Setup with GPU acceleration
        gsap.set(imageWrapperRef.current, {
          scale: 1,
          filter: "brightness(1)",
          willChange: "transform, filter",
          z: 0 // Performance boost
        });
        gsap.set([scene1Ref.current, scene2Ref.current, scene3Ref.current, scene4Ref.current], {
          opacity: 0,
          y: 20,
          willChange: "transform, opacity",
          z: 0
        });

        // Scene 1: Hero Reveal
        tl.to(scene1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0)

          // Transition 1 -> 2
          .to(scene1Ref.current, { opacity: 0, y: -20, duration: 1, ease: "power2.inOut" }, "+=0.5")
          .to(imageWrapperRef.current, { filter: "brightness(0.7)", duration: 2, ease: "power2.inOut" }, "-=1")
          .to(scene2Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")

          // Transition 2 -> 3
          .to(scene2Ref.current, { opacity: 0, y: -20, duration: 1, ease: "power2.inOut" }, "+=0.5")
          .to(scene3Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")
          .fromTo(".scent-note", { opacity: 0, y: 10, z: 0 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }, "-=0.5")

          // Transition 3 -> 4
          .to(scene3Ref.current, { opacity: 0, y: -20, duration: 1, ease: "power2.inOut" }, "+=0.5")
          .to(imageWrapperRef.current, { filter: "brightness(0.5)", duration: 2, ease: "power2.inOut" }, "-=1")
          .to(scene4Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")
          .fromTo(".product-detail-item", { opacity: 0, y: 10, z: 0 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }, "-=0.5")
          .fromTo(".explore-button", { opacity: 0, y: 10, z: 0 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5");
      });

      // Desktop Cinematic Animation
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            scrub: 1,
            pin: true,
          }
        });

        // Initial Setup
        gsap.set(imageWrapperRef.current, { scale: 1.1, filter: "brightness(1)", z: 0, willChange: "transform, filter" });
        gsap.set([scene1Ref.current, scene2Ref.current, scene3Ref.current, scene4Ref.current], { opacity: 0, y: 50, z: 0, willChange: "transform, opacity" });

        // Scene 1: Hero Reveal
        tl.to(imageWrapperRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0)
          .to(scene1Ref.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, 0.5)

          // Transition 1 -> 2
          .to(scene1Ref.current, { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" }, "+=0.5")
          .to(imageWrapperRef.current, {
            scale: 1.05,
            filter: "brightness(0.7)",
            duration: 3,
            ease: "power2.inOut"
          }, "-=1.5")
          .to(scene2Ref.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")

          // Transition 2 -> 3
          .to(scene2Ref.current, { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" }, "+=0.5")
          .to(imageWrapperRef.current, {
            scale: 1.1,
            xPercent: 5,
            duration: 3,
            ease: "power2.inOut"
          }, "-=1.5")
          .to(scene3Ref.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")
          .fromTo(".scent-note", { opacity: 0, x: 20, z: 0 }, { opacity: 1, x: 0, stagger: 0.3, duration: 1, ease: "power2.out" }, "-=0.5")

          // Transition 3 -> 4
          .to(scene3Ref.current, { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" }, "+=0.5")
          .to(imageWrapperRef.current, {
            scale: 1,
            xPercent: 0,
            filter: "brightness(0.5)",
            duration: 3,
            ease: "power2.inOut"
          }, "-=1.5")
          .to(scene4Ref.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1")
          .fromTo(".product-detail-item", { opacity: 0, y: 20, z: 0 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }, "-=0.5")
          .fromTo(".explore-button", { opacity: 0, y: 20, z: 0 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.2");
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden text-eloisen-cream bg-black" style={{ willChange: "transform", transform: "translateZ(0)" }}>

      {/* Full Width Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none z-0" ref={imageWrapperRef} style={{ willChange: "transform, filter", transform: "translateZ(0)" }}>
        <Image
          src="/img2.webp"
          alt="Eloisen Candle"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)"
          }}
        />
      </div>

      {/* Overlay Container for Scenes */}
      <div className="absolute inset-0 z-20 pointer-events-none">

        {/* Scene 1: Hero Reveal */}
        <div ref={scene1Ref} className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <h2 className="text-5xl md:text-8xl font-serif mb-6 text-white tracking-tight drop-shadow-md">
            Eloisen Candles
          </h2>
          <p className="text-lg md:text-2xl font-sans font-light max-w-xl opacity-90 drop-shadow-md">
            "A delicate balance of warmth and earthiness."
          </p>
        </div>

        {/* Scene 2: Product Close-Up */}
        <div ref={scene2Ref} className="absolute inset-0 flex items-center justify-start px-8 md:px-24">
          <div className="bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 pointer-events-auto max-w-2xl transform">
            <h3 className="text-2xl md:text-5xl font-serif leading-tight text-white drop-shadow-sm">
              Hand-poured soy wax with <br className="hidden md:block" />
              <span className="text-eloisen-gold">natural fragrance oils</span>.
            </h3>
          </div>
        </div>

        {/* Scene 3: Fragrance Story */}
        <div ref={scene3Ref} className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-6 md:px-12 lg:pr-32">
          <div className="bg-black/30 backdrop-blur-xl p-8 md:p-14 rounded-2xl shadow-2xl pointer-events-auto text-left border border-white/10 w-full max-w-md mx-auto md:ml-auto md:mr-0 text-white">
            <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-eloisen-gold mb-10">Fragrance Pyramid</h3>

            <div className="space-y-6 md:space-y-10">
              <div className="scent-note">
                <h4 className="font-serif text-2xl md:text-3xl mb-2">Top Notes</h4>
                <p className="font-sans text-base md:text-lg font-light opacity-80">Sandalwood • Chamomile</p>
              </div>

              <div className="scent-note">
                <h4 className="font-serif text-2xl md:text-3xl mb-2">Heart Notes</h4>
                <p className="font-sans text-base md:text-lg font-light opacity-80">Rose • Jasmine</p>
              </div>

              <div className="scent-note">
                <h4 className="font-serif text-2xl md:text-3xl mb-2">Base Notes</h4>
                <p className="font-sans text-base md:text-lg font-light opacity-80">Petrichor • Lavender</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 4: Product Details */}
        <div ref={scene4Ref} className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-4 text-center">
          <div className="bg-black/30 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-inner pointer-events-auto mb-10 grid grid-cols-3 gap-4 md:gap-16 border border-white/10 w-full max-w-3xl justify-center items-center text-white">
            <div className="product-detail-item">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-eloisen-gold mb-2">Burn Time</p>
              <p className="font-serif text-sm md:text-xl">25+ Hours</p>
            </div>
            <div className="product-detail-item">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-eloisen-gold mb-2">Wax Type</p>
              <p className="font-serif text-sm md:text-xl">Soy Wax</p>
            </div>
            <div className="product-detail-item">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-eloisen-gold mb-2">Wick</p>
              <p className="font-serif text-sm md:text-xl">Cotton</p>
            </div>
          </div>

          <a
            href="#Gallery"
            className="explore-button pointer-events-auto px-10 py-5 md:px-14 bg-eloisen-green text-white uppercase tracking-[0.3em] text-xs md:text-sm hover:bg-eloisen-gold transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 inline-block"
          >
            Explore Collection
          </a>
        </div>

      </div>
    </section>
  );
}
