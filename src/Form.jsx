import React, { useState } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import './Form.css'; // Add external CSS for input styling
import img1 from './assets/img/ele1.png'; // Import images
import img2 from './assets/img/ele2.png';
import img3 from './assets/img/icon.png';

const { Option } = Select;

const VastuForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputFocus, setInputFocus] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    setIsModalVisible(true);
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
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
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
          alt="Image 2"
          className="animated-image right-image"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>

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
            {/* Full Name Input with Floating Label */}
            <div className="input-wrapper">
              <Input
                type="text"
                id="name"
                placeholder=" "
                onFocus={() => setInputFocus({ ...inputFocus, name: true })}
                onBlur={() => setInputFocus({ ...inputFocus, name: false })}
                className={`input-field ${inputFocus.name ? 'focused' : ''}`}
              />
              <label htmlFor="name" className={`input-label ${inputFocus.name ? 'input-focused' : ''}`}>
                Full Name
              </label>
            </div>

            {/* Phone Number Input with Floating Label */}
            <div className="input-wrapper">
              <Input
                type="text"
                id="phone"
                placeholder=" "
                onFocus={() => setInputFocus({ ...inputFocus, phone: true })}
                onBlur={() => setInputFocus({ ...inputFocus, phone: false })}
                className={`input-field ${inputFocus.phone ? 'focused' : ''}`}
              />
              <label htmlFor="phone" className={`input-label ${inputFocus.phone ? 'input-focused' : ''}`}>
                Phone Number
              </label>
            </div>

            {/* Email Input with Floating Label */}
            <div className="input-wrapper">
              <Input
                type="email"
                id="email"
                placeholder=" "
                onFocus={() => setInputFocus({ ...inputFocus, email: true })}
                onBlur={() => setInputFocus({ ...inputFocus, email: false })}
                className={`input-field ${inputFocus.email ? 'focused' : ''}`}
              />
              <label htmlFor="email" className={`input-label ${inputFocus.email ? 'input-focused' : ''}`}>
                Email Address
              </label>
            </div>

            {/* Vastu Service Select */}
            <Form.Item
              label="Vastu Service"
              name="service"
              rules={[{ required: true, message: 'Please select a Vastu service' }]}
            >
              <Select placeholder="Select a service">
                <Option value="home">Home Consultation</Option>
                <Option value="office">Office Consultation</Option>
                <Option value="shop">Shop Consultation</Option>
                <Option value="factory">Factory Consultation</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: '#4CAF50',
                  borderColor: '#4CAF50',
                  borderRadius: '5px',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#45a049';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4CAF50';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </motion.div>

        <Modal
          title="Submission Successful"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <p>Thank you for your submission! We will get back to you shortly.</p>
        </Modal>
      </div>
    </section>
  );
};

export default VastuForm;  