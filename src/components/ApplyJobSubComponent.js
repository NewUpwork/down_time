import React, { useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext';
import './styles/applyPage.css';
import SelectedJob from './SelectedJob.js';

const ApplyJobForm = ({ jobId, onApplySuccess }) => {
  const [statusMessage, setStatusMessage] = useState('');
  const { user } = useUserContext();
  const [attachment, setAttachment] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');



  const handleApply = async () => {
    try {
      const response = await axios.post(apiEndpoints.applyJob, {
        userId: user.userId,
        jobId: jobId,
        coverLetter: coverLetter,
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
      <SelectedJob jobId={jobId} />
      </section>
      <section className='application form'>
        <div>
          <h3>Apply for Job</h3>
          <label>
            Cover Letter:
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </label>
          <label>
            Attach File:
            <input
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </label>
          <button onClick={handleApply}>Submit Application</button>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </section>
    </main>
  );
  
}  

export default ApplyJobForm;
