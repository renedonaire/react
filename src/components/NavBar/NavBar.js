import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.scss"
import logo from "../images/logo.svg"
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#">
                    <img
                        src={logo}
                        width="200"
                        height="45"
                        className="d-inline-block "
                        alt=""
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/category/novedades"}>Novedades</Link>
                    <Link to={"/category/ficcion"}>Ficción</Link>
                    <Link to={"/cart"}>Carro de compra</Link>
                </Nav>
                <CartWidget items={0} />
            </Container>
        </Navbar>
    )
}
