"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedBlobs from "./AnimatedBlobs";
import CounterAnimation from "./CounterAnimation";
import WhatsAppIcon from "./WhatsAppIcon";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/hero1.jpeg", alt: "Healthy Organic Meal Selection and diet planning" },
    { src: "/hero2.jpeg", alt: "Dt. Poonam Kalia Clinical Consultation Inquire" },
    { src: "/hero3.jpeg", alt: "Fresh fruits nutrition composition guides" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500); // Shift every 4.5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="hero">
      {/* Animated Gradient Mesh Background */}
      <div className="gradient-mesh" aria-hidden="true" />
      
      {/* Subtle Logo Watermark/Imprint */}
      <div className="logo-imprint hero-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm hero-logo-imprint-sm" aria-hidden="true" />
      
      <div className="hero-container container">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-badge">Clinical Excellence & Personalized Care</span>
          <h1 className="hero-title">
            Transform Your Health with Expert <span className="highlight-text">Nutrition Guidance</span>
          </h1>
          <p className="hero-tagline">Evidence-Based Nutrition. Personalized Care. Proven Results.</p>
          <p className="hero-description">
            Helping individuals achieve sustainable health through customized diet plans, lifestyle coaching, and clinical nutrition support.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Book Consultation</span>
              <WhatsAppIcon className="icon-whatsapp" />
            </a>
            <a href="tel:+919920659600" className="btn btn-secondary">
              <span>Call +91 9920659600</span>
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in">
          {/* Floating Blobs Behind Image */}
          <AnimatedBlobs variant="hero" />
          
          <div className="image-mask">
            <div className="relative w-full h-[380px] md:h-[480px]">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 991px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* Carousel Indicators / Slide pills */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "bg-white w-5" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="hero-accent-card">
            <span className="accent-number">
              <CounterAnimation target={100} duration={1500} suffix="%" />
            </span>
            <span className="accent-label">Evidence-Based Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
