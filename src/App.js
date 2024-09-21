import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import './App.css'; 
import logo from './assets/img/logo.svg'; // Adjust the path based on your folder structure
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MenuOutlined } from '@ant-design/icons';  // Import Ant Design Icon
import { motion, useAnimation } from 'framer-motion';


  

const HomePage = () => {

  useEffect(() => {
    playVideo();
  }, []);

  const playVideo = () => {
    const video = document.getElementById('video');
    if (video) {
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  
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
  

  return (
    <div>
      {/* *********** BODY *********** */}
      {/* Removed the inline onload event */}
      <div>

        {/* SCROLL TOP */}
        <a href="#" className="scrolltop" id="scroll-top">
          <i className='bx bx-chevron-up scrolltop__icon'></i>
        </a>

        {/* HEADER */}
       <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="index.html">
            <img className="logo_space" src={logo} width="55px" alt="logo" />
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
           {/* AntD Menu Icon */}
           <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
        <MenuOutlined style={{ fontSize: '24px', color: '#000' }} />
      </div>

        </nav>
      </header>

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
              {/* Course Items */}
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

              {/* Add more course items as necessary */}
            </div>
          </section>

          <div className="sponsors-container">
  <h2>Our Students are selected in</h2>
  <div className="sponsors-list">
    <div className="sponsor-item">
      <img src="assets/img/sap.png" alt="Sponsor 1" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/Deloitte-logo.png" alt="Sponsor 2" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/HPE-Logo.png" alt="Sponsor 1" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/ey.png" alt="Sponsor 2" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/Jio-Logo.png" alt="Sponsor 3" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/ptc.png" alt="Sponsor 3" />
    </div>
    <div className="sponsor-item">
      <img src="assets/img/Vodafone-Logo.png" alt="Sponsor 3" />
    </div>
    <h1> </h1>

    <a href="Community.html">
      <h2 style={{ color: 'gray' }}>+ much more..</h2>
    </a>
  </div>
</div>

<footer className="footer section bd-container">
  <div className="footer__container bd-grid">
    <div className="footer__content">
      <a href="index.html" className="footer__logo">MahaVastu Santulan</a>
      <span className="footer__description">Programming & Development</span>
      <div>
        <a href="https://www.linkedin.com/company/coding-beyond/about/?viewAsMember=true" className="footer__social">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://www.instagram.com/codingbeyond/" className="footer__social">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://twitter.com/codingbeyonds" className="footer__social">
          <i className='bx bxl-twitter'></i>
        </a>
        <a href="https://www.youtube.com/@codingbeyond" className="footer__social">
          <i className='bx bxl-youtube'></i>
        </a>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Services</h3>
      <ul>
        <li><a href="Courses.html" className="footer__link">Live Courses</a></li>
        <li><a href="Internship.html" className="footer__link">Internship</a></li>
        <li><a href="Internship.html" className="footer__link">Campus Ambassador</a></li>
        <li><a href="Internship.html" className="footer__link">Job opportunities</a></li>
      </ul>
    </div>

    <div className="footer__content services__description_desktop">
      <h3 className="footer__title">Helpful Links</h3>
      <ul>
        <li><a href="mailto:codingbeyonds@gmail.com" className="footer__link">Get in touch</a></li>
        <li><a href="mailto:codingbeyonds@gmail.com" className="footer__link">Contact us</a></li>
        <li><a href="Community.html" className="footer__link">Privacy policy</a></li>
        <li><a href="Community.html" className="footer__link">Terms of services</a></li>
      </ul>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Contact us</h3>
      <ul>
        <li><b>MahaVastu Santulan Office (Main Branch)</b></li>
        <li>Pune, India</li>
        <li><b>Coding Beyond Office</b></li>
        <li>Nagpur, India</li>
        <li>codebeyonds@email.com</li>
      </ul>
    </div>
  </div>

  <p className="footer__copy">Copyright &#169; 2023 MahaVastu Santulan.</p>
</footer>

        </main>
      </div>
    </div>
  );
};

export default HomePage;
