import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'
import { Container, Row, Col } from 'react-bootstrap'
import "./ItemDetail.scss"

export const ItemDetail = ({ id, title, category, description, description_full, price, pictureUrl, stock }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const handleAdd = () => { agregarAlCarrito({ category, id, title, description, pictureUrl, price, cantidad }) }

    return (
        <Container>
            <h2 className='item_detail_title' >{title}</h2>
            <Row className="item_detail_row">
                <Col className="item_detail_book" lg={4}><img className='item_detail_image' src={pictureUrl} alt={title} /></Col>
                <Col>
                    <Row><p className='item_detail_description'>{description_full}</p></Row>
                    <Row>
                        <Col>
                            <Link to={`/category/${category}`} className="btn btn-outline-dark">Volver</Link>
                        </Col>
                        <Col>
                            <Row><p className='item_detail_price'>${price}</p></Row>
                            <Row>
                                <Counter
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    agregar={handleAdd}
                                    agregado={isInCart(id)}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
