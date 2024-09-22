import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { Popover, Button } from 'antd';
import { PhoneOutlined, MessageOutlined, WechatOutlined } from '@ant-design/icons'; // Import Ant Design icons
import MainGif from './assets/img/Main.gif';
import NavBar from './NavBar'; // Import the NavBar component
import Footer from './Footer'; // Import the Footer component
import SplashScreen from './SplashScreen'; // If SplashScreen is also a separate component

const App = () => {
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

  // Contact options (chat and call)
  const contactContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button type="primary" icon={<MessageOutlined />} style={{ marginBottom: '10px' }}>
        Chat with Us
      </Button>
      <Button type="primary" icon={<PhoneOutlined />}>
        Call Us
      </Button>
    </div>
  );

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
                  <img 
                    src={MainGif} 
                    alt="Header Image" 
                    style={{
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      clipPath: 'inset(0 0 10% 0)'
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="menu section bd-container" id="menu">
              <h2 className="section-title">Best Vastu Consultant in India  </h2>
              <h1 className="section-subtitle">Promising Health, Wealth & Prosperity</h1>
              <div className="menu__containers bd-grid">
                {/* <div className="menu__content">
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
                </div> */}
              </div>
            </section>

            <div className="sponsors-container">
              <h2>Effective Vastu Solutions,
              No Superstition, No Frills, No Demolition</h2>
              {/* <motion.div
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
              */}
            </div>
          </main>

          <Footer /> {/* Use Footer here */}

          <Popover content={contactContent} title="Contact Us" trigger="click">
  <Button 
    type="primary" 
    shape="circle" 
    icon={<WechatOutlined style={{ fontSize: '26px' }} />}  // Increased icon size
    style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 1000, 
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
      width: '50px',  // Button size
      height: '50px', // Button size
      backgroundColor:'#ffb401',

      lineHeight: '60px', // Align icon vertically
      animation: 'blink 2.5s infinite' // Apply blink animation
    }} 
  />
</Popover>

{/* Add this CSS to your App.css or in the same JSX file */}
<style>
  {`
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `}
</style>

        </>
      )}
    </div>
  );
};

export default App;
