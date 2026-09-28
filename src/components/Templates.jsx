import React, { useState, useEffect } from "react";
import "./Templates.css";

const allTemplates = [
  {
    id: 1,
    title: "NOVA",
    subtitle: "Universal Portfolio",
    desc: "Clean, Minimal, Professional",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    price: 249,
    pages: ["Home", "About", "Projects", "Contact"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 2,
    title: "ORBIT",
    subtitle: "SaaS Landing Page",
    desc: "Modern, Bold, Conversion-ready",
    category: "Business",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    price: 499,
    pages: ["Home", "Features", "Pricing", "Contact"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 3,
    title: "PULSE",
    subtitle: "E-commerce Store",
    desc: "Fast, Clean, Mobile-first",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    price: 699,
    pages: ["Home", "Shop", "Cart", "Checkout"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 4,
    title: "AURA",
    subtitle: "Creative Agency",
    desc: "Bold, Artistic, Unique",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
    price: 349,
    pages: ["Home", "Work", "Services", "Contact"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 5,
    title: "VERTEX",
    subtitle: "Startup Landing",
    desc: "Sharp, Modern, Fast",
    category: "Business",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    price: 449,
    pages: ["Home", "Features", "Pricing", "Blog", "Contact"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 6,
    title: "BLOOM",
    subtitle: "E-commerce Boutique",
    desc: "Elegant, Feminine, Clean",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    price: 799,
    pages: ["Home", "Shop", "Product", "Cart", "Checkout"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 7,
    title: "STELLAR",
    subtitle: "Photography Portfolio",
    desc: "Minimal, Visual, Sharp",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    price: 299,
    pages: ["Home", "Gallery", "About", "Contact"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 8,
    title: "FLUX",
    subtitle: "SaaS Dashboard",
    desc: "Data-driven, Clean, Modern",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    price: 599,
    pages: ["Dashboard", "Analytics", "Settings", "Profile"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 9,
    title: "CARTLY",
    subtitle: "E-commerce Fashion",
    desc: "Trendy, Bold, Mobile-first",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    price: 899,
    pages: ["Home", "Shop", "Product", "Cart", "Checkout"],
    features: ["Fully responsive", "Clean code", "Easy to customize", "SEO friendly", "Fast loading", "Free updates"],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
];

const ITEMS_PER_PAGE = 3;

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredTemplates = allTemplates.filter(
    (tpl) =>
      tpl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Search change hone par reset
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm]);

  const visibleTemplates = filteredTemplates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTemplates.length;

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedTemplate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTemplate]);

  return (
    <section className="tpl-section" id="templates" >
      <div className="tpl-inner">
        {/* HEADER */}
        <div className="tpl-header">
          <h2 className="tpl-heading">
            Premium <span>Templates</span>
          </h2>
          <p className="tpl-subtext">
            Handcrafted templates to launch your next project faster.
          </p>
        </div>

        {/* SEARCH */}
        <div className="tpl-search-wrap">
          <div className="tpl-search">
            <svg className="tpl-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="tpl-search-filter" aria-label="Filter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="2.2" />
                <circle cx="16" cy="16" r="2.2" />
                <path d="M11 8h9" />
                <path d="M4 16h9" />
              </svg>
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="tpl-grid">
          {visibleTemplates.length > 0 ? (
            visibleTemplates.map((tpl) => (
              <div className="tpl-card" key={tpl.id}>
                <div className="tpl-image-wrap">
                  <img src={tpl.image} alt={tpl.title} />

                  {/* 🔥 PRICE — top-left */}
                  <span className="tpl-price-badge">₹{tpl.price}</span>

                  {/* 🔥 CATEGORY — top-right */}
                  <span className="tpl-badge">{tpl.category}</span>

                  <div className="tpl-image-overlay" />
                </div>

                <div className="tpl-content">
                  <h3 className="tpl-name">{tpl.title}</h3>
                  <p className="tpl-subtitle">{tpl.subtitle}</p>
                  <p className="tpl-desc">{tpl.desc}</p>

                  <div className="tpl-btn-row">
                    <button className="tpl-btn tpl-btn-preview">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Live Preview
                    </button>
                    <button
                      className="tpl-btn tpl-btn-details"
                      onClick={() => setSelectedTemplate(tpl)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      View Details
                    </button>
                  </div>

                  <button className="tpl-btn-make">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Make It Yours
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="tpl-no-result">No templates found matching your search.</div>
          )}
        </div>

        {/* 🔥 LOAD MORE */}
        {hasMore && (
          <div className="tpl-load-more-wrap">
            <button
              className="tpl-load-more"
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            >
              Load More Templates
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedTemplate && (
        <div className="tpl-modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="tpl-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tpl-modal-close" onClick={() => setSelectedTemplate(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="tpl-modal-scroll">
              <div className="tpl-modal-image">
                <img src={selectedTemplate.image} alt={selectedTemplate.title} />
              </div>

              <div className="tpl-modal-body">
                <h3 className="tpl-modal-title">{selectedTemplate.title}</h3>
                <p className="tpl-modal-subtitle">{selectedTemplate.subtitle}</p>
                <p className="tpl-modal-desc">{selectedTemplate.desc}</p>

                <div className="tpl-modal-price-box">
                  <span className="tpl-modal-price-label">PRICE</span>
                  <span className="tpl-modal-price-value">₹{selectedTemplate.price}</span>
                </div>

                <div className="tpl-modal-section">
                  <h4 className="tpl-modal-section-title">📄 Pages Included</h4>
                  <div className="tpl-modal-tags">
                    {selectedTemplate.pages.map((page, i) => (
                      <span key={i} className="tpl-modal-tag">✓ {page}</span>
                    ))}
                  </div>
                </div>

                <div className="tpl-modal-section">
                  <h4 className="tpl-modal-section-title">⭐ Features</h4>
                  <div className="tpl-modal-features">
                    {selectedTemplate.features.map((feat, i) => (
                      <span key={i} className="tpl-modal-feature">✓ {feat}</span>
                    ))}
                  </div>
                </div>

                <div className="tpl-modal-section">
                  <h4 className="tpl-modal-section-title">{"</>"} Built With</h4>
                  <div className="tpl-modal-tech">
                    {selectedTemplate.tech.map((t, i) => (
                      <span key={i} className="tpl-modal-tech-item">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="tpl-modal-footer">
              <div className="tpl-modal-actions">
                <button className="tpl-modal-btn tpl-modal-btn-preview">Live Preview</button>
                <button className="tpl-modal-btn tpl-modal-btn-download">Download</button>
              </div>
              <button className="tpl-modal-btn-make">Make It Yours</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Templates;