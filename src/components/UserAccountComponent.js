import React, { useEffect } from 'react';
import axios from 'axios'; 
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

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
      <button onClick={deleteUser}>Delete Account</button>
    </div>
  );
}

export default UserAccount;
