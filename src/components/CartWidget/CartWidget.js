import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import "./CartWidget.scss"

export const CartWidget = ({items}) => {
    return (
        <div className="carrito" >
            <FaCartArrowDown />
            <span>{items}</span>
        </div>
    )
}
