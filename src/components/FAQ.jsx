import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-visible');
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
const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'A simple business website usually takes 1–3 weeks. E-commerce websites and custom full-stack web applications can take 3–8 weeks depending on the features and complexity. We discuss the timeline clearly before starting the project.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'The cost depends on the type of website, features, design, and overall project requirements. After understanding your needs, we provide a clear project-based quote with the work and features included.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We build modern business websites, e-commerce stores, full-stack web applications, landing pages, and custom digital solutions tailored to your business requirements.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL to build fast, responsive, and scalable websites and web applications.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can redesign and modernize your existing website with a better user experience, responsive design, improved performance, and a fresh look while keeping your business goals in focus.',
  },
  {
    question: 'Do you provide support after the website is launched?',
    answer:
      'Yes. We provide post-launch support to help with bug fixes, updates, and any necessary improvements. Ongoing maintenance can also be discussed based on your requirements.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer:
      'Yes. We work remotely with clients and communicate through email, WhatsApp, video calls, or other platforms that are convenient for the project.',
  },
  {
    question: 'How do I start a project with you?',
    answer:
      'Simply get in touch with us through the contact form. Tell us about your idea, business, and requirements, and we will discuss the project, suggest the right approach, and provide the next steps.',
  },
];
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq" ref={sectionRef}>
      <div className="faq-container">

        {/* LEFT: Big Heading */}
        <div className="faq-left">
          <h2 className="faq-heading">FAQ</h2>
          <p className="faq-subtitle">
            Everything you need to know before starting a project with us.
            Can't find your answer? <a href="#contact" className="faq-link">Get in touch</a>.
          </p>
        </div>

        {/* RIGHT: Navy Card with Questions */}
        <div className="faq-right">
          <div className="faq-card">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>

                  <span className="faq-chevron">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div className="faq-answer-wrap">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;