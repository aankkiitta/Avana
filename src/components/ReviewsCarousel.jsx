import React, { useState, useEffect, useRef } from 'react';
import './ReviewsCarousel.css';

const ReviewsCarousel = () => {
  const sectionRef = useRef(null);
  const fileInputRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const response = await fetch('http://localhost:5000/api/reviews');
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
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // ===============================
  // SCROLL REVEAL
  // ===============================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rc-visible');
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
  // HANDLERS
  // ===============================
  const handleCardClick = (index) => setActiveIndex(index);

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

      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed');

      setReviews((prev) => [result.review, ...prev]);
      setActiveIndex(0);
      alert('Thank you! Your review has been submitted.');
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error('❌ Review submission error:', error);
      alert(error.message || 'Something went wrong.');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', role: '', text: '', rating: 0 });
    setPhoto(null);
    setPhotoPreview(null);
    setPhotoError('');
    setHoveredStar(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // ===============================
  // GET POSITION CLASS
  // ===============================
  const getPositionClass = (index) => {
    const total = reviews.length;
    if (total === 0) return 'rc-hidden';

    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset < -2 || offset > 2) return 'rc-hidden';

    return `rc-pos-${offset}`;
  };

  const displayedRating = hoveredStar || formData.rating;
  const nameInitial = formData.name.trim()
    ? formData.name.trim()[0].toUpperCase()
    : '?';

  return (
    <section className="rc-section" ref={sectionRef}>
      {/* HEADER */}
      <div className="rc-header">
        <p className="rc-tag">Testimonials</p>
        <h2 className="rc-heading">
          What our <span className="rc-highlight">clients</span> <br />
          say about our <em>work</em>
        </h2>
        <div className="rc-rating">
          <span className="rc-rating-label">Client feedbdfgdgdack</span>
        </div>
      </div>

      {/* CURVE CAROUSEL */}
      <div className="rc-carousel">
        <div className="rc-track">
          {loading ? (
            <p className="rc-loading">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="rc-empty">No reviews yet. Be the first!</p>
          ) : (
            reviews.map((review, index) => {
              const reviewText =
                review.review || review.text || review.content || '';
              const userName =
                review.name || review.username || 'Anonymous';
              const userRole = review.role || review.company || 'Client';
              const userRating = Number(review.rating) || 0;
              const userPhoto = review.photo || review.image || null;
              const safePhotoUrl = userPhoto
                ? String(userPhoto).replace(/^http:\/\//i, 'https://')
                : null;

              const positionClass = getPositionClass(index);

              if (positionClass === 'rc-hidden') return null;

              return (
                <div
                  key={review.id || index}
                  className={`rc-card ${positionClass}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="rc-quote">"</div>
                  <p className="rc-text">{reviewText || 'No review text'}</p>
                  <div className="rc-footer">
                    {safePhotoUrl ? (
                      <img
                        src={safePhotoUrl}
                        alt={userName}
                        className="rc-avatar-img"
                      />
                    ) : (
                      <div
                        className="rc-avatar-initial"
                        style={{ backgroundColor: '#9ab829' }}
                      >
                        {userName.charAt(0).toUpperCase() || '?'}
                      </div>
                    )}
                    <div className="rc-user">
                      <p className="rc-name">{userName}</p>
                      <p className="rc-role">{userRole}</p>
                      <div className="rc-stars">
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

      {/* CTA */}
      <div className="rc-cta">
        <button className="rc-cta-btn" onClick={() => setIsModalOpen(true)}>
          Write Your Review
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="rc-modal-overlay" onClick={closeModal}>
          <div className="rc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rc-modal-close" onClick={closeModal}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="rc-modal-header">
              <p className="rc-modal-tag">Share Your Experience</p>
              <h3 className="rc-modal-title">Write a Review</h3>
              <p className="rc-modal-subtitle">
                Your feedback helps us improve and helps others make better decisions.
              </p>
            </div>

            <form className="rc-modal-form" onSubmit={handleSubmit}>
              <div className="rc-photo-section">
                <label className="rc-photo-label">Your Photo</label>
                <div className="rc-photo-wrap">
                  <div className="rc-photo-avatar" onClick={() => fileInputRef.current.click()}>
                    {photoPreview ? (
                      <img src={photoPreview} alt="Preview" />
                    ) : (
                      <div className="rc-photo-initial" style={{ backgroundColor: '#9ab829' }}>
                        {nameInitial}
                      </div>
                    )}
                    <div className="rc-photo-overlay">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                  <div className="rc-photo-info">
                    <button type="button" className="rc-photo-btn" onClick={() => fileInputRef.current.click()}>
                      {photoPreview ? 'Change Photo' : 'Upload Photo'}
                    </button>
                    {photoPreview && (
                      <button type="button" className="rc-photo-remove" onClick={handleRemovePhoto}>
                        Remove
                      </button>
                    )}
                    <p className="rc-photo-hint">JPG or PNG · Max 5MB</p>
                  </div>
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="rc-photo-input" />
                {photoError && <p className="rc-photo-error">{photoError}</p>}
              </div>

              <div className="rc-group">
                <label>Your Rating</label>
                <div className="rc-stars-input" onMouseLeave={() => setHoveredStar(0)}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={`rc-star-btn ${displayedRating >= value ? 'rc-star-active' : ''}`}
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => setHoveredStar(value)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="rc-row">
                <div className="rc-group">
                  <label htmlFor="rc-name">Your Name</label>
                  <input type="text" id="rc-name" name="name" placeholder="John Doe" value={formData.name} onChange={handleFormChange} required />
                </div>
                <div className="rc-group">
                  <label htmlFor="rc-role">Role / Company</label>
                  <input type="text" id="rc-role" name="role" placeholder="Founder, XYZ" value={formData.role} onChange={handleFormChange} />
                </div>
              </div>

              <div className="rc-group">
                <label htmlFor="rc-text">Your Review</label>
                <textarea id="rc-text" name="text" placeholder="Tell us about your experience..." rows="4" value={formData.text} onChange={handleFormChange} required></textarea>
              </div>

              <button type="submit" className="rc-submit">
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
    </section>
  );
};

export default ReviewsCarousel;