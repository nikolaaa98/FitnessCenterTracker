// src/pages/FitnessCenterPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FitnessCenterPage() {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/fitnesscenters')
      .then(response => setCenters(response.data))
      .catch(error => console.error('Error fetching fitness centers:', error));
  }, []);

  return (
    <div>
      <h1>Fitness Centers</h1>
      <ul>
        {centers.map(center => (
          <li key={center.id}>{center.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FitnessCenterPage;
