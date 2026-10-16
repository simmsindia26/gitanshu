import React from 'react';
import { Microscope, ShieldCheck, HeartPulse, Stethoscope, Award, CheckCircle2 } from 'lucide-react';
import drClinicImg from '../assets/WhatsApp Image 2026-09-28 at 1.27.23 PM.jpeg';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap">
            <Microscope size={15} />
            <span>About Gitanshu Diagnostic</span>
          </div>
          <h2 className="section-title">Dedicated to Diagnostic Accuracy & Clinical Excellence</h2>
          <p className="section-desc">
            At Gitanshu Diagnostic, we combine precision pathology, modern radiology, and certified clinical oversight to empower patients with reliable medical clarity.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Clinical Photograph & Leadership Chip */}
          <div className="about-photo-col">
            <div className="about-photo-card">
              <img
                src={drClinicImg}
                alt="Gitanshu Diagnostic Consultation and Laboratory Setup"
                className="about-photo-img"
              />
              <div className="about-exp-chip">
                <div className="about-exp-chip-title">Clinical Leadership</div>
                <div className="about-exp-chip-desc">
                  Supervised by qualified medical practitioners ensuring analytical accuracy and patient-centered care.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Lab Credentials */}
          <div className="about-content-col">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '14px', color: 'var(--dark)' }}>
              Precision Testing For Reliable Clinical Decisions
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7' }}>
              We offer comprehensive diagnostic investigations spanning routine blood panels, detailed organ function profiles (Kidney, Liver, Lipid), vitamin assessments, and diagnostic imaging.
            </p>

            <div className="about-pillars-grid">
              <div className="about-pillar-box">
                <div className="about-pillar-icon-row">
                  <HeartPulse size={20} />
                  <span className="about-pillar-title">Complete Diagnostics</span>
                </div>
                <p className="about-pillar-desc">
                  Comprehensive hematology, biochemistry, and preventive health screenings under one roof.
                </p>
              </div>

              <div className="about-pillar-box">
                <div className="about-pillar-icon-row">
                  <Stethoscope size={20} />
                  <span className="about-pillar-title">Doctor Consultation</span>
                </div>
                <p className="about-pillar-desc">
                  Clinical reviews led by Dr. Laxmi Prasad Rout (MBBS Utkal, Medical Officer Soro CHC).
                </p>
              </div>

              <div className="about-pillar-box">
                <div className="about-pillar-icon-row">
                  <ShieldCheck size={20} />
                  <span className="about-pillar-title">Calibrated Analyzers</span>
                </div>
                <p className="about-pillar-desc">
                  Quality-controlled laboratory protocols ensuring high analytical precision.
                </p>
              </div>

              <div className="about-pillar-box">
                <div className="about-pillar-icon-row">
                  <Award size={20} />
                  <span className="about-pillar-title">Hygienic Phlebotomy</span>
                </div>
                <p className="about-pillar-desc">
                  Safe and sterile blood collection with gentle patient care and prompt reporting.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={20} color="var(--secondary)" />
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)' }}>
                Registered and certified medical practice serving regional health needs.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
