import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <h3>TecnoMax</h3>
            <div className='nombres-container'>
                <p>Paulluk, Sebastián | 37646352 | sebastianpaulluk@gmail.com</p>
                <p>Meier, Martín | 43886167 | meieramadeimartin@gmail.com</p>
                <p>Martucho, Diego | 53880906 | diegomartucho02@gmail.com</p>
            </div>
            <p className='derechos'>© 2024 TecnoMax. Todos los derechos reservados.</p>
        </footer>
        );
}