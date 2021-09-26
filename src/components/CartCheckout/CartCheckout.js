import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CartCheckout.scss"

export const CartCheckout = () => {
    const { vaciarCarrito, precioTotal, cantidadCarrito } = useContext(CartContext)
    const precioTotalPesos = precioTotal().toLocaleString('de-DE')
    function singular(num) {
        if (num>1) {
            return "s"
        } else {
            return ""
        }
    }

    if (cantidadCarrito() > 0) {
        return (
            <Container>
                <Row className="cartCheckout_row">
                    <h3>Tienes {cantidadCarrito()} libro{singular(cantidadCarrito())} en tu carro</h3>
                    <h4>El total de tu compra: ${precioTotalPesos}</h4>
                </Row>
                <Row className="cartCheckout_row">
                    <Link to="/checkout" >
                        <button className="btn btn-outline-success cartCheckout_btn">Terminar mi compra</button>
                    </Link>
                </Row>
                <Row className="cartCheckout_row">
                    <Link>
                        <button className="btn btn-outline-danger cartCheckout_btn" onClick={vaciarCarrito}>Vaciar carrito</button>
                    </Link>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row className="cartCheckout_row">
                    <h3>Tu carrito está vacío</h3>
                    <h4>Elige algunos libros<br />de nuestra colección</h4>
                </Row>
                <Row className="cartCheckout_row">
                    <Link to={`/`} className="btn btn-outline-dark cartCheckout_btn">Vamos!</Link>
                </Row>
            </Container>
        )
    }
}
