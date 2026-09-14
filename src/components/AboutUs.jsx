import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
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

  return (
    <section className="about" ref={sectionRef}>

      {/* Top: Tag + Big Heading */}
      <div className="about-top">

        <div className="about-tag-wrap">
          <span className="about-tag-line"></span>
          <p className="about-tag">About Us</p>
        </div>

        <h2 className="about-heading">

          <span className="line-mask">
            <span className="line-content">
              We're a small team of
            </span>
          </span>

          <br className="about-br" />

          <span className="line-mask">
            <span className="line-content line-delay-1">
              <em>designers</em>,
            </span>
          </span>{' '}

          <span className="line-mask">
            <span className="line-content line-delay-2">
              <em>developers</em>
            </span>
          </span>{' '}

          <span className="line-mask">
            <span className="line-content line-delay-3">
              &amp; <em>problem solvers</em>
            </span>
          </span>

        </h2>
      </div>


      {/* Middle: Intro */}
      <div className="about-intro">

        <p className="about-intro-text">
          We are freelance web developers who build
          <strong> websites and web applications</strong> for
          businesses, startups and individuals. We focus on
          understanding what you need and turning your idea into
          something that actually works.
        </p>

      </div>


      {/* Bottom: 2x2 Grid */}
      <div className="about-grid">

        <p className="about-para">
          We started with a simple idea — build websites that
          look good, work smoothly and actually help our clients.
          Instead of using the same template for everyone, we
          create each project according to the client's
          requirements.
        </p>

        <p className="about-para">
          From business websites and portfolios to e-commerce
          stores and custom web applications, we work on different
          types of projects. We choose the right technologies
          based on what the project actually needs.
        </p>

        <p className="about-para">
          As a small team, we work closely with our clients
          throughout the project. From the first discussion and
          design to development and launch, we keep things simple,
          clear and easy to understand.
        </p>

        <p className="about-para">
          Every project is different, and that's what we enjoy
          about our work. Whether you already have a complete idea
          or just know what you want to achieve, we're here to
          help turn it into a working website or web application.
        </p>

      </div>

    </section>
  );
};

export default AboutUs;