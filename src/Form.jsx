import React, { useState } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd';
import { motion } from 'framer-motion'; // Import framer-motion for animation

const { Option } = Select;

const VastuForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    // Show the modal on submit
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    form.resetFields(); // Reset the form after submission
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
          paddingTop: '25vh' // Push form down by 25% of the viewport height for PC
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Get Vastu Consultation</h2>
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
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: 'Please enter your phone number' },
                { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

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
