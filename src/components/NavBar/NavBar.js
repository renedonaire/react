import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.scss"
import { Link } from "react-router-dom"
import { Imagenes } from '../images/ImageIndex'

export const NavBar = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Link className="logo" to="/">
                    <img
                        src={Imagenes.logo}
                        width="200"
                        height="45"
                        className="d-inline-block "
                        alt="logo"
                    />
                </Link>
                <Nav className="me-auto">
                    <Link className="nav_link" to={"/"}>
                        Inicio
                    </Link>
                    <Link className="nav_link" to={"/category/novedades"}>
                        Novedades
                    </Link>
                    <Link className="nav_link" to={"/category/ficcion"}>
                        Ficción
                    </Link>
                    <Link className="nav_link" to={"/cart"}>
                        Carro de compra
                    </Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}
