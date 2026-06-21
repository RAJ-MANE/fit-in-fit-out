import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        {/* Brand column */}
        <div className="footer-brand-column">
          <a href="#hero" className="logo-container">
            <Image
              src="/logo.png"
              alt="Fit In Fit Out Logo"
              width={40}
              height={40}
              className="footer-logo"
            />
            <span className="footer-logo-text">Fit In Fit Out</span>
          </a>
          <p className="footer-brand-desc">
            Personalized clinical nutrition and sustainable lifestyle guidance from Dt. Poonam Kalia. Evidence-based results for a healthier you.
          </p>
          
          <div className="social-links">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/fit_in_fitout_poonamkalia?igsh=c3h5c2xuNHIxMDhp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://m.facebook.com/fitinfitout14/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://m.youtube.com/channel/UCToA5VgFXyFQ0chvCjBBUzw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dt-poonam-kalia-4210b2112"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Navigation column */}
        <div className="footer-links-column">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Poonam</a></li>
            <li><a href="#services">Clinical Services</a></li>
            <li><a href="#assessment">BMI Calculator</a></li>
            <li><a href="#consultation">Consultation Hours</a></li>
            <li><a href="#wellness">Health Articles</a></li>
            <li><a href="#podcasts">Podcasts</a></li>
          </ul>
        </div>
        
        {/* Contact column */}
        <div className="footer-contact-column">
          <h4>Contact Details</h4>
          <ul className="footer-contact-info">
            <li>
              <span className="c-icon" aria-hidden="true">📍</span>
              <span>Krishna B Wing, Vasant Sagar, Thakur Village, Kandivali East, Mumbai</span>
            </li>
            <li>
              <span className="c-icon" aria-hidden="true">📞</span>
              <span><a href="tel:+919920659600">+91 9920659600</a></span>
            </li>
            <li>
              <span className="c-icon" aria-hidden="true">⏰</span>
              <span>
                Mon, Wed, Fri | 6:00 PM – 8:00 PM<br />
                <small style={{ opacity: 0.8 }}>Prior Appointment Required</small>
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom copyright details */}
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Fit In Fit Out. All Rights Reserved. Built for Dt. Poonam Kalia.</p>
          <p>Designed with ❤️ for Healthy Lifestyles | <a href="#hero">Back to Top ↑</a></p>
        </div>
      </div>
    </footer>
  );
}
