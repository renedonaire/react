import React, { useContext, useState, useEffect } from 'react'
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
    
    const [estadoForm, setEstadoForm] = useState({
        estadoNombre: "",
        estadoTelefono: "",
        estadoEmail_1: "",
        estadoEmail_2: "",
    })
    
    useEffect(() => {
    }, [estadoForm, setEstadoForm])

    const validaDatos = (datosUsuario) => {
        let arrayControl = []
        if (datosUsuario.nombre.length > 3) {
            estadoForm.estadoNombre = "formOK"
            arrayControl.push(true)
        } else {
            estadoForm.estadoNombre = "formError"
            arrayControl.push(false)
        }
        if (datosUsuario.telefono.length > 8) {
            estadoForm.estadoTelefono = "formOK"
            arrayControl.push(true)
        } else {
            estadoForm.estadoTelefono = "formError"
            arrayControl.push(true)
        }
        if (datosUsuario.email_1.length > 6 && datosUsuario.email_1 === datosUsuario.email_2) {
            estadoForm.estadoEmail_1 = "formOK"
            arrayControl.push(true)
        } else {
            estadoForm.estadoEmail_2 = "formError"
            arrayControl.push(true)
        }
        console.log(estadoForm);
        console.log(arrayControl);
        return !arrayControl.includes(false)
    }

    const handleInputUser = (dato) => {
        setDatosUsuario({
            ...datosUsuario,
            [dato.target.name]: dato.target.value
        })
    }

    const handleComprar = (event) => {
        event.preventDefault()
        if (validaDatos(datosUsuario)) {
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
                title: 'Revisar:',
                text: 'Error en tus datos'
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
                                    className={estadoForm.estadoNombre}
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
                                    className={estadoForm.estadoTelefono}
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
                                    className={estadoForm.estadoEmail_1}
                                    type="email"
                                    value={datosUsuario.email_1}
                                    onChange={handleInputUser}
                                    name="email_1"
                                    placeholder="email"
                                    required
                                />
                            </Row>
                            <Row className="checkout_row">
                                <input
                                    className={estadoForm.estadoEmail_2}
                                    type="email"
                                    value={datosUsuario.email_2}
                                    onChange={handleInputUser}
                                    name="email_2"
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
