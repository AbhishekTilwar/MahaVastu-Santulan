import React, { useEffect, useState } from 'react';
import './CoFounders.css';

const cofounders = [
  {
    name: "John Doe",
    title: "Co-Founder & CEO",
    description: "An expert in Vastu Shastra with over 10 years of experience in the field.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" // Replace with actual image path
  },
  {
    name: "Jane Smith",
    title: "Co-Founder & Architect",
    description: "Specializes in sustainable architecture and integrating Vastu principles.",
    image: "https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-man-512.png" // Replace with actual image path
  },
  {
    name: "Mike Johnson",
    title: "Co-Founder & Consultant",
    description: "Provides consultancy services to clients looking to improve their spaces through Vastu.",
    image: "https://www.shareicon.net/data/512x512/2016/09/15/829473_man_512x512.png" // Replace with actual image path
  },
];

const CoFounders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cofounders.length);
    }, 4000); // Change every 4 seconds (2 seconds slide + 2 seconds display)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="cofounders-container">
      <h2>Meet Our Co-Founders</h2>
      <div className={`cofounders ${window.innerWidth < 768 ? 'mobile' : ''}`}>
        {cofounders.map((cofounder, index) => (
          <div
            className={`cofounder-card ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={cofounder.image} alt={cofounder.name} className="cofounder-image" />
            <h3>{cofounder.name}</h3>
            <h4>{cofounder.title}</h4>
            <p>{cofounder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoFounders;