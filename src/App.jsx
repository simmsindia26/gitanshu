import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import DepartmentsStrip from './components/DepartmentsStrip';
import About from './components/about';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Pricing from './components/Pricing';
import HomeCollection from './components/HomeCollection';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState('Complete Blood Count (19 Tests)');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleBookTestClick = () => {
    // Default scroll target handler
  };

  return (
    <div className="gitanshu-app">
      {/* 1. Sticky Navigation Bar with Top Micro Bar */}
      <Navbar onBookTestClick={handleBookTestClick} />

      <main>
        {/* 2. Modern Hero Section */}
        <Hero onBookTestClick={handleBookTestClick} />

        {/* 3. 6 Core Logo Departments Quick Strip */}
        <DepartmentsStrip onSelectDept={handleSelectService} />

        {/* 4. About Diagnostic Center */}
        <About />

        {/* 5. Diagnostic & Clinical Services (Bento Grid) */}
        <Services onSelectService={handleSelectService} />

        {/* 6. Specialist Doctor Profile */}
        <Doctors onBookConsultation={handleSelectService} />

        {/* 7. Test Profiles & Pricing Catalog */}
        <Pricing onSelectTest={handleSelectService} />

        {/* 8. Home Sample Collection Informational Section */}
        <HomeCollection onBookClick={handleBookTestClick} onSelectService={handleSelectService} />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Patient Journey / Process */}
        <Process onBookClick={handleBookTestClick} />

        {/* 11. Contact & Appointment Booking Studio */}
        <Contact selectedService={selectedService} />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
