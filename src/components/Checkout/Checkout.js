import React, { useContext, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/GenerarOrden'
import "../Checkout/Checkout.scss"

export const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "",
        telefono: "",
        email_1: "",
        email_2: "",
    })

    const handleInputUser = (dato) => {
        setDatosUsuario({
            ...datosUsuario,
            [dato.target.name]: dato.target.value
        })
    }

    const handleComprar = (event) => {
        event.preventDefault()
        if (datosUsuario.nombre.length > 3 && datosUsuario.email.length > 6 && datosUsuario.telefono.length > 8) {
            generarOrden(datosUsuario, carrito, precioTotal())
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: `${datosUsuario.nombre} tu compra fue completada`,
                        text: `Tu número de ticket: ${response}`,
                        confirmButtonText: 'Volver'
                    })
                    vaciarCarrito()
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error:',
                        text: `${err}`,
                    })
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Falta información',
                text: 'Revisa tus datos'
            })
        }
    }

    return (
        <Container>
            <h2 className="checkout_title">Checkout</h2>
            <h4 className="checkout_title">Por favor, ingresa tus datos para cursar el pedido:</h4>
            {!carrito.length
                ? <Redirect to="/" />
                :
                <>
                    <Col className="checkout_col">
                        <form className="checkout_form" onSubmit={handleComprar}>
                            <Row className="checkout_row">
                                <input
                                    type="text"
                                    value={datosUsuario.nombre}
                                    onChange={handleInputUser}
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </Row>
                            <Row className="checkout_row">
                                <input
                                    type="text"
                                    value={datosUsuario.telefono}
                                    onChange={handleInputUser}
                                    name="telefono"
                                    placeholder="Tu teléfono"
                                    required
                                />
                            </Row>
                            <Row className="checkout_row">
                                <input
                                    type="email"
                                    value={datosUsuario.email_1}
                                    onChange={handleInputUser}
                                    name="email"
                                    placeholder="email"
                                    required
                                />
                            </Row>
                            <Row className="checkout_row">
                                <input
                                    type="email"
                                    value={datosUsuario.email_2}
                                    onChange={handleInputUser}
                                    name="email"
                                    placeholder="Repite tu email"
                                    required
                                />
                            </Row>
                            <Row className="checkout_row">
                                <button type="submit" className="btn btn-outline-success checkout_btn">Comprar</button>
                            </Row>
                        </form>
                    </Col>
                </>
            }
        </Container>
    )
}
