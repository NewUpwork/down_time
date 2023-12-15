import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import JobPost from './JobPostingComponent.js';
import JobsFeed from './JobsFeedComponent.js';
import FreelancersList from './FreelancersListComponents.js';
import AppliedJobs from './AppliedJobsComponent.js';
import './styles/WelcomePage.css'; // Updated CSS filename for clarity

const WelcomePage = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome, {user?.firstName}!</h1>
        <p>Thank you for joining our platform!</p>
      </header>
      <main className="welcome-main">
        <section className={user.role === 'client' ? "welcome-section client" : "welcome-section freelancer"}>
          {user.role === 'client' && <JobPost />}
          {user.role === 'freelancer' && <JobsFeed />}
        </section>
        <aside className="welcome-aside">
          {user.role === 'client' && <FreelancersList />}
          {user.role === 'freelancer' && <AppliedJobs />}
        </aside>
      </main>
    </div>
  );
};

export default WelcomePage;
