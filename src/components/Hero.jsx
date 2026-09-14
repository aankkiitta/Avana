import React, { useEffect, useRef } from 'react';
import './Hero.css';
import portraitImg from '../image/freelance_founders_tight.svg';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    if (!hero || !image) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      image.style.transform = `translate(${x}px, ${y}px)`;   // 🔥 scale hata diya
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic buttons
  const handleMagneticMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMagneticLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  return (
    <section className="hero" ref={heroRef}>

      {/* LEFT SIDE - Image */}
      <div className="hero-left animate-blur-in">
        <img
          ref={imageRef}
          src={portraitImg}
          alt="Freelance Web Developers"
          className="hero-image"
        />

        <div className="name-labels">
          <div className="name-card animate-fade-up-delay-1">
            <p className="name">Aman Tiwari</p>
            <p className="role">Founder & Developer</p>
          </div>
          <div className="name-card animate-fade-up-delay-2">
            <p className="name">Ankita Chauhan</p>
            <p className="role">Developer</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Content */}
      <div className="hero-right">

        {/* 🔥 Blur edge hataya */}

        <div className="hero-tagline animate-blur-in-delay">
          <span className="hero-tagline-line"></span>
          <span className="hero-small-text">Build • Develop • Grow</span>
        </div>

        <h1 className="hero-heading">
          We Turn <em>Ideas Into Websites.</em>
        </h1>

        <div className="hero-divider"></div>

        <p className="hero-description animate-blur-in-delay-2">
          We create business websites, e-commerce stores, web applications, and custom digital solutions designed to help your business build a strong online presence and grow.
        </p>

   <div className="hero-cta-buttons">
  <button
    className="cta-btn btn-dark animate-blur-in-delay-3"
    onMouseMove={handleMagneticMove}
    onMouseLeave={handleMagneticLeave}
    onClick={() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <span>Start a Project</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </button>

<button
  className="cta-btn btn-light animate-blur-in-delay-4"
  onMouseMove={handleMagneticMove}
  onMouseLeave={handleMagneticLeave}
  onClick={() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
>
  <span>View Our Work</span>
</button>
</div>

      </div>

    </section>
  );
};

export default Hero;