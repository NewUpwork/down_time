import React, { useEffect } from 'react';
import axios from 'axios'; 
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';

const UserAccount = () => {
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
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error.response.data.msg);
      // Handle error
    }
  };
  const handleLogout = async () => {
    try {
      await axios.post(apiEndpoints.logout, user.accessToken);
      updateUser(null);
      localStorage.removeItem('userData'); 
      navigate("/"); // Navigate to the login page or any other page you desire
      console.log('Logout successful');
      // Perform any additional actions after successful logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };  

  return (
    <div className="profile-card">
      <h2>User Profile</h2>

      {/* Iterate over user data and display in card */}
      {Object.keys(user).map((key) => (
        <div key={key} className="profile-info">
          <span className="property">{key}:</span>
          <span className="value">{user[key]}</span>
        </div>
      ))}

      {/* Button to delete user */}
      <button onClick={handleLogout}>Logout</button>
      <button onClick={deleteUser}>Delete Account</button>
    </div>
    
  );
  
  
}

export default UserAccount;
