import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';
import { Link } from 'react-router-dom';
import yourImage from './images/formpicture.jfif'
import yourLogo from './images/Regandsignup.svg'

const Login = ({ updateUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
  
    const Auth = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(apiEndpoints.login, {
          email: email,
          password: password
        });
  
        const userData = response.data;
    
        updateUser(userData);
        console.log(userData)
  
        navigate("/detachedOut");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    return (
        <section>
           <div className='signin-background-color'>
        <div className='signin-wrapper-main'>
        <div className="signin-section-container">
        <div className="signin-left-section-content">
        <img src={yourImage} alt="Landing Page" className="form-image" />
        </div>
        <div className="signin-right-section-form">
          <form className="signin-form-container" onSubmit={Auth}>
            <p>{msg}</p>
            <div>
            <img src={yourLogo} alt="D Logo" className ="regandsignuplogo" />
              
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  className="input"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              
              <div className='signin-already-registered'>
                  <p> <Link to="/login">Forgot your password?</Link></p>
                </div>
               
              
            </div>
            <div>
              <button className="button" type="submit">
               Login
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>

        </div>
        
        </section>
    )
}
 
export default Login