import React from "react";

const contactPhone = "+254746791159";
const contactEmail = "admin@propertynetwork.co.ke";

const serviceLinks = [
  { label: "CCTV Installation", path: "/services/cctv" },
  { label: "Electrical Installation & Maintenance", path: "/services/electrical" },
  { label: "Solar Installation", path: "/services/solar" },
  { label: "Lighting Solutions", path: "/services/lighting" },
  { label: "Security Systems", path: "/services/security" },
];

const pageMeta = {
  "/": {
    title: "PropertyNetwork | CCTV, Electrical, Solar & Lighting Services in Kenya",
    description:
      "PropertyNetwork provides CCTV installation, electrical installation, maintenance, solar installation, LED lighting, smart doors, alarm systems and fence wiring.",
    eyebrow: "Security, power, solar and lighting",
    heading: "PROPERTYNETWORK: Your trusted partner for safer, brighter properties.",
    text:
      "We install and maintain CCTV, electrical systems, solar power, LED lighting, snake lights, chandeliers, security lighting, fence wiring, smart doors and alarms.",
  },
  "/about": {
    title: "About PropertyNetwork | Security, Electrical & Lighting Experts",
    description:
      "Learn about PropertyNetwork, a property technology team for CCTV, electrical, solar, lighting, smart access and alarm services.",
    eyebrow: "About PropertyNetwork",
    heading: "One coordinated team for property safety, power and lighting.",
    text:
      "We combine clean installation work, practical technical advice and ongoing maintenance for residential and commercial properties.",
  },
  "/services": {
    title: "PropertyNetwork Services | CCTV, Solar, Electrical & Lighting",
    description:
      "Explore PropertyNetwork services including CCTV installation, electrical maintenance, solar systems, lighting, fence wiring, smart doors and alarm systems.",
    eyebrow: "Our services",
    heading: "Complete property services from installation to maintenance.",
    text:
      "Choose one dependable team for security cameras, wiring, lighting, solar power, access control, fence wiring and alarm systems.",
  },
  "/projects": {
    title: "PropertyNetwork Projects | Security, Solar & Electrical Work",
    description:
      "View PropertyNetwork project areas for smart doors, alarm systems, fence wiring, chandeliers, snake lights, CCTV, solar and electrical work.",
    eyebrow: "Project coverage",
    heading: "Practical installations for safer, smarter properties.",
    text:
      "Our work covers modern homes, offices, rental properties, shops and commercial spaces that need reliable systems and neat finishing.",
  },
  "/process": {
    title: "PropertyNetwork Process | Survey, Installation & Maintenance",
    description:
      "See how PropertyNetwork handles property surveys, clean cable routing, installation, testing and maintenance.",
    eyebrow: "How we work",
    heading: "Clear process, clean workmanship and dependable support.",
    text:
      "We start with your site needs, recommend the right setup, install carefully, test the system and support maintenance after handover.",
  },
  "/contact": {
    title: "Contact PropertyNetwork | Request CCTV, Electrical or Solar Service",
    description:
      "Contact PropertyNetwork for CCTV installation, electrical maintenance, solar installation, lighting, smart door, alarm and fence wiring services.",
    eyebrow: "Contact us",
    heading: "Request a quote or schedule a property service.",
    text: `Call ${contactPhone} or email ${contactEmail} for CCTV, electrical, solar, lighting and security installation support.`,
  },
};

const serviceMeta = {
  "/services/cctv": {
    title: "CCTV Installation Services | PropertyNetwork",
    description: "CCTV camera planning, installation, cabling, DVR/NVR setup and remote viewing by PropertyNetwork.",
    eyebrow: "CCTV installation",
    heading: "CCTV systems designed for clear property visibility.",
    text: "We install cameras, recorders, cabling and remote viewing for homes, offices, shops and rental properties.",
  },
  "/services/electrical": {
    title: "Electrical Installation & Maintenance | PropertyNetwork",
    description: "Electrical wiring, repairs, inspections, upgrades and maintenance services from PropertyNetwork.",
    eyebrow: "Electrical services",
    heading: "Safe electrical installation and maintenance.",
    text: "We handle wiring, fault checks, upgrades, repairs and preventive maintenance with clean finishing.",
  },
  "/services/solar": {
    title: "Solar Installation Services | PropertyNetwork",
    description: "Solar panel, inverter and battery installation services for reliable property power.",
    eyebrow: "Solar installation",
    heading: "Solar power systems planned around your property.",
    text: "We support solar panels, inverters, batteries and load planning for dependable energy use.",
  },
  "/services/lighting": {
    title: "Lighting Solutions | LED, Snake Lights & Chandeliers | PropertyNetwork",
    description: "LED, snake light, chandelier, outdoor and security lighting installation by PropertyNetwork.",
    eyebrow: "Lighting solutions",
    heading: "Lighting that improves safety, style and visibility.",
    text: "We install LED lighting, snake lights, chandeliers, outdoor lights and security lighting.",
  },
  "/services/security": {
    title: "Alarm Systems, Smart Doors & Fence Wiring | PropertyNetwork",
    description: "Smart door, alarm system, access control and fence wiring installation by PropertyNetwork.",
    eyebrow: "Security systems",
    heading: "Smart access, alarms and perimeter security.",
    text: "We install smart doors, alarm systems, access control and fence wiring for stronger property protection.",
  },
};

