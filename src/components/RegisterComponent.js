import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';
import { Link } from 'react-router-dom';
import yourImage from './images/formpicture.jfif'
import yourLogo from './images/Regandsignup.svg'
import { useUserContext } from '../context/UserContext.js';



const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confPassword.trim()) {
      setMsg('Please fill in all fields.');
      return;
    }

    try {
      await axios.post(apiEndpoints.users, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
        setMsg(error.response.data.msg);
      }
    }
  };


  return (
    <section className='register-page'>
        <div className='wrapper-main'>
        <div className="section-container">
        <div className="left-section-content">
        <img src={yourImage} alt="Landing Page" className="form-image" />
        </div>
        <div className="right-section-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <p>{msg}</p>
            <div>
            <img src={yourLogo} alt="D Logo" className ="regandsignuplogo" />
              <label>Full Name</label>
              <div>
                <input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
              <label>Confirm Password</label>
              <div>
                <input
                  type="password"
                  className="input"
                  placeholder="******"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              <div className='already-registered'>
                  <p>Already a user? <Link to="/login">Login here</Link></p>
                </div>
               
            </div>
            <div>
              <button className="button" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>

      
    </section>
  );
};

export default Register;
