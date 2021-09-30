import React, { useContext, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/GenerarOrden'
import "../Checkout/Checkout.scss"
import { SignupForm } from '../Form/Form'

export const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "",
        telefono: "",
        email_1: "",
        email_2: "",
    })

    let [claseTelefono, setclaseTelefono] = useState("")
    let [claseNombre, setclaseNombre] = useState("")
    let [claseEmail_1, setclaseEmail_1] = useState("")
    let [claseEmail_2, setclaseEmail_2] = useState("")

    const validaDatos = (datosUsuario) => {
        let arrayControl = []
        if (datosUsuario.nombre.length > 3) {
            setclaseNombre(claseNombre = "formOK")
            arrayControl.push(true)
        } else {
            setclaseNombre(claseNombre = "formError")
            arrayControl.push(false)
        }

        if (datosUsuario.telefono.length > 8) {
            setclaseTelefono(claseTelefono = "formOK")
            arrayControl.push(true)
        } else {
            setclaseTelefono(claseTelefono = "formError")
            arrayControl.push(false)
        }

        if (datosUsuario.email_1.length > 0 && datosUsuario.email_1 === datosUsuario.email_2) {
            setclaseEmail_1(claseEmail_1 = "formOK")
            setclaseEmail_2(claseEmail_2 = "formOK")
            arrayControl.push(true)
        } else {
            setclaseEmail_1(claseEmail_1 = "formError")
            setclaseEmail_2(claseEmail_2 = "formError")
            arrayControl.push(false)
        }

        return !arrayControl.includes(false)
    }

    const handleInputUser = (dato) => {
        setDatosUsuario({
            ...datosUsuario,
            [dato.target.name]: dato.target.value
        })
        validaDatos(datosUsuario)
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


    //     return (
    //         <Container>
    //             <h2 className="checkout_title">Checkout</h2>
    //             <h4 className="checkout_title">Por favor, ingresa tus datos para cursar el pedido:</h4>
    //             {!carrito.length
    //                 ? <Redirect to="/" />
    //                 :
    //                 <>
    //                     <Col className="checkout_col">
    //                         <form className="checkout_form" onSubmit={handleComprar}>
    //                             <Row className="checkout_row">
    //                                 <label for="nombre">Nombre</label>
    //                                 <input
    //                                     className={claseNombre}
    //                                     type="text"
    //                                     value={datosUsuario.nombre}
    //                                     onChange={handleInputUser}
    //                                     name="nombre"
    //                                     placeholder="Tres o más caracteres"
    //                                     required
    //                                 />
    //                             </Row>
    //                             <Row className="checkout_row">
    //                                 <label for="telefono">Teléfono</label>
    //                                 <input
    //                                     className={claseTelefono}
    //                                     type="text"
    //                                     value={datosUsuario.telefono}
    //                                     onChange={handleInputUser}
    //                                     name="telefono"
    //                                     placeholder="Ocho o más caracteres"
    //                                     required
    //                                 />
    //                             </Row>
    //                             <Row className="checkout_row">
    //                                 <label for="email_1">email</label>
    //                                 <input
    //                                     className={claseEmail_1}
    //                                     type="email"
    //                                     value={datosUsuario.email_1}
    //                                     onChange={handleInputUser}
    //                                     name="email_1"
    //                                     placeholder="email"
    //                                     required
    //                                 />
    //                             </Row>
    //                             <Row className="checkout_row">
    //                                 <label for="email_2">Repite tu email</label>
    //                                 <input
    //                                     className={claseEmail_2}
    //                                     type="email"
    //                                     value={datosUsuario.email_2}
    //                                     onChange={handleInputUser}
    //                                     name="email_2"
    //                                     placeholder="Repite tu email"
    //                                     required
    //                                 />
    //                             </Row>
    //                             <Row className="checkout_row">
    //                                 <button type="submit" className="btn btn-outline-success checkout_btn">Comprar</button>
    //                             </Row>
    //                         </form>
    //                     </Col>
    //                 </>
    //             }
    //         </Container>
    //     )
    // }


    return (
        <Container>
            <SignupForm />
        </Container>
    )
}
