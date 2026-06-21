"use client";
import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, threshold = 0.1, className = "" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it reveals, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isIntersecting ? "reveal-active" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
