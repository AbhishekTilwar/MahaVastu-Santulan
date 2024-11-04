import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import logohead from './assets/img/main_logo.svg'; 
import { useAnimation, motion } from 'framer-motion';
import './NavBar.css'

const NavBar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const navigate = useNavigate();

  // Navigate to splash screen
  const handleClick = () => {
    navigate('/splashscreen');
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    controls.start({ height: isMenuOpen ? 0 : 'auto', opacity: isMenuOpen ? 0 : 1 });
  };

  // Close the menu
  const closeMenu = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  // Handle scroll position
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Add and remove event listeners
  useEffect(() => {
    window.addEventListener('scroll', closeMenu);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, closeMenu]);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <header 
      className="l-header" 
      id="header"
      style={{
        backgroundColor: scrollPosition > 50 ? '#d12336' : '#d12336',
        transition: 'background-color 0.3s ease',
      }}
    >
      <nav className="nav bd-container_main">
      <motion.div
  className="logo"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.2 }}  // Zoom in on hover
  whileTap={{ scale: 0.8 }}    // Zoom out on tap/click
  onClick={handleClick}
>
  <img className="logo_space" src={logohead} width="150px" alt="logo" />
</motion.div>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/vastu" className="nav__link" onClick={closeMenu}>Blogs</Link>
            </li>
            {/* <li className="nav__item">
              <Link to="/form" className="nav__link" onClick={closeMenu}>Consultation</Link>
            </li> */}
            <li className="nav__item">
            <Link to="/form">
              <Button type="primary" style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>
              Book appointment
              </Button>
            </Link>
            </li>
            {/* <li className="nav__item theme-switcher-container">
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
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  />
                </motion.div>
              </div>
            </li> */}
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
              <MenuOutlined style={{ color: '#ffffff' }} />
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

