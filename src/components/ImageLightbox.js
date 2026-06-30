"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ImageLightbox({ image, onClose }) {
  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (image) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [image]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Easy to tap top-right close circle */}
      <button 
        className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl font-light transition-all cursor-pointer border border-white/15 z-[10000]"
        onClick={onClose}
        aria-label="Close image preview"
      >
        &times;
      </button>
      
      <div 
        className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-2xl p-2 md:p-3 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt || "Preview Image"}
            fill
            priority
            className="object-contain"
          />
        </div>
        
        {/* Caption bar */}
        {image.title && (
          <div className="absolute bottom-5 left-5 right-5 bg-black/75 backdrop-blur-md px-5 py-3 rounded-xl border border-white/15 text-center">
            <h3 className="text-white text-sm md:text-base font-bold tracking-wide">{image.title}</h3>
            {image.desc && <p className="text-neutral-300 text-xs mt-0.5">{image.desc}</p>}
          </div>
        )}
      </div>

      {/* Floating Bottom close text for mobile accessibility */}
      <button
        onClick={onClose}
        className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 backdrop-blur-sm transition-all"
      >
        Close Preview
      </button>
    </div>
  );
}
