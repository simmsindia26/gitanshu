import React from 'react';
import { ShieldCheck, UserCheck, Activity, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Accurate Tests, Healthier Tomorrows',
      description: 'Our core philosophy centers on high analytical accuracy for reliable clinical diagnosis and timely medical interventions.'
    },
    {
      icon: UserCheck,
      title: 'Supervised by Medical Officer',
      description: 'Clinical evaluations and consultations led by Dr. Laxmi Prasad Rout (M.B.B.S. Utkal, Medical Officer Soro CHC).'
    },
    {
      icon: Activity,
      title: 'Comprehensive Diagnostic Menu',
      description: 'Extensive test panels ranging from 19-parameter CBC and multi-test organ profiles (KFT, LFT, Lipid) to vitamins & HbA1c.'
    },
    {
      icon: Award,
      title: 'Dual Diagnostics & Consultation',
      description: 'Convenience of undergoing reliable lab investigations and obtaining expert medical advice in one coordinated setting.'
    }
  ];

  return (
    <section id="why-us" className="section why-us-section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap">
            <ShieldCheck size={15} />
            <span>Why Patients Trust Us</span>
          </div>
          <h2 className="section-title">Committed to Clinical Precision & Patient Well-being</h2>
          <p className="section-desc">
            Discover the hallmarks of healthcare delivery that make Gitanshu Diagnostic a trusted partner for your diagnostic needs.
          </p>
        </div>

        <div className="why-us-grid">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-card-icon">
                  <IconComponent size={26} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
