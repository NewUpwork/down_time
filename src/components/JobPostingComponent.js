import React, { useState } from 'react'
import axios from "axios";
import { apiEndpoints } from '../config/apiConfig.js';
import { useUserContext } from '../context/UserContext.js';

 
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
  
    const Post = async (e) => {
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
        <section>
            <div>
                <div>
                    <div>
                        <div>
                            <h1>Initiate a task and welcome submissions from applicants</h1>
                            <form onSubmit={Post}>
                                {isPostSuccessful && <p>Post successful!</p>}
                                {!isPostSuccessful && msg && <p>{msg}</p>}
                                <div>
                                    <label>Task title</label>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Write an overview title for the task"
                                            value={jobTitle}
                                            onChange={(e) => setJobTitle(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Task description</label>
                                    <div>
                                        <textarea
                                            placeholder="Describe the task"
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Skills and Competencies</label>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="List the required skills and competencies"
                                            value={skills}
                                            onChange={(e) => setSkills(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Budget</label>
                                    <div>
                                    <input
                                            type="text"
                                            placeholder="Specify the budget"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Deadline</label>
                                    <div>
                                        <input
                                            type="date"
                                            value={deadline}
                                            onChange={(e) => setDeadline(e.target.value || 'open')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Location</label>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Specify the location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value || 'Any')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default JobPost