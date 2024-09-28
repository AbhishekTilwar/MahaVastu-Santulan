import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Rate, Button, Upload } from 'antd';
import { UploadOutlined, HeartTwoTone } from '@ant-design/icons';
import './CustomerReviews.css';
import { PlusCircleOutlined, MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s';

const initialReviews = [
  {
    name: 'Rakesh Sharma',
    review: 'The Vastu consultation has been life-changing! I felt a positive energy shift in my home.',
    rating: 5,
    date: 'July 22, 2023',
    avatar: defaultAvatar,
    likes: 45,
  },
  {
    name: 'Jane Smith',
    review: 'Highly recommended! The Vastu tips were extremely useful.',
    rating: 4,
    date: 'August 15, 2023',
    avatar: "https://i.pinimg.com/564x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg",
    likes: 16,
  },
  {
    name: 'Raj Kumar',
    review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
    rating: 5,
    date: 'September 5, 2023',
    avatar: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
    likes: 23,
  },
  {
    name: 'Omkar Shinde',
    review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
    rating: 5,
    date: 'September 5, 2023',
    avatar: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
    likes: 0,
  },
  {
    name: 'Yash Patil',
    review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
    rating: 5,
    date: 'September 5, 2023',
    avatar: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
    likes: 0,
  },
];

const CustomerReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [visibleReviews, setVisibleReviews] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState({});

  const addReview = (values) => {
    const newReview = {
      name: values.name,
      review: values.review,
      rating: values.rating,
      date: new Date().toLocaleDateString(),
      avatar: values.avatar ? values.avatar.file.thumbUrl : defaultAvatar,
      likes: 0,
    };
    setReviews([newReview, ...reviews]);
    form.resetFields();
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleReviews = () => {
    if (showAll) {
      setVisibleReviews(10); // Reset to 10 reviews
    }
    setShowAll(!showAll);
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  const handleLike = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].likes += 1;
    setReviews(updatedReviews);

    // Trigger the floating heart animation
    setFloatingHearts((prev) => ({
      ...prev,
      [index]: true,
    }));

    // Remove the floating heart after 1 second
    setTimeout(() => {
      setFloatingHearts((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1000);
  };

  // Automatically transition reviews every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 3));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  return (
    <div className="reviews-container">
      <h2>What our Customer Says</h2>

      {/* Display 2-3 reviews in colorful tiles */}
      <div className="active-reviews-container">
        {reviews.slice(0, 3).map((review, index) => (
          <div key={index} className="active-review-card">
            <div className="active-review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div>
                <h3>{review.name}</h3>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <p className="review-text">"{review.review}"</p>
            <Rate disabled value={review.rating} />

            {/* Heart like button with flying heart animation */}
            <div className="like-container">
              <HeartTwoTone
                twoToneColor="#eb2f96"
                className="heart-icon"
                onClick={() => handleLike(index)}
              />
              <span className="like-count">{review.likes}</span>

              {/* Floating heart animation */}
              {floatingHearts[index] && <span className="floating-heart">❤️</span>}
            </div>
          </div>
        ))}
      </div>

     {/* Add and Show/Hide buttons in the same row */}
<div className="button-row">
  <Button
    type="primary"
    onClick={showModal}
    className="fancy-button"
    icon={<PlusCircleOutlined />}
  >
    Add Review
  </Button>
  {!showAll && (
    <Button
      type="default"
      onClick={toggleReviews}
      className="fancy-button"
      icon={<MessageOutlined />}
    >
      See All Comments
    </Button>
  )}
</div>


      {/* Display reviews when 'See All Comments' is clicked */}
      {showAll && (
        <>
          <div className="all-reviews-container">
            {reviews.slice(0, visibleReviews).map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div>
                    <h3>{review.name}</h3>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <p className="review-text">"{review.review}"</p>
                <Rate disabled value={review.rating} />
                <div className="like-container">
                  <HeartTwoTone
                    twoToneColor="#eb2f96"
                    className="heart-icon"
                    onClick={() => handleLike(index)}
                  />
                  <span className="like-count">{review.likes}</span>

                  {/* Floating heart animation */}
                  {floatingHearts[index] && <span className="floating-heart">❤️</span>}
                </div>
              </div>
            ))}
            {visibleReviews < reviews.length && (
              <Button className="load-more-button fancy-button" onClick={loadMoreReviews}>
                Load More Reviews
              </Button>
            )}
          </div>

          {/* Hide reviews button below all reviews */}
          <div className="button-container">
            <Button className="fancy-hide-button" onClick={toggleReviews}>
              Hide Reviews
            </Button>
          </div>
        </>
      )}

      {/* Modal form to add review */}
      <Modal
        title="Add a Review"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={addReview} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item name="review" label="Review" rules={[{ required: true, message: 'Please enter your review' }]}>
            <TextArea rows={4} placeholder="Write your review here" />
          </Form.Item>

          <Form.Item name="rating" label="Rating" rules={[{ required: true, message: 'Please give a rating' }]}>
            <Rate />
          </Form.Item>

          <Form.Item name="avatar" label="Upload Profile Image">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload (Optional)</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerReviews;
