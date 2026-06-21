import Image from "next/image";
import AnimatedBlobs from "./AnimatedBlobs";
import RevealOnScroll from "./RevealOnScroll";
import BackgroundDecor from "./BackgroundDecor";

export default function AboutSection() {
  const expertiseTags = [
    { icon: "⚖️", label: "Weight Management" },
    { icon: "🩸", label: "Diabetes Care" },
    { icon: "🏥", label: "Clinical Nutrition" },
    { icon: "🏃‍♀️", label: "Sports Nutrition" },
    { icon: "👩", label: "Women's Health" },
    { icon: "👶", label: "Pediatric Nutrition" },
    { icon: "🌱", label: "Lifestyle Modification" },
  ];

  return (
    <section className="about section-padding" id="about" style={{ overflow: "hidden" }}>
      {/* Botanical Background Decoration */}
      <BackgroundDecor type="leaf-left" />
      
      {/* Brand Logo Imprints */}
      <div className="logo-imprint about-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm about-logo-imprint-sm" aria-hidden="true" />
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image wrapper with Floating Blobs */}
          <RevealOnScroll className="about-image-column">
            <div className="relative mx-auto max-w-[460px] w-full">
              <AnimatedBlobs variant="about" />
              <div className="about-image-wrapper">
                <Image
                  src="/dietician.jpeg"
                  alt="Dt. Poonam Kalia - Clinical Dietitian"
                  width={500}
                  height={500}
                  className="about-img"
                  priority
                />
              </div>
              <div className="experience-badge">
                <span className="exp-title">Clinical Dietitian</span>
                <span className="exp-hospital">INHS Asvini Hospital</span>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Right Column: Bio and Expertise Tags */}
          <RevealOnScroll className="about-content-column" threshold={0.15}>
            <span className="section-subtitle">Meet Your Dietitian</span>
            <h2 className="section-title">Dt. Poonam Kalia</h2>
            <p className="about-bio">
              Dedicated to improving health and wellbeing through science-backed nutrition counseling and personalized dietary interventions.
            </p>
            <p className="about-subtext">
              With extensive experience in clinical environments, including prestigious institutions like INHS Asvini Hospital, Dt. Poonam Kalia approaches wellness from a functional, medical, and sustainable lens, helping you achieve a healthier lifestyle without restrictive dieting.
            </p>
            
            <h3 className="expertise-heading">Areas of Expertise</h3>
            <div className="expertise-tags">
              {expertiseTags.map((tag, index) => (
                <span key={index} className="tag" style={{ transitionDelay: `${index * 50}ms` }}>
                  <i className="tag-icon" role="img" aria-label={tag.label}>
                    {tag.icon}
                  </i>{" "}
                  {tag.label}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
