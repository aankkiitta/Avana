import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faLaptopCode,
  faCartShopping,
  faPenRuler,
  faMobileScreenButton,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = sectionRef.current;

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      icon: faGlobe,
      title: 'Website Development',
      description:
        'Modern, responsive websites for businesses, portfolios, startups and personal brands.',
      variant: 'dark',
    },
    {
      icon: faLaptopCode,
      title: 'Web Application',
      description:
        'Custom web applications built around your business requirements, workflow and ideas.',
      variant: 'accent',
    },
    {
      icon: faCartShopping,
      title: 'E-Commerce Development',
      description:
        'Complete online stores with products, shopping cart, checkout and essential features.',
      variant: 'dark',
    },
    {
      icon: faPenRuler,
      title: 'Custom Development',
      description:
        'Unique websites and web solutions designed and developed specifically for your needs.',
      variant: 'light',
    },
    {
      icon: faMobileScreenButton,
      title: 'Responsive Design',
      description:
        'Websites that look clean and work smoothly across mobiles, tablets and desktops.',
      variant: 'light',
    },
    {
      icon: faWandMagicSparkles,
      title: 'Website Redesign',
      description:
        'Give your existing website a modern look with better design, performance and user experience.',
      variant: 'light',
    },
  ];

  return (
    <section className="services" ref={sectionRef}>

      {/* Section Header */}
      <div className="services-header">
        <p className="services-tag">What We Do</p>

        <h2 className="services-heading">
          We Build Digital Solutions
          <br />
          That Help Your <span className="highlight">Business</span> Grow
        </h2>

        <p className="services-subheading">
          From simple websites to custom web applications, we build
          digital solutions based on your requirements.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card service-card--${service.variant}`}
          >

            {/* Arrow */}
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

            {/* Icon */}
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>

            <h3 className="service-title">
              {service.title}
            </h3>

            <p className="service-description">
              {service.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;