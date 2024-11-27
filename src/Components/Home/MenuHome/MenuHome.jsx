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
                    <Nav.Link as={Link} to="/">Nuestra historia</Nav.Link>
                    <Nav.Link as={Link} to="/">Galeria TecnoMax</Nav.Link>
                    <Nav.Link as={Link} to="/">Contactanos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </div>
  )
}