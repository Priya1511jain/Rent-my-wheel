import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './components/Home';     
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 
import UserDashboard from './components/UserDashboard';
import HostDashboard from './components/HostDashboard'; 
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<AuthPage  />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/host-dashboard" element={<HostDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
