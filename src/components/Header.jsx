import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import logoImg from '../image/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // 🔥 WhatsApp Link with full pre-filled message
const whatsappLink = "https://wa.me/33612345678?text=Hi%20Avana%20%F0%9F%91%8B%20I%20came%20across%20your%20work%20and%20would%20love%20to%20know%20more%20about%20your%20services.";

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-inner">

        {/* Logo */}
        <a href="/" className="logo-container" onClick={closeMenu}>
          <img src={logoImg} alt="Avana" className="logo-image" />
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* 🔥 Desktop Actions */}
        <div className="header-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <span className="contact-btn-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span className="contact-btn-text">Say Hello</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-top">
          <a href="/" className="mobile-menu-logo" onClick={closeMenu}>
            <img src={logoImg} alt="Avana" className="mobile-logo-image" />
          </a>

          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <span>{link.label}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          ))}
        </nav>

        {/* 🔥 Mobile Actions — Same link */}
        <div className="mobile-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            onClick={closeMenu}
          >
            <span className="contact-btn-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span className="contact-btn-text">Say Hello</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;