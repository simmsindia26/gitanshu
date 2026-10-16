import React, { useState } from 'react';
import { ShieldCheck, Calendar, Activity, ArrowRight, UserCheck, Search } from 'lucide-react';
import drImg from '../assets/dr.jpeg';

export default function Hero({ onBookTestClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    scrollTo('pricing');
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Value Proposition & Search */}
          <div className="hero-text-block">
            <div className="hero-pill-badge">
              <span className="pulse-dot"></span>
              <span>Trusted Diagnostic Laboratory & Consultation</span>
            </div>

            <h1 className="hero-heading">
              Precision Diagnostics For <span className="hero-heading-gradient">Healthier Tomorrows</span>
            </h1>

            <p className="hero-lead-text">
              Welcome to <strong>Gitanshu Diagnostic</strong>. We provide dependable pathology panels, organ function profiles, routine urine analyses, and expert medical consultations led by certified clinical professionals.
            </p>

            {/* Quick Diagnostic Search Bar */}
            <form onSubmit={handleSearchSubmit} className="hero-quick-search">
              <Search size={18} color="var(--primary)" />
              <input
                type="text"
                className="hero-search-input"
                placeholder="Search tests (e.g., CBC, Kidney Function, Thyroid, Vitamin D)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-sm">
                <span>Explore</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="hero-button-row">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                  if (onBookTestClick) onBookTestClick();
                }}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Book a Test</span>
              </a>

              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('pricing');
                }}
                className="btn btn-outline btn-lg"
              >
                <span>View All 9+ Test Profiles</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Micro Stats */}
            <div className="hero-stats-row">
              <div className="hero-stat-card">
                <div className="hero-stat-icon-wrap">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="hero-stat-title">Comprehensive Profiles</div>
                  <div className="hero-stat-sub">CBC, KFT, LFT, Lipid & Vitamins</div>
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-icon-wrap green">
                  <UserCheck size={18} />
                </div>
                <div>
                  <div className="hero-stat-title">Dr. Laxmi Prasad Rout</div>
                  <div className="hero-stat-sub">M.B.B.S. (Utkal) • Medical Officer</div>
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="hero-stat-title">Standard Accuracy</div>
                  <div className="hero-stat-sub">Reliable diagnostic precision</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Doctor Image Card */}
          <div className="hero-media-block">
            <div className="hero-visual-card">
              <div className="hero-photo-wrapper">
                <img
                  src={drImg}
                  alt="Dr. Laxmi Prasad Rout - MBBS Utkal, Medical Officer Soro CHC"
                  className="hero-doctor-img"
                />
                <div className="hero-doctor-overlay-card">
                  <div className="dr-overlay-name">Dr. Laxmi Prasad Rout</div>
                  <div className="dr-overlay-meta">M.B.B.S. (Utkal) | Regd. No. 21900/16 (O)</div>
                  <div className="dr-overlay-post">Medicine Practitioner • Medical Officer (Soro CHC)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
