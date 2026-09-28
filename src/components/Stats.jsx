import React from 'react';
import './Stats.css';

const statsData = [
  { id: 1, value: '9+', label: 'Successful Years' },
  { id: 2, value: '2100+', label: 'Completed Projects' },
  { id: 3, value: '22+', label: 'Countries with Clients' },
  { id: 4, value: '100%', label: 'Customer Satisfaction' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <span className="stat-corner stat-corner-tl" />
              <span className="stat-corner stat-corner-tr" />
              <span className="stat-corner stat-corner-bl" />
              <span className="stat-corner stat-corner-br" />

              <span className="stat-line stat-line-top" />
              <span className="stat-line stat-line-bottom" />

              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;