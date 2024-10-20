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
        <PhoneOutlined  className="contact-icon" style={{ fontSize: '24px', color: '#ffffff' }} />
        <strong><div>+91 9619414885 / 9619414885</div></strong>
        <div>Contact</div>
      </div>
      <div className="footer-item">
        <div className="contact-icon">
        <MailOutlined  style={{ fontSize: '24px', color: '#ffffff' }} />
        </div>
        <strong><div>help@mahavastusantulan.com</div></strong>
        <div>Mail</div>
      </div>
      <div className="footer-item">
        <EnvironmentOutlined  className="contact-icon" style={{ fontSize: '24px', color: '#ffffff' }} />
        <strong><div>Sindhi Camp Chowk, Akola</div></strong>
        <div>Address</div>
      </div>
    </div>
    <div className="footer-bottom">
  <div>© 2024 MahaVastu Santulan. All rights reserved.</div>
  <div className="social-icons">
  <a href="/terms" style={{ margin: '0 10px' }}>Terms</a>
  <a href="/privacy" style={{ margin: '0 10px' }}>Privacy</a>


    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <YoutubeOutlined style={{ fontSize: '24px' }} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookOutlined style={{ fontSize: '24px' }} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramOutlined style={{ fontSize: '24px' }} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedinOutlined style={{ fontSize: '24px' }} />
    </a>
  </div>
</div>

  </Footer>
);

export default CustomFooter;
