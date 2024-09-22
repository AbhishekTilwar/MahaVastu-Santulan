
import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

import NavBar from './NavBar'; // Import the NavBar component
import Footer from './Footer'; // Import the Footer component
import SplashScreen from './SplashScreen'; // If SplashScreen is also a separate component

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const sponsors = [
    { src: 'assets/img/sap.png', alt: 'SAP' },
    { src: 'assets/img/Deloitte-logo.png', alt: 'Deloitte' },
    { src: 'assets/img/HPE-Logo.png', alt: 'HPE' },
    { src: 'assets/img/ey.png', alt: 'EY' },
    { src: 'assets/img/Jio-Logo.png', alt: 'Jio' },
    { src: 'assets/img/ptc.png', alt: 'PTC' },
    { src: 'assets/img/Vodafone-Logo.png', alt: 'Vodafone' },
  ];

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Use NavBar here */}

          <main className="l-main">
            <section className="home" id="home">
              <div className="home__container bd-container-first bd-grid">
                <div className="home__data">
                  <h3 className="home__title">MahaVastu Santulan</h3>
                  <h3 className="home__subtitle">The promise to prosperity</h3>
                  <a href="Courses.html" className="button">Consult Us now</a>
                </div>
                <div>
                  <div className="laptop">
                    <div className="content">
                      <iframe
                        id="video"
                        width="98%"
                        height="100%"
                        src="https://www.youtube.com/embed/x4SYkYP54WA?autoplay=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="menu section bd-container" id="menu">
              <h2 className="section-title">Popular Live Courses</h2>
              <h1 className="section-subtitle">Programming Courses</h1>
              <div className="menu__containers bd-grid">
                <div className="menu__content">
                  <a href="c_programming_course.html">
                    <img src="assets/img/c.png" alt="C Programming" className="menu__img" />
                    <h3 className="menu__name">C Programming</h3>
                    <span className="menu__detail">Live Classes</span>
                    <div className="pricing">
                      <span className="sale-price">₹1299</span>
                      <span className="original-price">₹4500</span>
                      <span className="off-price">70% off</span>
                    </div>
                    <a href="c_programming_course.html" className="button menu__button_grey">Enroll Now</a>
                  </a>
                </div>
              </div>
            </section>

            <div className="sponsors-container">
              <h2>Our Students are selected in</h2>
              <motion.div
                className="sponsors-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    className="sponsor-item"
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={sponsor.src} alt={sponsor.alt} />
                  </motion.div>
                ))}
              </motion.div>
              <a href="Community.html">
                <h2 style={{ color: 'gray' }}>+ much more..</h2>
              </a>
            </div>
          </main>

          <Footer /> {/* Use Footer here */}
        </>
      )}
    </div>
  );
};

export default HomePage;
