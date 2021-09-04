import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, Button } from 'react-bootstrap'

export const CartItem = (prod) => {
    const { eliminarDelCarrito } = useContext(CartContext)

    return (
                <Card key={prod.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>Cantidad: {prod.cantidad}</Card.Text>
                        <Card.Text>Precio: ${prod.precio * prod.cantidad}</Card.Text>
                        <Button variant="danger" onClick={() => eliminarDelCarrito(prod.id)} >Quitar del Carro</Button>
                    </Card.Body>
                </Card>
    )
}
