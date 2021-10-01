import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/GenerarOrden'
import "../Checkout/Checkout.scss"
import { SignupForm } from '../Form/Form'

export const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const [datosUsuario, setDatosUsuario] = useState({
        Nombre: "",
        Telefono: "",
        email: "",
    })

    const handleComprar = (event) => {
        event.preventDefault()
        if (true) {
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
                ?
                <Redirect to="/" />
                :
                <Container>
                    <SignupForm />
                </Container>
            }
        </Container>
    )
}
