import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/SigninComponent";
import Register from "./components/RegisterComponent";
import WelcomePage from './components/TempLandingComponent';
import PasswordRecoveryForm from './components/RecoverPasswordComponent';
import React from 'react';
import { UserProvider } from './context/UserContext';
import UserAccount from './components/UserAccountComponent';
import ApplyJobForm from './components/ApplyJobSubComponent';

function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/detachedOut" element={<WelcomePage />} />
          <Route path="/profile" element={<UserAccount />} />
          <Route path="/password-recovery" element={<PasswordRecoveryForm />} />
          <Route path='/apply' element={<ApplyJobForm/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
