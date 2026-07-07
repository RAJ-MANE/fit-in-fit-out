"use client";
import { useEffect, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function WhyChooseSection() {
  const features = [
    {
      icon: "👤",
      title: "Personalized Care",
      desc: "Every nutrition plan is tailored to your unique clinical needs, food preferences, and daily constraints.",
    },
    {
      icon: "🔬",
      title: "Evidence-Based Approach",
      desc: "No fad diets or detox teas. Recommendations are entirely based on scientific research and clinical guidelines.",
    },
    {
      icon: "🌀",
      title: "Holistic Wellness",
      desc: "We treat the whole body, analyzing sleep, stress, hormone markers, fitness levels, and food dynamics.",
    },
    {
      icon: "💬",
      title: "Continuous Support",
      desc: "Access regular check-ins, dietary adjustments, and tracking templates to keep you aligned to your goals.",
    },
  ];

  const testimonials = [
    {
      text: "I can't thank you enough Poonam! I introduced my son to you at 103 kgs, and today he is 10 kgs down with your guidance! What is most amazing is that it was done in a healthy manner. I thank you not only for your guidance but the change you have got in lifestyle and habits!",
      name: "Parent of Teen Client",
      location: "Mumbai",
    },
    {
      text: "Poonam is one of the best dietitians. My mother's sugar levels were a major concern post-COVID and we were worried. Poonam not only helped us get her sugar levels on track but also provided comfort to my mother and our family with periodic follow-ups and comforting conversations. I highly recommend her!",
      name: "Family of Diabetic Patient",
      location: "Mumbai",
    },
    {
      text: "Heartiest Congratulations Ma'am! You are a role model for me when it comes to good and healthy food. You changed the way we think of 'DIET' and get paranoid with the thought of it. You made it so simple and manageable!",
      name: "Dedicated Wellness Client",
      location: "India",
    },
    {
      text: "Diagnosed with Grade 2 fatty liver and elevated liver parameters. Within almost 2 months of structured clinical nutrition and guided lifestyle correction, my liver enzyme levels returned to normal, fatty liver grading improved, and overall energy has returned!",
      name: "Fatty Liver Reversal Story (42y Male)",
      location: "Metabolic Care Study",
    },
    {
      text: "Professional guidance that helped me manage my diabetes and improve my overall health. The personalized diet plans were incredibly easy to incorporate into my busy Mumbai work schedule.",
      name: "Rajiv Shah",
      location: "Kandivali East",
    },
    {
      text: "Achieved sustainable weight loss with practical diet plans and continuous support. Dt. Poonam Kalia focuses on real lifestyle modification rather than starving you. Highly recommended!",
      name: "Meera Deshmukh",
      location: "Thakur Village",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="why-choose section-padding bg-warm" id="why-choose">
      {/* Subtle Logo Watermark/Imprint */}
      <div className="logo-imprint why-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm why-logo-imprint-sm" aria-hidden="true" />
      
      <div className="container">
        <div className="why-choose-grid">
          {/* Left Column: Why Choose Fit In Fit Out */}
          <RevealOnScroll className="why-choose-content">
            <span className="section-subtitle">Our Philosophy</span>
            <h2 className="section-title">Why Choose Fit In Fit Out?</h2>
            <p className="why-desc">
              We bridge clinical evidence with customized execution to help you build habits that outlive any temporary diet trend.
            </p>
            
            <div className="features-list">
              {features.map((feat, index) => (
                <div key={index} className="feature-item-row">
                  <div className="f-icon-box">{feat.icon}</div>
                  <div className="f-text-box">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          
          {/* Right Column: Dynamic Testimonials Carousel */}
          <RevealOnScroll className="testimonials-column">
            <span className="section-subtitle">Success Stories</span>
            <h2 className="section-title">What Patients Say</h2>
            
            <div className="testimonial-carousel-container" style={{ position: "relative", minHeight: "280px" }}>
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`testimonial-card glass-panel carousel-slide ${
                    index === activeIndex ? "active" : ""
                  }`}
                  style={{
                    position: index === activeIndex ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: index === activeIndex ? 1 : 0,
                    transform: index === activeIndex ? "scale(1)" : "scale(0.95)",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
                >
                  <span className="quote-mark">“</span>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-meta">
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
              
              {/* Carousel Indicators */}
              <div className="carousel-indicators" style={{ display: "flex", gap: "8px", marginTop: "20px", justifyContent: "center" }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    suppressHydrationWarning
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: index === activeIndex ? "var(--color-accent)" : "rgba(27, 67, 50, 0.2)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
