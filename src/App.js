import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './links/home';
import AboutMe from './links/aboutMe';
import OurProjects from './links/ourProjects';
import OurTeam from './links/ourTeam';
import Contact from './links/contact';
import Login from './links/login';
import Register from './links/register';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/ourProjects" element={<OurProjects />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;