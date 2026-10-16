import React from 'react';
import { MapPin, Clock, ShieldCheck, ChevronRight, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-dark-theme">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div>
            <div className="footer-logo-box">
              <img src={logoImg} alt="Gitanshu Diagnostic Logo" />
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.65', marginBottom: '18px' }}>
              Gitanshu Diagnostic is committed to precision pathology, diagnostic imaging, and trusted clinical consultations for our community.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.16)', color: '#34d399', padding: '5px 14px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 600 }}>
              <ShieldCheck size={14} />
              <span>Accurate Tests | Healthier Tomorrows</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-nav-title">Quick Links</h4>
            <ul className="footer-link-items">
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
                  <ChevronRight size={14} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, 'about')}>
                  <ChevronRight size={14} />
                  <span>About Our Lab</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, 'services')}>
                  <ChevronRight size={14} />
                  <span>Services & Tests</span>
                </a>
              </li>
              <li>
                <a href="#home-collection" onClick={(e) => scrollTo(e, 'home-collection')}>
                  <ChevronRight size={14} />
                  <span>Home Collection</span>
                </a>
              </li>
              <li>
                <a href="#doctors" onClick={(e) => scrollTo(e, 'doctors')}>
                  <ChevronRight size={14} />
                  <span>Specialist Doctor</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Test Profiles</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                  <ChevronRight size={14} />
                  <span>Book Appointment</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Key Test Profiles */}
          <div>
            <h4 className="footer-nav-title">Key Test Profiles</h4>
            <ul className="footer-link-items">
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Complete Blood Count (19 Tests)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Kidney Function (10 Tests)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Liver Function (8 Tests)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Lipid Profile Basic (7 Tests)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Thyroid & Diabetes (HbA1c)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')}>
                  <ChevronRight size={14} />
                  <span>Vitamin B12 & Vitamin D 25-OH</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation & Hours */}
          <div>
            <h4 className="footer-nav-title">Consultation & Hours</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#94a3b8', marginBottom: '14px' }}>
              <ShieldCheck size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#ffffff' }}>Dr. Laxmi Prasad Rout</strong><br />
                M.B.B.S. (Utkal) | Regd. 21900/16 (O)<br />
                Medical Officer (Soro CHC)
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#94a3b8', marginBottom: '14px' }}>
              <Clock size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Morning:</strong> 7:30 AM – 1:00 PM<br />
                <strong>Evening:</strong> 4:30 PM – 8:30 PM<br />
                <strong>Sunday:</strong> Morning Session
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#94a3b8', marginBottom: '14px' }}>
              <MapPin size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                Gitanshu Diagnostic • Soro, Odisha
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', marginTop: '6px' }}>
              <Phone size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a
                  href="https://wa.me/919124136349"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#34d399',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none'
                  }}
                >
                  WhatsApp: +91 9124136349
                </a>
                <a
                  href="tel:+918984886265"
                  style={{
                    color: '#34d399',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none'
                  }}
                >
                  Helpline: +91 8984886265
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} <strong>Gitanshu Diagnostic</strong>. All rights reserved. Accurate Tests | Healthier Tomorrows.
          </div>
          <div>
            <span>Dedicated to diagnostic precision & patient well-being</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
