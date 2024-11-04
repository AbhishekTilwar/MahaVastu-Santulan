// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Input, Rate, Button, Upload, Radio } from 'antd';
// import { UploadOutlined, HeartTwoTone } from '@ant-design/icons';
// import './CustomerReviews.css';
// import { PlusCircleOutlined, MessageOutlined } from '@ant-design/icons';

// const { TextArea } = Input;

// const defaultAvatarMale = 'https://cdn-icons-png.flaticon.com/512/4140/4140074.png';
// const defaultAvatarFemale = "https://cdn-icons-png.flaticon.com/512/6833/6833605.png";

// const initialReviews = [
//   {
//     name: 'Rakesh Sharma',
//     review: 'The Vastu consultation has been life-changing! I felt a positive energy shift in my home.',
//     rating: 5,
//     date: 'July 22, 2023',
//     avatar: defaultAvatarMale,
//     likes: 45,
//   },
//   {
//     name: 'Jane Smith',
//     review: 'Highly recommended! The Vastu tips were extremely useful.',
//     rating: 4,
//     date: 'August 15, 2023',
//     avatar: defaultAvatarFemale,
//     likes: 16,
//   },
//   {
//     name: 'Raj Kumar',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 23,
//   },
//   {
//     name: 'Omkar Shinde',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 0,
//   },
//   {
//     name: 'Yash Patil',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 2,
//   },
// ];

// const CustomerReviews = () => {
//   const [reviews, setReviews] = useState(initialReviews);
//   const [visibleReviews, setVisibleReviews] = useState(10);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [showAll, setShowAll] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [floatingHearts, setFloatingHearts] = useState({});

//   const addReview = (values) => {
//     // Determine the default avatar based on gender selection
//     const newAvatar = values.gender === 'male' ? defaultAvatarMale : defaultAvatarFemale;

//     const newReview = {
//       name: values.name,
//       review: values.review,
//       rating: values.rating,
//       date: new Date().toLocaleDateString(),
//       avatar: values.avatar ? values.avatar.file.thumbUrl : newAvatar, // Use the uploaded image if present
//       likes: 0,
//     };

//     setReviews([newReview, ...reviews]);
//     form.resetFields();
//     setIsModalVisible(false);
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const toggleReviews = () => {
//     if (showAll) {
//       setVisibleReviews(10); // Reset to 10 reviews
//     }
//     setShowAll(!showAll);
//   };

//   const loadMoreReviews = () => {
//     setVisibleReviews((prev) => prev + 5);
//   };

//   const handleLike = (index) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index].likes += 1;
//     setReviews(updatedReviews);

//     // Trigger the floating heart animation
//     setFloatingHearts((prev) => ({
//       ...prev,
//       [index]: true,
//     }));

//     // Remove the floating heart after 1 second
//     setTimeout(() => {
//       setFloatingHearts((prev) => ({
//         ...prev,
//         [index]: false,
//       }));
//     }, 1000);
//   };

//   // Automatically transition reviews every 2 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 3));
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [reviews.length]);

//   // Function to format date as "X months ago"
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const monthsDiff = now.getMonth() - date.getMonth() + (12 * (now.getFullYear() - date.getFullYear()));
    
//     return monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
//   };

//   return (
//     <div className='about-section'>
//       <div className="reviews-container">
//         <h1>TESTIMONIALS</h1>
//         <h2>Our Clients Feedback.</h2>

//         {/* Display 2-3 reviews in colorful tiles */}
//         <div className="active-reviews-container">
//           {reviews.slice(0, 3).map((review, index) => (
//             <div key={index} className="active-review-card">
//               <div className="active-review-header">
//                 <img src={review.avatar} alt={review.name} className="review-avatar" />
//                 <div>
//                   <h3>{review.name}</h3>
//                   <span className="review-date">{formatDate(review.date)}</span>

//                   <div className="review-header-info">
//                     <Rate disabled value={review.rating} />
//                   </div>

