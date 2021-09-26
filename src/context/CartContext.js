import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (producto) => {
        setCarrito([
            ...carrito,
            producto
        ])
    }
    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id))
    }
    const cantidadCarrito = () => {
        return carrito.reduce((count, producto) => count + producto.cantidad, 0)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }
    const precioTotal = () => {
        return carrito.reduce((importe, producto) => importe + (producto.price * producto.cantidad), 0)
    }

    return (
        <CartContext.Provider value={{ carrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito, precioTotal }}>
            {children}
        </CartContext.Provider>
    )
}
