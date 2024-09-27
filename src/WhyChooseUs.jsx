import React, { useEffect } from 'react';
import './WhyChooseUs.css'; // Import the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { TeamOutlined, BulbOutlined, GoldOutlined, FlagOutlined } from '@ant-design/icons';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS, animations last for 1000ms
  }, []);

  return (
    <section className="why-choose-us section bd-container" id="why-choose-us">
      <h2 className="section-title" data-aos="fade-up">Why Choose Us?</h2>
      <div className="why-choose-us__containers bd-grid">
        
        <div className="why-choose-us__content" data-aos="fade-right">
          <TeamOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Expertise Backed by Experience</h3>
          <p className="why-choose-us__detail">
            Our team consists of highly qualified Vastu consultants with extensive experience in architecture and Vastu Shastra. We integrate in-depth knowledge of Vastu principles with cutting-edge architectural insights to offer solutions that are both scientifically sound and aesthetically pleasing.
          </p>
        </div>

        <div className="why-choose-us__content" data-aos="fade-left">
          <BulbOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Personalized Vastu Solutions</h3>
          <p className="why-choose-us__detail">
            We understand that each space is unique, and so are your needs. Whether you’re planning a new construction, renovating an existing space, or simply seeking advice for a specific issue, we provide personalized Vastu solutions tailored to your individual requirements.
          </p>
        </div>

        <div className="why-choose-us__content" data-aos="fade-right">
          <GoldOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Proven Results</h3>
          <p className="why-choose-us__detail">
            Our clients consistently experience improved harmony, increased prosperity, and overall well-being after implementing our Vastu recommendations. Our results speak for themselves, with numerous satisfied clients who have benefited from our expertise.
          </p>
        </div>

        <div className="why-choose-us__content" data-aos="fade-left">
          <FlagOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Commitment to Quality</h3>
          <p className="why-choose-us__detail">
            We are committed to delivering the highest standards of service. Our meticulous approach ensures that every consultation is thorough, professional, and tailored to meet your specific needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
