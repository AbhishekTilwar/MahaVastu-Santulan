import React from 'react';
import './VastuPage.css'; // Ensure you create this CSS file for styling
import GIF from './assets/img/Main.gif'
import Vastu from './assets/img/vastu1.jpg'
import FAQ from './FAQ/faq'; // Adjust the import path accordingly

const VastuPage = () => {
  return (
    <div className="vastu-container">
      <header className="vastu-header">
      <img 
                  src={GIF} 
                  alt="Header Image" 
                  style={{
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    clipPath: 'inset(0 0 10% 0)'
                  }}
                />
        <h1>Vastu Shastra</h1>
      </header>
      <section className="vastu-content">
        <p>
          Vastu Shastra is an ancient Indian architectural science that emphasizes the importance of harmonious living spaces. Rooted in the principles of energy flow, Vastu aims to create environments that foster health, happiness, and prosperity. By aligning your home or workspace with natural elements, you can enhance your overall well-being and success.
        </p>
        <p>
          The practice of Vastu involves strategic placement of rooms, furniture, and decor to optimize the energy in your environment. From the direction of your entrance to the positioning of your furniture, every aspect plays a vital role in creating a balanced space that nurtures your life.
        </p>
      </section>
      <footer className="vastu-footer">
        <img
          src={Vastu} // Replace with the actual path to your image
          alt="Vastu Fact"
          className="vastu-image"
         
        />
        <footer>
        <p className="vastu-fact">
          Did you know? A well-structured Vastu-compliant home can significantly enhance the prosperity and well-being of its inhabitants.
        </p>
        <p></p>
        </footer>
      </footer>
      <FAQ/>
    </div>
  );
};

export default VastuPage;
