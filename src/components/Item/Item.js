import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Item.scss'
import { Link } from 'react-router-dom'

export const Item = ({ id, title, description, price, pictureUrl, stock }) => {
   const pricePesos = price.toLocaleString('de-DE')

    return (
        <div id={id} className="card col-4">
            <h3 className='item_title' >{title}</h3>
            <Row className="item_row">
                <Col><img className='item_image' src={pictureUrl} alt={title} /></Col>
                <Col><p className='item_description'>{description}</p></Col>
            </Row>
            <Row>
                <Col className='item_col'><Link to={`/detail/${id}`} className="btn btn-outline-dark">Ver más</Link></Col>
                <Col className="item_col"><p className='item_price'>${pricePesos}</p></Col>
            </Row>
        </div>
    )
}
