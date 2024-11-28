import React from 'react'
import './ContactoYHorarios.scss'

export default function ContactoYHorarios() {
  return (
    <div id='contacto' className='contacto'>
      <h2>Contacto</h2>
      <div className='contacto__content'>

        <div className='contacto__content__left-side'>
          <h4>Nos podés contactar por los siguientes medios:</h4>
          <p>Por teléfono: 011-1234-5678</p>
          <p>Por correo electrónico: correoinventado@gmail.com</p>
          <p>Por WhatsApp: 011-1234-5678</p>
          <p>Por redes sociales: @tecnomax</p>
        </div>

        <div className='contacto__content__right-side'>
          <h4>Horarios de atención:</h4>
          <p>Lunes a viernes de 9 a 18 hs.</p>
          <p>Sábados de 9 a 13 hs.</p>
        </div>

      </div>
    </div>
  )
}
