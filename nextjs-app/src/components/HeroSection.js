import Image from "next/image";
import AnimatedBlobs from "./AnimatedBlobs";
import CounterAnimation from "./CounterAnimation";
import WhatsAppIcon from "./WhatsAppIcon";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Animated Gradient Mesh Background */}
      <div className="gradient-mesh" aria-hidden="true" />
      
      {/* Subtle Logo Watermark/Imprint */}
      <div className="logo-imprint hero-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm hero-logo-imprint-sm" aria-hidden="true" />
      
      <div className="hero-container container">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-badge">Clinical Excellence & Personalized Care</span>
          <h1 className="hero-title">
            Transform Your Health with Expert <span className="highlight-text">Nutrition Guidance</span>
          </h1>
          <p className="hero-tagline">Evidence-Based Nutrition. Personalized Care. Proven Results.</p>
          <p className="hero-description">
            Helping individuals achieve sustainable health through customized diet plans, lifestyle coaching, and clinical nutrition support.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Book Consultation</span>
              <WhatsAppIcon className="icon-whatsapp" />
            </a>
            <a href="tel:+919920659600" className="btn btn-secondary">
              <span>Call +91 9920659600</span>
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in">
          {/* Floating Blobs Behind Image */}
          <AnimatedBlobs variant="hero" />
          
          <div className="image-mask">
            <Image
              src="/hero_nutrition.png"
              alt="Healthy Organic Foods Composition by Fit In Fit Out"
              width={600}
              height={480}
              className="hero-image"
              priority
            />
          </div>
          
          <div className="hero-accent-card">
            <span className="accent-number">
              <CounterAnimation target={100} duration={1500} suffix="%" />
            </span>
            <span className="accent-label">Evidence-Based Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