const highlights = [
  {
    id: "cctv",
    icon: "camera",
    title: "CCTV Installation",
    text: "Camera placement, cabling, DVR/NVR setup, remote viewing, and monitoring support.",
  },
  {
    id: "electrical",
    icon: "bolt",
    title: "Electrical Installation & Maintenance",
    text: "Safe wiring, inspections, upgrades, fault finding, repairs, and preventive care.",
  },
  {
    id: "solar",
    icon: "solar",
    title: "Solar Installation",
    text: "Solar panels, inverters, batteries, load planning, and reliable energy optimization.",
  },
  {
    id: "lighting",
    icon: "lamp",
    title: "Lighting Solutions",
    text: "LED lights, snake lights, chandeliers, garden lighting, and security lighting.",
  },
];

const solutions = [
  {
    title: "Smart Door Locks & Access",
    text: "Smart locks, keypad access, door automation, and secure entry setup.",
    alt: "Smart door lock installed on a modern property entrance",
    frame: "crop-door",
  },
  {
    title: "Alarm Systems",
    text: "Alarm panels, sirens, sensors, keypads, setup, testing, and maintenance.",
    alt: "Wall mounted alarm keypad for property security",
    frame: "crop-alarm",
  },
  {
    title: "Fence Wiring",
    text: "Perimeter fence wiring, security checks, controlled protection, and repairs.",
    alt: "Security fence wiring around a residential property",
    frame: "crop-fence",
  },
  {
    title: "Chandeliers & Snake Lights",
    text: "Decorative lighting installations with neat finishing for homes and offices.",
    alt: "Modern chandelier and snake light installation",
    frame: "crop-light",
  },
];

const process = [
  "Site survey and practical advice",
  "Clean cable routing and finishing",
  "Residential and commercial installs",
  "Maintenance after installation",
];

const previews = [
  "Solar roof installation",
  "Technician fitting solar panels",
  "CCTV camera and smart door access",
];

const faqs = [
  {
    question: "Do you install CCTV systems for homes and businesses?",
    answer:
      "Yes. PropertyNetwork installs CCTV cameras, recorders, cabling and remote viewing for homes, offices, shops and rental properties.",
  },
  {
    question: "Can you handle both electrical installation and maintenance?",
    answer:
      "Yes. We support new wiring, electrical repairs, fault checks, upgrades, inspections and ongoing maintenance.",
  },
  {
    question: "Do you install solar systems?",
    answer:
      "Yes. We install solar panels, inverters, batteries and supporting wiring based on your property power needs.",
  },
  {
    question: "What lighting services do you provide?",
    answer:
      "We install LED lights, snake lights, chandeliers, exterior lights and security lighting for residential and commercial properties.",
  },
  {
    question: "How can I request a quote?",
    answer: `Call ${contactPhone}, send a WhatsApp message, or email ${contactEmail} with your location and the service you need.`,
  },
];

const whatsappUrl = `https://wa.me/${contactPhone.replace("+", "")}?text=Hello%20PropertyNetwork%2C%20I%20need%20a%20quote.`;

function Icon({ type }) {
  return <span className={`icon icon-${type}`} aria-hidden="true" />;
}

