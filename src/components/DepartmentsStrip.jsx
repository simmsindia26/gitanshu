import React from 'react';
import { Droplet, TestTube, Microscope, Scan, HeartPulse, UserCheck } from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'blood',
    title: 'Blood Tests',
    sub: 'Complete & Specialized Blood Panels',
    icon: Droplet,
    color: '#ef4444',
    bg: '#fef2f2'
  },
  {
    id: 'urine',
    title: 'Urine Tests',
    sub: 'Routine & Advanced Urine Analysis',
    icon: TestTube,
    color: '#eab308',
    bg: '#fefce8'
  },
  {
    id: 'pathology',
    title: 'Pathology Tests',
    sub: 'Reliable & Accurate Diagnostics',
    icon: Microscope,
    color: '#0a3d82',
    bg: '#eef6ff'
  },
  {
    id: 'radiology',
    title: 'Radiology Tests',
    sub: 'X-Ray, Ultrasound and More',
    icon: Scan,
    color: '#06b6d4',
    bg: '#f0fdfa'
  },
  {
    id: 'checkups',
    title: 'Health Checkups',
    sub: 'Preventive & Routine Packages',
    icon: HeartPulse,
    color: '#10b981',
    bg: '#ecfdf5'
  },
  {
    id: 'consult',
    title: 'Doctor Consultation',
    sub: 'Expert Medical Advice',
    icon: UserCheck,
    color: '#8b5cf6',
    bg: '#f5f3ff'
  }
];

export default function DepartmentsStrip({ onSelectDept }) {
  const handleClick = (title) => {
    if (onSelectDept) {
      onSelectDept(title);
    }
    const elem = document.getElementById('services');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="departments-strip">
      <div className="container">
        <div className="dept-strip-grid">
          {DEPARTMENTS.map((dept) => {
            const IconComp = dept.icon;
            return (
              <div
                key={dept.id}
                className="dept-strip-card"
                onClick={() => handleClick(dept.title)}
              >
                <div
                  className="dept-icon-circle"
                  style={{ backgroundColor: dept.bg, color: dept.color }}
                >
                  <IconComp size={24} />
                </div>
                <div className="dept-strip-title">{dept.title}</div>
                <div className="dept-strip-sub">{dept.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
