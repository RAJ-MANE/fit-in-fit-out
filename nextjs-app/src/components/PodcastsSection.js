import RevealOnScroll from "./RevealOnScroll";

export default function PodcastsSection({ onVideoSelect }) {
  const videos = [
    {
      id: "Cpawnoto9Bo",
      category: "Health Talk",
      title: "Nutrition & Metabolic Health Insights",
      desc: "Understanding how clean dietary choices can reverse insulin resistance and repair metabolic damage.",
    },
    {
      id: "UamwxOnYO-w",
      category: "Clinical Guidance",
      title: "Managing Thyroid & Hormones via Diet",
      desc: "Actionable nutritional adjustments to boost metabolism, manage hypothyroidism, and optimize energy.",
    },
    {
      id: "aqACpvyfdSc",
      category: "Lifestyle Wellness",
      title: "Habit Modifications For Sustainable Weight",
      desc: "Why tracking portion control and choosing seasonal local food is better than low-carb dieting.",
    },
  ];

  return (
    <section className="podcasts section-padding" id="podcasts">
      {/* Brand Logo Imprints */}
      <div className="logo-imprint podcasts-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm podcasts-logo-imprint-sm" aria-hidden="true" />
      
      <div className="container">
        <RevealOnScroll className="section-header text-center">
          <span className="section-subtitle">Learn & Grow</span>
          <h2 className="section-title">Featured Podcasts & Educational Videos</h2>
          <p className="section-description">
            Watch Dt. Poonam Kalia discuss clinical nutrition, healthy practices, and sustainable living in these featured episodes.
          </p>
        </RevealOnScroll>
        
        <div className="podcasts-grid">
          {videos.map((video) => (
            <RevealOnScroll
              key={video.id}
              className="podcast-card glass-panel tilt-card"
              threshold={0.1}
            >
              <div
                className="podcast-thumbnail-wrapper"
                onClick={() => onVideoSelect(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${video.title} thumbnail`}
                  className="podcast-thumb"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <div className="play-button-overlay">
                  <span className="play-icon" aria-hidden="true">▶</span>
                </div>
              </div>
              <div className="podcast-info">
                <span className="podcast-category">{video.category}</span>
                <h3 className="podcast-card-title" onClick={() => onVideoSelect(video.id)} style={{ cursor: "pointer" }}>
                  {video.title}
                </h3>
                <p className="podcast-card-desc">{video.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
