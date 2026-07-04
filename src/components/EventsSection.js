"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      src: "/event1.jpeg",
      alt: "Corporate Wellness Seminar by Dt. Poonam Kalia",
      title: "Corporate Health & Wellness Seminars",
      date: "October 2025",
      desc: "Delivering expert nutrition guides, metabolic hacks, and stress management counseling for corporate employees at multinational firms.",
      bullets: ["Stress-eating recovery guides", "Desk-job metabolic activation plans", "Healthy cafeteria choices guidelines"]
    },
    {
      id: 2,
      src: "/event2.jpeg",
      alt: "Thyroid & PCOS Awareness Panel Discussion",
      title: "Hormonal Health & PCOS Seminars",
      date: "December 2025",
      desc: "An educational interactive panel dedicated to addressing thyroid function, insulin resistance, and dietary protocols for balancing female hormones.",
      bullets: ["Scientific lifestyle modifications", "Targeted micro-nutrient foods", "Actionable thyroid-supporting rules"]
    },
    {
      id: 3,
      src: "/event3.jpeg",
      alt: "Community Nutrition Camp at ठाकुर Village",
      title: "Community Outreach & Free Health Camps",
      date: "February 2026",
      desc: "Organizing free health screenings, BMI calculations, and custom dietary guidelines for local communities and under-privileged residents.",
      bullets: ["Free body composition analysis", "Localized seasonal food guidance", "Preventative clinical nutrition checks"]
    }
  ];

  return (
    <section className="events-section py-24 bg-white relative overflow-hidden" id="events">
      {/* Background logo watermark */}
      <div className="logo-imprint" style={{ left: "-5%", top: "15%", opacity: 0.03 }} aria-hidden="true" />
      <div className="logo-imprint-sm" style={{ right: "5%", bottom: "10%", opacity: 0.02 }} aria-hidden="true" />

      <div className="container mx-auto px-4">
        <RevealOnScroll className="section-header text-center mb-20">
          <span className="section-subtitle">Active Engagements</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mt-1 text-neutral-800">Seminars, Events & Workshops</h2>
          <p className="max-w-xl mx-auto text-neutral-500 mt-3 text-sm md:text-base">
            Dt. Poonam Kalia actively conducts clinical awareness campaigns, corporate health workshops, and community education camps.
          </p>
        </RevealOnScroll>

        {/* Alternating Events List */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <EventCard key={event.id} event={event} isReversed={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Parallax Scroll Event Card
function EventCard({ event, isReversed }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left/Right Column: Image */}
      <RevealOnScroll className="w-full md:w-1/2" threshold={0.2}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-lg">
          {/* Shimmer overlay */}
          <div className="shimmer-effect" aria-hidden="true" />
          
          <Image
            src={event.src}
            alt={event.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>
      </RevealOnScroll>

      {/* Left/Right Column: Event Details Description */}
      <RevealOnScroll className="w-full md:w-1/2 text-left" threshold={0.2}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
              {event.date}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-800 leading-tight">
            {event.title}
          </h3>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            {event.desc}
          </p>
          
          <ul className="space-y-2 mt-4">
            {event.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="text-accent text-base mt-0.5" role="img" aria-label="bullet">✅</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </div>
  );
}
