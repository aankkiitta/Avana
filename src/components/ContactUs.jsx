import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faCircleCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  // 🔥 Success popup state
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
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

  // 🔥 Auto-close popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // 🔥 Escape key se popup close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowPopup(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/atulchauhann125@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact Form Message - ${formData.subject}`,
            _template: 'table',
          }),
        }
      );

      const data = await response.json();
      console.log('FormSubmit response:', data);

      if (response.ok) {
        // 🔥 Show custom success popup
        setShowPopup(true);

        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('Unable to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>

      {/* ─── FULL WIDTH HEADER WITH IMAGE ─── */}
      <div className="contact-header">

        {/* TOP CURVE */}
        <div className="contact-header-top-curve">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0 L1440,0 L1440,50 C1200,90 960,10 720,50 C480,90 240,10 0,70 Z"
              fill="#f5f3ef"
            />
          </svg>
        </div>

        <div className="contact-header-overlay"></div>

        <div className="contact-header-content">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-subheading">
          Have a project in mind? Let’s discuss your idea and build
  something great together.
          </p>
        </div>

        {/* BOTTOM CURVE */}
        <div className="contact-header-curve">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,80 C320,140 480,140 720,100 C960,60 1120,30 1440,80 L1440,120 L0,120 Z"
              fill="#f5f3ef"
            />
          </svg>
        </div>

      </div>

      {/* ─── CARD OVERLAPPING THE CURVE ─── */}
      <div className="contact-card-wrap">
        <div className="contact-card">

          {/* LEFT: Get in Touch */}
          <div className="contact-left">
            <h3 className="contact-left-title">Get in touch</h3>
            <p className="contact-left-desc">
            Let’s start a conversation and find the right digital solution for your business.
            </p>

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="contact-info-text">
                <h4>Based In</h4>
                <p>Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info-text">
                <h4>Email Us</h4>
                <p>ankitachauhan135@gmail.com</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-info-text">
                <h4>Call Us</h4>
                <p>Phone: +6221 2002 2002<br />Fax: +6221 2002 2003</p>
              </div>
            </div>

           
          </div>

          {/* RIGHT: Send us a message */}
          <div className="contact-right">
            <h3 className="contact-right-title">Send us a message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                <FontAwesomeIcon icon={faPaperPlane} className="contact-submit-icon" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 🔥 SUCCESS POPUP */}
      {showPopup && (
        <div
          className="contact-popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="contact-popup"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="contact-popup-close"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {/* Success Icon */}
            <div className="contact-popup-icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>

            {/* Message */}
            <h3 className="contact-popup-title">Message Sent!</h3>
            <p className="contact-popup-text">
              Thank you for reaching out. We've received your message
              and will get back to you within 24 hours.
            </p>

            {/* Progress bar */}
            <div className="contact-popup-progress">
              <div className="contact-popup-progress-fill"></div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ContactUs;