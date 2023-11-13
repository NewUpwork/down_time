import React, { useContext } from 'react';
import UserContext from '../context/UserContext';


const WelcomePage = () => {
    const user = useContext(UserContext);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome, {user.firstName}!</h1>
            <p>
                Thank you for joining us! 
            </p>
            <p>
                Sit back, relax, and keep detached out!  We're working hard to bring you the down time content.
            </p>
            <p>
                Stay tuned for more updates! 
            </p>
        </div>
    );
};

export default WelcomePage;
