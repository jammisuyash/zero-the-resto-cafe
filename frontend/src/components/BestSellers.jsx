import React from 'react';
import { bestSellers } from '../data/mockMenuData';
import { Star, TrendingUp, Flame } from 'lucide-react';

const BestSellers = () => {
  const getBadgeIcon = (badge) => {
    switch(badge) {
      case 'Signature': return <Star size={14} />;
      case 'Popular': return <TrendingUp size={14} />;
      case 'Spicy': return <Flame size={14} />;
      default: return <Star size={14} />;
    }
  };

  return (
    <section id="best-sellers" className="bestsellers-section">
      <div className="container-section">
        <div className="bestsellers-header">
          <h2 className="section-title">
            Our <span className="text-accent">Best Sellers</span>
          </h2>
          <p className="section-subtitle">
            The dishes that keep our customers coming back
          </p>
        </div>

        <div className="bestsellers-grid">
          {bestSellers.map((item, index) => (
            <div key={index} className="bestseller-card">
              <div className="bestseller-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="bestseller-image"
                  loading="lazy"
                />
                <div className="bestseller-badge">
                  {getBadgeIcon(item.badge)}
                  <span>{item.badge}</span>
                </div>
              </div>
              
              <div className="bestseller-content">
                <h3 className="bestseller-name">{item.name}</h3>
                <p className="bestseller-description">{item.description}</p>
                
                <div className="bestseller-footer">
                  <span className="bestseller-price">₹{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
