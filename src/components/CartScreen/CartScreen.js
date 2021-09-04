import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, Button } from 'react-bootstrap'
import { CartItem } from '../CartItem/CartItem'

export const CartScreen = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            <h1>Resumen de compra</h1>

            {carrito.map(prod => (<CartItem {...prod}/>            )            )            }
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}
