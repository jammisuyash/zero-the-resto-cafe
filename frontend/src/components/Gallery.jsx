import React, { useState } from 'react';
import { galleryImages } from '../data/mockMenuData';
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container-section">
        <div className="gallery-header">
          <h2 className="section-title">
            <span className="text-accent">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the ZERO experience
          </p>
        </div>

        <div className="gallery-filters">
          <button
            className={`gallery-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`gallery-filter-btn ${filter === 'food' ? 'active' : ''}`}
            onClick={() => setFilter('food')}
          >
            Food
          </button>
          <button
            className={`gallery-filter-btn ${filter === 'ambience' ? 'active' : ''}`}
            onClick={() => setFilter('ambience')}
          >
            Ambience
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.url} 
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <ImageIcon size={32} />
                <p className="gallery-caption">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
