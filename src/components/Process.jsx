// Process.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenRuler,
  faCode,
  faCartShopping,
  faPuzzlePiece,
  faWandMagicSparkles,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import './Process.css';

const Process = () => {
  const services = [
    {
      id: '01',
      category: 'Design',
      title: 'Website Design',
      description:
        'Modern, responsive, and visually engaging websites that reflect your brand and create a strong first impression.',
      icon: faPenRuler,
      variant: 'dark',
    },
    {
      id: '02',
      category: 'Development',
      title: 'Web Development',
      description:
        'Fast, functional, and reliable websites built with modern technologies to bring your ideas to life.',
      icon: faCode,
      variant: 'accent',
    },
    {
      id: '03',
      category: 'E-Commerce',
      title: 'E-Commerce Solutions',
      description:
        'Smooth and user-friendly online stores that make it easy for customers to explore, shop, and connect with your brand.',
      icon: faCartShopping,
      variant: 'dark',
    },
    {
      id: '04',
      category: 'Custom',
      title: 'Custom Web Solutions',
      description:
        'Have a unique requirement? We create custom web solutions tailored to your business, idea, and specific goals.',
      icon: faPuzzlePiece,
      variant: 'light',
    },
    {
      id: '05',
      category: 'Experience',
      title: 'UI/UX Design',
      description:
        'Clean, intuitive, and engaging interfaces that make your website simple to navigate and enjoyable to use.',
      icon: faWandMagicSparkles,
      variant: 'light',
    },
    {
      id: '06',
      category: 'Performance',
      title: 'Website Optimization',
      description:
        'Better speed, responsiveness, and performance — creating a smoother experience across all devices.',
      icon: faBolt,
      variant: 'light',
    },
  ];

  return (
    <section className="process-section">
      <div className="container">

        {/* HEADER */}
        <header className="process-header">
          <span className="process-tag">Our Services</span>

          <h1>
            Creative Websites.
            <br />
            Built for <span className="highlight">Your Vision.</span>
          </h1>

          <p className="process-intro">
            From business websites and portfolios to e-commerce and custom
            web solutions, we build with creativity, technology, and purpose.
          </p>
        </header>

        {/* GRID — 3 × 2 */}
        <div className="layout-grid">
          {services.map((service) => (
            <div
              className={`service-card service-card--${service.variant}`}
              key={service.id}
            >
              {/* Arrow — only on accent variant */}
              {service.variant === 'accent' && (
                <div className="card-arrow">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div className="icon-box">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              {/* Number + Category */}
              <span className="service-num">
                {service.id} — {service.category}
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;