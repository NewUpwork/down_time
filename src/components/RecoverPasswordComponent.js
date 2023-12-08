import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';
import axios from 'axios';

const PasswordRecoveryForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      const response = await axios.post(apiEndpoints.recover, {
        email: userEmail,
      });

      console.log(response.data.message);
      // You may also display a success message to the user

      // Assuming you want to navigate to a success page after recovery
      navigate('/password-recovery-success');
    } catch (error) {
      console.error('Error:', error.response.data.error);
      // Handle the error, perhaps display an error message to the user
    }
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <button onClick={handlePasswordRecovery}>Recover Password</button>
    </div>
  );
};

export default PasswordRecoveryForm;
