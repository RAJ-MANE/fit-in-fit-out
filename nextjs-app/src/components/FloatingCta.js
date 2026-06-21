"use client";
import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-cta-badge ${isVisible ? "visible" : ""}`}>
      <a
        href="https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn"
        aria-label="Book on WhatsApp"
      >
        <WhatsAppIcon className="icon-whatsapp" />
        <span className="float-btn-text">Consult Now</span>
      </a>
    </div>
  );
}
