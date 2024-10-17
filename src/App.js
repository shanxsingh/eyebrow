import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#price-list" onClick={toggleMenu}>Price List</a></li>
          <li><a href="#location" onClick={toggleMenu}>Location</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
        </ul>
        {/* Yelp Link inside Navbar */}
        <a
          className="yelp-link"
          href="https://www.yelp.com/biz/rajvir-threading-and-waxing-tracy-3"
          target="_blank"
          rel="noreferrer"
        >
          Check out my Yelp!
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero-section">
        <div className="hero-content">
          <h1>Rajvir's Eyebrow Threading and Waxing</h1>
        </div>
      </section>

      {/* White section (below the hero) */}
      <section id="main-content">
        {/* Services */}
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer the best eyebrow threading, waxing, and facial treatments in Tracy!</p>
          <ul>
            <li> - Eyebrow Threading - </li>
            <li> - Facial Threading - </li>
            <li> - Eyebrow Tinting - </li>
            <li> - Waxing - </li>
          </ul>
        </section>

        {/* Price List */}
        <section id="price-list">
          <h2>Price List</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ flex: 1, paddingRight: '20px', textAlign: 'center' }}>
              <h3>Threading</h3>
              <ul>
                <li>Eyebrows: $9</li>
                <li>Upper Lip: $4</li>
                <li>Forehead: $4</li>
                <li>Full Face: $25</li>
                <li>Sideburns: $8</li>
                <li>Chin: $4</li>
                <li>Neck: $5</li>
              </ul>
            </div>
            <div style={{ flex: 1, paddingLeft: '20px', textAlign: 'center' }}>
              <h3>Waxing</h3>
              <ul>
                <li>Face Wax: $30</li>
                <li>Arms: $30</li>
                <li>Half Legs: $30</li>
                <li>Full Legs: $45</li>
                <li>Underarms: $14</li>
                <li>Full Back: $25</li>
                <li>Stomach: $20</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location">
          <h2>Location</h2>
          <p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=4065+Wheat+Ln,+Tracy,+CA+95377"
              target="_blank"
              rel="noopener noreferrer"
            >
              4065 Wheat Ln, Tracy, CA 95377
            </a>
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact (Appointments Only)</h2>
          <p>
            Phone: <a href="tel:2092072718" className="contact-link">209-207-2718</a>
          </p>
          <p>
            Email: <a href="mailto:rajparam4@yahoo.com" className="contact-link">rajparam4@yahoo.com</a>
          </p>
        </section>

        {/* About Me */}
        <section id="about">
          <h2>About Me</h2>
          <p>Raj has been a certified expert esthetician in eyebrow threading for over 10 years. She offers professional and friendly personalized services to all her clients.</p>
        </section>
      </section>
    </div>
  );
}

export default App;
