import React from "react"
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.scss"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Link className="logo" to="/">
                    <img
                        src={'/images/logo.svg'}
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
                    <NavDropdown title="Categorías" id="nav-dropdown">
                        <NavDropdown.Item>
                            <Link className="nav_link-desplegable" to={"/category/novedades"}>
                                Novedades
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="nav_link-desplegable" to={"/category/ficcion"}>
                                Ficción
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link className="nav_link" to={"/cart"}>
                        Carro de compra
                    </Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}
