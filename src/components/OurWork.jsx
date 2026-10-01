import React, { useEffect, useRef } from 'react';
import './OurWork.css';

/* ✅ Import local images */
import imgRealEstate from '../image/realestate.jpg';
import imgPhotography from '../image/fusionproduct.jpg';
import imgRestaurant from '../image/mehfil-e-khaas.jpg';
import imgBusiness from '../image/sudharshaninfra.jpg';

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
      title: 'Real Estate Website',
      description:
        'Modern and responsive real estate website for Thakarshi Lifespaces to showcase residential projects, ongoing developments, completed projects and property offerings.',
      image: imgRealEstate, // ✅ Local image
      link: 'https://thakarshilifespaces.com/',
    },
    {
      number: '02',
      title: 'Photography Website',
      description:
        'A visually engaging photography platform crafted to showcase stunning portfolios, professional photoshoots, creative services and unforgettable moments.',
      image: imgPhotography, // ✅ Local image
      link: 'https://fusionstoryproduction.com/',
    },
    {
      number: '03',
      title: 'Restaurant Website',
      description:
        'A complete restaurant experience with an interactive menu, events, gallery, customer reviews and an easy-to-use table reservation system designed to turn visitors into bookings.',
      image: imgRestaurant, // ✅ Local image
      link: 'https://restaurant-gules-sigma-23.vercel.app/',
    },
    {
      number: '04',
      title: 'Business Website',
      description:
        'A modern and responsive website for Sudarshan Infra, designed to showcase its services, projects, company information and professional presence online.',
      image: imgBusiness, // ✅ Local image
      link: 'https://sudharshan-infra.onrender.com/',
    },
  ];

  /* ✅ Open the project in a new tab */
  const openProject = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

          <div
            className="work-card"
            key={index}
            onClick={() => openProject(project.link)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProject(project.link);
              }
            }}
            aria-label={`Open ${project.title} live project`}
          >

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

                {/* ✅ Always visible now */}
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