import React, { useState, useContext } from "react"
import Swal from 'sweetalert2'
import { generarOrden } from '../../firebase/GenerarOrden'
import { CartContext } from '../../context/CartContext'
import "./Form.scss"

export const Form = () => {
  const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

  const intialValues = { nombre: "", telefono: "", email_1: "", email_2: "" };
  const [formValues, setFormValues] = useState(intialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    console.log(formValues)
    generarOrden(formValues, carrito, precioTotal())
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: `${formValues.name} tu compra fue completada`,
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
  }

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.nombre) {
      errors.nombre = "Se requiere tu nombre";
    } else if (values.nombre.length < 3) {
      errors.nombre = "Nombre debe tener más de 3 caracteres";
    }

    if (!values.telefono) {
      errors.telefono = "Se necesita teléfono";
    } else if (values.nombre.telefono < 8) {
      errors.telefono = "Teléfono de 8 dígitos o más";
    }

    if (!values.email_1) {
      errors.email_1 = "Se requiere tu email";
    } else if (!regexEmail.test(values.email_1)) {
      errors.email_1 = "Formato de email inválido";
    }

        if (!values.email_2) {
      errors.email_2 = "Repite tu email";
    } else if (!(values.email_2 === values.email_1)) {
      errors.email_2 = "Los email no concuerdan";
    }

    return errors;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            className={formErrors.nombre && "input-error"}
          />
          {formErrors.nombre && (
            <span className="error">{formErrors.nombre}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={formValues.telefono}
            onChange={handleChange}
            className={formErrors.telefono && "input-error"}
          />
          {formErrors.telefono && (
            <span className="error">{formErrors.telefono}</span>
          )}
        </div>

                <div className="form-row">
          <label htmlFor="email_1">Email</label>
          <input
            type="email"
            name="email_1"
            id="email_1"
            value={formValues.email_1}
            onChange={handleChange}
            className={formErrors.email_1 && "input-error"}
          />
          {formErrors.email_1 && (
            <span className="error">{formErrors.email_1}</span>
          )}
        </div>

                <div className="form-row">
          <label htmlFor="email_2">Confirma tu email</label>
          <input
            type="email"
            name="email_2"
            id="email_2"
            value={formValues.email_2}
            onChange={handleChange}
            className={formErrors.email_2 && "input-error"}
          />
          {formErrors.email_2 && (
            <span className="error">{formErrors.email_2}</span>
          )}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}


{/* <Col className="checkout_col">
                            <form className="checkout_form" onSubmit={handleComprar}>
                                <Row className="checkout_row">
                                    <label for="nombre">Nombre</label>
                                    <input
                                        className={claseNombre}
                                        type="text"
                                        value={datosUsuario.nombre}
                                        onChange={handleInputUser}
                                        name="nombre"
                                        placeholder="Tres o más caracteres"
                                        required
                                    />
                                </Row>
                                <Row className="checkout_row">
                                    <label for="telefono">Teléfono</label>
                                    <input
                                        className={claseTelefono}
                                        type="text"
                                        value={datosUsuario.telefono}
                                        onChange={handleInputUser}
                                        name="telefono"
                                        placeholder="Ocho o más caracteres"
                                        required
                                    />
                                </Row>
                                <Row className="checkout_row">
                                    <label for="email_1">email</label>
                                    <input
                                        className={claseEmail_1}
                                        type="email"
                                        value={datosUsuario.email_1}
                                        onChange={handleInputUser}
                                        name="email_1"
                                        placeholder="email"
                                        required
                                    />
                                </Row>
                                <Row className="checkout_row">
                                    <label for="email_2">Repite tu email</label>
                                    <input
                                        className={claseEmail_2}
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
                        </Col> */}