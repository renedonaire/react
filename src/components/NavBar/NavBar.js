import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'; // Importa componentes de react-bootstrapt para poder utilizarlos
import { CartWidget } from "../CartWidget/CartWidget"; // Importa componente "imagen carrito"
import "./NavBar.scss";
import logo from "../images/logo.svg";

export const NavBar = () => {
    return (
        // Retorna una navbar con clases de react-bootstrap
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#">
                    <img
                        src={logo}
                        width="200"
                        height = "45"
                        className="d-inline-block "
                        alt=""
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <Nav.Link href="#">Libros</Nav.Link>
                    <Nav.Link href="#">Descargas</Nav.Link>
                </Nav>
                <CartWidget items={3}/>
            </Container>
        </Navbar>
    )
};
