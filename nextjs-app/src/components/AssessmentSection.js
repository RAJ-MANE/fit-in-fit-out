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
      let advice = "";

      if (bmi < 18.5) {
        status = "Underweight";
        statusClass = "underweight";
        advice = "Your body weight is below the normal range. It is recommended to consult Dt. Poonam Kalia for a healthy, structured weight gain plan focused on balanced nutrients and protein.";
      } else if (bmi >= 18.5 && bmi < 25) {
        status = "Healthy Weight";
        statusClass = "healthy";
        advice = "Your body weight is in the ideal range. Maintaining a balanced diet and regular physical activity will sustain this health score.";
      } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
        statusClass = "overweight";
        advice = "Your body weight is slightly above the healthy range. A structured, evidence-based nutrition plan can assist in restoring balance and preventing long-term metabolic risks.";
      } else {
        status = "Obese";
        statusClass = "obese";
        advice = "Your body weight is in the obese range. We recommend booking a comprehensive clinical consultation with Dt. Poonam Kalia to address cellular metabolism and design a sustainable recovery plan.";
      }

      const whatsappText = `Hello Dt. Poonam, my BMI is ${bmi} (${status}) and I want to book a nutrition counseling session.`;
      const whatsappUrl = `https://wa.me/919920659600?text=${encodeURIComponent(whatsappText)}`;

      setResult({
        score: bmi,
        status,
        statusClass,
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
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Calculate My BMI
              </button>
            </form>

            {result && (
              <div id="bmi-result" className="bmi-result">
                <div className="bmi-score-box glass-panel">
                  <span className="score-label">Your BMI</span>
                  <span className="score-value" id="bmi-val">
                    {result.score}
                  </span>
                </div>
                <div className={`bmi-status ${result.statusClass}`} id="bmi-status">
                  {result.status}
                </div>
                <p className="bmi-advice" id="bmi-advice">
                  {result.advice}
                </p>
                <a
                  href={result.whatsappUrl}
                  id="bmi-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-block"
                >
                  Book Personalized Consultation
                </a>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
