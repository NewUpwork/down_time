import React, { useState } from 'react';
import axios from "axios";
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';
import "./styles/jobpost.css"

const JobPost = () => {
    const { user } = useUserContext();
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [budget, setBudget] = useState('');
    const [deadline, setDeadline] = useState('');
    const [location, setLocation] = useState('');
    const [msg, setMsg] = useState('');
    const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!jobTitle.trim() || !jobDescription.trim()) {
          setMsg('Please fill in both title and description.');
          return;
        }
      
        try {
          await axios.post(apiEndpoints.jobPost, {
            userId: user.userId,
            title: jobTitle,
            description: jobDescription,
            skills: skills,
            budget: budget,
            deadline: deadline,
            location: location,
          });
      
          setIsPostSuccessful(true);
          // Reset form
          setJobTitle('');
          setJobDescription('');
          setSkills('');
          setBudget('');
          setDeadline('');
          setLocation('');
        } catch (error) {
          if (error.response) {
            console.log(error.response.data.msg);
            setMsg(error.response.data.msg);
          }
          setIsPostSuccessful(false);
        }
    };

    return (
        <section className="job-post-container">
            <div className="job-form-container">
                <h1>Post a Job</h1>
                <form onSubmit={handleSubmit} className="job-post-form">
                    {isPostSuccessful && <p className="success-message">Post successful!</p>}
                    {!isPostSuccessful && msg && <p className="error-message">{msg}</p>}
                    <div className="form-group">
                        <label>Task Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write an overview title for the task"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Describe the task"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Skills and Competencies</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="List the required skills and competencies"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Budget</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Specify the budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <input
                            type="date"
                            className="form-control"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value || 'open')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Specify the location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value || 'Any')}
                        />
                    </div>
                    <div className="form-group action">
                        <button type="submit" className="submit-btn">Post Job</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default JobPost;
