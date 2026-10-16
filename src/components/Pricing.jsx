import React, { useState } from 'react';
import { Activity, Search, CheckCircle, ArrowRight, Info } from 'lucide-react';

const TEST_CATALOG = [
  {
    id: 'cbc-19',
    name: 'Complete Blood Count',
    testCount: '19 Tests',
    category: 'Hematology',
    badge: 'Popular',
    desc: 'Comprehensive hematology profile analyzing Hemoglobin (Hb), Total & Differential WBC, Platelet Count, RBC Indices (MCV, MCH, MCHC, RDW), and Hematocrit.',
    parameters: ['Hemoglobin (Hb)', 'Total WBC Count', 'Platelet Count', 'RBC Count & PCV', 'DLC 5-Part']
  },
  {
    id: 'kft-10',
    name: 'Kidney Function',
    testCount: '10 Tests',
    category: 'Organ Profile',
    badge: 'Essential',
    desc: 'Complete renal assessment measuring Serum Creatinine, Blood Urea, BUN, Uric Acid, Serum Electrolytes (Sodium, Potassium, Chloride), and Calcium.',
    parameters: ['Serum Creatinine', 'Blood Urea Nitrogen', 'Uric Acid', 'Electrolytes Panel', 'Calcium & Phosphorus']
  },
  {
    id: 'lft-8',
    name: 'Liver Function',
    testCount: '8 Tests',
    category: 'Organ Profile',
    badge: 'Essential',
    desc: 'Hepatic health evaluation including SGOT (AST), SGPT (ALT), Alkaline Phosphatase, Total & Direct Bilirubin, Total Protein, and Albumin/Globulin ratio.',
    parameters: ['SGOT (AST) & SGPT (ALT)', 'Total & Direct Bilirubin', 'Alkaline Phosphatase', 'Total Protein & Albumin', 'A/G Ratio']
  },
  {
    id: 'lipid-7',
    name: 'Lipid Profile Basic',
    testCount: '7 Tests',
    category: 'Cardiac & Lipid',
    badge: 'Heart Care',
    desc: 'Cardiovascular risk evaluation measuring Total Cholesterol, HDL Good Cholesterol, LDL Bad Cholesterol, Triglycerides, VLDL, and Cholesterol ratios.',
    parameters: ['Total Cholesterol', 'HDL (Good Cholesterol)', 'LDL (Bad Cholesterol)', 'Triglycerides', 'VLDL & TC/HDL Ratio']
  },
  {
    id: 'thyroid-3',
    name: 'Thyroid Profile Free',
    testCount: '3 Tests',
    category: 'Hormones',
    badge: 'Hormone',
    desc: 'Accurate thyroid metabolic evaluation analyzing Free Triiodothyronine (FT3), Free Thyroxine (FT4), and Thyroid Stimulating Hormone (TSH).',
    parameters: ['Free T3 (FT3)', 'Free T4 (FT4)', 'TSH (Thyroid Stimulating Hormone)']
  },
  {
    id: 'sugar-3',
    name: 'Sugar Choice',
    testCount: '3 Tests',
    category: 'Diabetes',
    badge: 'Diabetic Care',
    desc: 'Diagnostic blood sugar monitoring package evaluating Fasting Blood Sugar (FBS), Post-Prandial Blood Sugar (PPBS), and Random Blood Sugar.',
    parameters: ['Fasting Blood Glucose', 'Post-Prandial Glucose (PPBS)', 'Random Blood Sugar']
  },
  {
    id: 'hba1c-1',
    name: 'HbA1c Glycated Hemoglobin',
    testCount: '1 Test',
    category: 'Diabetes',
    badge: 'Gold Standard',
    desc: 'Gold standard test reflecting 3-month average blood glucose control for precise diabetes diagnosis and ongoing glycemic management.',
    parameters: ['HbA1c Percentage', 'Estimated Average Glucose (eAG)']
  },
  {
    id: 'vit-b12-1',
    name: 'Vitamin B12',
    testCount: '1 Test',
    category: 'Vitamins',
    badge: 'Vitality',
    desc: 'Essential biomarker for neurological health, cognitive function, nerve protection, and healthy red blood cell production.',
    parameters: ['Serum Cyanocobalamin / Active B12']
  },
  {
    id: 'vit-d-1',
    name: 'Vitamin D 25-Hydroxy',
    testCount: '1 Test',
    category: 'Vitamins',
    badge: 'Immunity & Bone',
    desc: 'Crucial test assessing 25-OH Vitamin D levels for optimal bone strength, calcium absorption, muscle function, and immune system resilience.',
    parameters: ['25-Hydroxy Vitamin D Total (D2 + D3)']
  }
];

export default function Pricing({ onSelectTest }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Hematology', 'Organ Profile', 'Cardiac & Lipid', 'Diabetes', 'Hormones', 'Vitamins'];

  const filteredTests = TEST_CATALOG.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.testCount.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookTest = (testName) => {
    if (onSelectTest) {
      onSelectTest(testName);
    }
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap green">
            <Activity size={15} />
            <span>Diagnostic Catalog & Packages</span>
          </div>
          <h2 className="section-title">Verified Laboratory Test Profiles</h2>
          <p className="section-desc">
            Explore our laboratory test packages extracted directly from Gitanshu Diagnostic's verified testing repertoire.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="catalog-toolbar">
          <div className="cat-pills-list">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="catalog-search-wrap">
              <Search className="catalog-search-icon" size={16} />
              <input
                type="text"
                className="catalog-search-input"
                placeholder="Search test (e.g. CBC, KFT)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="catalog-cards-grid">
          {filteredTests.map((test) => (
            <div key={test.id} className="catalog-test-card">
              <div className="test-card-header">
                <div>
                  <div className="test-cat-tag">{test.category}</div>
                  <h3 className="test-card-title">{test.name}</h3>
                </div>
                <span className={`test-pill-badge ${test.testCount === '19 Tests' || test.testCount === '10 Tests' ? 'red' : ''}`}>
                  {test.testCount}
                </span>
              </div>

              <p className="test-summary-desc">{test.desc}</p>

              <div className="test-param-chips">
                {test.parameters.map((param, idx) => (
                  <span key={idx} className="test-param-chip">
                    {param}
                  </span>
                ))}
              </div>

              <div className="test-card-actions">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--secondary)', fontWeight: 600 }}>
                  <CheckCircle size={14} />
                  <span>Quality Assured</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookTest(`${test.name} (${test.testCount})`)}
                  className="btn btn-primary btn-sm"
                >
                  <span>Book This Test</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiries Banner */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '22px 28px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Info size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--dark)' }}>
                Affordable Rates & Diagnostic Transparency
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Direct pricing inquiries and customized family packages can be scheduled instantly below.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const elem = document.getElementById('contact');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-secondary btn-sm"
          >
            <span>Inquire Test Package</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
