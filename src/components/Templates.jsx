import React, { useState, useEffect } from "react";
import "./Templates.css";

const allTemplates = [
  {
    id: 1,
    title: "RealPress - Estate Sale and Rental WordPress Theme",
    author: "by ThimPress in Real Estate",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    price: 249,
    previewUrl: "/ankita.html",      // ✅ ADD THIS
    pages: ["Home", "About", "Projects", "Contact"],
    features: [
      "Advanced Search Filters for Real Estate Site",
      "Highly Customizable Elementor Widgets",
      "Property management system",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 2,
    title: "Orbit - SaaS Landing Page Template",
    author: "by Avana in Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    price: 499,
    previewUrl: "/previews/orbit.html",          // ✅ ADD THIS
    pages: ["Home", "Features", "Pricing", "Contact"],
    features: [
      "Conversion-focused hero sections",
      "Fully responsive across devices",
      "Modern typography & layouts",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 3,
    title: "Pulse - E-commerce Store Theme",
    author: "by Avana in E-commerce",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    price: 699,
    previewUrl: "/previews/pulse.html",          // ✅ ADD THIS
    pages: ["Home", "Shop", "Cart", "Checkout"],
    features: [
      "Optimized product pages",
      "Fast mobile-first experience",
      "Easy cart & checkout flow",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 4,
    title: "Aura - Creative Agency Template",
    author: "by Avana in Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
    price: 349,
    previewUrl: "/previews/aura.html",           // ✅ ADD THIS
    pages: ["Home", "Work", "Services", "Contact"],
    features: [
      "Bold, artistic design language",
      "Case study layouts included",
      "Smooth scroll animations",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 5,
    title: "Vertex - Startup Landing Template",
    author: "by Avana in Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    price: 449,
    previewUrl: "/previews/vertex.html",         // ✅ ADD THIS
    pages: ["Home", "Features", "Pricing", "Blog", "Contact"],
    features: [
      "Sharp, modern startup look",
      "Blog & pricing layouts",
      "Lightning-fast performance",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 6,
    title: "Bloom - Boutique Store Template",
    author: "by Avana in E-commerce",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    price: 799,
    previewUrl: "/previews/bloom.html",          // ✅ ADD THIS
    pages: ["Home", "Shop", "Product", "Cart", "Checkout"],
    features: [
      "Elegant product showcases",
      "Feminine, refined typography",
      "Customizable collections",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 7,
    title: "Stellar - Photography Portfolio Theme",
    author: "by Avana in Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    price: 299,
    previewUrl: "/previews/stellar.html",        // ✅ ADD THIS
    pages: ["Home", "Gallery", "About", "Contact"],
    features: [
      "Full-screen gallery layouts",
      "Minimal, visual-first design",
      "Fast image loading",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 8,
    title: "Flux - SaaS Dashboard Template",
    author: "by Avana in Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    price: 599,
    previewUrl: "/previews/flux.html",           // ✅ ADD THIS
    pages: ["Dashboard", "Analytics", "Settings", "Profile"],
    features: [
      "Data-rich dashboard widgets",
      "Clean modern UI components",
      "Responsive admin layouts",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    id: 9,
    title: "Cartly - Fashion Store Template",
    author: "by Avana in E-commerce",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    price: 899,
    previewUrl: "/previews/cartly.html",         // ✅ ADD THIS
    pages: ["Home", "Shop", "Product", "Cart", "Checkout"],
    features: [
      "Trendy fashion layouts",
      "Bold product photography grids",
      "Mobile-first checkout",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
];

const ITEMS_PER_PAGE = 3;

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  /* ✅ Open preview HTML in new tab */
  const openPreview = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredTemplates = allTemplates.filter(
    (tpl) =>
      tpl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm]);

  const visibleTemplates = filteredTemplates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTemplates.length;

  return (
    <section className="tpl-section" id="templates">
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

                {/* IMAGE with hover overlay */}
                <div className="tpl-image-wrap">
                  <img src={tpl.image} alt={tpl.title} />

                  <div className="tpl-image-overlay">
                    <h3 className="tpl-hover-title">{tpl.category}</h3>
                    <span className="tpl-hover-line" />

                    {/* ✅ Hover preview button */}
                    <button
                      className="tpl-view-site-btn"
                      type="button"
                      onClick={() => openPreview(tpl.previewUrl)}
                    >
                      Live Preview
                    </button>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="tpl-content">
                  <h3 className="tpl-card-title">{tpl.title}</h3>
                  <p className="tpl-card-author">{tpl.author}</p>

                  {/* Feature list */}
                  <ul className="tpl-card-features">
                    {tpl.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>

                  {/* Price + Live Preview button */}
                  <div className="tpl-card-bottom">
                    <span className="tpl-card-price">${tpl.price}</span>

                    {/* ✅ Bottom preview button */}
                    <button
                      className="tpl-card-live-btn"
                      type="button"
                      onClick={() => openPreview(tpl.previewUrl)}
                    >
                      Live Preview
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="tpl-no-result">No templates found matching your search.</div>
          )}
        </div>

        {/* LOAD MORE */}
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
    </section>
  );
};

export default Templates;