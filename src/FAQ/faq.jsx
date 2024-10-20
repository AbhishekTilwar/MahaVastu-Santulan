import React from 'react';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './faq.css'; // Ensure your CSS includes styles for the updated look

const { Panel } = Collapse;

const FAQ = () => {
  const faqs = [
   
    {
      question: "Is online consultation possible and effective?",
      answer: "Yes, online Vastu consultancy is possible if an accurate 'to scale' building plan and exact Northing can be made available. Results will vary for personal as well as online Vastu consultation if these two pieces of information are not correct. Vaastu Devayah Namah experts have been providing online Vastu consultancy services to overseas patrons for many years, making full utilization of technology."
    },
    {
      question: "Is Vastu effective and logical?",
      answer: "Vastu principles are well thought out, researched, tested, and proven to be true for many centuries now. There is not a single exception to prove that Vastu is not logical or effective. Just as two atoms of hydrogen and one atom of oxygen combine to make water, Vastu principles, when followed diligently, will always be effective in establishing harmony with nature."
    },
    {
      question: "Are there any side effects or disadvantages of Vastu?",
      answer: "Vastu is all about living in harmony with nature. There are absolutely no side effects of following Vastu principles. Just as the first rule for a healthy body is to consume healthy food, it is necessary to keep the energies of our homes and workplaces pure and positive to attract health, wealth, and prosperity."
    },
    {
      question: "Is it possible to remove Vastu dosha from an already constructed building?",
      answer: "Yes, it is very much possible to remove Vastu dosha from an already constructed building without any demolition or deconstruction. Vastu solutions practiced by Team Vastu Devayah Namah are inexpensive, simple, and easy to apply practical techniques. The results are usually felt in real-time."
    },
    {
      question: "Is it possible to correct Vastu dosha without any demolition?",
      answer: "Yes, it is possible to correct Vastu dosha without demolition. Simple adjustments and practical solutions can help align your space with Vastu principles."
    },
    {
      question: "What exactly is Vastu Shastra?",
      answer: "Vastu Shastra is a traditional Indian science of architecture that focuses on creating harmonious living spaces by aligning structures with the natural forces and energies present in the environment."
    },
    {
      question: "Why is Vastu so important for a house?",
      answer: "Vastu is important for a house because it helps in creating a balanced environment that promotes peace, prosperity, and well-being for its occupants. A home built with Vastu principles fosters a positive energy flow that can lead to a happier and healthier life."
    },
    {
      question: "How effective is Vastu?",
      answer: "Vastu is highly effective when its principles are applied correctly. Many individuals have reported positive changes in their lives, including improved health, increased wealth, and enhanced overall well-being after implementing Vastu guidelines."
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <h2 style={{ marginBottom: '5%' }}>Explore Common Questions.</h2>
      <Collapse 
        accordion 
        bordered={false} 
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          isActive ? <MinusOutlined className="faq-icon" /> : <PlusOutlined className="faq-icon" />
        )}
      >
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index} className="faq-panel">
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
