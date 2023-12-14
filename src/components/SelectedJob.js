import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';

const SelectedJob = ({ jobId }) => {
  const [selectedJob, setSelectedJob] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(apiEndpoints.oneJob, { params: { jobId } });
        setSelectedJob(response.data.data);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  return (
    <div>
      {loading ? (
        <p>Loading job details...</p>
      ) : selectedJob && selectedJob.title ? (
        <>
          <h3>{selectedJob.title}</h3>
          <p>{selectedJob.description}</p>
          <p>Skills Required: {selectedJob.skills_required}</p>
          <p>Budget: {selectedJob.budget}</p>
          <p>Deadline: {selectedJob.deadline}</p>
        </>
      ) : (
        <p>No job details available.</p>
      )}
    </div>
  );
};

export default SelectedJob;
