import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <Clock size={16} />
          <span>Open Late Until 11 PM</span>
        </div>
        
        <h1 className="hero-title">
          Craving Something
          <span className="hero-highlight"> at Midnight?</span>
        </h1>
        
        <p className="hero-subtitle">
          Where late-night hunger meets indulgent comfort food. 
          Multi-cuisine delights from burgers to bowls, crafted for your cravings.
        </p>

        <div className="hero-cta">
          <button 
            className="btn-primary hero-btn"
            onClick={() => scrollToSection('menu')}
          >
            View Full Menu
            <ArrowRight size={20} />
          </button>
          <button 
            className="btn-secondary hero-btn"
            onClick={() => scrollToSection('reservation')}
          >
            Reserve Table
          </button>
        </div>

        <div className="hero-info">
          <div className="hero-info-item">
            <MapPin size={18} />
            <span>Pedda Waltair, Visakhapatnam</span>
          </div>
          <div className="hero-info-divider"></div>
          <div className="hero-info-item">
            <Clock size={18} />
            <span>7 AM - 11 PM Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
