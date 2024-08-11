// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FitnessCenterPage from './pages/FitnessCenterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fitness-centers" element={<FitnessCenterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
