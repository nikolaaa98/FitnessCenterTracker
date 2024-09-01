// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FitnessCenterList from './pages/FitnessCenterList';
import FitnessCenterDetails from './pages/FitnessCenterDetails';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<FitnessCenterList />} />
                    <Route path="/fitness-center/:id" element={<FitnessCenterDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
