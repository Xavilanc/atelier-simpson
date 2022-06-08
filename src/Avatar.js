import React from "react";

const Avatar = ({image, firstName, lastName}) => {
    return (
    <div>
    <img src={image} />
    <h2>{firstName}</h2>
    <h2>{lastName}</h2>
    </div> );
}

export default Avatar