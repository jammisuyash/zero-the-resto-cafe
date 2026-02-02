import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { restaurantInfo } from '../data/mockMenuData';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="brand-zero">ZERO</span>
              <span className="brand-subtitle">The Resto Cafe</span>
            </h3>
            <p className="footer-tagline">{restaurantInfo.tagline}</p>
            <p className="footer-description">
              Your go-to destination for indulgent comfort food and late-night cravings. 
              Multi-cuisine delights from 7 AM to 11 PM.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <button onClick={() => scrollToSection('hero')} className="footer-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="footer-link">About Us</button>
            <button onClick={() => scrollToSection('menu')} className="footer-link">Menu</button>
            <button onClick={() => scrollToSection('best-sellers')} className="footer-link">Best Sellers</button>
            <button onClick={() => scrollToSection('gallery')} className="footer-link">Gallery</button>
            <button onClick={() => scrollToSection('reservation')} className="footer-link">Reserve Table</button>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-item">
              <Phone size={18} />
              <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>{restaurantInfo.hours}</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Pedda Waltair, Visakhapatnam</span>
            </div>
          </div>

          <div className="footer-hours">
            <h4 className="footer-heading">Operating Hours</h4>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday - Sunday</span>
                <span className="hours-time">7:00 AM - 11:00 PM</span>
              </div>
              <div className="hours-highlight">
                Late-Night Dining Available
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 ZERO - The Resto Cafe. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Crafted with passion for food lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
