"use client";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import BackgroundDecor from "./BackgroundDecor";

export default function WellnessSection() {
  const [activeTab, setActiveTab] = useState("seasonal-fruits");

  return (
    <section className="wellness section-padding" id="wellness" style={{ overflow: "hidden" }}>
      {/* Botanical Background Decoration */}
      <BackgroundDecor type="leaf-right" />
      
      {/* Brand Logo Imprints */}
      <div className="logo-imprint wellness-logo-imprint" aria-hidden="true" />
      <div className="logo-imprint-sm wellness-logo-imprint-sm" aria-hidden="true" />

      <div className="container">
        <RevealOnScroll className="section-header text-center">
          <span className="section-subtitle">Health Education & Wellness</span>
          <h2 className="section-title">Seasonal Nutrition & Lifestyle</h2>
          <p className="section-description">
            Science-backed nutritional hacks and lifestyle recommendations to enhance your everyday wellness.
          </p>
        </RevealOnScroll>
        
        <div className="tabs-container">
          {/* Tab Switcher Headers */}
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "seasonal-fruits" ? "active" : ""}`}
              onClick={() => setActiveTab("seasonal-fruits")}
              suppressHydrationWarning
            >
              Seasonal Nutrition Tips
            </button>
            <button
              className={`tab-btn ${activeTab === "hydration-guide" ? "active" : ""}`}
              onClick={() => setActiveTab("hydration-guide")}
              suppressHydrationWarning
            >
              Summer Hydration Guide
            </button>
          </div>
          
          <div className="tabs-content">
            {/* Tab 1: Seasonal Fruits */}
            <div className={`tab-pane ${activeTab === "seasonal-fruits" ? "active" : ""}`}>
              <div className="fruits-grid">
                {/* Jamun Card */}
                <div className="fruit-card glass-panel">
                  <div className="fruit-badge">Superfood</div>
                  <h3 className="fruit-name">Jamun Benefits (Black Plum)</h3>
                  <ul className="fruit-list">
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Helps control blood sugar:</strong> Contains jamboline which controls conversion of starch into sugar.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Supports digestion:</strong> Rich in dietary fibers, promoting clean digestion.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Rich in antioxidants:</strong> Combats free radicals, boosting cellular health.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Supports weight management:</strong> Low calorie density with high nutritional value.
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* Litchi Card */}
                <div className="fruit-card glass-panel">
                  <div className="fruit-badge">Hydrator</div>
                  <h3 className="fruit-name">Litchi Benefits</h3>
                  <ul className="fruit-list">
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>High in Vitamin C:</strong> Elevates immunity levels and cellular defense.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Supports hydration:</strong> Extremely high water content to combat summer heat.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Promotes healthy skin:</strong> Rich in antioxidants that defend against UV stress.
                      </span>
                    </li>
                    <li>
                      <span className="bullet-dot"></span>
                      <span>
                        <strong>Natural energy source:</strong> Provides clean carbohydrates for instant revitalization.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Smart Nutrition Tips Box */}
              <div className="smart-tips-box glass-card-dark">
                <h4 className="tips-title">💡 Smart Nutrition Tips</h4>
                <div className="tips-grid">
                  <div className="tip-item">
                    <strong>Practice Portion Control</strong>
                    <p>Avoid overeating, even health foods. Portion management is key to metabolism balance.</p>
                  </div>
                  <div className="tip-item">
                    <strong>Whole Fruits Over Juices</strong>
                    <p>Juices strip away natural fibers, leading to rapid blood sugar spikes. Choose whole fruits.</p>
                  </div>
                  <div className="tip-item">
                    <strong>Eat Seasonal Produce</strong>
                    <p>Seasonal fruits and veggies contain micro-nutrients nature designs for specific seasonal needs.</p>
                  </div>
                  <div className="tip-item">
                    <strong>Maintain a Balanced Diet</strong>
                    <p>Include healthy fats, lean proteins, and complex carbohydrates in every meal.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tab 2: Summer Hydration Guide */}
            <div className={`tab-pane ${activeTab === "hydration-guide" ? "active" : ""}`}>
              <div className="hydration-container glass-panel">
                <div className="hydration-main-header">
                  <h3>Prevent Heat-Related Fatigue & Headaches</h3>
                  <p>Summer heat strips body moisture quickly. Implement these hydration rules daily to preserve your energy.</p>
                </div>
                
                <div className="hydration-grid-rules">
                  <div className="rule-box glass-panel">
                    <div className="rule-icon">💧</div>
                    <h4>Stay Hydrated</h4>
                    <p>Start your day with 1–2 glasses of pure water. Carry a reusable container everywhere to monitor intake.</p>
                  </div>
                  
                  <div className="rule-box glass-panel">
                    <div className="rule-icon">🥥</div>
                    <h4>Natural Electrolytes</h4>
                    <p>Replace synthetic sports drinks. Drink nutrient-dense fluids:</p>
                    <ul className="rule-sublist">
                      <li><strong>Coconut Water:</strong> Packed with natural potassium.</li>
                      <li><strong>Lemon Water:</strong> Provides vitamin C and traces of sodium.</li>
                      <li><strong>Buttermilk:</strong> Soothes the stomach and supplies probiotics.</li>
                    </ul>
                  </div>
                  
                  <div className="rule-box glass-panel">
                    <div className="rule-icon">🍉</div>
                    <h4>Eat Water-Rich Foods</h4>
                    <p>Optimize hydration from solid food sources. Fill your meals with:</p>
                    <p className="food-tags">
                      <span className="f-tag">Watermelon</span>
                      <span className="f-tag">Cucumber</span>
                      <span className="f-tag">Muskmelon</span>
                      <span className="f-tag">Oranges</span>
                    </p>
                  </div>

                  <div className="rule-box warning-box glass-panel">
                    <div className="rule-icon">☕</div>
                    <h4>Avoid Excessive Diuretics</h4>
                    <p>Certain beverages promote fluid loss and dehydration. Limit intake of:</p>
                    <ul className="rule-sublist">
                      <li><strong>Excessive Tea & Coffee:</strong> Diuretic caffeine compounds.</li>
                      <li><strong>Sugary Beverages:</strong> Increases insulin response and slows hydration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
