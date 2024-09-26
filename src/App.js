import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { Tooltip, Popover, Button } from 'antd';
import { PhoneOutlined, MessageOutlined, WechatOutlined } from '@ant-design/icons'; 
import MainGif from './assets/img/Main.gif';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ContactUs from './Contact';
import Footer from './Footer'; 
import SplashScreen from './SplashScreen'; 
import { Card, Row, Col } from 'antd';
import './Footer.css'; 
import { Carousel } from 'antd';
import VastuForm from './Form';
import CustomerReviews from './CustomerReviews/CustomerReviews';  // Import the GoogleReviews component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageTileContainer from './ImageTileContainer';
import CoFounders from './CoFounders';
import Service from './WhyChooseUs';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const contactContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tooltip title="Chat with us">
        <Button type="primary" shape="circle" icon={<MessageOutlined />} style={{ marginBottom: '10px' }} />
      </Tooltip>
      <Tooltip title="Call us">
        <Button type="primary" shape="circle" icon={<PhoneOutlined />} />
      </Tooltip>
    </div>
  );
  const tiles = [
    {
      id: 1,
      title: 'Homes / Flats',
      description: 'Vastu tips for healthy living spaces in homes and apartments.',
      image: 'https://homezonline.in/wp-content/uploads/2022/06/Modern-flat-roof-home-with-beautiful-exterior.jpg',  // Replace with actual image URL
      link: '/vastu-for-homes',  // Replace with actual link
    },
    {
      id: 2,
      title: 'Office',
      description: 'Vastu guidance for office spaces to enhance productivity.',
      image: 'https://www.rateitgreen.com/uploads/thumbnails/articles/700//0d824305917f0b4ed0b24076ba216d4600601bf0.jpg',  // Replace with actual image URL
      link: '/vastu-for-office',  // Replace with actual link
    },
    {
      id: 3,
      title: 'Shops / Showrooms',
      description: 'Attract more customers and improve sales with Vastu for shops.',
      image: 'https://info.retailspacesevent.com/hubfs/6%20Retail%20Showroom%20Concepts%20Worth%20Paying%20Attention%20To.jpg',  // Replace with actual image URL
      link: '/vastu-for-shops',  // Replace with actual link
    },
    {
      id: 4,
      title: 'Industries',
      description: 'Vastu solutions for industries to ensure smooth operations.',
      image: 'https://miro.medium.com/v2/resize:fit:1358/0*wE3Cme0OKVmx9X6S',  // Replace with actual image URL
      link: '/vastu-for-industries',  // Replace with actual link
    },
    // {
    //   id: 5,
    //   title: 'Land / Plot Selection',
    //   description: 'Expert advice for selecting Vastu-compliant land or plots.',
    //   image: 'https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2021/07/Vaastu-Tips-for-Buying-a-Plot.png',  // Replace with actual image URL
    //   link: '/vastu-for-land',  // Replace with actual link
    // }

  ];
  
  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={
              <main className="l-main">
               <section className="home" id="home">
                <div className="home__container bd-container bd-grid">
                  <div className="home__data">
                    <h3 className="home__title">MahaVastu Santulan</h3>
                    <h3 className="home__subtitle">The promise to prosperity</h3>
                    <a href="/form" className="button-consult-mobile">Consult Us now</a>
                  </div>
              {/* <div className='maingif'>
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
                  

      
    </div> */}
    
  </div>
</section>
                  


      
<section className="tiles-section" >
<CoFounders/>
<h2 style={{ paddingTop: '-40px' }}>VASTU CONSULTATION</h2>


    <ImageTileContainer tiles={tiles} isMobile={isMobile} />

  <div className="parent-element">
                      <Button href= '/form' type="primary" shape="round" size="large" className="animated-button">
                        Consult Us now
                      </Button>
                    </div>

                    <div className="vastu-solutions">
            <h1>Unlock the Power of Positive Energy with Expert Vastu Solutions</h1>
            <p>
                At <strong>MahaVastu Santulan</strong>, we combine the ancient wisdom of Vastu Shastra 
                with modern architectural expertise to help you create harmonious spaces that nurture 
                your well-being and success. With a deep understanding of both traditional Vastu principles 
                and contemporary design practices, our team of seasoned Vastu consultants is dedicated 
                to transforming your living and working environments into sanctuaries of peace and prosperity.
            </p>
        </div>
</section>


       <Service/>
                
{/* 
 Mobile-only section
 <MobileSection /> */}

                <div className="sponsors-container">

                </div>

                <div>
                {/* <GoogleReviews />  Render the GoogleReviews component */}
                <CustomerReviews/>

                </div>
              </main>
            } />
            <Route path="/contact" element={<ContactUs />} /> 
            <Route path="/form" element={<VastuForm />} /> 

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />



          <Popover content={contactContent} title="" trigger="click">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<WechatOutlined style={{ fontSize: '33px', color:'#ffffff' }} />}
              style={{ 
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                zIndex: 1000, 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
                width: '65px',  
                height: '65px',
                backgroundColor:'#ffb401',
                lineHeight: '60px', 
                animation: 'blink 2.5s infinite',
                color:'#ffb401'
              }} 
            />
          </Popover>
          <style>
            {`
              @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
              }
            `}
          </style>
        </Router>
      )}
    </div>
  );
};

export default App;
