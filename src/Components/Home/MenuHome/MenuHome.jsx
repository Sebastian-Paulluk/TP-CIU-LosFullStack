import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MenuHome.scss';
import { MenuHomeLink } from './MenuHomeLink/MenuHomeLink';

export default function MenuHome() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <div className='menu-home'>
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} /> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto menu-home-lista" >
                  <MenuHomeLink target={'historia'} name={'Nuestra Historia'} offset={-80} onClick={handleSelect}/>
                  <MenuHomeLink target={'galeria'} name={'Galería TecnoMax'} offset={-100} onClick={handleSelect}/>
                  <MenuHomeLink target={'contacto'} name={'Contactános'} offset={-80} onClick={handleSelect}/>
                  <MenuHomeLink target={'ubicacion'} name={'Donde estámos'} offset={-80} onClick={handleSelect}/>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
};