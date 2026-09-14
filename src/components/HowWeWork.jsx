import React, { useEffect, useRef } from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hww-visible');
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

  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description:
        'We start by understanding your business, goals and vision. Through detailed discussions, we identify what you need and how we can deliver the best solution.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description:
        'We create a detailed roadmap including scope, timeline and deliverables. Every project is planned carefully to ensure smooth execution.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Design & Development',
      description:
        'Our team designs stunning visuals and develops clean, performant code. We keep you updated throughout the process with regular previews.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description:
        'Every project goes through rigorous testing across devices. Once approved, we launch your project and ensure everything runs smoothly.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Support & Growth',
      description:
        "We don't just deliver — we help you grow. From maintenance to improvements, we stay with you as your business evolves.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Ongoing Partnership',
      description:
        'We build long-term relationships with our clients, providing ongoing support and helping your business scale.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="hww" ref={sectionRef}>
      {/* Header */}
      <div className="hww-header">
        <p className="hww-tag">Our Process</p>
        <h2 className="hww-heading">
          How We <span className="hww-heading-accent">Work</span>
        </h2>
        <p className="hww-subtitle">
          From the first conversation to the final launch — here's our
          step-by-step process to bring your ideas to life.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="hww-grid">
        {steps.map((step, index) => (
          <div className="hww-card" key={index}>
            {/* Top: Number + Icon */}
            <div className="hww-card-top">
              <div className="hww-card-icon">{step.icon}</div>
              <span className="hww-card-number">{step.number}</span>
            </div>

            {/* Title */}
            <h3 className="hww-card-title">{step.title}</h3>

            {/* Description */}
            <p className="hww-card-desc">{step.description}</p>

            {/* Corner accent */}
            <div className="hww-card-corner"></div>
          </div>
        ))}
      </div>

  
    </section>
  );
};

export default HowWeWork;