import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CartCheckout.scss"

export const CartCheckout = () => {
    const { vaciarCarrito, precioTotal, cantidadCarrito } = useContext(CartContext)

    if (cantidadCarrito()>0) {
    return (
        <Container>
            <Row className="checkout_row">
                <h3>Tienes {cantidadCarrito()} libro(s) en tu carro</h3>
                <h4>El total de tu compra: ${precioTotal()}</h4>
            </Row>
            <Row className="checkout_row">
                <button className="btn btn-success checkout_btn">Ir al pago</button>
            </Row>
            <Row className="checkout_row">
                <button className="btn btn-danger checkout_btn" onClick={vaciarCarrito}>Vaciar carrito</button>
            </Row>
        </Container>
    )
    } else {
            return (
        <Container>
            <Row className="checkout_row">
                <h3>Tu carrito está vacío</h3>
                <h4>Elige algunos libros<br/>de nuestra colección</h4>
            </Row>
            <Row className="checkout_row">
                <Link to={`/`} className="btn btn-outline-dark checkout_btn">Vamos!</Link>
            </Row>
        </Container>
    )
    }
}
