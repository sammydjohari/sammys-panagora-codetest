import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import InfoPage from './Pages/InfoPage';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  )
}

export default App;
