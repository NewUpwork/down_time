import React, { useState } from 'react';
import { apiEndpoints } from '../config/apiConfig.js';
import axios from 'axios';
import './styles/passwordRecoveryForm.css'; 

const PasswordRecoveryForm = () => {
  const [userEmail, setUserEmail] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      const response = await axios.post(apiEndpoints.recover, {
        email: userEmail,
      });

      console.log(response.data.message);


    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  return (
    <div className='recovery-form'>
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
