import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const VastuForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    // Add your form submission logic here
  };

  return (
    <section>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2>Get Vastu Consultation</h2>
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
            <Select>
              <Option value="home">Home Consultation</Option>
              <Option value="office">Office Consultation</Option>
              <Option value="shop">Shop Consultation</Option>
              <Option value="factory">Factory Consultation</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default VastuForm;
