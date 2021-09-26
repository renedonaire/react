import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, Button } from 'react-bootstrap'
import './CartItem.scss'

export const CartItem = (prod) => {
    const { eliminarDelCarrito } = useContext(CartContext)
    const subtotalPesos = (prod.price * prod.cantidad).toLocaleString('de-DE')

    return (
        <Card key={prod.id} style={{ width: '18rem', padding: '0.5rem' }}>
            <Card.Img variant="top" src={prod.pictureUrl} />
            <Card.Body >
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text className="cartItemText">Cantidad: {prod.cantidad} <br /> Subtotal: ${subtotalPesos}</Card.Text>
                <div className="card-btn">
                    <Button variant="outline-danger" onClick={() => eliminarDelCarrito(prod.id)} >Quitar del Carro</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
