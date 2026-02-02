import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/mockMenuData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container-section">
        <div className="contact-header">
          <h2 className="section-title">
            Visit <span className="text-accent">Us</span>
          </h2>
          <p className="section-subtitle">
            Find us, call us, or just drop by
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={28} />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Location</h3>
                <p className="contact-text">{restaurantInfo.address}</p>
                <a 
                  href={restaurantInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={28} />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Call Us</h3>
                <a href={`tel:${restaurantInfo.phone}`} className="contact-phone">
                  {restaurantInfo.phone}
                </a>
                <p className="contact-text-sm">
                  For reservations, takeaway orders, or any queries
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={28} />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Operating Hours</h3>
                <p className="contact-hours">{restaurantInfo.hours}</p>
                <p className="contact-text-sm late-night-badge">
                  Late-night dining available
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <ExternalLink size={28} />
              </div>
              <div className="contact-details">
                <h3 className="contact-title">Order Online</h3>
                <a 
                  href={restaurantInfo.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Order via Zomato
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
