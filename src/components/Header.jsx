import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

// Optimized logo
import logoImg from '../image/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Templates', href: '#templates' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappMessage =
    'Hi Avana 👋 I came across your work and would love to know more about your services.';

  const whatsappLink =
    `https://api.whatsapp.com/send?phone=919892775834&text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-inner">

        {/* =========================
            DESKTOP LOGO
        ========================== */}
        <a
          href="/"
          className="logo-container"
          onClick={closeMenu}
          aria-label="Avana Home"
        >
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

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* =========================
            DESKTOP ACTIONS
        ========================== */}
        <div className="header-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            aria-label="Contact Avana on WhatsApp"
          >
            <span className="contact-btn-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>

            <span className="contact-btn-text">
              Say Hello
            </span>
          </a>
        </div>

        {/* =========================
            MOBILE HAMBURGER
        ========================== */}
        <button
          type="button"
          className={`hamburger ${
            isMenuOpen ? 'hamburger--active' : ''
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
          />
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? 'mobile-menu--open' : ''
        }`}
      >
        <div className="mobile-menu-top">

          {/* Mobile Logo */}
          <a
            href="/"
            className="mobile-menu-logo"
            onClick={closeMenu}
            aria-label="Avana Home"
          >
            <img
              src={logoImg}
              alt="Avana"
              className="mobile-logo-image"
              width="236"
              height="105"
              decoding="async"
            />
          </a>

          {/* Close Button */}
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                animationDelay: `${0.1 + i * 0.06}s`,
              }}
            >
              <span>{link.label}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                />

                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </nav>

        {/* =========================
            MOBILE ACTION
        ========================== */}
        <div className="mobile-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            onClick={closeMenu}
            aria-label="Contact Avana on WhatsApp"
          >
            <span className="contact-btn-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>

            <span className="contact-btn-text">
              Say Hello
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;