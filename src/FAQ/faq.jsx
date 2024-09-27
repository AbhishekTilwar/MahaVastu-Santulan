import React from 'react';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './faq.css'; // Ensure you have your CSS for additional styling

const { Panel } = Collapse;

const FAQ = () => {
  const faqs = [
    {
      question: "What is Vastu Shastra?",
      answer: "Vastu Shastra is an ancient Indian architectural science that provides guidelines on how to design buildings in harmony with nature. It encompasses various aspects such as the site selection, layout, spatial arrangements, and the use of elements to optimize the flow of energy. Adhering to Vastu principles is believed to lead to a more balanced and prosperous environment."
    },
    {
      question: "How can Vastu benefit my home?",
      answer: "Implementing Vastu principles in your home can significantly enhance the quality of life for its occupants. It is believed to promote health, wealth, and overall well-being by ensuring a balanced flow of energy throughout the living space. Properly designed environments can reduce stress and encourage positivity, fostering a sense of peace and harmony."
    },
    {
      question: "Do I need to remodel my home for Vastu?",
      answer: "Remodeling is not always necessary to incorporate Vastu principles. Many guidelines can be applied through simple adjustments such as rearranging furniture, decluttering spaces, and optimizing the use of colors and elements. Minor changes like these can create a more harmonious environment without significant renovations."
    },
    {
      question: "Can Vastu be applied to commercial spaces?",
      answer: "Absolutely! Vastu principles can be effectively utilized in commercial spaces, including offices, retail shops, and factories. By ensuring that the workspace is designed according to Vastu, businesses can enhance productivity, improve employee satisfaction, and attract more customers. A well-designed commercial space can contribute to the overall success of the business."
    },
    {
      question: "How can I consult a Vastu expert?",
      answer: "To consult a Vastu expert, you can reach out through our 'Consult Us Now' section on the website. Our qualified consultants will provide personalized guidance based on your specific needs and the layout of your space. This consultation can help you understand how to implement Vastu principles effectively to achieve your goals."
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <Collapse 
        accordion 
        bordered={false} 
        expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
      >
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
