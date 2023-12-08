import React, { useState } from 'react'
import axios from 'axios';
import { apiEndpoints } from '../config/apiConfig.js';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { updateUser } = useUserContext();

    const handleForgotPasswordClick = () => {
        // Navigate to the password recovery route
        navigate('/password-recovery');
      };
  
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
            <div>
                <div>
                    <div>
                        <div>
                            <form onSubmit={Auth}>
                                <p>{msg}</p>
                                <div>
                                    <label>Username</label>
                                    <div>
                                        <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <div>
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button>Login</button>
                                </div>
                            </form>
                            <Link to="/password-recovery" onClick={handleForgotPasswordClick}>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
    )
}
 
export default Login