import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Container, Row } from 'react-bootstrap'
import "./CartCheckout.scss"

export const CartCheckout = () => {
    const { vaciarCarrito, precioTotal, cantidadCarrito } = useContext(CartContext)

    return (
        <Container>
            <Row className="item_detail_row">
                <p>Acá el precio y la cantidad de itemes</p>
            </Row>
            <Row className="item_detail_row">
                <button className="btn btn-success">Ir al pago</button>
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            </Row>
        </Container>
    )
}
