import { Row, Col } from 'react-bootstrap'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import './Form.scss'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

export const SignupForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    isInitialValid: false,
                    nombre: '',
                    telefono: '',
                    email_1: '',
                }}
                validationSchema={Yup.object({
                    nombre: Yup.string()
                        .min(3, 'Debe tener 3 o más caracteres')
                        .required('Falta tu nombre'),
                    telefono: Yup.string()
                        .max(15, 'Hasta 15 dígitos')
                        .required('Ingresa tu teléfono'),
                    email_1: Yup.string()
                        .email('Email no válido')
                        .required('Se necesita tu email'),
                    email_2: Yup.string()
                        .oneOf([Yup.ref("email_1")], "Email no coinciden")
                        .required("Confirma tu email")
                })}
                onSubmit={(values) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 400);
                }}
            >
                <Col className="checkout_col">
                    <Form className="checkout_form" >
                        <Row className="checkout_row">
                            <MyTextInput
                                name="nombre"
                                type="text"
                                placeholder="Tu nombre"
                            />
                        </Row>
                        <Row className="checkout_row">
                            <MyTextInput
                                name="telefono"
                                type="text"
                                placeholder="Tu teléfono"
                            />
                        </Row>
                        <Row className="checkout_row">
                            <MyTextInput
                                name="email_1"
                                type="email"
                                placeholder="email@dominio.com"
                            />
                        </Row>
                        <Row className="checkout_row">
                            <MyTextInput
                                name="email_2"
                                type="email"
                                placeholder="Repite tu email"
                            />
                        </Row>
                        <Row className="checkout_row">
                        <button type="submit" className="btn btn-success checkout_btn" disabled="true">Comprar</button>
                        </Row>
                    </Form>
                </Col>
            </Formik>
        </>
    )
}
