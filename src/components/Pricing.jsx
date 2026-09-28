import React from 'react';
import './Pricing.css';

const PLANS = [
  {
    id: 'standard',
    name: 'Standard Plan*',
    oldPrice: '₹8,499/-',
    price: '₹7,999',
    features: [
      '5 pages Website',
      '1 Year Free Domain Name (.com .in .org)',
      '1 Year Free Hosting (Unlimited Space)',
      'Dynamic Website (Premium Design)',
      'Admin Access',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '5 Free Email Id',
      'SEO Friendly Website',
      '100% Responsive Website',
      '100% Responsive Website',
      '1 Year Free Technical Support For Website',
    ],
    note: 'Suitable for website owners and web masters who manage single website.',
  },
  {
    id: 'premium',
    name: 'Premium Plan*',
    oldPrice: '₹15,999/-',
    price: '₹14,999',
    features: [
      '10 pages Website',
      '1 Year Free Domain Name (.com .in .org)',
      '1 Year Free Hosting (Unlimited Space)',
      'Dynamic Website (Premium Design)',
      'Admin Access',
      'Google Search Console Setup',
      'Woocommerce Features',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '5 Free Email Id',
      'SEO Friendly Website',
      '100% Responsive Website',
      '100% Responsive Website',
      '1 Year Free Technical Support For Website',
    ],
    note: 'Suitable for website owners and web masters who manage single website.',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Plan*',
    oldPrice: '₹21,499/-',
    price: '₹19,999',
    features: [
      '30 pages Website',
      'Ecommerce Features',
      '20 Product Categories',
      'Product Listing From Our Side',
      'Auto Invoice Bill Generator Features',
      'Dynamic Website (Premium Design)',
      '1 Year Free Domain Name (.com .in .org)',
      '1 Year Free Hosting (Unlimited Space)',
      'Admin Access',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '5 Free Email Id',
      'SEO Friendly Website',
      '100% Responsive Website',
      '100% Responsive Website',
      '1 Year Free Technical Support For Website',
    ],
    note: 'Suitable for website owners and web masters who manage single website.',
  },
];

const PlanCard = ({ plan }) => (
  <div className="plan-card">
    <div className="plan-head">
      <h3 className="plan-name">{plan.name}</h3>
    </div>

    <div className="plan-price-bar">
      <div className="plan-price">
        <span className="old">{plan.oldPrice}</span>
        <span className="amount">{plan.price}</span>
        <span className="slash">/</span>
      </div>
    </div>

    <div className="plan-features">
      {plan.features.map((feature, i) => (
        <div className="plan-feature" key={i}>
          <span className="check" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <div className="plan-note">{plan.note}</div>

    <div className="plan-cta">
      <a href="#" className="plan-cta-btn">
        <span className="label">Contact Now</span>
      </a>
    </div>
  </div>
);

const Pricing = () => (
  <section className="pricing-section" id="pricing" >
    <div className="pricing-head">

     

      <h2 className="pricing-title">
        Plans &amp; <span className="highlight-box">Pricing</span>
      </h2>

      <p className="pricing-desc">
        <strong>AVANA</strong> is a professional freelancer offering modern,
        responsive, and customized web design &amp; development solutions.
      </p>

      <p className="pricing-desc">
        <strong>Affordable. Creative. Built for your vision.</strong>
      </p>

    </div>

    <div className="plans-grid">
      {PLANS.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  </section>
);

export default Pricing;