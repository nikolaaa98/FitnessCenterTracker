// src/pages/FitnessCenterDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import fitnessCenters from './fitnessData';
import './FitnessCenterDetails.css'; // Import CSS for styling

const FitnessCenterDetails = () => {
    const { id } = useParams();
    const center = fitnessCenters.find(center => center.id === parseInt(id));

    if (!center) {
        return <div>Fitness center not found</div>;
    }

    return (
        <div className="fitness-center-details">
            <h1>{center.name}</h1>
            <div className="details-table">
                <div className="details-row">
                    <div className="details-label">Address:</div>
                    <div className="details-value">{center.address}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Opening Year:</div>
                    <div className="details-value">{center.openingYear}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Owner:</div>
                    <div className="details-value">{center.owner}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Monthly Fee:</div>
                    <div className="details-value">{center.monthlyFee} RSD</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Yearly Fee :</div>
                    <div className="details-value">{center.yearlyFee} RSD</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Single Training Fee </div>
                    <div className="details-value">{center.singleTrainingFee} RSD</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Group Training Fee:</div>
                    <div className="details-value">{center.groupTrainingFee} RSD</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Personal Training Fee :</div>
                    <div className="details-value">{center.personalTrainingFee} RSD</div>
                </div>
            </div>
            <h2>Comments:</h2>
            <ul className="comments-list">
                {center.comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                        <strong>{comment.user}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FitnessCenterDetails;
