import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/SigninComponent";
import Register from "./components/RegisterComponent";
import WelcomePage from './components/TempLandingComponent';
import PasswordRecoveryForm from './components/RecoverPasswordComponent';
import React from 'react';
import { UserProvider } from './context/UserContext';

function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/detachedOut" element={<WelcomePage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryForm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
