import React from 'react';
import { Stethoscope, Award, CheckCircle2, UserCheck, Calendar } from 'lucide-react';
import drImg from '../assets/dr.jpeg';

export default function Doctors({ onBookConsultation }) {
  const handleConsultClick = () => {
    if (onBookConsultation) {
      onBookConsultation('Doctor Consultation - Dr. Laxmi Prasad Rout');
    }
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="doctors" className="section doctors-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap">
            <UserCheck size={15} />
            <span>Certified Medical Practitioner</span>
          </div>
          <h2 className="section-title">Consult Our Specialist Doctor</h2>
          <p className="section-desc">
            Direct clinical diagnosis, prescription management, and preventive medical consultation provided by registered healthcare professionals.
          </p>
        </div>

        <div className="doctor-profile-card">
          {/* Left: Doctor Photo */}
          <div className="doctor-photo-col">
            <div className="dr-avatar-frame">
              <img
                src={drImg}
                alt="Dr. Laxmi Prasad Rout - MBBS Utkal, Medical Officer Soro CHC"
              />
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary)', color: '#ffffff', padding: '6px 16px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
              <Award size={15} />
              <span>Medical Officer (Soro CHC)</span>
            </div>
          </div>

          {/* Right: Verified Credentials */}
          <div className="doctor-details-col">
            <div className="dr-badge-verified">
              <CheckCircle2 size={16} />
              <span>Verified Medical Credentials</span>
            </div>

            <h3 className="dr-full-heading">Dr. Laxmi Prasad Rout</h3>
            <div className="dr-degree-line">M.B.B.S. (Utkal)</div>
            <div className="dr-odia-line">ଡାଃ ଲକ୍ଷ୍ମୀ ପ୍ରସାଦ ରାଉତ (ଏମ୍.ବି.ବି.ଏସ୍. ଉତ୍କଳ)</div>

            <div className="dr-spec-grid">
              <div className="dr-spec-box">
                <div className="dr-spec-label">Medical Regd. Number</div>
                <div className="dr-spec-value">21900/16 (O)</div>
              </div>

              <div className="dr-spec-box">
                <div className="dr-spec-label">Designation</div>
                <div className="dr-spec-value">Medicine Practitioner</div>
              </div>

              <div className="dr-spec-box">
                <div className="dr-spec-label">Affiliation / Post</div>
                <div className="dr-spec-value">Medical Officer (Soro CHC)</div>
              </div>

              <div className="dr-spec-box">
                <div className="dr-spec-label">Practice Focus</div>
                <div className="dr-spec-value">General Medicine & Diagnostics</div>
              </div>
            </div>

            <p className="dr-summary-para">
              Dr. Laxmi Prasad Rout provides clinical assessments, blood & organ test interpretation, prescription guidance, and tailored disease management at Gitanshu Diagnostic.
            </p>

            <div className="dr-action-buttons">
              <button
                type="button"
                onClick={handleConsultClick}
                className="btn btn-primary"
              >
                <Calendar size={16} />
                <span>Book Doctor Consultation</span>
              </button>
            </div>

            {/* Micro verification strip */}
            <div className="dr-verification-strip">
              <div className="dr-strip-info">
                <Stethoscope size={18} color="var(--primary)" />
                <span>
                  Registered practitioner affiliated with <strong>Soro CHC</strong> & <strong>Gitanshu Diagnostic</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
