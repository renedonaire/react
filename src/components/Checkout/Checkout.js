import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { Form } from '../Form/Form'
import "../Checkout/Checkout.scss"

export const Checkout = () => {
    const { carrito } = useContext(CartContext)

        return (
            <Container>
                <h2 className="checkout_title">Checkout</h2>
                <h4 className="checkout_title">Por favor, ingresa tus datos para cursar el pedido:</h4>
                {!carrito.length
                    ? <Redirect to="/" />
                    :
                    <>
                        <Form/>
                    </>
                }
            </Container>
        )
    }
