// CustomComponent.jsx
import React from 'react';
import yourImage1 from './images/Firstimage.jfif'; // Replace with your image paths
import yourImage2 from './images/secondimage.jfif'; // Replace with your image paths

const CustomComponent = () => {
  return (
    <div className='background-color-landingpage'>
    <div className='wrapper-landingpage'>
      {/* First Element */}
      <div className="first-element">
        <h2 className='intro-text'>Elevate your freelancing journey with our innovative startup.</h2>
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar-landingpage" />
          <button className="search-button">Search</button>
        </div>
        <img src={yourImage1} alt="First Element Image" className="element-image" />
      </div>

      {/* Second Element */}
      <div className="second-element">
        <img src={yourImage2} alt="Second Element Image" className="element-image" />
        <div className="text-container">
          <p>"Elevate your projects with Downtime, the ultimate freelancing destination designed for simplicity, quality, and success."</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomComponent;
