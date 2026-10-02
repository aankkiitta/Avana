import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutBg from '../image/aboutus.png';
import founderImg from '../image/aman1.png';

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll(
      '.about-top, .about-intro, .about-quote, .about-offer, .about-founder'
    );

    items?.forEach((el) => observer.observe(el));

    return () => {
      items?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="about"
      ref={sectionRef}
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay" />

      <div className="about-inner">

        {/* ============ TOP ============ */}
        <div className="about-top">
          <div className="about-tag-wrap">
            <p className="about-tag">Welcome to AVANA</p>
          </div>

          <h2 className="about-heading">
            A freelance studio built for<br />
            <em>modern</em>, <em>responsive</em> &amp; <em>custom</em> websites
          </h2>
        </div>

        {/* ============ INTRO ============ */}
        <div className="about-intro">
          <p className="about-intro-text">
            <strong>AVANA</strong> is a freelance web design and development
            studio focused on creating modern, responsive, and customized
            digital solutions for businesses, startups, and individuals. We
            believe a website should not just look good it should represent
            your brand, connect with your audience, and support your goals.
          </p>
        </div>

        {/* ============ QUOTE + OFFER ============ */}
        <div className="about-split">

          <div className="about-quote">
            <div className="quote-brush">
              <span className="quote-mark quote-mark-open">&ldquo;</span>
              <p className="quote-text">
                From a blank screen.<br />
                To something worth seeing.
              </p>
              <span className="quote-mark quote-mark-close">&rdquo;</span>
            </div>
          </div>

          <div className="about-offer">
            <p className="offer-text">
              <strong>AVANA</strong> offers a range of online solutions, such
              as website design &amp; development, digital marketing, and Web
              app development realizing that the needs of every business
              are distinct and varied. Our goal is to offer our consumers
              high-quality services. We ensure that our customers obtain the
              greatest services possible.
            </p>

            <a href="#contact" className="offer-link">
              Contact us <span className="offer-arrow">→</span>
            </a>
          </div>

        </div>

        {/* ============ FOUNDER ============ */}
        <div className="about-founder">

          <div className="founder-bio">
            <p className="founder-bio-text">
              As a freelance web developer and the founder of{" "}
              <strong>AVANA</strong>, I bring over 2 years of hands-on
              experience in designing and developing modern digital solutions
              for businesses and brands. I specialize in creating responsive,
              high-performance websites that combine thoughtful design,
              seamless functionality, and a strong user experience. From
              transforming an initial idea into a complete digital product to
              handling development and deployment, I focus on delivering
              reliable, scalable, and visually refined solutions that help
              businesses establish a stronger presence online.
            </p>
          </div>

          <div className="founder-image-wrap">
            <div className="founder-image-box">
              <img
                src={founderImg}
                alt="Founder of AVANA"
                className="founder-image"
              />
            </div>
            <h3 className="founder-name">Aman Tiwari</h3>
            <p className="founder-role">Founder &amp; Developer</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;