import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Item.scss';

export const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div id={id} className="card col-4">
            <h3 className='item_title' >{title}</h3>
            <Row>
                <Col><img className='item_image' src={pictureUrl} alt={title} /></Col>
                <Col><p  className='item_description'>{description}</p></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col><p className='item_price'>${price}</p></Col>
            </Row>
        </div>
    )
};
