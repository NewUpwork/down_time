import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import JobPost from './JobPostingComponent.js';
import JobsFeed from './JobsFeedComponent.js';
import './styles/home.css';
import FreelancersList from './FreelancersListComponents.js';
import AppliedJobs from './AppliedJobsComponent.js';


const WelcomePage = () => {
  const { user, updateUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        updateUser(JSON.parse(storedUserData));
      }
    }
  }, [user, updateUser, navigate]);


  return (
    <div>
      <main className="main-container">
        <section className="main-center-section" >
          {user.role === 'client' && <JobPost />}
          {user.role === 'freelancer' && <JobsFeed />}
        </section>
        <section className="main-right-section">
          {user.role === 'client' && <FreelancersList />}
          {user.role === 'freelancer' && <AppliedJobs />}
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;

