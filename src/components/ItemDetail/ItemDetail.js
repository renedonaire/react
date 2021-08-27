import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

export const ItemDetail = ({title, description, price, pictureUrl}) => {
    return (
        <Container>
            <h2>{title}</h2>
            <p>Precio: {price}</p>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <Link to={`/`} className="btn btn-primary">Volver</Link>
        </Container>
    )
}