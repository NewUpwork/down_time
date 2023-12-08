import React, { useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext';

const ApplyJobForm = ({ jobId = 1, onApplySuccess }) => {
  const [coverLetter, setCoverLetter] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); // New state to hold status message
  const { user } = useUserContext();

  const handleApply = async () => {
    try {
      const user_id = user.userId;

      const response = await axios.post(apiEndpoints.applyJob, {
        user_id: user_id,
        job_id: jobId,
        cover_letter: coverLetter,
      });

      // Check the status code and set the appropriate status message
      if (response.status === 200) {
        setStatusMessage('Application submitted successfully');
        // If successful, trigger the onApplySuccess callback (you can customize this callback)
        if (typeof onApplySuccess === 'function') {
          onApplySuccess();
        }
      } else {
        setStatusMessage(response.data.msg); // Display the message from the server
      }
    } catch (error) {
      console.error('Error applying for the job:', error);
      setStatusMessage('An error occurred. Please try again.'); // Display a generic error message
    }
  };

  return (
    <div>
      <h3>Apply for Job</h3>
      <label>
        Cover Letter:
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </label>
      <button onClick={handleApply}>Submit Application</button>

      {/* Display the status message to the user */}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ApplyJobForm;
