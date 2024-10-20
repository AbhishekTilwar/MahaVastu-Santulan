import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd';
import { motion } from 'framer-motion';
import { db } from './firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import './Form.css'; // Add external CSS for input styling
import img1 from './assets/img/ele1.png';
import img2 from './assets/img/ele2.png';
import img3 from './assets/img/icon.png';
import { SendOutlined } from '@ant-design/icons';
import ImageTileContainer from './ImageTileContainer-form';

const { Option } = Select;

const VastuForm = () => {
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputFocus, setInputFocus] = useState({
    name: false,
    phone: false,
    email: false,
  });

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

  const tiles = [
    // your tile data here
  ];

  const handleSubmit = async (values) => {
    try {
      // Save form data to Firestore
      const docRef = await addDoc(collection(db, 'consultations'), {
        name: values.name,
        phone: values.phone,
        email: values.email,
        service: values.service,
        createdAt: new Date(),
      });
  
      console.log('Document written with ID: ', docRef.id);
      setIsModalVisible(true);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section>

<div
  style={{
    marginTop: '60px', // Adjust this value based on your NavBar's height
  }}
></div>

<div className="image-container">
        <motion.img
          src={img1}
          alt="Image 1"
          className="animated-image left-image"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={img3}
          alt="Image 3"
          className="animated-image center-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
          <motion.img
          src={img2}
          alt="Image 1"
          className="animated-image left-image"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {/* Your existing form layout and images */}
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Get Vastu Consultation
        </h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         <Form
  form={form}
  layout="vertical"
  onFinish={handleSubmit}
  initialValues={{ service: 'home' }}
>
  {/* Full Name Input */}
  <Form.Item
    label="Full Name"
    name="name"
    rules={[{ required: true, message: 'Please enter your full name' }]}
  >
    <Input placeholder="Enter your full name"
    onFocus={() => setInputFocus({ ...inputFocus, phone: true })}
    onBlur={() => setInputFocus({ ...inputFocus, phone: false })}
    className={`input-field ${inputFocus.phone ? 'focused' : ''}`} />
  </Form.Item>

  {/* Phone Number Input */}
  <Form.Item
  label="Phone Number"
  name="phone"
  rules={[{ required: true, message: 'Please enter your phone number' }]}
>
  <Input
    placeholder="Enter your phone number"
    onFocus={() => setInputFocus({ ...inputFocus, phone: true })}
    onBlur={() => setInputFocus({ ...inputFocus, phone: false })}
    className={`input-field ${inputFocus.phone ? 'focused' : ''}`}
  />
</Form.Item>


  {/* Email Input */}
  <Form.Item
    label="Email Address"
    name="email"
    rules={[
      { required: true, message: 'Please enter your email' },
      { type: 'email', message: 'Please enter a valid email address' },
    ]}
  >
    <Input placeholder="Enter your email"
    onFocus={() => setInputFocus({ ...inputFocus, phone: true })}
    onBlur={() => setInputFocus({ ...inputFocus, phone: false })}
    className={`input-field ${inputFocus.phone ? 'focused' : ''}`}
     />
  </Form.Item>

  {/* Vastu Service Select */}
  <Form.Item
    label="Vastu Service"
    name="service"
    rules={[{ required: true, message: 'Please select a Vastu service' }]}
  >
    <Select placeholder="Select a service">
      <Option value="house-check">Vastu Check For House</Option>
      <Option value="house-evaluation">Detailed Vastu Evaluation For House</Option>
      <Option value="plot-selection">Vastu For Plot Selection</Option>
      <Option value="plot-solution">Vastu Solution for Plot</Option>
      <Option value="office-check">Vastu Check For Office & Commercial Places</Option>
      <Option value="office-planning">Vastu Planning for Office & Commercial Places</Option>
      <Option value="office-evaluation">Detailed Vastu Evaluation For Office & Commercial Places</Option>
      <Option value="factory-vastu">Vastu For Factory</Option>
      <Option value="factory-evaluation">Detailed Vastu Evaluation For Factory</Option>
      <Option value="factory-planning">Vastu Planning & Design For Factory</Option>
      <Option value="flat-check">Vastu Check For Flat Selection</Option>
      <Option value="flat-evaluation">Detailed Vastu Evaluation For Flat / Apartments</Option>
      <Option value="flat-planning">Vastu Planning and Design</Option>
      <Option value="astro-vastu">Astro Vastu Consultancy</Option>
      <Option value="numerology">Numerology Consultation</Option>
      <Option value="astrology">Personal Astrology & Horoscope Consultation</Option>
      <Option value="other">Other</Option>
    </Select>
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" block icon={<SendOutlined/>}
    style={{
      backgroundColor: '#d12336',
      borderColor: '#ffffff',
      borderRadius: '5px',
      transition: '0.3s',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#FFC107';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#d12336';
      e.target.style.transform = 'scale(1)';
    }}>
      Submit
    </Button>
  </Form.Item>
</Form>

        </motion.div>

        {/* Modal for submission success */}
        <Modal
          title="Submission Successful"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <p>Thank you for your submission! We will get back to you shortly.</p>
        </Modal>
      </div>

      <section>
        <ImageTileContainer tiles={tiles} isMobile={isMobile} />
      </section>
    </section>
  );
};

export default VastuForm;
