import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock reservation submission
    console.log('Reservation Data:', formData);
    
    toast.success(`Table reserved for ${formData.guests} guests on ${formData.date} at ${formData.time}! We'll call you shortly.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="reservation-section">
      <div className="container-section">
        <div className="reservation-content">
          <div className="reservation-info">
            <h2 className="section-title">
              Reserve Your <span className="text-accent">Table</span>
            </h2>
            <p className="reservation-description">
              Planning a late-night feast or a cozy dinner? Book your table 
              in advance and we'll have everything ready for you.
            </p>

            <div className="reservation-features">
              <div className="reservation-feature">
                <div className="feature-icon-circle">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Quick Confirmation</h4>
                  <p>Instant booking confirmation via call</p>
                </div>
              </div>
              
              <div className="reservation-feature">
                <div className="feature-icon-circle">
                  <Users size={24} />
                </div>
                <div>
                  <h4>Group Friendly</h4>
                  <p>Perfect for friends, family, and dates</p>
                </div>
              </div>
              
              <div className="reservation-feature">
                <div className="feature-icon-circle">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Call Anytime</h4>
                  <p>Prefer to call? Ring us at 07893897894</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reservation-form-wrapper">
            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone size={18} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter email (optional)"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    <Calendar size={18} />
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-input"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    <Clock size={18} />
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-input"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests" className="form-label">
                  <Users size={18} />
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare size={18} />
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Any special requests or dietary requirements?"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">
                Reserve Table
              </button>
              
              <p className="form-note">
                * We'll call you to confirm your reservation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
