import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/SigninComponent";
import Register from "./components/RegisterComponent";
import WelcomePage from './components/TempLandingComponent';
import PasswordRecoveryForm from './components/RecoverPasswordComponent';
import React from 'react';
import { UserProvider } from './context/UserContext';
import ApplyJobForm from './components/ApplyJobSubComponent';
import Layout from "./components/Layout";
import CookiesConsent from "./components/CookieConsent";
import PrivacyPage from "./components/PrivacyPage";
import LandingPage from "./components/Landingpage.js";
import InvitingFreelancer from "./components/InvitingFreelancerComponent.js";


function App() {


  return (
    <UserProvider>
      <Router>
        <CookiesConsent />
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-recovery" element={<Layout><PasswordRecoveryForm /></Layout>}/>
          <Route path="/apply" element={<Layout><ApplyJobForm/></Layout>}/>
          <Route path="/invite" element={<Layout><InvitingFreelancer/></Layout>}/>
          <Route path="/" element={  <Layout>  <LandingPage /> </Layout>}/>
          <Route path="/home" element={ <Layout><WelcomePage /></Layout>}/>
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
