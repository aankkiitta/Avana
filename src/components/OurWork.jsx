import React, { useEffect, useRef } from 'react';
import './OurWork.css';

const OurWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('work-visible');
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

  const projects = [
    {
      number: '01',
      title: 'Business Website',
      description:
        'Professional and responsive websites for businesses, shops and services to build a strong online presence.',
      image:
        'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
      link: 'https://example.com/project-1',
    },
    {
      number: '02',
      title: 'E-Commerce Website',
      description:
        'Online stores with product pages, shopping cart and a simple experience for your customers.',
      image:
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      link: 'https://example.com/project-2',
    },
    {
      number: '03',
      title: 'Web Application',
      description:
        'Custom web applications built according to your idea, business needs and required features.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      link: 'https://example.com/project-3',
    },
    {
      number: '04',
      title: 'Portfolio Website',
      description:
        'Clean and modern portfolio websites to showcase your work, skills, projects and personal brand.',
      image:
        'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80',
      link: 'https://example.com/project-4',
    },
  ];

  return (
  <section className="work" id="work" ref={sectionRef}>

      <div className="work-header">

        <div className="work-header-left">

          <p className="work-tag">
            Our Work
          </p>

          <h2 className="work-heading">
            WE BUILD <br />
            <span className="work-heading-accent">
              WEBSITES & WEB APPS
            </span>
          </h2>

        </div>

        <a href="#contact" className="work-view-all">
          Start a Project

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
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>

        </a>

      </div>

      <div className="work-cards">

        {projects.map((project, index) => (

          <div className="work-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="work-card-bg"
            />

            <div className="work-card-overlay"></div>

            <div className="work-card-corner"></div>

            <div className="work-card-content">

              <span className="work-card-number">
                {project.number}
              </span>

              <div className="work-card-bottom">

                <h3 className="work-card-title">
                  {project.title}
                </h3>

                <p className="work-card-desc">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card-live"
                  onClick={(e) => e.stopPropagation()}
                >

                  <span className="work-card-live-dot"></span>

                  View Live Project

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>

                </a>

              </div>

              <div className="work-card-arrow">

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default OurWork;