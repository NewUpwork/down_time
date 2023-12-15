import React, { useEffect, useState } from 'react';
import "./styles/header.css";
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import yourLogo from './images/logo.svg';
import defaultProfilePicture from '../assets/images/User-avatar.svg';
import ProfileCard from './ProfileCard.js';


const Header = () => {
  const { user, updateUser } = useUserContext();
  const [showProfileCard, setShowProfileCard] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
  
    if (storedUserData) {
      updateUser(JSON.parse(storedUserData));
    }
  }, [updateUser]);


  return (
    <div className="header-container">
      <div className="left-section">
        {user ? (
          <Link to="/home">
            <h1>
              <img src={yourLogo} alt="Downtime Logo" className="logo" />
            </h1>
          </Link>
        ) : (
          <Link to="/login"> {/* Fixed the typo here: "/lgoin" to "/login" */}
            <h1>
              <img src={yourLogo} alt="Downtime Logo" className="logo" />
            </h1>
          </Link>
        )}
      </div>
      <div className="center-section">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-section">
        {user ? (
          <div>
            <div onClick={() => setShowProfileCard(!showProfileCard)}>
              <img
                src={user.profilePicture || defaultProfilePicture} 
                alt="Profile"
                style={{ width: '50px', height: '50px', cursor: 'pointer' }}
              />
            </div>
            {showProfileCard && <ProfileCard user={user} />}
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
            <Link to="/register">
              <button className="button1">Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;