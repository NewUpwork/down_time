import React, { useEffect } from 'react';
import axios from 'axios'; 
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext';

const WelcomePage = () => {
  const { user, updateUser }  = useUserContext();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
  
    if (storedUserData) {
      updateUser(JSON.parse(storedUserData));
    }
  }, [updateUser]);


  const handleLogout = async () => {
    try {
      await axios.post(apiEndpoints.logout, user.accessToken);
      updateUser(null);
      localStorage.removeItem('userData'); // Clear user data from storage on logout
  
    } catch (error) {
      console.error('Logout failed:', error);
      console.log( user.accessToken)
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <>
          <h1>Welcome, {user.firstName}!</h1>
          <p>Thank you for joining us!</p>
          <p>Sit back, relax, and keep detached out! We're working hard to bring you the downtime content.</p>
          <p>Stay tuned for more updates!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default WelcomePage;
