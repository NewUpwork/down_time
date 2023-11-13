import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/SigninComponent";
import Register from "./components/RegisterComponent";
import WelcomePage from './components/TempLandingComponent';
import UserContext from './context/UserContext';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login updateUser={updateUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detachedOut" element={<WelcomePage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
