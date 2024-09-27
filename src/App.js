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
import './Footer.css'; 
import VastuForm from './Form';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import ImageTileContainer from './ImageTileContainer';
import CoFounders from './CoFounders';
import Service from './WhyChooseUs';
import VastuPage from './VastuPage';
import { Divider } from 'antd';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

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
      image: 'https://homezonline.in/wp-content/uploads/2022/06/Modern-flat-roof-home-with-beautiful-exterior.jpg',
      link: '/vastu-for-homes',
    },
    {
      id: 2,
      title: 'Office',
      description: 'Vastu guidance for office spaces to enhance productivity.',
      image: 'https://www.rateitgreen.com/uploads/thumbnails/articles/700//0d824305917f0b4ed0b24076ba216d4600601bf0.jpg',
      link: '/vastu-for-office',
    },
    {
      id: 3,
      title: 'Shops / Showrooms',
      description: 'Attract more customers and improve sales.',
      image: 'https://info.retailspacesevent.com/hubfs/6%20Retail%20Showroom%20Concepts%20Worth%20Paying%20Attention%20To.jpg',
      link: '/vastu-for-shops',
    },
    {
      id: 4,
      title: 'Industries',
      description: 'Vastu solutions for industries to ensure smooth operations.',
      image: 'https://miro.medium.com/v2/resize:fit:1358/0*wE3Cme0OKVmx9X6S',
      link: '/vastu-for-industries',
    },
  ];

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <main className="l-main">
                  <section className="home" id="home">
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="home__container bd-container bd-grid"
                    >
                      <div className="home__data">
                        <h3 className="home__title">MahaVastu Santulan</h3>
                        <h3 className="home__subtitle">The promise to prosperity</h3>
                        <a href="/form" className="button-consult-mobile">Consult Us now</a>
                      </div>
                    </motion.div>
                  </section>
                  <CoFounders />
                  <Divider />

                  <section className="tiles-section">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                    </motion.div>

                    <h2 style={{ paddingTop: '10px' }}>VASTU CONSULTATION</h2>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ImageTileContainer tiles={tiles} isMobile={isMobile} />
                    </motion.div>

                    <div className="parent-element">
                      <Button href="/form" type="primary" shape="round" size="large" className="animated-button">
                        Consult Us now
                      </Button>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="vastu-solutions"
                    >
                      <h1>Unlock the Power of Positive Energy with Expert Vastu Solutions</h1>
                      <p>
                        At <strong>MahaVastu Santulan</strong>, we combine the ancient wisdom of Vastu Shastra 
                        with modern architectural expertise to help you create harmonious spaces that nurture 
                        your well-being and success. With a deep understanding of both traditional Vastu principles 
                        and contemporary design practices, our team of seasoned Vastu consultants is dedicated 
                        to transforming your living and working environments into sanctuaries of peace and prosperity.
                      </p>
                    </motion.div>
                  </section>

                  <Service />

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CustomerReviews />
                  </motion.div>
                </main>
              }
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/form" element={<VastuForm />} />
            <Route path="/Vastu" element={<VastuPage />} />
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
        </Router>
      )}
    </div>
  );
};

export default App;
