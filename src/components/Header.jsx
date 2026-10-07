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

  // 🔥 Templates & Pricing added
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Templates', href: '#templates' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // 🔥 WhatsApp Link with full pre-filled message
// WhatsApp Message
const whatsappMessage =
  "Hi Avana 👋 I came across your work and would love to know more about your services.";

// WhatsApp Link
const whatsappLink =
  `https://api.whatsapp.com/send?phone=919892775834&text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-inner">

        {/* Logo */}
        <a href="/" className="logo-container" onClick={closeMenu}>
<img
  src={logoImg}
  alt="Avana"
  className="logo-image"
  width="236"
  height="105"
  fetchPriority="high"
  decoding="async"
/>
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
{/* Mobile Logo */}
<img
  src={logoImg}
  alt="Avana"
  className="mobile-logo-image"
  width="236"
  height="105"
  decoding="async"
/>
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