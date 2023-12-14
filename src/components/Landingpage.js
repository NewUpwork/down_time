import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import yourImage1 from './images/Firstimage.jfif'; 
import yourImage2 from './images/secondimage.jfif';
import './styles/landing.css';


const CustomComponent = () => {

  const { user, updateUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      navigate('/home');
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        updateUser(JSON.parse(storedUserData));
      }
    }
  }, [user, updateUser, navigate]);



  return (
      <div className='wrapper-landingpage'>

        <div className="first-element">
          <h2 className='intro-text'>Join us! Elevate your journey with our innovative startup.</h2>
          <img src={yourImage1} alt="First Element" className="element-image" />
        </div>

        <div className="second-element">
          <img src={yourImage2} alt="Second Element" className="element-image" />
          <div className="text-container">
            <p>"Elevate your projects with Downtime, the ultimate freelancing destination designed for simplicity, quality, and success."</p>
          </div>
        </div>
      </div>
  );
};

export default CustomComponent;
