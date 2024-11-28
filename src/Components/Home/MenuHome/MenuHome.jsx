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
                <Nav className="me-auto menu-home-lista" >
                  <Link to="historia" smooth={true} duration={100} offset={-80} className='opcion-menu-home'>Nuestra historia</Link>
                  <Link to="galeria" smooth={true} duration={100} offset={-100} className='opcion-menu-home'>Galería TecnoMax</Link>
                  <Link to="contacto" smooth={true} duration={100} offset={-80} className='opcion-menu-home'>Contactános</Link>
                  <Link to="ubicacion" smooth={true} duration={100} offset={-80} className='opcion-menu-home'>Donde estámos</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
};