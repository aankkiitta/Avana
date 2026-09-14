import React from 'react';
import './Hero.css';
import portraitImg from '../image/main.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top animate-fade-down">
        <span className="wave">👋</span>
        <p>my name is Bazil and I am a freelance</p>
      </div>

      <div className="hero-main">
        <div className="title-row solid-text animate-slide-up">
          <h1>Webdesigner</h1>
          <div className="arrow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        <div className="title-row outline-text-container">
          <h1 className="outline-text animate-slide-up-delay">& Photographer</h1>

          <div className="portrait-wrapper animate-fade-in">
            <img
              src={portraitImg}
              alt="Bazil Portrait"
              className="portrait-svg"
            />

            <div className="hero-cta-buttons">
              <button className="cta-btn btn-dark">
                You need a designer
              </button>
              <button className="cta-btn btn-light">
                You need a photographer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer animate-fade-up">
        <p className="location">based in Paris, France.</p>
        <div className="client-logos">
          <span>audible</span>
          <span>Dailymotion</span>
          <span>OLYMPIA</span>
          <span>Warner Chappell</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;