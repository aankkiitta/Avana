import "./New.css";

const services = [
  {
    num: "01 — Design",
    icon: "fa-solid fa-pen-ruler",
    title: "Website Design",
    text: "Modern, responsive, and visually engaging websites that reflect your brand and create a strong first impression.",
  },
  {
    num: "02 — Development",
    icon: "fa-solid fa-code",
    title: "Web Development",
    text: "Fast, functional, and reliable websites built with modern technologies to bring your ideas to life.",
  },
  {
    num: "03 — E-Commerce",
    icon: "fa-solid fa-cart-shopping",
    title: "E-Commerce Solutions",
    text: "Smooth and user-friendly online stores that make it easy for customers to explore, shop, and connect with your brand.",
  },
  {
    num: "04 — Custom",
    icon: "fa-solid fa-puzzle-piece",
    title: "Custom Web Solutions",
    text: "Have a unique requirement? We create custom web solutions tailored to your business, idea, and specific goals.",
  },
  {
    num: "05 — Experience",
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "UI/UX Design",
    text: "Clean, intuitive, and engaging interfaces that make your website simple to navigate and enjoyable to use.",
  },
  {
    num: "06 — Performance",
    icon: "fa-solid fa-bolt",
    title: "Website Optimization",
    text: "Better speed, responsiveness, and performance — creating a smoother experience across all devices.",
  },
];

export default function New() {
  return (
    <div className="avana-page">
      <div className="avana-container">
        {/* ================= HEADER ================= */}
        <header className="avana-header">
          <h1>Creative Websites. Built for Your Vision.</h1>

          <div className="avana-header-text">
            <p>
              Looking for a freelancer to{" "}
              <span className="avana-highlight">design or develop</span> your website?
            </p>
            <p>You're in the right place.</p>
            <p>
              At <span className="avana-highlight">AVANA</span>, we create modern,
              responsive, and customized websites that turn your ideas into
              meaningful digital experiences.
            </p>
            <p>
              From business websites and portfolios to e-commerce and custom web
              solutions, we build with{" "}
              <span className="avana-highlight">
                creativity, technology, and purpose
              </span>
              .
            </p>
            <p>
              Don't just build a website.{" "}
              <span className="avana-highlight">
                Build your digital presence with AVANA.
              </span>
            </p>
          </div>
        </header>

        {/* ================= GRID — 3 × 2 ================= */}
        <div className="avana-layout-grid">
          {services.map((service) => (
            <div className="avana-service-card" key={service.num}>
              <div className="avana-icon-box">
                <i className={service.icon} aria-hidden="true" />
              </div>
              <span className="avana-service-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}