import React, { useEffect } from 'react';
import axios from 'axios'; 
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import JobPost from './JobPostingComponent.js';
import JobsFeed from './JobsFeedComponent.js';

const WelcomePage = () => {
  const { user, updateUser }  = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
  
    if (storedUserData) {
      updateUser(JSON.parse(storedUserData));
    }
  }, [updateUser]);




  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <>
          <h1>Welcome, {user.firstName}!</h1>
          <p>Thank you for joining us!</p>
          <p>Sit back, relax, and keep detached out! We're working hard to bring you the downtime content.</p>
          <p>Stay tuned for more updates!</p>
          {user.role === 'client' && <JobPost />}
          {user.role === 'freelancer' && <JobsFeed />}
      

        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default WelcomePage;
