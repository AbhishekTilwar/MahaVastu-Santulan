import React from 'react';
import { Layout } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, 
         YoutubeOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import './Footer.css';

const { Footer } = Layout;

const CustomFooter = () => (
  <Footer className="footer">
  <div className="footer-section">
    <div className="footer-item">
      <a href="tel:+917020590037" className="contact-icon">
        <PhoneOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
      </a>
      <strong>
        <div>+91 7020590037 / 9619414885</div>
      </strong>
      <div>Contact</div>
    </div>
    <div className="footer-item">
      <a href="mailto:help@mahavastusantulan.com" className="contact-icon">
        <MailOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
      </a>
      <strong>
        <div>help@mahavastusantulan.com</div>
      </strong>
      <div>Mail</div>
    </div>
    <div className="footer-item">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Sindhi+Camp+Chowk,+Akola"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
      >
        <EnvironmentOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
      </a>
      <strong>
        <div>Sindhi Camp Chowk, Akola</div>
      </strong>
      <div>Address</div>
    </div>
  </div>
  <div className="footer-bottom">
    <div>© 2024 MahaVastu Santulan. All rights reserved.</div>

  <div className="social-icons">
  <a href="/terms" style={{ margin: '0 10px' }}>Terms</a>
  <a href="/privacy" style={{ margin: '0 10px' }}>Privacy</a>


    <a href="https://youtube.com/@MahaVastuSantulan-z5j" target="_blank" rel="noopener noreferrer">
      <YoutubeOutlined  className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a> */}
    <a href="https://instagram.com/maha_vastu_santulan/" target="_blank" rel="noopener noreferrer">
      <InstagramOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
    {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedinOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a> */}
  </div>
</div>

  </Footer>
);

export default CustomFooter;
