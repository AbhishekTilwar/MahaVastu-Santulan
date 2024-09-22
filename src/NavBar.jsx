import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logohead from './assets/img/logo_icon.svg'; 
import { useAnimation, motion } from 'framer-motion';

const NavBar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // To track the scroll position
  const controls = useAnimation();

  const toggleMenu = () => {
    if (isMenuOpen) {
      controls.start({ height: 0, opacity: 0 });
    } else {
      controls.start({ height: 'auto', opacity: 1 });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle scroll event for header transparency
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenu);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header 
    className="l-header" 
    id="header"
    style={{
      backgroundColor: scrollPosition > 50 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
      transition: 'background-color 0.3s ease',
    }}
  >
  
      <nav className="nav bd-container_main">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <img className="logo_space" src={logohead} width="45px" alt="logo" />
        </motion.div>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="Courses.html" className="nav__link">Vastu</a>
            </li>
            <li className="nav__item">
              <a href="Internship.html" className="nav__link">Consultation</a>
            </li>
            <li className="nav__item">
              <a href="Community.html" className="nav__link">Contact Us</a>
            </li>
            <li className="nav__item theme-switcher-container">
              <div className="theme-switcher">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <Switch
                    checkedChildren={<span role="img" aria-label="moon">🌙</span>}
                    unCheckedChildren={<span role="img" aria-label="sun">☀️</span>}
                    checked={darkMode}
                    onChange={toggleTheme}
                    id="theme-button"
                  />
                </motion.div>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <CloseOutlined style={{ color: '#d12336' }} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MenuOutlined style={{ color: '#b58001' }} />
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
