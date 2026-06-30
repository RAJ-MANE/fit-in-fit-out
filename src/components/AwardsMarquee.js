"use client";
import Image from "next/image";

export default function AwardsMarquee({ onPreview }) {
  const awards = [
    { src: "/award1.jpeg", alt: "Certificate of Appreciation - Dt. Poonam Kalia", title: "Certificate of Appreciation" },
    { src: "/award2.jpeg", alt: "Clinical Excellence Award - Dt. Poonam Kalia", title: "Clinical Excellence Award" },
    { src: "/award3.jpeg", alt: "Professional Recognition - Dt. Poonam Kalia", title: "Professional Recognition Award" },
  ];

  // Duplicate awards to create a seamless infinite scrolling effect
  const marqueeItems = [...awards, ...awards, ...awards, ...awards];

  return (
    <section className="awards-marquee-section py-16 bg-white overflow-hidden relative border-y border-neutral-100">
      {/* Background logo watermarks */}
      <div className="logo-imprint-sm" style={{ left: "5%", top: "10%", opacity: 0.02 }} aria-hidden="true" />
      
      <div className="container mb-8 text-center">
        <span className="section-subtitle">Credentials & Recognition</span>
        <h2 className="section-title text-2xl md:text-3xl font-bold mt-1 text-neutral-800">Awards & Certifications</h2>
        <p className="max-w-xl mx-auto text-sm text-neutral-500 mt-2">
          Recognized by leading institutions and healthcare organizations for outstanding contributions in clinical nutrition.
        </p>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="marquee-wrapper relative w-full flex overflow-x-hidden py-4">
        {/* Left/Right blur shadow gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex animate-marquee hover:pause whitespace-nowrap gap-6">
          {marqueeItems.map((award, idx) => (
            <div
              key={idx}
              className="marquee-card flex-shrink-0 cursor-pointer group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[220px] md:w-[280px]"
              onClick={() => onPreview(award)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-50">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  sizes="(max-width: 768px) 220px, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay sheen */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    View Credentials 🔍
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h4 className="text-xs md:text-sm font-bold text-neutral-700 truncate group-hover:text-primary transition-colors">
                  {award.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
