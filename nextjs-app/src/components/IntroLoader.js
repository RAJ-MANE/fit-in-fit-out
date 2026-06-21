"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function IntroLoader({ onComplete }) {
  const canvasRef = useRef(null);
  const [stage, setStage] = useState(0); // 0: particles/glow, 1: typing, 2: exit, 3: done
  const [typedText, setTypedText] = useState("");
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // 1. Particle system
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
      }

      reset() {
        // Start from center
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        
        // Random velocity outwards
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 3;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        // Size and alpha
        this.size = Math.random() * 3 + 2;
        this.color = Math.random() > 0.5 ? "#2d6a4f" : "#e07a5f"; // green or coral
        this.alpha = 1;
        this.decay = Math.random() * 0.012 + 0.008;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98; // friction
        this.vy *= 0.98;
        this.alpha -= this.decay;
      }

      draw(context) {
        context.save();
        context.globalAlpha = this.alpha;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
      }
    }

    const particles = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    let animationFrameId;
    let startTime = Date.now();
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const elapsed = Date.now() - startTime;
      
      particles.forEach((p) => {
        p.update();
        if (p.alpha > 0) {
          p.draw(ctx);
        }
      });

      if (elapsed < 500) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        // Transition to Stage 1: typing
        setStage(1);
      }
    };
    render();

    // Prevent body scrolling while intro is active
    document.body.classList.add("no-scroll");

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
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
      {/* Canvas for particle burst */}
      <canvas ref={canvasRef} className="intro-canvas" />

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
