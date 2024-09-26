import React from 'react';
import { Carousel } from 'antd';
import './ImageTileContainer.css';

const ImageTileContainer = ({ tiles }) => {
  // Check if it's a mobile screen
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="tiles-section">
      {isMobile ? (
        // For mobile, use a Carousel
        <Carousel autoplay autoplaySpeed={2000}>
          {tiles.map(tile => (
            <div key={tile.id} className="fancy-tile-container">
              <div className="fancy-image-overlay">
                <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
                <div className="text-overlay">
                  <h2>{tile.title}</h2>
                  <p>{tile.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        // For desktop, use a responsive grid
        <div className="tiles-grid">
          {tiles.map(tile => (
            <div key={tile.id} className="fancy-tile-container">
              <div className="fancy-image-overlay">
                <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
                <div className="text-overlay">
                  <h2>{tile.title}</h2>
                  <p>{tile.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageTileContainer;
