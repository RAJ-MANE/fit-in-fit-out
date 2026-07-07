"use client";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function BeforeAfterSlider() {
  const clients = [
    {
      id: 1,
      title: "Transformation 1",
      subtitle: "Weight Loss & Cellular Health",
      desc: "Targeted fat loss and metabolic reset. Achieved substantial fat reduction while improving thyroid function, hormonal balance, and gut health.",
      before: "/client 1 before.jpeg",
      after: "/client 1 after.jpeg",
      aspectRatio: "692 / 1500",
    },
    {
      id: 2,
      title: "Transformation 2",
      subtitle: "Diabetes Care & Recomposition",
      desc: "Reversed metabolic sluggishness and lowered HbA1c levels. Personalized clinical nutrition helped rebuild muscle tissue while dropping stubborn visceral fat.",
      before: "/client 2 before.jpeg",
      after: "/client 2 after.jpeg",
      aspectRatio: "636 / 1180",
    },
    {
      id: 3,
      title: "Transformation 3",
      subtitle: "Hormonal Balance & Energy",
      desc: "Addressed insulin resistance and hormonal imbalances. A clean, clinical diet resulted in visible body toning, higher energy levels, and improved sleep cycles.",
      before: "/client 3 before.jpeg",
      after: "/client 3 after.jpeg",
      aspectRatio: "1558 / 1600",
    },
  ];

  const [activeClientIndex, setActiveClientIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeClient = clients[activeClientIndex];

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleTabChange = (index) => {
    setActiveClientIndex(index);
    setSliderPosition(50); // Reset slider to center
  };

  return (
    <section className="before-after-section section-padding bg-warm-light relative overflow-hidden" id="transformations">
      {/* Background Watermark */}
      <div className="logo-imprint" style={{ left: "-5%", top: "10%", opacity: 0.02 }} aria-hidden="true" />
      
      <div className="container">
        <RevealOnScroll className="section-header text-center mb-12">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Client Transformations</h2>
          <p className="max-w-2xl mx-auto text-neutral-muted mt-3">
            Real people, real transformations. Drag the slider on each image to compare the clinical progress achieved through science-backed nutrition plans.
          </p>
        </RevealOnScroll>

        <div className="before-after-grid">
          {/* Left Column: Client Tabs and Story */}
          <RevealOnScroll className="before-after-info-col">
            <div className="client-tabs-container">
              {clients.map((client, idx) => (
                <button
                  key={client.id}
                  onClick={() => handleTabChange(idx)}
                  className={`client-tab-btn ${idx === activeClientIndex ? "active" : ""}`}
                >
                  <span className="tab-number">0{idx + 1}</span>
                  <div className="tab-text-wrapper">
                    <span className="tab-title">{client.title}</span>
                    <span className="tab-subtitle">{client.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Current Client Story Card */}
            <div className="client-story-card glass-panel mt-8">
              <span className="story-badge">Case Profile</span>
              <h3 className="story-title">{activeClient.subtitle}</h3>
              <p className="story-desc">{activeClient.desc}</p>
              
              <div className="story-highlights mt-6">
                <div className="highlight-item">
                  <span className="hl-icon">⚡</span>
                  <span className="hl-text">Active Progress Tracking</span>
                </div>
                <div className="highlight-item">
                  <span className="hl-icon">🥗</span>
                  <span className="hl-text">No Restrictive Dieting</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Sliding Image Viewer */}
          <RevealOnScroll className="before-after-viewer-col">
            <div 
              className="slider-wrapper relative w-full mx-auto max-w-[420px] overflow-hidden rounded-3xl border border-neutral-200/60 shadow-xl bg-white select-none transition-all duration-500 ease-in-out"
              style={{ aspectRatio: activeClient.aspectRatio }}
            >
              
              {/* After Image (Base Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeClient.after}
                  alt={`${activeClient.title} After`}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-sm uppercase tracking-wider">
                  After
                </div>
              </div>

              {/* Before Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={activeClient.before}
                  alt={`${activeClient.title} Before`}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-sm uppercase tracking-wider">
                  Before
                </div>
              </div>

              {/* Slider Line Divider & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center border-[3px] border-emerald-600 transition-transform duration-200 group-hover:scale-105">
                  <div className="flex gap-1.5 text-emerald-600">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Invisible Range Slider for Smooth Desktop & Touch Controls */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after image comparison slider"
              />
            </div>
            
            <p className="slider-instruction text-center text-xs text-neutral-muted mt-4">
              ← Drag the slider left or right to compare →
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
