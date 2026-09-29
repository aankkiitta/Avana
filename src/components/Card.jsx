import React from 'react';
import './Card.css';

const Card = ({ template, onViewDetails }) => {
  return (
    <div className="card">
      {/* IMAGE WRAP */}
      <div className="card-image-wrap">
        <img src={template.image} alt={template.title} />

        {/* HOVER OVERLAY with View Site button */}
        <div className="card-overlay">
          <button className="card-view-site">
            View Site
          </button>
        </div>

        {/* Category badge */}
        <span className="card-badge">{template.category}</span>
      </div>

      {/* CARD BODY */}
      <div className="card-body">
        <h3 className="card-title">{template.title}</h3>
        <p className="card-subtitle">{template.subtitle}</p>

        {/* PRICE ROW */}
        <div className="card-price-row">
          <span className="card-price">₹{template.price}</span>
          <button className="card-make-btn">
            Make It Yours
          </button>
        </div>

        {/* DETAILS BUTTON — full width niche */}
        <button
          className="card-details-btn"
          onClick={() => onViewDetails(template)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;