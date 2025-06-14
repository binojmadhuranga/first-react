import React from 'react';
import './Card.css';

export default function Card({ children, title, description, image }) {

    return (
        <div className="card">
            <img src={image} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>

            <div >
                {children}
            </div>

        </div>


    );
}