import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import yourImage from './images/formpicture.jfif'
import "./styles/signInComponent.css"
import yourLogo from './images/Regandsignup.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { user, updateUser } = useUserContext();

    useEffect(() => {
      if (user) {
        navigate('/home');
      }
    }, [user, navigate]);
    
    const Auth = async (e) => {
      e.preventDefault();
      if (!email.trim()) {
        setMsg('Please enter your username.');
        return;
      }
  
      if (!password.trim()) {
        setMsg('Please enter your password.');
        return;
      }
      
      try {
        const response = await axios.post(apiEndpoints.login, {
          email: email,
          password: password
        });
        const userData = response.data;
        updateUser(userData);
        console.log(userData);
        navigate("/home");

      } catch (error) {
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);

      if (error.response.status === 400 ||error.response.status === 404 ) {
        setMsg('Invalid username or password. Please try again.');
      } else {
        setMsg('An unexpected error occurred. Please try again later.');
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
      setMsg('No response received from the server. Please try again later.');
    } else {
      console.error('Error setting up the request:', error.message);
      setMsg('An unexpected error occurred. Please try again later.');
    }
  }
};
    return (
      <section className='signin'>
        <div className='signin-wrapper-main'>
          <div className="signin-section-container">
          <div className="signin-left-section-content">
            <img src={yourImage} alt="Landing Page" className="form-image" />
          </div>
        <div className="signin-right-section-form">
          <form className="signin-form-container" onSubmit={Auth}>
            <p>{msg}</p>
            <div>
            <Link to= "/">
            <img src={yourLogo} alt="D Logo" className ="regandsignuplogo" />
            </Link>
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
                  <p> <Link to="/password-recovery">Forgot your password?</Link></p>
              </div>  
            </div>
            <div>
              <button className="button" type="submit">
               Login
              </button>
            </div>
            <div className='not-registered'>
                  <p>Need an account? <Link to="/register">Register here</Link></p>
            </div>
          </form>

        </div>
      </div>
        </div>
        
   </section>
         
  )
}
 
export default Login