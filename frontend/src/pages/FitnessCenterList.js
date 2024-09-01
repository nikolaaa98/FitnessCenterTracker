// src/pages/FitnessCenterList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fitnessCenters from './fitnessData';
import './FitnessCenterList.css'; // Import CSS for styling

const FitnessCenterList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('nameAsc');

    const filteredCenters = fitnessCenters
        .filter(center =>
            center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            center.address.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === 'nameAsc') return a.name.localeCompare(b.name);
            if (sort === 'nameDesc') return b.name.localeCompare(a.name);
            if (sort === 'addressAsc') return a.address.localeCompare(b.address);
            if (sort === 'addressDesc') return b.address.localeCompare(a.address);
            if (sort === 'yearAsc') return a.openingYear - b.openingYear;
            if (sort === 'yearDesc') return b.openingYear - a.openingYear;
            return 0;
        });

    return (
        <div className="fitness-center-list">
            <h1>Fitness Center List</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <select onChange={(e) => setSort(e.target.value)} value={sort} className="sort-select">
                <option value="nameAsc">Name Ascending</option>
                <option value="nameDesc">Name Descending</option>
                <option value="addressAsc">Address Ascending</option>
                <option value="addressDesc">Address Descending</option>
                <option value="yearAsc">Year Ascending</option>
                <option value="yearDesc">Year Descending</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>opening Year</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCenters.map(center => (
                        <tr key={center.id}>
                            <td>{center.name}</td>
                            <td>{center.address}</td>
                            <td>{center.openingYear}</td>
                            <td>
                                <Link to={`/fitness-center/${center.id}`} className="details-link">Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FitnessCenterList;
