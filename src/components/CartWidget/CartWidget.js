import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import "./CartWidget.scss";

export const CartWidget = ({items}) => {
    return (
        // Retorna un icono de carrito
        <div className="carrito" >
            <FaCartArrowDown />
            <span>{items}</span>
        </div>
    )
};
