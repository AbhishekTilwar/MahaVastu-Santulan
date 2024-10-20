// import React from 'react';
// import { Carousel } from 'antd';
// import './ImageTileContainer.css';

// const ImageTileContainer = ({ tiles }) => {
//   // Check if it's a mobile screen
//   const isMobile = window.innerWidth <= 768;

//   return (
//     <div className="tiles-section">
//       {isMobile ? (
//         // For mobile, use a Carousel
//         <Carousel autoplay autoplaySpeed={2000}>
//           {tiles.map(tile => (
//             <div key={tile.id} className="fancy-tile-container">
//               <div className="fancy-image-overlay">
//                 <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
//                 <div className="text-overlay">
//                   <h2>{tile.title}</h2>
//                   <p>{tile.description}</p>
//                   <a href={tile.link} className="tile-button">Know More</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       ) : (
//         // For desktop, use a responsive grid
//         <div className="tiles-grid">
//           {tiles.map(tile => (
//             <div key={tile.id} className="fancy-tile-container">
//               <div className="fancy-image-overlay">
//                 <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
//                 <div className="text-overlay">
//                   <h2>{tile.title}</h2>
//                   <p>{tile.description}</p>
//                   <a href={tile.link} className="tile-button">Know More</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageTileContainer;
import React from 'react';
import './ImageTileContainer.css'; // Import CSS for styles
import Industrial from './assets/img/Industrial.png';
import Commercial from './assets/img/Commercial.png';
import Residential from './assets/img/Residential.png';
import VastuOnline from './assets/img/Online Vastu.png';

const VastuServices = () => {
  return (
    <div className='about-section'>
    <div className="containerr">
      <h1>WHAT WE OFFER</h1>
      <h2>Vastu Services</h2>
      <p>Vastu is not a universal solution; it requires personalized approaches for different environments. Our experienced Vastu consultants
are here to provide tailored strategies that align with your specific needs. Let us help you harmonize the energies of your
surroundings to reach your objectives.</p>

      <div className="services">
        <div className="service">
          <img src={Residential} alt="Residential Vastu"/>
          <h3>Residential Vastu</h3>
          <p>From homes to apartments, we optimize energy flow to enhance health, relationships, and prosperity.</p>
        </div>
        <div className="service">
          <img src={Commercial} alt="Commercial Vastu"/>
          <h3>Commercial Vastu</h3>
          <p>Enhance the energy of your Offices, Shops and Hospitals to increase productivity, efficiency, and success.</p>
        </div>
        
        <div className="service">
          <img src={Industrial} alt="Industrial Vastu"/>
          <h3>Industrial Vastu</h3>
          <p>Optimize the layout and design of your factory or manufacturing unit to improve efficiency, reduce costs, and increase productivity.</p>
        </div>
        <div className="service">
          <img src={VastuOnline} alt="Online Vastu Consultation"/>
          <h3>Online Vastu Consultation</h3>
          <p>Enjoy personalized consultations online from the comfort of your home.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default VastuServices;
