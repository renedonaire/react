import React from 'react';

export const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div id={id} className="card col-4">
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
};
