import React from 'react';
import { Card } from 'react-bootstrap'; 

export const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div id={id} className="card col-4">
            <h4>{title}</h4>
            <img src={pictureUrl} alt={title} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
};
