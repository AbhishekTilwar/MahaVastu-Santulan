import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

import NavBar from './NavBar'; // Import the NavBar component
import Footer from './Footer'; // Import the Footer component

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
      { (
        <>

          <main className="l-main">
            <section className="home" id="home">
              <div className="home__container bd-container bd-grid">
                <div className="home__data">
                  <h3 className="home__title">About Us</h3>
                  <h3 className="home__subtitle">The promise to prosperity</h3>
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


            <div className="sponsors-container">
            
            </div>
          </main>

        </>
      )}
    </div>
  );
};

export default HomePage;
