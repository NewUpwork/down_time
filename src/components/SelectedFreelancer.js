import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import useFreelancerStore from '../context/freelancerStore.js';
import defaultProfilePicture from '../assets/images/User-avatar.svg';

const SelectedFreelancer = () => {
  const { selectedFreelancerId } = useFreelancerStore();
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFreelancerDetails = async () => {
      try {
        const response = await axios.get(apiEndpoints.oneFreelancer, { params: { freelancerId: selectedFreelancerId } });
        
        setSelectedFreelancer(response.data);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('Error fetching freelancer details:', error);
        setError('Error fetching freelancer details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (selectedFreelancerId) {
      fetchFreelancerDetails();
    }
  }, [selectedFreelancerId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {selectedFreelancer && (
        <div>
            <img
              src={selectedFreelancer.profilePicture || defaultProfilePicture} alt="Profile"style={{ width: '80px', height: '80px' }}/>
          <h2>{selectedFreelancer.full_name}</h2>
          <p>Skills: {selectedFreelancer.skills}</p>
          <p>Bio: {selectedFreelancer.bio}</p>
        </div>
      )}
    </div>
  );
};

export default SelectedFreelancer;
