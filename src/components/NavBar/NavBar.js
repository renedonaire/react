import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'; // Importa componentes de react-bootstrapt para poder utilizarlos
import { CartWidget } from "../CartWidget/CartWidget"; // Importa componente "imagen carrito"
import "./NavBar.scss"; // Importa estilos
import logo from "../images/logo.svg"; // Importa imagen local
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        // Retorna una navbar con clases de react-bootstrap
        <Navbar bg="dark" variant="dark">

            <nav>
                <Link className="mx-1" to={"/"}>Inicio</Link>
                <Link className="mx-1" to={"/nosotros"}>Nosotros</Link>
                <Link className="mx-1" to={"/cart"}>Carrito</Link>
                <Link className="mx-1" to={"/category/calzado"}>Calzado</Link>
                <Link className="mx-1" to={"/category/remeras"}>Remeras</Link>
                <Link className="mx-1" to={"/category/pantalones"}>Pantalones</Link>
            </nav>

            {/* <Container>
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
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <Nav.Link href="#">Libros</Nav.Link>
                    <Nav.Link href="#">Descargas</Nav.Link>
                </Nav>
                <CartWidget items={0} />
            </Container> */}
        </Navbar>
    )
};
