import './Form.scss'
import React, { useState, useEffect, useContext } from "react";
import Swal from 'sweetalert2'
import { generarOrden } from '../../firebase/GenerarOrden'
import { CartContext } from '../../context/CartContext'



import "./Form.scss";
export const Form = () => {
      const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
            if (formErrors.length === 0) {
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
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  }

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )} */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
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