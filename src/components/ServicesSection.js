import RevealOnScroll from "./RevealOnScroll";
import AnimatedBlobs from "./AnimatedBlobs";
import BackgroundDecor from "./BackgroundDecor";
import { AnimatedFeatureCard } from "./ui/animated-feature-card";

export default function ServicesSection() {
  const features = [
    {
      index: "001",
      tag: "METABOLISM",
      title: "Healthy, sustainable weight loss and weight gain without restrictive dieting.",
      imageSrc: "/METABOLISM.jpeg",
      color: "orange",
    },
    {
      index: "002",
      tag: "CLINICAL CARE",
      title: "Evidence-based dietary guidance for blood sugar control and insulin sensitivity.",
      imageSrc: "/clinical_care.png",
      color: "purple",
    },
    {
      index: "003",
      tag: "HORMONAL HEALTH",
      title: "Specialized nutrition support to regulate thyroid function and balance hormones.",
      imageSrc: "/HORMONAL%20HEALTH.jpeg",
      color: "blue",
    },
    {
      index: "004",
      tag: "ONCOLOGY",
      title: "Nutritional support strategies during cancer treatment to sustain strength.",
      imageSrc: "/ONCOLOGY.jpeg",
      color: "orange",
    },
    {
      index: "005",
      tag: "MATERNAL CARE",
      title: "Customized prenatal and postnatal nutrition plans for expecting and new mothers.",
      imageSrc: "/MATERNAL%20CARE.jpeg",
      color: "purple",
    },
    {
      index: "006",
      tag: "CLINICAL FEEDING",
      title: "Professional enteral tube feeding planning, calculations, and management support.",
      imageSrc: "/CLINICAL%20FEEDING.jpeg",
      color: "blue",
    },
    {
      index: "007",
      tag: "ATHLETIC",
      title: "Performance-focused refueling plans and hydration strategies for competitive sports.",
      imageSrc: "/ATHLETIC.jpeg",
      color: "orange",
    },
    {
      index: "008",
      tag: "ADOLESCENT",
      title: "Balanced meals and smart eating guidance to support rapid teenage growth.",
      imageSrc: "/ADOLESCENT.jpeg",
      color: "purple",
    },
    {
      index: "009",
      tag: "PEDIATRIC",
      title: "Healthy eating advice and building wholesome dietary habits for growing children.",
      imageSrc: "/PEDIATRIC%20.jpeg",
      color: "blue",
    },
  ];

  return (
    <section className="services section-padding" id="services" style={{ overflow: "hidden" }}>
      {/* Abstract background decorative waves */}
      <BackgroundDecor type="wavy-lines" />
      
      {/* Brand Logo Imprints */}
      <div className="logo-imprint services-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm services-logo-imprint-sm" aria-hidden="true" />

      <div className="container" style={{ position: "relative" }}>
        {/* Floating Background Blobs */}
        <AnimatedBlobs variant="services" />

        <RevealOnScroll className="section-header text-center">
          <span className="section-subtitle">Tailored Solutions</span>
          <h2 className="section-title">Personalized Nutrition Services</h2>
          <p className="section-description">
            We design evidence-based dietary regimens targeted directly at your biological profile, medical history, and daily routine.
          </p>
        </RevealOnScroll>
        
        {/* Animated Feature Cards Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:gap-8 p-2 md:p-4 lg:grid-cols-3 justify-items-center relative z-10 mt-12">
          {features.map((feature) => (
            <AnimatedFeatureCard
              key={feature.index}
              index={feature.index}
              tag={feature.tag}
              title={feature.title}
              imageSrc={feature.imageSrc}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
