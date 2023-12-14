import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';

const AppliedJobs = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);
 

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        if (user) {
          const response = await axios.get(apiEndpoints.appliedJobs, {
            params: { userId: user.userId },
          });
  
          console.log(response.data);
  
          if (Array.isArray(response.data.applied_jobs)) {
            setAppliedJobs(response.data.applied_jobs);
          } else {
            console.error('Invalid format for applied jobs:', response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };
  
    if (user) {
      fetchAppliedJobs();
    }
  }, [user, navigate]);

 return (
    <div>
      <h2>Your Tasks</h2>
      {appliedJobs.map((job) => (
        <div key={job.job_id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
         
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
