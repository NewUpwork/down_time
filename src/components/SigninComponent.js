import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../config/apiConfig.js';


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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login