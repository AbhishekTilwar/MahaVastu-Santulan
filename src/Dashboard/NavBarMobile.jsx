import React, { useState } from 'react';
import { FaHome, FaSearch, FaChartPie, FaHistory, FaUser } from 'react-icons/fa';
import '../Dashboard/NavBarMobile.css'; // Import your custom CSS

const NavBar = () => {
  const [selected, setSelected] = useState('home');
  const [theme, setTheme] = useState('light'); // Theme toggling logic

  // Switch between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar-container ${theme}`}>
      <div className="navbar">
        <div
          className={`nav-item ${selected === 'home' ? 'active' : ''}`}
          onClick={() => setSelected('home')}
        >
          <FaHome />
          <span>Home</span>
        </div>
        <div
          className={`nav-item ${selected === 'search' ? 'active' : ''}`}
          onClick={() => setSelected('search')}
        >
          <FaSearch />
          <span>Search</span>
        </div>
        <div
          className={`nav-item ${selected === 'analytics' ? 'active' : ''}`}
          onClick={() => setSelected('analytics')}
        >
          <FaChartPie />
          <span>Analytics</span>
        </div>
        <div
          className={`nav-item ${selected === 'history' ? 'active' : ''}`}
          onClick={() => setSelected('history')}
        >
          <FaHistory />
          <span>History</span>
        </div>
        <div
          className={`nav-item ${selected === 'profile' ? 'active' : ''}`}
          onClick={() => setSelected('profile')}
        >
          <FaUser />
          <span>Profile</span>
        </div>
      </div>

      {/* Theme toggle button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default NavBar;
