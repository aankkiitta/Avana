import React, { useEffect, useRef } from 'react';
import './VisionMissionGoals.css';

/* ============ SVG IMPORTS ============ */
import visionSvg from '../image/avana_vision_same_symbol.svg';
import missionSvg from '../image/avana_mission_same_symbol.svg';
import goalsSvg from '../image/avana_goals_same_symbol.svg';

/* ============ CARD DATA ============ */
const CARDS = [
  {
    id: 'vision',
    icon: visionSvg,
    alt: 'Vision',
    title: 'Our Vision',
    body: (
      <p>
        To create meaningful digital experiences that help businesses,
        brands, and individuals grow online through creative design, modern
        technology, and smart digital solutions.
      </p>
    ),
  },
  {
    id: 'mission',
    icon: missionSvg,
    alt: 'Mission',
    title: 'Our Mission',
    body: (
      <p>
        To transform ideas into modern, responsive, and purposeful websites
        by combining creative design, clean development, and customized
        solutions that are built around every client's unique vision.
      </p>
    ),
  },
  {
    id: 'goals',
    icon: goalsSvg,
    alt: 'Goals',
    title: 'Our Goals',
    body: (
      <ul>
        <li>Create modern, responsive, and user-friendly websites</li>
        <li>Turn ideas into creative digital experiences</li>
        <li>Deliver quality work with clear communication</li>
        <li>Build lasting client relationships through trust</li>
        
      </ul>
    ),
  },
];

/* ============ COMPONENT ============ */
const VisionMissionGoals = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = wrapper.querySelectorAll('.vmg-card');

    const handleScroll = () => {
      cards.forEach((card, i) => {
        const nextCard = cards[i + 1];
        if (!nextCard) return;

        const rect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const progress = Math.min(
          1,
          Math.max(0, (rect.top + 100 - nextRect.top) / 200)
        );

        card.style.transform = `scale(${1 - progress * 0.05}) translateY(${-progress * 30}px)`;
        card.style.opacity = String(1 - progress * 0.3);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="vmg" ref={wrapperRef}>
      <div className="vmg-inner">
        {CARDS.map((card) => (
          <div className="vmg-card" key={card.id}>

            {/* SVG icon */}
            <div className="vmg-icon">
              <img src={card.icon} alt={card.alt} />
            </div>

            {/* Title */}
            <h3 className="vmg-title">{card.title}</h3>

            {/* Body */}
            <div className="vmg-body">{card.body}</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionGoals;