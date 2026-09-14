import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faXmark,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import './FloatingButton.css';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const contacts = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/33612345678',
      icon: faWhatsapp,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-tiwari-561217358/',
      icon: faLinkedinIn,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/avanaweb/',
      icon: faInstagram,
    },
    {
      name: 'Email',
      href: 'mailto:a@gmail.com',
      icon: faEnvelope,
    },
    {
      name: 'Call',
      href: 'tel:+33612345678',
      icon: faPhone,
    },
  ];

  return (
    <div className={`fab-container ${isOpen ? 'fab-container--open' : ''}`}>

      <div className="fab-menu">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="fab-item"
            aria-label={contact.name}
            style={{ '--fab-delay': `${index * 0.06}s` }}
          >
            <FontAwesomeIcon icon={contact.icon} />
          </a>
        ))}
      </div>

      <button
        className={`fab-toggle ${isOpen ? 'fab-toggle--active' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faPaperPlane} />
      </button>
    </div>
  );
};

export default FloatingButton;