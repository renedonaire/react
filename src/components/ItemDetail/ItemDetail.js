import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'
import { Container, Row, Col } from 'react-bootstrap'
import "./ItemDetail.scss"

export const ItemDetail = ({ title, category, description_full, price, pictureUrl }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }
    return (
        <Container>
            <h2 className='item_detail_title' >{title}</h2>
            <Row className="item_detail_row">
                <Col className="item_detail_book" lg={4}><img className='item_detail_image' src={pictureUrl} alt={title} /></Col>
                <Col><Row><p className='item_detail_description'>{description_full}</p></Row><Col>
            </Row>
                    <Row>
                        
                <Col><Link to={`/category/${category}`} className="btn btn-outline-dark">Volver</Link></Col>
                    <Col><
                        p className='item_detail_price'>${price}</>
                    
                <Counter
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                agregar={handleAdd}
                agregado={isInCart(id)}
                />
                    </Col>

                </Row>
        </Container >
    )
}