function Header() {
  const phoneHref = `tel:${contactPhone}`;
  const emailHref = `mailto:${contactEmail}`;

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">
          <span>PropertyNetwork</span>
          <span>Comprehensive security, electrical, solar and lighting services</span>
          <span className="topbar-contact">{contactPhone}</span>
        </div>
      </div>

      <div className="brandbar">
        <a className="logo" href="/" aria-label="PropertyNetwork home">
          <span className="logo-mark">PN</span>
          <span className="logo-text">
            PROPERTY<span>NETWORK</span>
          </span>
        </a>

        <form className="search" role="search">
          <input type="search" placeholder="Search services..." aria-label="Search PropertyNetwork services" />
          <button type="submit" aria-label="Search">
            <span aria-hidden="true">⌕</span>
          </button>
        </form>

        <div className="quick-contact" aria-label="Quick contact">
          <a href={phoneHref}>
            <span className="quick-icon" aria-hidden="true">☎</span>
            <span>
              Phone Us<strong>{contactPhone}</strong>
            </span>
          </a>
          <a href={emailHref}>
            <span className="quick-icon" aria-hidden="true">@</span>
            <span>
              Email<strong>{contactEmail}</strong>
            </span>
          </a>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <div className="nav-dropdown">
          <button type="button">Services</button>
          <div className="nav-dropdown-menu">
            <a href="/services">All Services</a>
            {serviceLinks.map((item) => (
              <a key={item.path} href={item.path}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <a href="/projects">Projects</a>
        <a href="/process">Process</a>
        <a href="/contact">Contact</a>
        <a className="quote-link" href="/contact">
          Get a Free Quote
        </a>
      </nav>
    </header>
  );
}

function Hero({ page = pageMeta["/"] }) {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src="/design.jpeg"
        alt="Modern property with CCTV cameras, solar panels, and exterior lighting"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.heading}</h1>
        <p>{page.text}</p>
        <div className="hero-actions">
          <a className="button button-outline" href="/services">
            Our Services
          </a>
          <a className="button button-gold" href="/contact">
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function PageIntro({ page }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{page.eyebrow}</p>
      <h1>{page.heading}</h1>
      <p>{page.text}</p>
    </section>
  );
}

function Services() {
  return (
    <section className="service-strip" id="services" aria-label="Highlighted services">
      {highlights.map((service) => (
        <article id={service.id} key={service.title}>
          <Icon type={service.icon} />
          <h2>{service.title}</h2>
          <p>{service.text}</p>
        </article>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Complete property coverage</p>
        <h2>Comprehensive solutions for your property</h2>
      </div>

      <div className="media-row" aria-label="Installation examples">
        {previews.map((alt, index) => (
          <figure key={alt}>
            <img src="/design.jpeg" alt={alt} className={`preview preview-${index + 1}`} />
          </figure>
        ))}
      </div>

      <div className="solution-grid">
        {solutions.map((item) => (
          <article className="solution-card" key={item.title}>
            <div className="solution-image">
              <img src="/design.jpeg" alt={item.alt} className={item.frame} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="split-section" id="about">
      <div>
        <p className="eyebrow">Why PropertyNetwork</p>
        <h2>One coordinated team for security, electrical work, solar and lighting.</h2>
        <p>
          PropertyNetwork brings practical installation skill, clean finishing, and reliable
          maintenance together. Whether you need one CCTV camera or a full property upgrade, we plan
          around your building, your budget, and the safety of the people using it.
        </p>
      </div>
      <div className="feature-list" id="process">
        {process.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote" id="quote">
      <div>
        <p className="eyebrow">Get started</p>
        <h2>Need CCTV, electrical, solar, lighting, smart door, fence wiring or alarm work?</h2>
      </div>
      <a className="button button-gold" href={`mailto:${contactEmail}`}>
        Request A Free Quote
      </a>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">Questions</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section contact-panel">
      <div>
        <p className="eyebrow">Talk to PropertyNetwork</p>
        <h2>Book CCTV, electrical, solar, lighting or security service.</h2>
        <p>
          Share your property location, the service you need, and the best time for a survey or
          installation discussion.
        </p>
      </div>
      <div className="contact-card">
        <a href={`tel:${contactPhone}`}>{contactPhone}</a>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp PropertyNetwork
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div>
          <strong>PropertyNetwork</strong>
          <p>Security, electrical, solar, lighting and smart access services in Kenya.</p>
        </div>
        <div>
          <h2>Services</h2>
          {serviceLinks.map((item) => (
            <a key={item.path} href={item.path}>{item.label}</a>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/process">Process</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`tel:${contactPhone}`}>{contactPhone}</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Quote</a>
        </div>
      </div>
    </footer>
  );
}

function getPage() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return serviceMeta[path] || pageMeta[path] || pageMeta["/"];
}

function useSeo(page) {
  React.useEffect(() => {
    document.title = page.title;
    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute("content", page.description);

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PropertyNetwork",
      url: "https://propertynetwork.co.ke",
      telephone: contactPhone,
      email: contactEmail,
      areaServed: "Kenya",
      description: page.description,
      serviceType: [
        "CCTV installation",
        "Electrical installation",
        "Electrical maintenance",
        "Solar installation",
        "LED lighting",
        "Chandelier installation",
        "Fence wiring",
        "Smart door installation",
        "Alarm systems",
      ],
    };
    let jsonLd = document.querySelector("#propertynetwork-schema");

    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "propertynetwork-schema";
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }

    jsonLd.textContent = JSON.stringify(schema);
  }, [page]);
}

function RoutedPage() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = getPage();

  useSeo(page);

  if (path === "/") {
    return (
      <>
        <Hero page={page} />
        <Services />
        <Projects />
        <About />
        <FAQ />
        <Quote />
      </>
    );
  }

  if (path === "/about") {
    return (
      <>
        <PageIntro page={page} />
        <About />
        <FAQ />
        <Quote />
      </>
    );
  }

  if (path === "/services" || serviceMeta[path]) {
    return (
      <>
        <PageIntro page={page} />
        <Services />
        <Projects />
        <FAQ />
        <Quote />
      </>
    );
  }

  if (path === "/projects") {
    return (
      <>
        <PageIntro page={page} />
        <Projects />
        <FAQ />
        <Quote />
      </>
    );
  }

  if (path === "/process") {
    return (
      <>
        <PageIntro page={page} />
        <About />
        <FAQ />
        <Quote />
      </>
    );
  }

  if (path === "/contact") {
    return (
      <>
        <PageIntro page={page} />
        <ContactPage />
        <FAQ />
      </>
    );
  }

  return (
    <>
      <PageIntro page={pageMeta["/"]} />
      <Services />
      <FAQ />
      <Quote />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <RoutedPage />
      </main>
      <Footer />
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </>
  );
}
