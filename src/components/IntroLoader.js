"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroLoader({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: intro delay/glow, 1: typing, 2: exit, 3: done
  const [typedText, setTypedText] = useState("");
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Stage 0: Wait for logo fade/zoom animation before starting typing animation
    const timer = setTimeout(() => {
      setStage(1);
    }, 500);

    // Prevent body scrolling while intro is active
    document.body.classList.add("no-scroll");

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // 2. Typing Effect for brand name "Fit In Fit Out"
  useEffect(() => {
    if (stage !== 1) return;
    
    const text = "Fit In Fit Out";
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(text.substring(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        // Show tagline shortly after brand name is typed out
        setTimeout(() => {
          setShowTagline(true);
          // Wait 0.5s then start the exit sequence
          setTimeout(() => {
            setStage(2);
            document.body.classList.remove("no-scroll");
            // Wait for exit animation (0.5s) to complete
            setTimeout(() => {
              setStage(3);
              if (onComplete) onComplete();
            }, 500);
          }, 500);
        }, 200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [stage, onComplete]);

  if (stage === 3) return null;

  return (
    <div className={`intro-overlay ${stage === 2 ? "exit-peel" : ""}`}>
      {stage < 2 && (
        <div className="intro-core">
          {/* Logo and glow ring */}
          <div className="intro-logo-container">
            <div className="intro-glow-ring" />
            <div className="intro-logo-wrapper">
              <Image
                src="/logo.png"
                alt="Fit In Fit Out Logo"
                width={120}
                height={120}
                className="intro-logo"
                priority
              />
            </div>
          </div>

          {/* Typed Title */}
          <h1 className="intro-title">
            {typedText}
            {stage === 1 && typedText.length < "Fit In Fit Out".length && (
              <span className="typing-cursor" />
            )}
          </h1>

          {/* Tagline */}
          <p className={`intro-tagline ${showTagline ? "tagline-visible" : ""}`}>
            Dt. Poonam Kalia
          </p>
        </div>
      )}

      {/* Screen Split Panels for exit slide */}
      <div className="exit-panel exit-panel-left" />
      <div className="exit-panel exit-panel-right" />
    </div>
  );
}
