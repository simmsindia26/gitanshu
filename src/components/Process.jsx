import React from 'react';
import { CalendarCheck, TestTube, Microscope, FileText, ArrowRight } from 'lucide-react';

export default function Process({ onBookClick }) {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'Select Test & Book Slot',
      desc: 'Choose your desired test panel (CBC, KFT, LFT, Lipid, Vitamins, or Doctor Consultation) and select your preferred date.'
    },
    {
      num: '02',
      icon: TestTube,
      title: 'Hygienic Sample Collection',
      desc: 'Visit our diagnostic center for hygienic, safe, and sterile sample collection handled by trained laboratory staff.'
    },
    {
      num: '03',
      icon: Microscope,
      title: 'Precision Lab Processing',
      desc: 'Samples are processed with standardized clinical protocols and calibrated analyzers for high analytical precision.'
    },
    {
      num: '04',
      icon: FileText,
      title: 'Accurate Report & Consult',
      desc: 'Get your verified diagnostic results promptly and consult with Dr. Laxmi Prasad Rout for complete medical clarity.'
    }
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f7ff 100%)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap green">
            <Microscope size={15} />
            <span>Smooth Patient Journey</span>
          </div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">
            A seamless four-step pathway from test selection to accurate report delivery and clinical guidance.
          </p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="process-step-card">
                <span className="process-watermark">{step.num}</span>
                <div className="process-icon-box">
                  <IconComp size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            type="button"
            onClick={() => {
              const elem = document.getElementById('contact');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              if (onBookClick) onBookClick();
            }}
            className="btn btn-primary"
          >
            <span>Schedule Your Appointment Today</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
