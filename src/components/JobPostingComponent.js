import React, { useState } from 'react'
import axios from "axios";
import { apiEndpoints } from '../config/apiConfig.js';

 
const JobPost= () => {

    const [jobTitle, setjobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');

 
    const Post = async (e) => {
        e.preventDefault();
            try {
                await axios.post(apiEndpoints.users, {
                    //firstName: firstName,
                    //lastName: lastName,
                    jobTitle: jobTitle,
                    jobDescription: jobDescription,
                    confPassword: confPassword
                });
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data.msg);
                    setMsg(error.response.data.msg);
                }
            }
    }
 
    return (
        <section>
            <div>
                <div>
                    <div>
                        <div>
                            <form onSubmit={Post}>
                                <p>{msg}</p>
                                <div>
                                    <label>Task tilte</label>
                                    <div>
                                        <input placeholder="An overview tile for the task"
                                            value={jobTitle} onChange={(e) => setjobTitle(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input type="text" className="input" placeholder="Email" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <div>
                                     
                                    </div>
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <div>
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button>Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default JobPost