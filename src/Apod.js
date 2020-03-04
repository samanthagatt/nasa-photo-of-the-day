import React from "react";
import "./Apod.css";

const Apod = ({apod}) => {
    return (
        <div className="apod-card">
            <img src={apod.url} alt="NASA APOD" className="apod-img" />
            <div className="apod-details">
                <h2>{apod.title}</h2>
                <p>{apod.explanation}</p>
            </div>
            <p className="apod-date">{apod.date}</p>
        </div>
    )
};

export default Apod;