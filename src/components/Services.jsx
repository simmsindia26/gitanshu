import React from 'react';
import { Droplet, TestTube, Microscope, Scan, HeartPulse, UserCheck, ArrowRight, Check } from 'lucide-react';

const LAB_SERVICES = [
  {
    id: 'blood-tests',
    title: 'Blood Tests',
    subtitle: 'Complete & Specialized Blood Panels',
    icon: Droplet,
    color: '#ef4444',
    bg: '#fef2f2',
    description: 'Comprehensive hematology and biochemical blood screenings including Complete Blood Count (19 parameters), glucose evaluations, lipid profiles, and vital organ biomarkers.',
    highlights: [
      'Complete Blood Count (19 Tests)',
      'Sugar Choice (Fasting & PP)',
      'HbA1c Glycated Hemoglobin',
      'Lipid & Lipid Profile Basic'
    ]
  },
  {
    id: 'urine-tests',
    title: 'Urine Tests',
    subtitle: 'Routine & Advanced Urine Analysis',
    icon: TestTube,
    color: '#eab308',
    bg: '#fefce8',
    description: 'High-accuracy routine physical, chemical, and microscopic examination of urine to detect urinary tract infections, metabolic abnormalities, and early renal dysfunctions.',
    highlights: [
      'Routine & Microscopic Examination',
      'Renal & Protein Level Checks',
      'Urinary Infection Screening',
      'Metabolic Byproduct Analysis'
    ]
  },
  {
    id: 'pathology-tests',
    title: 'Pathology Tests',
    subtitle: 'Reliable & Accurate Diagnostics',
    icon: Microscope,
    color: '#0a3d82',
    bg: '#eef6ff',
    description: 'Standardized clinical pathology and biochemistry investigations performed using quality-controlled lab protocols for accurate disease detection and monitoring.',
    highlights: [
      'Kidney Function Tests (10 Tests)',
      'Liver Function Tests (8 Tests)',
      'Thyroid Profile Free (3 Tests)',
      'Vitamin B12 & Vitamin D 25-OH'
    ]
  },
  {
    id: 'radiology-tests',
    title: 'Radiology Tests',
    subtitle: 'X-Ray, Ultrasound and More',
    icon: Scan,
    color: '#06b6d4',
    bg: '#f0fdfa',
    description: 'Diagnostic imaging facilities including digital X-Ray and Ultrasound investigations providing crystal-clear visualization for internal medical conditions.',
    highlights: [
      'Digital X-Ray Imaging',
      'Ultrasound Sonography',
      'Chest & Skeletal Imaging',
      'Abdominal & Pelvic Scans'
    ]
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    subtitle: 'Preventive & Routine Packages',
    icon: HeartPulse,
    color: '#10b981',
    bg: '#ecfdf5',
    description: 'Integrated preventive health screening packages designed for early detection of lifestyle disorders, diabetes, cardiac risks, and deficiency syndromes.',
    highlights: [
      'Master Health Checkup Panels',
      'Diabetic & Cardiac Risk Profiles',
      'Senior Citizen Wellness Packages',
      'Vital Organ Health Screenings'
    ]
  },
  {
    id: 'doctor-consultation',
    title: 'Doctor Consultation',
    subtitle: 'Expert Medical Advice',
    icon: UserCheck,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    description: 'Direct clinical consultation and report analysis by qualified medical practitioners led by Dr. Laxmi Prasad Rout, MBBS (Utkal), Medical Officer (Soro CHC).',
    highlights: [
      'Medicine Practitioner Consultation',
      'Diagnostic Report Interpretation',
      'Treatment & Prescription Guidance',
      'Follow-Up Health Monitoring'
    ]
  }
];

export default function Services({ onSelectService }) {
  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap green">
            <Microscope size={15} />
            <span>Comprehensive Clinical Services</span>
          </div>
          <h2 className="section-title">Complete Diagnostic & Healthcare Solutions</h2>
          <p className="section-desc">
            All diagnostic departments displayed on the Gitanshu Diagnostic emblem are fully equipped to deliver accurate, reproducible, and clinically validated results.
          </p>
        </div>

        <div className="services-bento-grid">
          {LAB_SERVICES.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div key={srv.id} className="service-card">
                <div
                  className="service-icon-wrap"
                  style={{ backgroundColor: srv.bg, color: srv.color }}
                >
                  <IconComp size={28} />
                </div>

                <h3 className="service-card-title">{srv.title}</h3>
                <div className="service-card-sub">{srv.subtitle}</div>
                
                <p className="service-card-desc">{srv.description}</p>

                <ul className="service-bullets">
                  {srv.highlights.map((item, idx) => (
                    <li key={idx} className="service-bullet-item">
                      <Check size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleServiceClick(srv.title)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <span>Book {srv.title}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
