import React, { useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext';
import './styles/applyPage.css';
import SelectedFreelancer from './SelectedFreelancer.js';


const InvitingFreelancer = ({ freelancerId, onApplySuccess }) => {
  const [statusMessage, setStatusMessage] = useState('');
  const { user } = useUserContext();
  const [attachment, setAttachment] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');



  const handleApply = async () => {
    try {
      const response = await axios.post(apiEndpoints.applyJob, {
        userId: user.userId,
        freelancerId: freelancerId,
        taskDescription: taskDescription,
        attachment: attachment
      });

      if (response.status === 200) {
        setStatusMessage('Application submitted successfully');
        if (typeof onApplySuccess === 'function') {
          onApplySuccess();
        }
      } else {
        setStatusMessage(response.data.msg);
      }
    } catch (error) {
      console.error('Error applying for the job:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <main className='apply-page'>
      <section className='selceted_job'>
        <SelectedFreelancer/>
      </section>
      <section className='application form'>
        <div>
          <h3>Invite to a Task</h3>
          <label>
            Task description:
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </label>
          <label>
            Attach project File:
            <input
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </label>
          <button onClick={handleApply}>Send Invitation</button>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </section>
    </main>
  );
  
}  

export default InvitingFreelancer;
