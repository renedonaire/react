import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src="../images/logo.png"
                        width="100"
                        height="40"
                        className="d-inline-block "
                        alt=""
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <Nav.Link href="#">Libros</Nav.Link>
                    <Nav.Link href="#">Descargas</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
};
