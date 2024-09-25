import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GoogleReviews.css'; // Optional, if you have a separate CSS file

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = 'ChIJXf5TjO-_1DsRcEmneNvPQto';  // Your Place ID
  const apiKey = process.env.REACT_APP_SERPAPI_KEY;  // Access API key from .env file

  useEffect(() => {
    const fetchReviews = async () => {
      const maxRetries = 3;
      for (let i = 0; i < maxRetries; i++) {
        try {
          const response = await axios.get(
            `/api/search.json?engine=google_maps_reviews&place_id=${placeId}&api_key=${apiKey}`
          );

          console.log(response.data); // Log response data for debugging
          
          // Set the reviews state with the fetched data
          setReviews(response.data.reviews); // Adjust this based on the actual structure of the response

          return; // Exit the loop on success
        } catch (error) {
          console.error(`Attempt ${i + 1} failed:`, error.message);
          if (i === maxRetries - 1) throw error; // Throw error on last attempt
        }
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  return (
    <div className="reviews-container">
      {reviews.length ? (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.author_name}</h4>
            <p>{review.text}</p>
            <span>Rating: {review.rating}</span>
          </div>
        ))
      ) : (
        <p>Loading reviews...</p>
      )}
    </div>
  );
};

export default GoogleReviews;
