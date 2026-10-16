import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Calendar, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onBookTestClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Micro Information Bar */}
      <div className="top-micro-bar">
        <div className="container top-micro-inner">
          <div className="top-micro-left">
            <span className="top-micro-chip">
              <ShieldCheck size={14} />
              <span>Certified Diagnostic Center & Medical Practice</span>
            </span>
            <span className="top-micro-chip">
              <Clock size={14} />
              <span>Timings: 7:30 AM – 8:30 PM</span>
            </span>
          </div>
          <div className="top-micro-right">
            <span className="top-micro-chip">
              <MapPin size={14} />
              <span>Associated with Soro CHC, Odisha</span>
            </span>
            <span className="top-micro-badge">
              Accurate Tests • Healthier Tomorrows
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="navbar-logo-link"
            aria-label="Gitanshu Diagnostic Home"
          >
            <img src={logoImg} alt="Gitanshu Diagnostic Logo" className="navbar-logo-img" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="navbar-nav">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="navbar-link-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="navbar-link-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="navbar-link-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="navbar-link-btn">
                Specialist
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="navbar-link-btn">
                Test Profiles
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="navbar-link-btn">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="navbar-link-btn">
                Contact
              </a>
            </li>
          </ul>

          {/* Action CTA */}
          <div className="navbar-cta-wrap">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById('contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                if (onBookTestClick) onBookTestClick();
              }}
              className="btn btn-primary btn-sm btn-nav-desktop"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </a>

            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-list">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="mobile-menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-menu-item">
                About Diagnostic Lab
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="mobile-menu-item">
                Services & Pathology
              </a>
            </li>
            <li>
              <a href="#doctors" onClick={(e) => handleNavClick(e, 'doctors')} className="mobile-menu-item">
                Dr. Laxmi Prasad Rout (MBBS)
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="mobile-menu-item">
                Test Profiles (CBC, Organ & Vitamins)
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="mobile-menu-item">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mobile-menu-item">
                Book Test / Consultation
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              handleNavClick(e, 'contact');
              if (onBookTestClick) onBookTestClick();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Calendar size={16} />
            <span>Book Appointment Online</span>
          </a>
        </div>
      </nav>
    </>
  );
}
