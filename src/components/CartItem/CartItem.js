import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, Button } from 'react-bootstrap'

export const CartItem = (prod) => {
    const { eliminarDelCarrito } = useContext(CartContext)

    return (
        <Card key={prod.id} style={{ width: '18rem', padding: '0.5rem' }}>
            <Card.Img variant="top" src={prod.pictureUrl} />
            <Card.Body>
                <Card.Title className="cartItemText">{prod.title}</Card.Title>
                <Card.Text className="cartItemText">Cantidad: {prod.cantidad}</Card.Text>
                <Card.Text className="cartItemText">Subtotal: ${prod.price * prod.cantidad}</Card.Text>
                <Button variant="outline-danger" onClick={() => eliminarDelCarrito(prod.id)} >Quitar del Carro</Button>
            </Card.Body>
        </Card>
    )
}
