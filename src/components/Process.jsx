// Process.jsx
import React from 'react';
import './Process.css';

const Process = () => {
  const services = [
    {
      id: '01',
      category: 'Design',
      title: 'Website Design',
      description:
        'Modern, responsive, and visually engaging websites that reflect your brand and create a strong first impression.',
      icon: 'fa-solid fa-pen-ruler',
    },
    {
      id: '02',
      category: 'Development',
      title: 'Web Development',
      description:
        'Fast, functional, and reliable websites built with modern technologies to bring your ideas to life.',
      icon: 'fa-solid fa-code',
    },
    {
      id: '03',
      category: 'E-Commerce',
      title: 'E-Commerce Solutions',
      description:
        'Smooth and user-friendly online stores that make it easy for customers to explore, shop, and connect with your brand.',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      id: '04',
      category: 'Custom',
      title: 'Custom Web Solutions',
      description:
        'Have a unique requirement? We create custom web solutions tailored to your business, idea, and specific goals.',
      icon: 'fa-solid fa-puzzle-piece',
    },
    {
      id: '05',
      category: 'Experience',
      title: 'UI/UX Design',
      description:
        'Clean, intuitive, and engaging interfaces that make your website simple to navigate and enjoyable to use.',
      icon: 'fa-solid fa-wand-magic-sparkles',
    },
    {
      id: '06',
      category: 'Performance',
      title: 'Website Optimization',
      description:
        'Better speed, responsiveness, and performance — creating a smoother experience across all devices.',
      icon: 'fa-solid fa-bolt',
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        {/* HEADER */}
        <header className="process-header">
          <h1>Creative Websites. Built for Your Vision.</h1>
          <div className="header-text">
            <p>
              Looking for a freelancer to{' '}
              <span className="highlight">design or develop</span> your website?
            </p>
            <p>You're in the right place.</p>
            <p>
              At <span className="highlight">AVANA</span>, we create modern,
              responsive, and customized websites that turn your ideas into
              meaningful digital experiences.
            </p>
            <p>
              From business websites and portfolios to e-commerce and custom web
              solutions, we build with{' '}
              <span className="highlight">
                creativity, technology, and purpose
              </span>
              .
            </p>
            <p>
              Don't just build a website.{' '}
              <span className="highlight">
                Build your digital presence with AVANA.
              </span>
            </p>
          </div>
        </header>

        {/* GRID — 3 × 2 */}
        <div className="layout-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="icon-box">
                <i className={service.icon}></i>
              </div>
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