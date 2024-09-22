// SplashScreen.jsx
import React from 'react';
import logo from './assets/img/logo.svg'; // Adjust the path as necessary

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
