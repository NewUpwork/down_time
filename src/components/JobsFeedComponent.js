import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
import useJobStore from '../context/jobStore.js';

const JobsFeed = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { setJobId } = useJobStore();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(apiEndpoints.feed);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);

        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    if (user) {
      fetchJobs();
    }
  }, [user, navigate]);

  const handleApplyClick = (jobId) => {
    setJobId(jobId);
    navigate('/apply')
  };

  return (
    <div className="job-container">
    <h2>Jobs Feed</h2>
    {jobs.map((job) => (
      <div key={job.job_id} className="form-group">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <div className="buttons">
          <button onClick={() => handleApplyClick(job.job_id)}>Apply</button>
        </div>
      </div>
    ))}
  </div>
);
};

export default JobsFeed;