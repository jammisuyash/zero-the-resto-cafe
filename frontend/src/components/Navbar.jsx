import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Best Sellers', id: 'best-sellers' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reserve', id: 'reservation' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-nav">
        <div className="nav-brand" onClick={() => scrollToSection('hero')}>
          <span className="brand-zero">ZERO</span>
          <span className="brand-subtitle">The Resto Cafe</span>
        </div>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a href="tel:07893897894" className="nav-phone">
            <Phone size={18} />
            <span>07893897894</span>
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="nav-mobile">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-mobile-link"
            >
              {link.name}
            </button>
          ))}
          <a href="tel:07893897894" className="nav-mobile-phone">
            <Phone size={18} />
            Call Now: 07893897894
          </a>
          <div className="nav-mobile-hours">
            <Clock size={18} />
            Open 7 AM - 11 PM
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
