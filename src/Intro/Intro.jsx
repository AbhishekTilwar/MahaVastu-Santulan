import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import './Intro.css'; // Custom CSS for this section
import IntroGIF from '../assets/img/introGIF.gif';
import IntroGIF2 from '../assets/img/introGIF.gif';

const AboutSection = () => {
  const [currentGIF, setCurrentGIF] = useState(IntroGIF); // State to handle which GIF is displayed

  useEffect(() => {
    const gifInterval = setInterval(() => {
      setCurrentGIF((prevGIF) => (prevGIF === IntroGIF ? IntroGIF2 : IntroGIF)); // Switch between GIFs
    }, 5000); // Change GIF every 5 seconds

    return () => clearInterval(gifInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="about-section">
      <Row gutter={[16, 16]} align="middle" className="about-content">
        {/* Left Column for GIF */}
        <Col xs={24} md={12} className="about-gif">
          <div className="gif-container">
            <img src={currentGIF} alt="Consultation GIF" className="transition-gif" />
          </div>
        </Col>

        {/* Right Column for Text */}
        <Col xs={24} md={12}>
          <div className="about-text">
            <h5 className="about-subtitle">ABOUT US</h5>
            <h2 className="about-title">
              More than 10 Years we provide Vastu consultation service.
            </h2>
            <p className="about-description">
              At MahaVastu Santulan, we believe that harmonious spaces lead to fulfilled lives. 
              With a background in Architecture, Construction, and a passion for Vastu Shastra, 
              we’re here to transform your surroundings into vibrant, positive energy zones.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
