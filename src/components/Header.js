"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ["hero", "about", "services", "consultation", "gallery", "podcasts"];
      const scrollPosition = window.scrollY + 120; // offset for header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", target: "#hero", id: "hero" },
    { label: "About", target: "#about", id: "about" },
    { label: "Services", target: "#services", id: "services" },
    { label: "Consultation", target: "#consultation", id: "consultation" },
    { label: "Gallery", target: "#gallery", id: "gallery" },
    { label: "Videos", target: "#podcasts", id: "podcasts" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* Brand Logo and Name */}
        <a href="#hero" className="logo-container" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Dt. Poonam Kalia Logo"
            width={48}
            height={48}
            className="brand-logo"
            priority
          />
          <span className="logo-text">Dt. Poonam Kalia</span>
        </a>

        {/* Navigation Links */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.target}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#consultation"
                className="btn btn-header-cta"
                onClick={closeMenu}
              >
                Consult Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
