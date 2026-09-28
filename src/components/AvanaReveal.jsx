import React, { useEffect, useRef, useState } from 'react';
import './AvanaReveal.css';

const REVEAL_ITEMS = [
  { id: 'q',      type: 'h-question', text: 'What we do?',                            delay: 0 },
  { id: 'wrong',  type: 'sub-wrong',  text: 'Wrong question.',                        delay: 800 },
  { id: 'kicker', type: 'kicker',     text: 'The right question is —',                delay: 1600 },
  { id: 'main',   type: 'h-main',     text: 'What can AVANA create?',                 delay: 2400 },
  { id: 'soft',   type: 'sub-soft',   text: 'Your vision. Our craft.',                delay: 3400 },
  { id: 'st1',    type: 'statement',  text: 'You have an idea.',                      delay: 4200 },
  { id: 'st2',    type: 'statement',  text: 'We have the tools to bring it to life.', delay: 4900 },
  { id: 'v1',     type: 'verb',       text: 'Design it.',                             delay: 5800 },
  { id: 'v2',     type: 'verb',       text: 'Build it.',                              delay: 6350 },
  { id: 'v3',     type: 'verb',       text: 'Code it.',                               delay: 6900 },
  { id: 'v4',     type: 'verb',       text: 'Connect it.',                            delay: 7450 },
  { id: 'v5',     type: 'verb',       text: 'Automate it.',                           delay: 8000 },
  { id: 'v6',     type: 'verb',       text: 'Launch it.',                             delay: 8550 },
  { id: 'v7',     type: 'verb',       text: 'Grow it.',                               delay: 9100 },
  { id: 'final',  type: 'final',      text: 'Think it. Build it. Make it AVANA.',     delay: 10200 },
];

const VERB_IDS = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7'];
const TOP_IDS  = ['q', 'wrong', 'kicker', 'main', 'soft', 'st1', 'st2'];

const AvanaReveal = () => {
  const [visibleIds, setVisibleIds] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  /* ============================================ */
  /* ====== INTERSECTION OBSERVER — START ====== */
  /* ============================================ */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab 30% section viewport mein aaye → animation start
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3,       // 30% visible hone pe trigger
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasStarted]);

  /* ============================================ */
  /* ====== RUN TIMERS ONLY WHEN STARTED ======= */
  /* ============================================ */
  useEffect(() => {
    if (!hasStarted) return;

    const timers = REVEAL_ITEMS.map((item) =>
      setTimeout(() => {
        setVisibleIds((prev) => [...prev, item.id]);
      }, item.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  const isVisible = (id) => visibleIds.includes(id);

  const renderItem = (item) => {
    const cls = `line ${item.type} ${isVisible(item.id) ? 'visible' : ''}`;

    switch (item.type) {
      case 'h-question':
      case 'h-main':
        return <h2 key={item.id} className={cls}>{item.text}</h2>;

      case 'sub-wrong':
      case 'kicker':
      case 'sub-soft':
      case 'statement':
        return <p key={item.id} className={cls}>{item.text}</p>;

      case 'final':
        return (
          <p
            key={item.id}
            className={`final ${isVisible(item.id) ? 'visible' : ''}`}
          >
            {item.text}
          </p>
        );

      default:
        return null;
    }
  };

  const topItems  = REVEAL_ITEMS.filter((i) => TOP_IDS.includes(i.id));
  const verbItems = REVEAL_ITEMS.filter((i) => VERB_IDS.includes(i.id));
  const finalItem = REVEAL_ITEMS.find((i) => i.id === 'final');

  return (
    <section className="avana-section" ref={sectionRef}>
      <div className="avana-card">
        <div className="avana-story">
          {topItems.map(renderItem)}

          <div className="avana-verbs">
            {verbItems.map((item) => (
              <span
                key={item.id}
                className={`avana-verb ${isVisible(item.id) ? 'visible' : ''}`}
              >
                {item.text}
              </span>
            ))}
          </div>

          {finalItem && renderItem(finalItem)}
        </div>
      </div>
    </section>
  );
};

export default AvanaReveal;