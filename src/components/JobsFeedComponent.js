import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
import ApplyJobForm from './ApplyJobSubComponent.js';

const JobsFeed = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch jobs data from the server
    const fetchJobs = async () => {
      try {
        const response = await axios.get(apiEndpoints.feed);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle error or redirect to login if not logged in
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login page if not logged in
        }
      }
    };

    if (user) {
      fetchJobs();
    }
  }, [user, navigate]);

  const handleApplyClick = (jobId) => {
    setSelectedJob(jobId);
    navigate('/apply');
  };

  return (
    <div>
      <h2>Jobs Feed</h2>
      {/* Render the jobs here */}
      {jobs.map((job) => (
        <div key="">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          {/* Render other job details */}
          <button onClick={() => handleApplyClick(job.job_id)}>Apply</button>
        </div>
      ))}
         {selectedJob && (
        <ApplyJobForm jobId={selectedJob} />
      )}
  
    </div>
  );
};

export default JobsFeed;
