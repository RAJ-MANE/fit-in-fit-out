import RevealOnScroll from "./RevealOnScroll";
import WaveDivider from "./WaveDivider";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ConsultationSection() {
  return (
    <>
      {/* Top Wave Divider: Transitions from White (Assessment) to Warm Sand (Consultation) */}
      <WaveDivider color="#fdfbf7" variant={1} />

      <section className="consultation section-padding" id="consultation" style={{ position: "relative" }}>
        {/* Dot grid decoration pattern */}
        <div className="dot-grid-decor" aria-hidden="true" />
        
        {/* Brand Logo Imprints */}
        <div className="logo-imprint consultation-logo-imprint" aria-hidden="true" />
        <div className="logo-imprint-sm consultation-logo-imprint-sm" aria-hidden="true" />
        
        <div className="container">
          <div className="consultation-grid">
            {/* Left Column: Address and Operating Hours */}
            <RevealOnScroll className="consultation-info">
              <span className="section-subtitle">Visit the Clinic</span>
              <h2 className="section-title">Consultation Center</h2>
              
              <div className="consultation-card glass-panel">
                <h3 className="card-headline">Offline Diet Consultation</h3>
                <p className="location-detail">
                  <span className="loc-icon" role="img" aria-label="Location pin">📍</span>
                  <span>Krishna B Wing, Vasant Sagar, Thakur Village, Kandivali East, Mumbai</span>
                </p>
                
                <hr className="card-divider" />
                
                <h4 className="hours-title">Consultation Hours</h4>
                <div className="hours-grid">
                  <div className="day-row">
                    <span className="day">Monday</span>
                    <span className="time">6:00 PM – 8:00 PM</span>
                  </div>
                  <div className="day-row">
                    <span className="day">Wednesday</span>
                    <span className="time">6:00 PM – 8:00 PM</span>
                  </div>
                  <div className="day-row">
                    <span className="day">Friday</span>
                    <span className="time">6:00 PM – 8:00 PM</span>
                  </div>
                </div>
                
                <p className="appointment-notice">
                  ⚠️ <strong>Prior Appointment Required</strong>
                </p>
                
                <div className="consultation-actions">
                  <a
                    href="https://wa.me/919920659600?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20for%20an%20offline%20consultation%20at%20Thakur%20Village."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <WhatsAppIcon className="icon-whatsapp" style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "8px" }} />
                    Book an Appointment
                  </a>
                  <a href="tel:+919920659600" className="btn btn-secondary">
                    Call +91 9920659600
                  </a>
                </div>
              </div>
            </RevealOnScroll>
            
            {/* Right Column: Google Maps Location Card */}
            <RevealOnScroll className="consultation-map-column">
              <div className="map-card glass-panel">
                <div className="map-preview-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6620957778955!2d72.87152007498098!3d19.20995558202243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d16e3b75ab%3A0x3eef0f284516a783!2sG%20Wing%20Krishna%2C%20Vasant%20Sagar%20Complex!5e0!3m2!1sen!2sin!4v1781935727188!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Krishna Vasant Sagar Complex Location Map"
                  />
                </div>
                
                <a
                  href="https://maps.google.com/?q=Krishna+B+Wing+Vasant+Sagar+Thakur+Village+Kandivali+East+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-block text-center btn-map-link"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Bottom Wave Divider: Transitions from Warm Sand (Consultation) to White (Wellness) */}
      <WaveDivider color="#ffffff" flip={true} variant={2} />
    </>
  );
}
