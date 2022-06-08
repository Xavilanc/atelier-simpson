import React from "react";
import './App.css';

const Avatar = ({image, firstName, lastName}) => {
    return (
    <div className="Avatar">
    <img src={image} />
    <h2>{firstName}</h2>
    <h2>{lastName}</h2>
    </div> );
}

export default Avatar