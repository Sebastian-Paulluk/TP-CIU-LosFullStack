import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MenuHome() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Historia</Nav.Link>
                    <Nav.Link as={Link} to="/">Local</Nav.Link>
                    <Nav.Link as={Link} to="/">Marcas</Nav.Link>
                    <Nav.Link as={Link} to="/">Video</Nav.Link>
                    <Nav.Link as={Link} to="/">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/">Mapa</Nav.Link>
                    <Nav.Link as={Link} to="/">Desarrolladores</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </div>
  )
}