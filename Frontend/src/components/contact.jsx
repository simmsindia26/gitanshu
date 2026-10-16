import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, UserCheck, ChevronDown, Check, Phone } from 'lucide-react';

const LAB_WHATSAPP_NUMBER = '919124136349';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'Complete Blood Count (19 Tests)',
    preferredDate: '',
    message: ''
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionSummary, setSubmissionSummary] = useState(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Click outside to close custom select dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const testOptions = [
    'Complete Blood Count (19 Tests)',
    'Kidney Function (10 Tests)',
    'Liver Function (8 Tests)',
    'Lipid Profile Basic (7 Tests)',
    'Thyroid Profile Free (3 Tests)',
    'Sugar Choice (3 Tests)',
    'HbA1c Glycated Hemoglobin (1 Test)',
    'Vitamin B12 (1 Test)',
    'Vitamin D 25-Hydroxy (1 Test)',
    'Blood Tests Panel',
    'Urine Routine & Microscopic',
    'Pathology Investigations',
    'Radiology / X-Ray / Ultrasound',
    'Doctor Consultation - Dr. Laxmi Prasad Rout',
    'Full Body Health Checkup Package',
    'General Diagnostic Inquiry'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date for your visit.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppUrl = (data) => {
    const messageLines = [
      '🏥 *GITANSHU DIAGNOSTIC - APPOINTMENT BOOKING*',
      '',
      `👤 *Patient Name:* ${data.fullName}`,
      `📞 *Contact Phone:* ${data.phone}`,
      `📧 *Email:* ${data.email ? data.email : 'Not specified'}`,
      `🧪 *Selected Test/Service:* ${data.service}`,
      `📅 *Preferred Date:* ${data.preferredDate}`,
      `📝 *Notes/Symptoms:* ${data.message ? data.message : 'None'}`,
      `🔖 *Booking Reference:* ${data.bookingRef}`
    ];
    const encodedText = encodeURIComponent(messageLines.join('\n'));
    return `https://wa.me/${LAB_WHATSAPP_NUMBER}?text=${encodedText}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const summary = {
        ...formData,
        bookingRef: 'GD-' + Math.floor(100000 + Math.random() * 900000),
        bookingTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setSubmissionSummary(summary);
      setSubmitted(true);

      // Open WhatsApp directly with combined data sent to 9124136349
      const whatsappUrl = buildWhatsAppUrl(summary);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionSummary(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Complete Blood Count (19 Tests)',
      preferredDate: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-wrap">
            <Calendar size={15} />
            <span>Bookings & Inquiries</span>
          </div>
          <h2 className="section-title">Schedule Your Test or Doctor Consultation</h2>
          <p className="section-desc">
            Fill out the booking form below. Your appointment details will be organized and forwarded directly to our official WhatsApp booking line (<strong>+91 9124136349</strong>).
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left: Contact Details Cards */}
          <div className="contact-cards-stack">
            {/* Direct WhatsApp Contact Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap green">
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
                  Direct Booking & WhatsApp Support
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  <strong>WhatsApp Helpline:</strong> +91 9124136349<br />
                  Fast confirmation for home collection & OPD appointments.
                </p>
                <a
                  href={`https://wa.me/${LAB_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Gitanshu Diagnostic, I have an inquiry regarding lab tests and appointments.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--secondary-dark)',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    marginTop: '8px'
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp (+91 9124136349)</span>
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
                  Diagnostic Center Location
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  <strong>Gitanshu Diagnostic</strong><br />
                  Associated with Medical Officer (Soro CHC), Odisha<br />
                  Convenient patient access for pathology & consultations.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon-wrap green">
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
                  Working & Diagnostic Hours
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  <strong>Morning Session:</strong> 7:30 AM – 1:00 PM (Sample collection & Fasting tests)<br />
                  <strong>Evening Session:</strong> 4:30 PM – 8:30 PM (Consultations & Reports)<br />
                  <strong>Sunday:</strong> Morning Session Only
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <UserCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
                  Specialist Physician
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  <strong>Dr. Laxmi Prasad Rout</strong><br />
                  M.B.B.S. (Utkal) | Regd. No. 21900/16 (O)<br />
                  Medicine Practitioner • Medical Officer (Soro CHC)
                </p>
              </div>
            </div>
          </div>

          {/* Right: Modern Booking Studio Card */}
          <div className="booking-studio-card">
            {!submitted ? (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '6px' }}>
                    Book an Appointment
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Fill the details below. On clicking confirm, your booking request will be automatically dispatched to WhatsApp (<strong>+91 9124136349</strong>).
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-2-col">
                    <div className="form-field-group">
                      <label className="form-field-label">
                        Full Name <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-field-input"
                        placeholder="e.g. Gitanshu Mohanty"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                      {errors.fullName && <div className="form-err-msg">{errors.fullName}</div>}
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label">
                        Phone Number <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-field-input"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <div className="form-err-msg">{errors.phone}</div>}
                    </div>
                  </div>

                  <div className="form-2-col">
                    <div className="form-field-group">
                      <label className="form-field-label">Email Address (Optional)</label>
                      <input
                        type="email"
                        className="form-field-input"
                        placeholder="patient@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <div className="form-err-msg">{errors.email}</div>}
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label">
                        Preferred Date <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="date"
                        className="form-field-input"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                      {errors.preferredDate && <div className="form-err-msg">{errors.preferredDate}</div>}
                    </div>
                  </div>

                  {/* Custom Modern Dropdown */}
                  <div className="form-field-group" ref={dropdownRef} style={{ position: 'relative' }}>
                    <label className="form-field-label">Select Test / Medical Service</label>
                    <div
                      className={`custom-select-trigger ${dropdownOpen ? 'open' : ''}`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setDropdownOpen(!dropdownOpen);
                        } else if (e.key === 'Escape') {
                          setDropdownOpen(false);
                        }
                      }}
                    >
                      <span className="select-trigger-text">{formData.service}</span>
                      <ChevronDown
                        size={18}
                        className={`select-chevron ${dropdownOpen ? 'rotated' : ''}`}
                      />
                    </div>

                    {dropdownOpen && (
                      <div className="custom-dropdown-panel">
                        {testOptions.map((opt, idx) => {
                          const isSelected = formData.service === opt;
                          return (
                            <div
                              key={idx}
                              className={`custom-dropdown-item ${isSelected ? 'active' : ''}`}
                              onClick={() => {
                                setFormData({ ...formData, service: opt });
                                setDropdownOpen(false);
                              }}
                            >
                              <span>{opt}</span>
                              {isSelected && <Check size={16} className="item-check-icon" />}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Additional Message / Doctor's Note</label>
                    <textarea
                      className="form-field-textarea"
                      placeholder="Specify if you have fasting requirements, doctor prescription, or symptoms..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    <Send size={18} />
                    <span>Confirm & Book Appointment</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto' }}>
                  <CheckCircle size={36} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>
                  Appointment Logged & WhatsApp Initiated!
                </h3>

                <p style={{ color: 'var(--text-muted)', marginBottom: '22px', fontSize: '0.92rem' }}>
                  Thank you, <strong>{submissionSummary.fullName}</strong>. Your appointment details have been compiled and sent to WhatsApp at <strong>+91 9124136349</strong>.
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: '14px',
                    padding: '20px',
                    textAlign: 'left',
                    marginBottom: '24px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Booking Reference:</span>
                    <strong style={{ color: 'var(--primary)' }}>{submissionSummary.bookingRef}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Selected Service:</span>
                    <strong style={{ color: 'var(--dark)' }}>{submissionSummary.service}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Preferred Date:</span>
                    <strong style={{ color: 'var(--dark)' }}>{submissionSummary.preferredDate}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Contact Number:</span>
                    <strong style={{ color: 'var(--dark)' }}>{submissionSummary.phone}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a
                    href={buildWhatsAppUrl(submissionSummary)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <MessageSquare size={16} />
                    <span>Open WhatsApp Chat (+91 9124136349)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline"
                  >
                    <span>Book Another Appointment</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
