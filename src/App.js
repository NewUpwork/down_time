import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/SigninComponent';
import Register from './components/RegisterComponent';
import WelcomePage from './components/TempLandingComponent';
import UserContext from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LandingPage from './components/Landingpage';
import Layout from './components/Layout'; // Import the Layout component

function App() {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                {/* LandingPage will have Header and Footer */}
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={<Login updateUser={updateUser} />} 
          />
          <Route
            path="/register"
            element={<Register />} 
          />
          <Route
            path="/detachedOut"
            element={
              <Layout>
                {/* WelcomePage will have Header and Footer */}
                <WelcomePage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
