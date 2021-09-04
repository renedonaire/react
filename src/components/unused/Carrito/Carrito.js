import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { Container, Row, Col } from 'react-bootstrap'

export const Carrito = () => {
    return (
        <Container className="ItemListContainer_spinner">
            <Row>
                <Col ><h2>Carro de Compras</h2></Col>
                <FaCartArrowDown />
            </Row>
        </Container>
    )
}
