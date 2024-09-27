import React from "react";
import { motion } from "framer-motion";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import  logo  from "./assets/img/logo.svg";



const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Company Logo and Name */}
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <h2 className="company-name">MahaVastu Santulan</h2>
        </div>

        <h1 className="footer-heading">Balance Your Life with Vastu Energy</h1>
        <motion.p
          className="footer-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Vastu Shastra brings harmony to your home and life. Explore our tips and consultations to realign your space with positive energy.
        </motion.p>

        <motion.ul
          className="footer-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="footer-link"
          >
            <Tippy content="Know more about us" placement="top">
              <a href="/vastu">About Vastu</a>
            </Tippy>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="footer-link"
          >
            <Tippy content="Get expert advice" placement="top">
              <a href="/form">Consultation</a>
            </Tippy>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="footer-link"
          >
            <Tippy content="Read the latest tips" placement="top">
              <a href="#tips">Vastu Tips</a>
            </Tippy>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="footer-link"
          >
            <Tippy content="Check out our blog" placement="top">
              <a href="#blog">Vastu Blog</a>
            </Tippy>
          </motion.li>
        </motion.ul>

        <div className="footer-contact">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <Tippy content="Call Us" placement="top">
              <a href="tel:+1234567890">+ (91) 7020753306</a>
            </Tippy>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <Tippy content="Email Us" placement="top">
              <a href="mailto:info@vastu.com">info@mahavastusantulan.com</a>
            </Tippy>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <Tippy content="Visit Us" placement="top">
              <span>Akola, Maharashtra</span>
            </Tippy>
          </div>
        </div>

        <div className="social-icons">
          <Tippy content="Follow us on Facebook" placement="top">
            <motion.a whileHover={{ scale: 1.2 }} href="#facebook">
              <FaFacebook />
            </motion.a>
          </Tippy>
          <Tippy content="Follow us on Twitter" placement="top">
            <motion.a whileHover={{ scale: 1.2 }} href="#twitter">
              <FaTwitter />
            </motion.a>
          </Tippy>
          <Tippy content="Follow us on Instagram" placement="top">
            <motion.a whileHover={{ scale: 1.2 }} href="#instagram">
              <FaInstagram />
            </motion.a>
          </Tippy>
        </div>
      </motion.div>

      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
       <strong><p>&copy; Copyright ©2024 MahaVastu Santulan. </p></strong> 
       <p> All Rights Reserved | Designed, Developed & Maintained by <a href='https://codingbeyond.in'><strong class="white-text">CodingBeyond</strong></a></p>

      </motion.div>
    </footer>
  );
};

export default Footer;
