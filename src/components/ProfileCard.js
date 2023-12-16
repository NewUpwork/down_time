import React, { useEffect } from 'react';
import axios from 'axios'; 
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';
import './styles/profileCard.css';

const ProfileCard =  () => {
  const { user, updateUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
  
    if (storedUserData) {
      updateUser(JSON.parse(storedUserData));
    }
  }, [updateUser]);

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${user.userId}`);
      console.log('User deleted successfully');
     
    } catch (error) {
      console.error('Error deleting user:', error.response.data.msg);

    }
  };
  const handleLogout = async () => {
    try {
      await axios.post(apiEndpoints.logout, user.accessToken);
      updateUser(null);
      localStorage.removeItem('userData'); 
      navigate("/login"); 
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };  
  const displayedKeys = ['firstName', 'lastName', 'username', 'role'];

  return (
    <div className="profile-card">
    {displayedKeys.map((key) => (
      <div key={key} className="profile-info">
        <span className="property">{key}:</span>
        <span className="value">{user[key]}</span>
      </div>
      ))}
      <div className='buttons'>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={deleteUser}>Delete Account</button>
      </div>
    </div>
    
  );
  
  
}

export default ProfileCard;
