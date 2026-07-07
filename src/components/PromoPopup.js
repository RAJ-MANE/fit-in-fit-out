"use client";
import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const PROMO_MESSAGES = [
  { text: "Rahul S. from Mumbai just booked a weight loss consultation.", time: "Just now", badge: "Live Proof" },
  { text: "Join 500+ happy clients who transformed their lifestyles with Dt. Poonam Kalia!", time: "1 min ago", badge: "Success Story" },
  { text: "Need expert nutrition advice? Get a quick consultation slot now.", time: "Active Now", badge: "Consult Now" },
  { text: "A client from Delhi achieved a 12kg weight loss in 3 months.", time: "2 mins ago", badge: "Success Story" },
  { text: "Priority slots are opening up for next week. Book yours today!", time: "Just now", badge: "Limited Slots" },
  { text: "Neha M. from Bangalore started a Personalized Clinical Diet plan.", time: "3 mins ago", badge: "Live Proof" }
];

export default function PromoPopup() {
  const [active, setActive] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // Initial delay: show the first popup after 30 seconds
    const initialTimer = setTimeout(() => {
      setCurrentIdx(Math.floor(Math.random() * PROMO_MESSAGES.length));
      setActive(true);
    }, 30000);

    // Main interval: trigger a popup every 2 minutes (120000 ms)
    const intervalTimer = setInterval(() => {
      setCurrentIdx((prevIdx) => {
        let nextIdx = Math.floor(Math.random() * PROMO_MESSAGES.length);
        while (nextIdx === prevIdx && PROMO_MESSAGES.length > 1) {
          nextIdx = Math.floor(Math.random() * PROMO_MESSAGES.length);
        }
        return nextIdx;
      });
      setActive(true);
    }, 120000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  // Automatically hide the popup after 12 seconds whenever it is active
  useEffect(() => {
    if (active) {
      const hideTimer = setTimeout(() => {
        setActive(false);
      }, 12000);
      return () => clearTimeout(hideTimer);
    }
  }, [active]);

  const currentMsg = PROMO_MESSAGES[currentIdx];

  return (
    <div className={`promo-popup-wrapper ${active ? "active" : ""}`}>
      <div className="promo-popup-content">
        <button 
          className="promo-popup-close" 
          onClick={() => setActive(false)} 
          aria-label="Close notification"
          suppressHydrationWarning
        >
          &times;
        </button>
        <div className="promo-popup-header">
          <span className="promo-popup-dot"></span>
          <span className="promo-popup-badge">{currentMsg.badge}</span>
          <span className="promo-popup-time">{currentMsg.time}</span>
        </div>
        <p className="promo-popup-text">{currentMsg.text}</p>
        <div className="promo-popup-actions">
          <a
            href="https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn promo-btn-whatsapp"
          >
            <WhatsAppIcon className="promo-icon" />
            WhatsApp
          </a>
          <a
            href="tel:+919920659600"
            className="promo-btn promo-btn-call"
          >
            <svg className="promo-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
