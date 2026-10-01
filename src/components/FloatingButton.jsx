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

  // ==========================================
  // Toggle Menu
  // ==========================================
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // ==========================================
  // Close Menu with Escape Key
  // ==========================================
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // ==========================================
  // 👋 Emoji Fix (Sabse safe tarika)
  // ==========================================
  const wave = String.fromCodePoint(0x1F44B); // 👋

  // ==========================================
  // SAME MESSAGE
  // ==========================================
  const message = `Hi Avana ${wave} I came across your work and would love to know more about your services.`;

  const whatsappLink = `https://wa.me/919892775834?text=${encodeURIComponent(
    message
  )}`;

  // ==========================================
  // LINKEDIN
  // ==========================================
  const linkedinLink =
    'https://www.linkedin.com/in/aman-tiwari-561217358/';

  // ==========================================
  // INSTAGRAM
  // ==========================================
  const instagramLink =
    'https://www.instagram.com/avanaweb/';

  // ==========================================
  // EMAIL
  // ==========================================
  const emailSubject = `Hi Avana ${wave}`;

  const emailBody = `${message}

Please share more details with me.

Thank you.`;

  const emailLink = `mailto:a@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  // ==========================================
  // CONTACTS
  // ==========================================
const contacts = [
  {
    name: 'WhatsApp',
    href: whatsappLink,
    icon: faWhatsapp,
    external: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aman-tiwari-561217358/',
    icon: faLinkedinIn,
    external: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/avanaweb/',
    icon: faInstagram,
    external: true,
  },
  {
    name: 'Email',
    href: 'mailto:Tiwark45@gmail.com',
    icon: faEnvelope,
    external: false,
  },
  {
    name: 'Call',
    href: 'tel:+919892775834',
    icon: faPhone,
    external: false,
  },
];

  // ==========================================
  // RETURN
  // ==========================================
  return (
    <div
      className={`fab-container ${
        isOpen ? 'fab-container--open' : ''
      }`}
    >
      {/* ======================================
          CONTACT MENU
      ====================================== */}
      <div className="fab-menu">
        {contacts.map((contact, index) => (
          <a
            key={contact.name}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={
              contact.external
                ? 'noopener noreferrer'
                : undefined
            }
            className="fab-item"
            aria-label={contact.name}
            title={contact.name}
            style={{
              '--fab-delay': `${index * 0.06}s`,
            }}
          >
            <FontAwesomeIcon icon={contact.icon} />
          </a>
        ))}
      </div>

      {/* ======================================
          MAIN FLOATING BUTTON
      ====================================== */}
      <button
        type="button"
        className={`fab-toggle ${
          isOpen ? 'fab-toggle--active' : ''
        }`}
        onClick={toggleMenu}
        aria-label={
          isOpen ? 'Close contact menu' : 'Open contact menu'
        }
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faPaperPlane}
        />
      </button>
    </div>
  );
};

export default FloatingButton;