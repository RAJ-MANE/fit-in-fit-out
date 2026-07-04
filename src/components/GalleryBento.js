"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function GalleryBento({ onPreview }) {
  const photos = [
    { id: 1, src: "/gallery1.jpeg", alt: "Healthy Meal Preparation Consultation", title: "Personalized Counseling", desc: "Coaching clients on sustainable wellness.", sizeClass: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/gallery2.jpeg", alt: "Clinical Dietitian at work", title: "Clinical Assessments", desc: "Scientific analysis of body composition.", sizeClass: "md:col-span-2 md:row-span-1" },
    { id: 3, src: "/gallery3.jpeg", alt: "Dt. Poonam Kalia discussing health", title: "Community Education", desc: "Promoting nutrition values locally.", sizeClass: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="gallery-section py-24 bg-warm relative overflow-hidden" id="gallery">
      {/* Background logo watermark */}
      <div className="logo-imprint" style={{ right: "-5%", bottom: "5%", opacity: 0.03 }} aria-hidden="true" />

      <div className="container mx-auto px-4">
        <RevealOnScroll className="section-header text-center mb-16">
          <span className="section-subtitle">Visual Insights</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mt-1 text-neutral-800">Clinic & Lifestyle Gallery</h2>
          <p className="max-w-xl mx-auto text-neutral-500 mt-3 text-sm md:text-base">
            Take a look inside our clinical practice, active nutrition counseling sessions, and community awareness events.
          </p>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px] max-w-6xl mx-auto">
          {photos.map((photo) => (
            <BentoCard
              key={photo.id}
              photo={photo}
              onClick={() => onPreview(photo)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// 3D Magnetic Parallax Card Component
function BentoCard({ photo, onClick }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    // Calculate rotation percentage based on cursor offset from card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // max -10 deg
    const rotateY = ((x - centerX) / centerX) * 10;  // max 10 deg

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <RevealOnScroll className={`${photo.sizeClass}`}>
      <div
        ref={cardRef}
        className="group relative w-full h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl"
        style={{
          perspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {/* Parallax Image Container */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out z-0"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Soft Shadow Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

        {/* Shimmer sheen sweep effect on hover */}
        <div className="shimmer-effect" aria-hidden="true" />

        {/* Text Box Content Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-left transition-transform duration-300 group-hover:translate-y-[-4px]">
          <h4 className="text-white text-base md:text-lg font-bold tracking-wide">
            {photo.title}
          </h4>
          <p className="text-neutral-200 text-xs md:text-sm mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[50px]">
            {photo.desc}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}
