import React, { useState } from 'react';
import { menuCategories } from '../data/mockMenuData';
import { Search, Leaf } from 'lucide-react';
import * as Icons from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, veg, non-veg

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);
  
  const filteredItems = currentCategory?.items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || item.category === filterType;
    return matchesSearch && matchesFilter;
  }) || [];

  return (
    <section id="menu" className="menu-section">
      <div className="container-section">
        <div className="menu-header">
          <h2 className="section-title">
            Our <span className="text-accent">Menu</span>
          </h2>
          <p className="section-subtitle">
            Explore our extensive multi-cuisine offerings
          </p>
        </div>

        <div className="menu-search-bar">
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search for dishes..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filterType === 'veg' ? 'active' : ''}`}
              onClick={() => setFilterType('veg')}
            >
              <Leaf size={16} />
              Veg
            </button>
            <button
              className={`filter-btn ${filterType === 'non-veg' ? 'active' : ''}`}
              onClick={() => setFilterType('non-veg')}
            >
              Non-Veg
            </button>
          </div>
        </div>

        <div className="menu-categories">
          {menuCategories.map((category) => {
            const IconComponent = Icons[category.icon] || Icons.Utensils;
            return (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="menu-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-header">
                  <div className="menu-item-name-wrapper">
                    <span className={`menu-item-badge ${item.category}`}>
                      {item.category === 'veg' ? <Leaf size={12} /> : '🍖'}
                    </span>
                    <h4 className="menu-item-name">{item.name}</h4>
                  </div>
                  {item.badge && (
                    <span className={`menu-badge ${item.badge.toLowerCase().replace(' ', '-')}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-footer">
                  <span className="menu-item-price">₹{item.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No items found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
