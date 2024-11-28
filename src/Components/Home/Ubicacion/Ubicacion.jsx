import React from 'react'
import './Ubicacion.scss'

export const Ubicacion =()=> {

  return (
    <div className='ubicacion' id='ubicacion'>
      <h2>Ubicación</h2>

      <div className='ubicacion__content'>
        <div className='ubicacion__content__left-side'>
          <h4>¿Dónde Estamos?</h4>
          <p>
              Nuestra tienda se encuentra ubicada en el barrio de Palermo, en la Ciudad Autónoma de Buenos Aires, Argentina. 
              Contamos con un local amplio y moderno, equipado con la última tecnología y un equipo de profesionales altamente 
              capacitados para brindarte la mejor atención.
          </p> 
        </div>

        <div className='ubicacion__content__right-side'>
          <h4>¿Cómo Llegar?</h4>
          <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.4580892373347!2d-58.42600414742269!3d-34.57545518417701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c08594215%3A0x303c455b5a671413!2sAv.%20Cervi%C3%B1o%204649%2C%20C1425%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1732749988464!5m2!1ses-419!2sar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='home-map'
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}
