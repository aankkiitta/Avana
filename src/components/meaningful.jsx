import React from 'react';
import './Meaningful.css';

const Meaningful = () => {
  return (
    <div className="meaningful-wrap">
      <h2 className="meaningful-heading">
        We care about building{' '}
        <span className="meaningful-highlight">
          <span className="meaningful-handle meaningful-handle-tl" />
          <span className="meaningful-handle meaningful-handle-tr" />
          <span className="meaningful-handle meaningful-handle-bl" />
          <span className="meaningful-handle meaningful-handle-br" />
          meaningful
        </span>{' '}
        experiences
        <span className="meaningful-sparkle meaningful-sparkle-1">✦</span>
        <span className="meaningful-sparkle meaningful-sparkle-2">✦</span>
      </h2>
    </div>
  );
};

export default Meaningful;