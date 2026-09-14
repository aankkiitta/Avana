import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const fileInputRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);   // 🔥 Success popup

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    text: '',
    rating: 0,
  });

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoError, setPhotoError] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  // ===============================
  // FETCH REVIEWS
  // ===============================
  useEffect(() => {
    const fetchReviews = async () => {
      try {
      const response = await fetch('https://avana-gogk.onrender.com/api/reviews');
        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews);
          if (data.reviews.length > 0) setActiveIndex(0);
        }
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // ===============================
  // BODY SCROLL LOCK
  // ===============================
  useEffect(() => {
    if (isModalOpen || showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen, showPopup]);

  // ===============================
  // AUTO CLOSE POPUP (4 sec)
  // ===============================
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // ===============================
  // SCROLL REVEAL
  // ===============================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-visible');
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

  // ===============================
  // CARD CLICK
  // ===============================
  const handleCardClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  // ===============================
  // FORM HANDLERS
  // ===============================
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingClick = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPhotoError('Please upload an image file (JPG, PNG)');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setPhotoError('Image should be less than 5MB');
      return;
    }

    setPhotoError('');
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e) => {
    e.stopPropagation();
    setPhoto(null);
    setPhotoPreview(null);
    setPhotoError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ===============================
  // SUBMIT REVIEW
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.rating === 0) {
      alert('Please select a rating');
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('role', formData.role);
      data.append('review', formData.text);
      data.append('rating', formData.rating);

      if (photo) data.append('photo', photo);
const response = await fetch('https://avana-gogk.onrender.com/api/reviews', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit review');
      }

      setReviews((prevReviews) => [result.review, ...prevReviews]);
      setActiveIndex(0);

      resetForm();
      setIsModalOpen(false);
      setShowPopup(true);   // 🔥 Popup show
    } catch (error) {
      console.error('❌ Review submission error:', error);
      alert(error.message || 'Something went wrong. Please try again.');
    }
  };

  // ===============================
  // RESET FORM
  // ===============================
  const resetForm = () => {
    setFormData({ name: '', role: '', text: '', rating: 0 });
    setPhoto(null);
    setPhotoPreview(null);
    setPhotoError('');
    setHoveredStar(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ===============================
  // CLOSE MODAL
  // ===============================
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // ===============================
  // 🔥 CURVE STYLE
  // ===============================
  const getCardStyle = (index) => {
    const total = reviews.length;
    if (total === 0) return {};

    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const base = 'translate(-50%, -50%)';

    if (Math.abs(offset) > 3) {
      return {
        transform: `${base} translateX(${offset > 0 ? 700 : -700}px) scale(0.3)`,
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;

    const xGap = isMobile ? 100 : isTablet ? 130 : 160;
    const yGap = isMobile ? 12 : isTablet ? 15 : 20;
    const rotGap = isMobile ? 2 : isTablet ? 3 : 4;
    const scaleGap = 0.1;

    const translateX = offset * xGap;
    const translateY = Math.abs(offset) * yGap;
    const scale = 1 - Math.abs(offset) * scaleGap;
    const rotate = offset * rotGap;
    const zIndex = 10 - Math.abs(offset);
    const opacity = 1 - Math.abs(offset) * 0.18;

    return {
      transform: `${base} translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      pointerEvents: 'auto',
      transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
    };
  };

  const displayedRating = hoveredStar || formData.rating;

  const nameInitial = formData.name.trim()
    ? formData.name.trim()[0].toUpperCase()
    : '?';

  return (
    <section className="testimonials" ref={sectionRef}>

      {/* Header */}
      <div className="testimonials-header">
        <p className="testimonials-tag">Testimonials</p>
        <h2 className="testimonials-heading">
          What our <span className="highlight">clients</span> <br />
          say about our <em>work</em>
        </h2>
        <div className="testimonials-rating">
          <span className="rating-label">Client feedback</span>
        </div>
      </div>

      {/* Curve Carousel */}
      <div className="curve-carousel">
        <div className="curve-track">
          {loading ? (
            <p className="testimonials-loading">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="testimonials-empty">
              No reviews yet. Be the first to share your experience!
            </p>
          ) : (
            reviews.map((review, index) => {
              const reviewText = review.review || review.text || review.content || '';
              const userName = review.name || review.username || 'Anonymous';
              const userRole = review.role || review.company || 'Client';
              const userRating = Number(review.rating) || 0;
              const userPhoto = review.photo || review.image || null;
              const safePhotoUrl = userPhoto
                ? String(userPhoto).replace(/^http:\/\//i, 'https://')
                : null;

              return (
                <div
                  key={review.id || index}
                  className={`review-card ${activeIndex === index ? 'active' : ''}`}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="review-quote">"</div>

                  <p className="review-text">{reviewText || 'No review text'}</p>

                  <div className="review-footer">
                    {safePhotoUrl ? (
                      <img src={safePhotoUrl} alt={userName} className="review-avatar-img" />
                    ) : (
                      <div className="review-avatar-initial" style={{ backgroundColor: '#9ab829' }}>
                        {userName.charAt(0).toUpperCase() || '?'}
                      </div>
                    )}

                    <div className="review-user">
                      <p className="review-name">{userName}</p>
                      <p className="review-role">{userRole}</p>
                      <div className="review-stars">
                        {Array(userRating).fill('★').join('')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="reviews-cta">
        <button
          className="reviews-cta-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Write Your Review
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* REVIEW MODAL */}
      {isModalOpen && (
        <div className="review-modal-overlay" onClick={closeModal}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button className="review-modal-close" onClick={closeModal} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="review-modal-header">
              <p className="review-modal-tag">Share Your Experience</p>
              <h3 className="review-modal-title">Write a Review</h3>
              <p className="review-modal-subtitle">
                Your feedback helps us improve and helps others make better decisions.
              </p>
            </div>

            <form className="review-modal-form" onSubmit={handleSubmit}>

              {/* PHOTO UPLOAD */}
              <div className="review-modal-photo-section">
                <label className="review-modal-photo-label">Your Photo</label>
                <div className="review-modal-photo-wrap">
                  <div className="review-modal-avatar" onClick={() => fileInputRef.current.click()}>
                    {photoPreview ? (
                      <img src={photoPreview} alt="Preview" />
                    ) : (
                      <div className="review-modal-avatar-initial" style={{ backgroundColor: '#9ab829' }}>
                        {nameInitial}
                      </div>
                    )}
                    <div className="review-modal-avatar-overlay">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                    </div>
                  </div>

                  <div className="review-modal-photo-info">
                    <button type="button" className="review-modal-photo-btn" onClick={() => fileInputRef.current.click()}>
                      {photoPreview ? 'Change Photo' : 'Upload Photo'}
                    </button>
                    {photoPreview && (
                      <button type="button" className="review-modal-photo-remove" onClick={handleRemovePhoto}>
                        Remove
                      </button>
                    )}
                    <p className="review-modal-photo-hint">JPG or PNG · Max 5MB</p>
                  </div>
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="review-modal-photo-input" id="review-photo" />
                {photoError && <p className="review-modal-photo-error">{photoError}</p>}
              </div>

              {/* Star Rating */}
              <div className="review-modal-group">
                <label>Your Rating</label>
                <div className="review-modal-stars" onMouseLeave={() => setHoveredStar(0)}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={`review-star-btn ${displayedRating >= value ? 'active' : ''}`}
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => setHoveredStar(value)}
                      aria-label={`Rate ${value} star`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Role */}
              <div className="review-modal-row">
                <div className="review-modal-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleFormChange} required />
                </div>
                <div className="review-modal-group">
                  <label htmlFor="role">Role / Company</label>
                  <input type="text" id="role" name="role" placeholder="Founder, XYZ" value={formData.role} onChange={handleFormChange} />
                </div>
              </div>

              {/* Review Text */}
              <div className="review-modal-group">
                <label htmlFor="text">Your Review</label>
                <textarea id="text" name="text" placeholder="Tell us about your experience..." rows="4" value={formData.text} onChange={handleFormChange} required></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="review-modal-submit">
                Submit Review
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 🔥 SUCCESS POPUP */}
      {showPopup && (
        <div className="review-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="review-popup" onClick={(e) => e.stopPropagation()}>
            <button className="review-popup-close" onClick={() => setShowPopup(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="review-popup-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 className="review-popup-title">Review Submitted!</h3>
            <p className="review-popup-text">
              Thank you for sharing your experience. Your review helps us improve and helps others make better decisions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;