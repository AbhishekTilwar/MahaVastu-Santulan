import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { PhoneOutlined, MessageOutlined,WhatsAppOutlined , WechatOutlined } from '@ant-design/icons'; 
import { Tooltip } from 'antd';

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
  <section className="home-contactus" id="home">
  <div
  style={{
    maxWidth: '20px',
    margin: '0 auto',
    padding: '20px',
    marginTop: '10px', // Adjust this value based on your NavBar's height
  }}
></div>


    <div className="home__container bd-container bd-grid">
      <div className="home__data">
        <h3 className="home__title" style={{ color: '#d12336' }}>MahaVastu Santulan</h3>
        <h3 className="home__subtitle">The promise to prosperity</h3>
        <h5>Welcome to MahaVastu Santulan, where we harmonize your living spaces with the ancient wisdom of Vastu Shastra. Our mission is to promote well-being and prosperity by aligning the energies of your environment with your personal and professional aspirations. With a team of experienced consultants, we offer personalized Vastu consultations that transform homes and workplaces into sanctuaries of positivity and balance.</h5>
        <a href="/form" className="button-consult-mobile">Consult Us now</a>
        <div className="button-container">
    <Tooltip title="Call us">
      <Button 
        type="primary" 
        shape="circle" 
        icon={<PhoneOutlined />} 
        className="animated-button"
        
      />
    </Tooltip>
    <Tooltip title="Chat with us">
      <Button 
        type="primary" 
        shape="circle" 
        icon={<WhatsAppOutlined />} 
        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }} 
        className="animated-button"
      />
    </Tooltip>
  </div>


      
                   
      </div>
      
    </div>
  </section>

  <section className="home-laptop" id="home">

    <div className="laptop">
      <div className="content">
        <iframe
          id="video"
          width="98%"
          height="100%"
          src="https://www.youtube.com/embed/HzGtmbdmUe4?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    
  </section>

  
</main>



        </>
      )}
    </div>
  );
};

export default HomePage;
