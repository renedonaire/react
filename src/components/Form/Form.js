import React, { useState, useContext } from "react"
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { generarOrden } from '../../firebase/GenerarOrden'
import { CartContext } from '../../context/CartContext'
import { UIContext } from '../../context/UIContext'
import "./Form.scss"

export const Form = () => {
  const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)
  const intialValues = { nombre: "", telefono: "", email_1: "", email_2: "" };
  const [formValues, setFormValues] = useState(intialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { loading, setLoading } = useContext(UIContext)

  const submit = () => {
    setLoading(true)
    generarOrden(formValues, carrito, precioTotal())
      .then(response => {
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: `${formValues.nombre} , compra completada`,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }

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
    <>
      {loading
        ?
        <Container className="ItemListContainer_spinner">
          <Row>
            <Col ><h4>Procesando...</h4></Col>
            <Col><Spinner animation="grow" variant="danger" /></Col>
          </Row>
        </Container>
        :
        <Col className="form_col">
          <form className="form_form" onSubmit={handleSubmit} noValidate>
            <Row className="form_row">
              <input
                placeholder="Nombre"
                type="text"
                name="nombre"
                id="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                className={formErrors.nombre && "input-error"}
              />
              {formErrors.nombre && (
                <span className="form_error">{formErrors.nombre}</span>
              )}
            </Row>

            <Row className="form_row">
              <input
                placeholder="Teléfono"
                type="text"
                name="telefono"
                id="telefono"
                value={formValues.telefono}
                onChange={handleChange}
                className={formErrors.telefono && "input-error"}
              />
              {formErrors.telefono && (
                <span className="form_error">{formErrors.telefono}</span>
              )}
            </Row>

            <Row className="form_row">
              <input
                placeholder="E-mail"
                type="email"
                name="email_1"
                id="email_1"
                value={formValues.email_1}
                onChange={handleChange}
                className={formErrors.email_1 && "input-error"}
              />
              {formErrors.email_1 && (
                <span className="form_error">{formErrors.email_1}</span>
              )}
            </Row>

            <Row className="form_row">
              <input
                placeholder="Confirma tu e-mail"
                type="email"
                name="email_2"
                id="email_2"
                value={formValues.email_2}
                onChange={handleChange}
                className={formErrors.email_2 && "input-error"}
              />
              {formErrors.email_2 && (
                <span className="form_error">{formErrors.email_2}</span>
              )}
            </Row>

            <Row className="form_row">
              <button type="submit" className="btn btn-success form_btn">Hacer pedido</button>
            </Row>

          </form>
        </Col>
      }
    </>
  )
}
