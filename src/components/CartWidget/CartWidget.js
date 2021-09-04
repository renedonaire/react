import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
    const { cantidadCarrito } = useContext(CartContext)

    return (
        <Link to="/cart" className="carrito" >
            <div>
                <FaCartArrowDown />
                <span>{cantidadCarrito()}</span>
            </div>
        </Link>
    )
}
