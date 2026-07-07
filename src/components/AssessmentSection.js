"use client";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function AssessmentSection() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      const bmi = parseFloat((w / ((h / 100) ** 2)).toFixed(1));
      let status = "";
      let statusClass = "";
      let rangeText = "";
      let pointerLeft = "0%";
      let advice = "";

      if (bmi < 18.5) {
        status = "Underweight";
        statusClass = "underweight";
        rangeText = "Underweight Range (BMI < 18.5)";
        pointerLeft = "12.5%";
        advice = "Your weight status is below the recommended healthy range. A structured, nutrient-dense nutrition strategy is key to recovering healthy muscle mass and building metabolic resilience.";
      } else if (bmi >= 18.5 && bmi < 25) {
        status = "Healthy Weight";
        statusClass = "healthy";
        rangeText = "Healthy Weight Range (BMI 18.5 – 24.9)";
        pointerLeft = "37.5%";
        advice = "Fantastic! Your weight category is in the ideal range. Keeping up with a balanced, functional diet and matching lifestyle habits will maintain this excellent score.";
      } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
        statusClass = "overweight";
        rangeText = "Overweight Range (BMI 25 – 29.9)";
        pointerLeft = "62.5%";
        advice = "Your weight status falls slightly above the healthy range. Customizing your clinical nutrition and lifestyle can help align your body composition and prevent long-term metabolic risks.";
      } else {
        status = "Obese";
        statusClass = "obese";
        rangeText = "Obese Range (BMI ≥ 30)";
        pointerLeft = "87.5%";
        advice = "Your weight category falls in the obese range, which can impact hormones, joint health, and energy. A professional, clinically supervised strategy is recommended to restore cellular vitality.";
      }

      const whatsappText = `Hello Dt. Poonam, I checked my weight status on the BMI calculator and it shows I am in the ${status} Range. I would like to book a free consultation to get my exact body composition analysis and custom report.`;
      const whatsappUrl = `https://wa.me/919920659600?text=${encodeURIComponent(whatsappText)}`;

      setResult({
        status,
        statusClass,
        rangeText,
        pointerLeft,
        advice,
        whatsappUrl,
      });
    }
  };

  return (
    <section className="assessment section-padding" id="assessment">
      {/* Subtle Logo Watermark/Imprint */}
      <div className="logo-imprint assessment-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm assessment-logo-imprint-sm" aria-hidden="true" />
      
      <div className="container">
        <div className="assessment-grid">
          {/* Left Column: Health assessment listing */}
          <RevealOnScroll className="assessment-content">
            <span className="section-subtitle">Health Assessment Services</span>
            <h2 className="section-title">Comprehensive Health Check-up</h2>
            <p className="assessment-desc">
              We combine diagnostic analysis with clinical expertise to analyze your current health status and map out your recovery targets.
            </p>
            
            <ul className="assessment-list">
              <li>
                <div className="item-icon">✓</div>
                <div className="item-text">
                  <strong>BMI Assessment:</strong> Know and understand your Body Mass Index as a guideline for health risks.
                </div>
              </li>
              <li>
                <div className="item-icon">✓</div>
                <div className="item-text">
                  <strong>Body Composition Analysis:</strong> Get detailed insights into body fat, lean muscle mass, and visceral fat.
                </div>
              </li>
              <li>
                <div className="item-icon">✓</div>
                <div className="item-text">
                  <strong>Nutrition Counseling:</strong> Direct one-on-one consultation to identify roadblocks and set health goals.
                </div>
              </li>
              <li>
                <div className="item-icon">✓</div>
                <div className="item-text">
                  <strong>Lifestyle Assessment:</strong> Recommendations for sustainable improvements in physical activity, stress, and habits.
                </div>
              </li>
            </ul>
          </RevealOnScroll>

          {/* Right Column: Calculator Widget */}
          <RevealOnScroll className="bmi-widget glass-panel">
            <h3 className="bmi-title">Instant BMI Calculator</h3>
            <p className="bmi-subtitle">Calculate your Body Mass Index and see where you stand.</p>
            
            <form onSubmit={calculateBmi} id="bmi-form">
              <div className="form-group-flex">
                <div className="form-input-group">
                  <label htmlFor="bmi-weight">Weight (kg)</label>
                  <input
                    type="number"
                    id="bmi-weight"
                    placeholder="e.g. 70"
                    min="10"
                    max="300"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    suppressHydrationWarning
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="bmi-height">Height (cm)</label>
                  <input
                    type="number"
                    id="bmi-height"
                    placeholder="e.g. 170"
                    min="50"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block" suppressHydrationWarning>
                Calculate My BMI
              </button>
            </form>

            {result && (
              <div id="bmi-result" className="bmi-result mt-6">
                {/* Horizontal Range Meter */}
                <div className="bmi-meter-container">
                  <div 
                    className="bmi-meter-pointer animate-bounce" 
                    style={{ left: result.pointerLeft }}
                  >
                    <span className="pointer-icon">▼</span>
                  </div>
                  <div className="bmi-meter-track">
                    <div className="bmi-meter-segment underweight"></div>
                    <div className="bmi-meter-segment healthy"></div>
                    <div className="bmi-meter-segment overweight"></div>
                    <div className="bmi-meter-segment obese"></div>
                  </div>
                  <div className="bmi-meter-labels">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>

                <div className={`bmi-status ${result.statusClass}`} id="bmi-status" style={{ fontSize: "1.1rem", padding: "10px 16px", borderRadius: "12px", fontWeight: "700", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {result.rangeText}
                </div>
                
                <p className="bmi-advice mt-4 text-neutral-600 text-sm" id="bmi-advice" style={{ lineHeight: "1.6" }}>
                  {result.advice}
                </p>

                {/* Locked Teaser */}
                <div className="bmi-locked-overlay">
                  <div className="lock-icon-box">🔒</div>
                  <div className="locked-text-box">
                    <h4>Exact Decimal Score Locked</h4>
                    <p>Get your exact BMI decimal, body fat percentage, and a customized 7-day nutrition roadmap from Dt. Poonam Kalia.</p>
                  </div>
                </div>

                <a
                  href={result.whatsappUrl}
                  id="bmi-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-block mt-4"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: "700" }}
                >
                  <span>Unlock My Exact Score & Diet Report (Free)</span>
                </a>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
