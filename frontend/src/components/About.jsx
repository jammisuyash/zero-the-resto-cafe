import React from 'react';
import { Coffee, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Multi-Cuisine Paradise',
      description: 'From classic burgers to fusion bowls, we serve what you crave'
    },
    {
      icon: Clock,
      title: 'Late-Night Friendly',
      description: 'Open until 11 PM for your midnight hunger pangs'
    },
    {
      icon: Users,
      title: 'Built for You',
      description: 'Perfect spot for students, friends, and food lovers'
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'Fresh ingredients, bold flavors, zero compromise'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container-section">
        <div className="about-header">
          <h2 className="section-title">
            Welcome to <span className="text-accent">ZERO</span>
          </h2>
          <p className="section-subtitle">
            Where Comfort Food Meets Bold Flavors
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <p className="about-text">
              Born from a simple idea: create a place where late-night cravings 
              are not just satisfied, but celebrated. <strong>ZERO - The Resto Cafe</strong> is 
              your go-to destination for indulgent comfort food that hits different.
            </p>
            <p className="about-text">
              Whether it's a 2 AM burger craving, a cozy coffee date, or a squad 
              hangout over loaded nachos and wings, we've got you covered. Our 
              extensive multi-cuisine menu brings together the best of everything 
              - pizzas, wraps, rice bowls, Chinese favorites, and desserts that'll 
              make you come back for more.
            </p>
            <p className="about-text-highlight">
              At ZERO, every dish is crafted with passion, served with style, 
              and priced for you to enjoy every single day.
            </p>
          </div>

          <div className="about-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
