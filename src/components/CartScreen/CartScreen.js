import React, { useContext } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { CartCheckout } from '../CartCheckout/CartCheckout'
import { CartItem } from '../CartItem/CartItem'
import "./CartScreen.scss"

export const CartScreen = () => {
    const { carrito } = useContext(CartContext)

    return (
        <Container>
            <h2 className="cartScreen_title">Resumen de compra</h2>
            <Row>
                <Col className="cartScreen_col col-lg-8">
                    <Row>
                        {carrito.map((producto) => <CartItem key={producto.id} {...producto} />)}
                    </Row>
                </Col>
                <Col>
                    <CartCheckout />
                </Col>
            </Row>
        </Container>
    )
}
