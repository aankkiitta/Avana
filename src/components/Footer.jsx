import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const footer = footerRef.current;
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const handleTilt = (e) => {
    const icon = e.currentTarget;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.15)`;
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0) scale(1)';
  };

  const socials = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/avanaweb/',
      icon: faInstagram,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aman-tiwari-561217358/',
      icon: faLinkedinIn,
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/33612345678',
      icon: faWhatsapp,
    },
  ];

  return (
    <footer className="footer" ref={footerRef}>

      {/* Top Wave */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z"
            fill="#1c2b4a"
          />
        </svg>
      </div>

      <div className="footer-inner">

        <div className="footer-shimmer"></div>

        {/* Social Icons */}
        <div className="footer-socials">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label={social.name}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseMove={handleTilt}
              onMouseLeave={handleTiltLeave}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Text */}
        <p className="footer-text">
          We are freelance web developers building modern websites
          and custom web applications for businesses, startups and
          individuals. From simple websites to complete web apps,
          we focus on building things that are useful, responsive
          and made according to your requirements.
        </p>

        {/* Logo */}
        <div className="footer-logo">
          <span className="footer-logo-text">AVANA</span>
          <span className="footer-logo-dot">.</span>
        </div>

        {/* Region */}
        <div className="footer-region">
          <span>India</span>
          <span className="footer-region-sep">|</span>
          <span>INR ₹</span>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} AVANA. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;