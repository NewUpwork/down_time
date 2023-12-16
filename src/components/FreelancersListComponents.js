import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';
import defaultProfilePicture from '../assets/images/User-avatar.svg';
import useFreelancerStore from '../context/freelancerStore.js';
import './styles/FreelancersList.css'; // Import the CSS file

const FreelancersList = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [freelancers, setFreelancers] = useState([]);
  const { setFreelancerId } = useFreelancerStore();

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get(apiEndpoints.freelancers);
        setFreelancers(response.data);
      } catch (error) {
        console.error('Error fetching freelancers:', error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    if (user) {
      fetchFreelancers();
    }
  }, [user, navigate]);

  const handleInviteClick = (freelancerId) => {
    setFreelancerId(freelancerId);
    navigate('/invite');
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
            <button onClick={() => handleInviteClick(freelancer.freelancer_id)}>
              Invite
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreelancersList;
