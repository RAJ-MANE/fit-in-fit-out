"use client";
import { useEffect } from "react";

export default function VideoModal({ videoId, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (videoId) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <div className="video-modal active" role="dialog" aria-modal="true">
      <div className="video-modal-backdrop" onClick={onClose} />
      <div className="video-modal-container">
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          &times;
        </button>
        <div className="video-iframe-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
