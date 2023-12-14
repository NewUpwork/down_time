import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
import defaultProfilePicture from '../assets/images/User-avatar.svg';

const FreelancersList = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [freelancers, setFreelancers] = useState([]);
  const [selectedFreelancer, setSelectedFreelancers] = useState(null);

  

  useEffect(() => {
    // Fetch jobs data from the server
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get(apiEndpoints.freelancers);
        setFreelancers(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle error or redirect to login if not logged in
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login page if not logged in
        }
      }
    };

    if (user) {
      fetchFreelancers();
    }
  }, [user, navigate]);

  const handleApplyClick = (jobId) => {
    setSelectedFreelancers(jobId);
    navigate('/apply');
  };

  return (
    <div>
      <h2>Explore talents, and invite them to tasks</h2>
      {freelancers.map((freelancer, index) => (
        <div key={index} className="freelancers-list">
            <img
              src={freelancer.profilePicture || defaultProfilePicture}
              alt="Profile"
              style={{ width: '80px', height: '80px' }}
            />
          <div>
            <h3>{freelancer.full_name}</h3>
            <h4>{freelancer.skills}</h4>
            <p>{freelancer.bio}</p>
    
            <button onClick={() => handleApplyClick(freelancer.user_id)}>Contact</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreelancersList;