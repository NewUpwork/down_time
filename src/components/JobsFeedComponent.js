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

  useEffect(() => {
    if (selectedJob !== null) {
      navigate('/apply', { state: { jobId: selectedJob } });
    }
  }, [selectedJob, navigate]);

  const handleApplyClick = (jobId) => {
    setSelectedJob(jobId);
  };

  return (
    <div>
      <h2>Jobs Feed</h2>
      {jobs.map((job) => (
        <div key={job.job_id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <button onClick={() => handleApplyClick(job.job_id)}>Apply</button>
        </div>
      ))}
      {selectedJob && <ApplyJobForm jobId={selectedJob}/> }
    </div>
  );
};

export default JobsFeed;
