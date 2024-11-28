import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './MenuHome.scss';

export default function MenuHome() {

  return (
    <div className='menu-home'>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto asd">
                  <Link to="historia" smooth={true} duration={100} className='opcion-menu-home'>Nuestra historia</Link>
                  <Link to="galeria" smooth={true} duration={100} className='opcion-menu-home'>Galeria TecnoMax</Link>
                  <Link to="contacto" smooth={true} duration={100} className='opcion-menu-home'>Contactanos</Link>
                  <Link to="ubicacion" smooth={true} duration={100} className='opcion-menu-home'>Donde estamos</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
};