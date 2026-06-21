import RevealOnScroll from "./RevealOnScroll";

export default function CtaBanner() {
  return (
    <section className="cta-banner section-padding text-white aurora-bg">
      {/* Decorative Aurora Shimmer Layer */}
      <div className="aurora-glow" aria-hidden="true" />
      
      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
        <RevealOnScroll>
          <h2 className="cta-title">Get Started on Your Health Journey Today</h2>
          <p className="cta-subtitle">
            Begin your evidence-based health transformation with Dt. Poonam Kalia.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-large"
            >
              Book Your Consultation Today 🚀
            </a>
            <a href="tel:+919920659600" className="btn btn-secondary-light btn-large">
              Call +91 9920659600
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