//                 </div>
//               </div>
//               <p className="review-text">"{review.review}"</p>

//               {/* Heart like button with flying heart animation */}
//               <div className="like-container">
//                 <HeartTwoTone
//                   twoToneColor="#eb2f96"
//                   className="heart-icon"
//                   onClick={() => handleLike(index)}
//                 />
//                 <span className="like-count">{review.likes}</span>

//                 {/* Floating heart animation */}
//                 {floatingHearts[index] && <span className="floating-heart">❤️</span>}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Add and Show/Hide buttons in the same row */}
//         <div className="button-row">
//           {!showAll && (
//             <Button
//               className="transparent-button fancy-button" // Use the new transparent button class
//               onClick={toggleReviews}
//               icon={<MessageOutlined />}
//             >
//               Show More
//             </Button>
//           )}
//           <Button
//             type="primary"
//             onClick={showModal}
//             className="fancy-button"
//             icon={<PlusCircleOutlined />}
//           >
//             Write a Review
//           </Button>
//         </div>

//         {/* Display reviews when 'See All Comments' is clicked */}
//         {showAll && (
//           <>
//             <div className="all-reviews-container">
//               {reviews.slice(0, visibleReviews).map((review, index) => (
//                 <div key={index} className="review-card">
//                   <div className="review-header">
//                     <img src={review.avatar} alt={review.name} className="review-avatar" />
//                     <div>
//                       <h3>{review.name}</h3>
//                       <div className="review-header-info">
//                         <Rate disabled value={review.rating} />
//                         <span className="review-date">{formatDate(review.date)}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="review-text">"{review.review}"</p>
//                   <div className="like-container">
//                     <HeartTwoTone
//                       twoToneColor="#eb2f96"
//                       className="heart-icon"
//                       onClick={() => handleLike(index)}
//                     />
//                     <span className="like-count">{review.likes}</span>

//                     {/* Floating heart animation */}
//                     {floatingHearts[index] && <span className="floating-heart">❤️</span>}
//                   </div>
//                 </div>
//               ))}
//               {visibleReviews < reviews.length && (
//                 <Button className="load-more-button fancy-button" onClick={loadMoreReviews}>
//                   Load More Reviews
//                 </Button>
//               )}
//             </div>

//             {/* Hide reviews button below all reviews */}
//             <div className="button-container">
//               <Button className="fancy-hide-button" onClick={toggleReviews}>
//                 Hide Reviews
//               </Button>
//             </div>
//           </>
//         )}

//         {/* Modal form to add review */}
//         <Modal
//           title="Add a Review"
//           visible={isModalVisible}
//           onCancel={handleCancel}
//           footer={null}
//         >
//           <Form form={form} onFinish={addReview} layout="vertical">
//             <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
//               <Input placeholder="Enter your name" />
//             </Form.Item>

//             <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select your gender' }]}>
//               <Radio.Group>
//               <Radio value="male">Male</Radio>
// <Radio value="female">Female</Radio>
// </Radio.Group>
// </Form.Item>

// <Form.Item
//   name="review"
//   label="Review"
//   rules={[{ required: true, message: 'Please enter your review' }]}
// >
//   <TextArea rows={4} placeholder="Write your review here" />
// </Form.Item>

// <Form.Item
//   name="rating"
//   label="Rating"
//   rules={[{ required: true, message: 'Please give a rating' }]}
// >
//   <Rate />
// </Form.Item>

// <Form.Item
//   name="avatar"
//   label="Upload Profile Image"
// >
//   <Upload
//     listType="picture"
//     maxCount={1}
//     beforeUpload={() => false}
//   >
//     <Button icon={<UploadOutlined />}>Upload (Optional)</Button>
//   </Upload>
// </Form.Item>

// <Form.Item>
//   <Button type="primary" htmlType="submit">
//     Submit Review
//   </Button>
// </Form.Item>

//           </Form>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

