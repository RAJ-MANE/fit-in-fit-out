"use client";

import React, { useState, useEffect } from "react";

export default function HealthPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenHealthPopup");
    
    if (!hasSeenPopup) {
      // Auto-open the popup after 2.5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    // Don't show it again during the same browser session
    sessionStorage.setItem("hasSeenHealthPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4 animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#fcfbf7] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow z-10 text-xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Left Section: Hook & Offer details */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-[#f4f7f4]">
          <div>
            <div className="inline-block bg-[#1b4332] text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              Limited Period Offer
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b4332] leading-tight mb-3">
              Struggling with Weight, Sugar, or Digestion?
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base mb-6">
              You don&apos;t need another crash diet. You need the <strong className="text-[#2d6a4f]">right guidance</strong> for your body.
            </p>

            {/* Features/Checks */}
            <div className="bg-[#e9f5ed] border border-[#b7e4c7] rounded-xl p-5 mb-6">
              <h3 className="text-lg font-bold text-[#1b4332] flex items-center gap-2 mb-3">
                <span className="text-xl">✨</span> FREE HEALTH CHECK
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <span className="text-emerald-600 mt-0.5">✔</span>
                  <div>
                    <p className="font-bold text-gray-900">BMI Check</p>
                    <p className="text-xs text-gray-500 font-normal">Understand your healthy weight ranges.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <span className="text-emerald-600 mt-0.5">✔</span>
                  <div>
                    <p className="font-bold text-gray-900">Body Composition Analysis</p>
                    <p className="text-xs text-gray-500 font-normal">Know why your weight is stuck & what needs to change.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Credentials */}
          <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white font-bold text-sm">
              PK
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">Poonam Kalia</p>
              <p className="text-xs text-gray-500">Clinical Dietitian | INHS Asvini Hospital</p>
            </div>
          </div>
        </div>

        {/* Right Section: Booking & Logistics */}
        <div className="w-full md:w-[40%] bg-[#1b4332] text-white p-6 md:p-8 flex flex-col justify-center text-center relative overflow-hidden">
          {/* Subtle Background Decorative Graphic */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <div className="relative z-10">
            <h4 className="text-amber-300 font-bold uppercase tracking-wide text-xs mb-1">
              Know your numbers, transform your health!
            </h4>
            <p className="text-xl font-light mb-6">Start your health journey today 💚</p>

            {/* Timing Box */}
            <div className="bg-[#2d6a4f] bg-opacity-50 border border-emerald-700 rounded-lg p-3 mb-4 text-sm text-left">
              <p className="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                📅 Available Days:
              </p>
              <p className="font-semibold">Mon | Wed | Fri</p>
              <p className="text-xs text-emerald-200 mt-1">🕒 Time: 6:00 PM – 8:00 PM</p>
            </div>

            {/* Location Box */}
            <div className="bg-[#2d6a4f] bg-opacity-50 border border-emerald-700 rounded-lg p-3 mb-6 text-sm text-left">
              <p className="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                📍 Location:
              </p>
              <p className="text-xs text-emerald-100">Krishna B wing, Vasant Sagar, Thakur Village, Kandivali East</p>
            </div>

            {/* WhatsApp CTA Action */}
            <a 
              href="https://wa.me/919920659600?text=Hi%20Poonam,%20I%20am%20interested%20in%20booking%20the%20Free%20Health%20Check."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
            >
              {/* Simple inline WhatsApp Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.907-11.892 11.907-2.01-.001-3.986-.511-5.744-1.488L0 24zm6.273-3.653c1.642.974 3.246 1.487 4.982 1.488 5.416 0 9.825-4.373 9.828-9.746a9.49 9.49 0 0 0-2.85-6.841A9.53 9.53 0 0 0 11.948 2.5c-5.421 0-9.829 4.375-9.832 9.749-.001 1.874.5 3.703 1.451 5.292L2.52 21.43l4.03-1.056L6.33 20.347z"/>
              </svg>
              <span>WhatsApp to Book</span>
            </a>
            
            <p className="text-xs text-emerald-300 mt-3 text-center">Or walk in directly during consultation hours</p>
          </div>
        </div>

      </div>
    </div>
  );
}
