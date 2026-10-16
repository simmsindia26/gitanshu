import React from 'react';
import { Home, ShieldCheck, Clock, CheckCircle2, ArrowRight, Phone, MessageSquare, Sparkles, ThermometerSnowflake, UserCheck } from 'lucide-react';

const LAB_WHATSAPP_NUMBER = '919124136349';

export default function HomeCollection({ onBookClick, onSelectService }) {
  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService('Home Sample Collection');
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    if (onBookClick) {
      onBookClick();
    }
  };

  const features = [
    {
      icon: Home,
      title: 'Comfort of Your Home',
      desc: 'No waiting in clinic queues or traveling. Ideal for elderly, bedridden patients, and busy individuals.'
    },
    {
      icon: ShieldCheck,
      title: '100% Sterile & Safe Kits',
      desc: 'Certified phlebotomists use single-use sealed vacuum tubes and medical-grade sterile equipment.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Cold-Chain Sample Transport',
      desc: 'Samples are stored in temperature-regulated containers to preserve high analytical accuracy.'
    },
    {
      icon: MessageSquare,
      title: 'Prompt WhatsApp Reports',
      desc: 'Diagnostic reports are directly delivered to your WhatsApp number and email without an extra trip.'
    }
  ];

  return (
    <section id="home-collection" className="section home-collection-section">
      <div className="container">
        <div className="home-collection-card-wrapper">
          <div className="home-collection-grid">
            {/* Left Content Column */}
            <div className="home-collection-content">
              <div className="section-tag-wrap green" style={{ marginBottom: '14px' }}>
                <Home size={15} />
                <span>Doorstep Diagnostic Service</span>
              </div>

              <h2 className="home-collection-title">
                We Also Provide <span className="text-gradient">Home Sample Collection</span> Services
              </h2>

              <p className="home-collection-desc">
                Gitanshu Diagnostic brings trusted, hospital-grade pathology testing right to your doorstep in Soro and nearby areas. Get routine blood tests, organ profiles, fasting sugar tests, and specialized health checkups performed safely in the comfort of your home.
              </p>

              <div className="home-collection-highlights">
                <div className="home-highlight-pill">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Early Morning Fasting Slots</span>
                </div>
                <div className="home-highlight-pill">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Senior Citizen Friendly</span>
                </div>
                <div className="home-highlight-pill">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Certified Phlebotomist Visit</span>
                </div>
                <div className="home-highlight-pill">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Quick WhatsApp Delivery</span>
                </div>
              </div>

              <div className="home-collection-actions">
                <a
                  href="#contact"
                  onClick={handleDetailsClick}
                  className="btn btn-primary btn-lg home-cta-primary"
                >
                  <span>Book Home Collection / Get Details</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`https://wa.me/${LAB_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Gitanshu Diagnostic, I would like to inquire about home sample collection service.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary home-cta-whatsapp"
                >
                  <MessageSquare size={17} />
                  <span>WhatsApp: +91 9124136349</span>
                </a>
              </div>
            </div>

            {/* Right Features & Process Card */}
            <div className="home-collection-cards-column">
              <div className="home-features-container">
                <div className="home-features-header">
                  <Sparkles size={18} color="#0a3d82" />
                  <h4>Why Choose Our Home Collection?</h4>
                </div>

                <div className="home-features-list">
                  {features.map((feat, idx) => {
                    const IconComponent = feat.icon;
                    return (
                      <div key={idx} className="home-feature-item">
                        <div className="home-feature-icon-box">
                          <IconComponent size={20} />
                        </div>
                        <div className="home-feature-text">
                          <h5>{feat.title}</h5>
                          <p>{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Micro info bar */}
                <div className="home-service-callout">
                  <UserCheck size={16} color="#10b981" />
                  <span>Supervised by <strong>Dr. Laxmi Prasad Rout</strong> (Medical Officer, Soro CHC)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
