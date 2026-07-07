"use client";

import React, { useState, useEffect } from "react";

export default function HealthPopup({ introActive }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (introActive) return;

    // Auto-open the popup 30 seconds after the intro loader completes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [introActive]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="health-popup-overlay">
      {/* Modal Container */}
      <div className="health-popup-container">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="health-popup-close"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Left Section: Hook & Offer details */}
        <div className="health-popup-left">
          <div>
            <div className="health-popup-badge">
              Limited Period Offer
            </div>
            
            <h2 className="health-popup-title">
              Struggling with Weight, Sugar, or Digestion?
            </h2>
            
            <p className="health-popup-desc">
              You don't need another crash diet. You need the <strong>right guidance</strong> for your body.
            </p>

            {/* Features/Checks */}
            <div className="health-popup-offer-box">
              <h3 className="health-popup-offer-title">
                <span>✨</span> FREE HEALTH CHECK
              </h3>
              <ul className="health-popup-list">
                <li className="health-popup-list-item">
                  <span className="health-popup-list-icon">✔</span>
                  <div>
                    <p className="health-popup-list-title">BMI Check</p>
                    <p className="health-popup-list-desc">Understand your healthy weight ranges.</p>
                  </div>
                </li>
                <li className="health-popup-list-item">
                  <span className="health-popup-list-icon">✔</span>
                  <div>
                    <p className="health-popup-list-title">Body Composition Analysis</p>
                    <p className="health-popup-list-desc">Know why your weight is stuck & what needs to change.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Credentials */}
          <div className="health-popup-footer">
            <div className="health-popup-avatar">
              PK
            </div>
            <div>
              <p className="health-popup-author-name">Poonam Kalia</p>
              <p className="health-popup-author-title">Clinical Dietitian | INHS Asvini Hospital</p>
            </div>
          </div>
        </div>

        {/* Right Section: Booking & Logistics */}
        <div className="health-popup-right">
          {/* Subtle Background Decorative Graphic */}
          <div className="health-popup-bg-graphic">
            <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <h4 className="health-popup-right-badge">
              Know your numbers, transform your health!
            </h4>
            <p className="health-popup-right-title">Start your health journey today <span>💚</span></p>

            {/* Timing Box */}
            <div className="health-popup-box">
              <p className="health-popup-box-title">
                <span>📅</span> Available Days:
              </p>
              <p className="health-popup-box-text">Mon | Wed | Fri</p>
              <p className="health-popup-box-subtext">🕒 Time: 6:00 PM – 8:00 PM</p>
            </div>

            {/* Location Box */}
            <div className="health-popup-box">
              <p className="health-popup-box-title">
                <span>📍</span> Location:
              </p>
              <p className="health-popup-box-text">Krishna B wing, Vasant Sagar, Thakur Village, Kandivali East</p>
            </div>

            {/* WhatsApp CTA Action */}
            <a 
              href="https://wa.me/919920659600?text=Hi%20Poonam,%20I%20am%20interested%20in%20booking%20the%20Free%20Health%20Check."
              target="_blank"
              rel="noopener noreferrer"
              className="health-popup-whatsapp-btn"
            >
              {/* Simple inline WhatsApp Icon */}
              <svg className="health-popup-whatsapp-icon" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.907-11.892 11.907-2.01-.001-3.986-.511-5.744-1.488L0 24zm6.273-3.653c1.642.974 3.246 1.487 4.982 1.488 5.416 0 9.825-4.373 9.828-9.746a9.49 9.49 0 0 0-2.85-6.841A9.53 9.53 0 0 0 11.948 2.5c-5.421 0-9.829 4.375-9.832 9.749-.001 1.874.5 3.703 1.451 5.292L2.52 21.43l4.03-1.056L6.33 20.347z"/>
              </svg>
              <span>WhatsApp to Book</span>
            </a>
            
            <p className="health-popup-footnote">Or walk in directly during consultation hours</p>
          </div>
        </div>

      </div>
    </div>
  );
}
