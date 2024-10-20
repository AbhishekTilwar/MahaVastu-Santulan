import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';
import { TeamOutlined, BulbOutlined, GoldOutlined, FlagOutlined } from '@ant-design/icons';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const contentBlocks = section.querySelectorAll('.why-choose-us__content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    contentBlocks.forEach(block => {
      observer.observe(block);
    });

    return () => {
      contentBlocks.forEach(block => observer.unobserve(block));
    };
  }, []);

  return (
    <section className="why-choose-us section bd-container" id="why-choose-us" ref={sectionRef}>
      <h1>WHY CHOOSE US?</h1>

      <div className="why-choose-us__containers bd-grid">
        <div className="why-choose-us__content">
          <TeamOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Expertise Backed by Experience</h3>
          <p className="why-choose-us__detail">
            Our team consists of highly qualified Vastu consultants with extensive experience in architecture and Vastu Shastra. We integrate in-depth knowledge of Vastu principles with cutting-edge architectural insights to offer solutions that are both scientifically sound and aesthetically pleasing.
          </p>
        </div>

        <div className="why-choose-us__content">
          <BulbOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Personalized Vastu Solutions</h3>
          <p className="why-choose-us__detail">
            We understand that each space is unique, and so are your needs. Whether you’re planning a new construction, renovating an existing space, or simply seeking advice for a specific issue, we provide personalized Vastu solutions tailored to your individual requirements.
          </p>
        </div>

        <div className="why-choose-us__content">
          <GoldOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Proven Results</h3>
          <p className="why-choose-us__detail">
            Our clients consistently experience improved harmony, increased prosperity, and overall well-being after implementing our Vastu recommendations. Our results speak for themselves, with numerous satisfied clients who have benefited from our expertise.
          </p>
        </div>

        <div className="why-choose-us__content">
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