import React, { useState, useEffect } from 'react';
import './CustomerReviews.css';
import { Divider } from 'antd';
import Quotes from '../assets/img/quotes.png'

const defaultAvatarMale = 'https://cdn-icons-png.flaticon.com/512/4140/4140074.png';
const defaultAvatarFemale = 'https://cdn-icons-png.flaticon.com/512/6833/6833605.png';

const testimonials = [
  {
    name: "Anjali Desai",
    title: "Architect",
    feedback: "As an architect, I understand the importance of harmony in space design. MahaVastu Santulan’s insights were invaluable in helping me create balanced and harmonious designs for my clients. I’ve seen nothing but positive feedback from my clients ever since!",
    image: defaultAvatarFemale
  },
  {
    name: "Rajeev Gupta",
    title: "IT Professional",
    feedback: "MahaVastu Santulan has completely transformed my business. The positive energy in my office is palpable, and I couldn’t be more grateful!",
    image: defaultAvatarMale
  },
  {
    name: "Neha Verma",
    title: "Interior Designer",
    feedback: "MahaVastu Santulan brought a new perspective to my work as an interior designer. Their recommendations helped me create spaces that not only look beautiful but also radiate positivity and balance. My clients love the results!",
    image: defaultAvatarFemale
  },
  {
    name: "Sandeep Malhotra",
    title: "Business owner",
    feedback: "I was struggling with business losses for years. After following MahaVastu Santulan’s advice, my business started thriving. Their Vastu solutions are practical and effective!",
    image: defaultAvatarMale
  },
  {
    name: "Meenal Joshi",
    title: "Teacher",
    feedback: "I had been facing a lot of stress and anxiety at home. After making the changes suggested by MahaVastu Santulan, there’s a noticeable calmness in our living space. It has had a profound impact on my mental well-being.",
    image: defaultAvatarFemale
  },
  {
    name: "Rakesh Mehra",
    title: "Business owner",
    feedback: "MahaVastu Santulan has completely transformed my business. After following their advice, I noticed an immediate increase in client engagement and overall growth. The positive energy in my office is palpable, and I couldn’t be more grateful!",
    image: defaultAvatarMale
  },
  {
    name: "Priya Sharma",
    title: "Homemaker",
    feedback: "I was facing constant health issues and disharmony in my family. After MahaVastu Santulan’s consultation, everything has changed for the better. Our home now feels peaceful, and the health problems have reduced drastically. Highly recommend their services!",
    image: defaultAvatarFemale
  },  
  {
    name: "Amit Sinha",
    title: "Real Estate Developer",
    feedback: "I consulted MahaVastu Santulan for one of my residential projects, and the results were incredible. The project sold out quicker than expected, and I believe it’s all thanks to the Vastu corrections they suggested. Will definitely seek their guidance for future projects!",
    image: defaultAvatarMale
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  // Automatic Slide
  useEffect(() => {
    const autoSlide = setInterval(handleNext, 3000); // Change every 3 seconds
    return () => clearInterval(autoSlide); // Clear on unmount
  }, [currentIndex, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + itemsToShow) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  return (
    <div className="testimonial-container">
      <h1>TESTIMONIALS</h1>
      <h2>Our Clients Feedback.</h2>

      {/* Display multiple testimonials */}
      <div className="testimonial-cards-wrapper">
        {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial, index) => (
          <div
            className={`testimonial-card ${itemsToShow === 3 && index === 1 ? 'center-card' : ''}`}
            key={index}
          >
            <img src={Quotes} alt="quote-icon" className="quote-icon" />

            <div className="testimonial-content">
              <div>{testimonial.feedback}</div>
            </div>
            <Divider style={{  borderWidth: '2px' }} />
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Pagination with Prev, Dots, and Next */}
      <div className="pagination-container">
        <button className="nav-button" onClick={handlePrev}>❮</button>
        <div className="custom-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default Testimonial;
