import React from 'react';
import './Hero.css';

const Hero = () => {
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
    <section className="hero">
      <div className="hero-inner">

        <h1 className="hero-heading">
          <span className="line-muted">Think beyond ordinary.</span>
          <span className="line-muted">Design with purpose.</span>
          <span className="line-muted">Build with precision.</span>
          <span className="line-dark">
            Grow with AVANA<span className="dot">.</span>
          </span>
        </h1>

        <div className="hero-cta-buttons">
          <button
            className="cta-btn btn-dark"
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
            className="cta-btn btn-light"
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