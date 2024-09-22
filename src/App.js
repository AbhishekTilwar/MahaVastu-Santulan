import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import './App.css'; 
import logo from './assets/img/logo.svg'; // Adjust the path based on your folder structure
import logohead from './assets/img/logo_icon.svg'; // Adjust the path based on your folder structure
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, useAnimation } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="logo" className="splash-logo" />
    </div>
  );
};

const HomePage = () => {
  // Hooks - These are called at the top level unconditionally
  const [isLoading, setIsLoading] = useState(true); // For the splash screen
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  // useEffect for splash screen
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Simulate loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the splash screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []); // Run only once on mount

  // useEffect for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      controls.start({ height: 0, opacity: 0 });
    } else {
      controls.start({ height: "auto", opacity: 1 });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };



  const sponsors = [
    { src: 'assets/img/sap.png', alt: 'SAP' },
    { src: 'assets/img/Deloitte-logo.png', alt: 'Deloitte' },
    { src: 'assets/img/HPE-Logo.png', alt: 'HPE' },
    { src: 'assets/img/ey.png', alt: 'EY' },
    { src: 'assets/img/Jio-Logo.png', alt: 'Jio' },
    { src: 'assets/img/ptc.png', alt: 'PTC' },
    { src: 'assets/img/Vodafone-Logo.png', alt: 'Vodafone' },
  ];
  // Return block for rendering - hooks above this are called in every render
  return (
    <div>
      {/* Conditionally show the splash screen */}
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          {/* *********** BODY *********** */}
          <div>
            {/* SCROLL TOP */}
            <a href="#" className="scrolltop" id="scroll-top">
              <i className='bx bx-chevron-up scrolltop__icon'></i>
            </a>

            {/* HEADER */}
            <header className="l-header" id="header">
              <nav className="nav bd-container_main">
                <a href="index.html">
                  <img className="logo_space" src={logohead} width="48px" alt="logo" />
                </a>

                {/* Navigation Menu */}
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                  <ul className="nav__list">
                    <li className="nav__item">
                      <a href="home.html" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                      <a href="Courses.html" className="nav__link">Courses</a>
                    </li>
                    <li className="nav__item">
                      <a href="Internship.html" className="nav__link">Internship</a>
                    </li>
                    <li className="nav__item">
                      <a href="Community.html" className="nav__link">Join Community</a>
                    </li>
                    <li>
                      <Switch
                        checkedChildren="🌙"
                        unCheckedChildren="☀️"
                        checked={darkMode}
                        onChange={toggleTheme}
                        id="theme-button"
                      />
                    </li>
                  </ul>
                </div>

                {/* Hamburger Icon */}
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <CloseOutlined style={{ fontSize: '24px', color: '#000' }} />
                  ) : (
                    <MenuOutlined style={{ fontSize: '24px', color: '#000' }} />
                  )}
                </div>
              </nav>
            </header>

            {/* Main Content */}
            <main className="l-main">
              {/* HOME SECTION */}
              <section className="home" id="home">
                <div className="home__container bd-container bd-grid">
                  <div className="home__data">
                    <h3 className="home__title">MahaVastu Santulan</h3>
                    <h3 className="home__subtitle">The promise to prosperity</h3>
                    <a href="Courses.html" className="button">Consult Us now</a>
                  </div>
                  <div>
                    <img src="assets/img/home_blank.png" width="300px" alt="blank" />
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

              {/* About Section */}
              <div className="services__content">
                <h3 className="services__title">About Us!</h3>
              </div>

              {/* Menu Section */}
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

              {/* Footer */}
              <footer className="footer section bd-container">
                <div className="footer__container bd-grid">
                  {/* Footer content */}
                </div>
                <p className="footer__copy">Copyright &#169; 2023 MahaVastu Santulan.</p>
              </footer>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
