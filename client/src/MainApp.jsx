// MainApp.jsx - This will be your main routing file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main home page
import KerkennahGallery from './KerkennahGallery';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kerkennah-gallery" element={<KerkennahGallery />} /> 
      </Routes>
    </Router>
  );
}

export default MainApp;