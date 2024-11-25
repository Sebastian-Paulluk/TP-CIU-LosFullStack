import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function Carrusel() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/banner1.jpeg"
                alt="Primera diapositiva"
            />
            <Carousel.Caption>
                <h3>Primera Diapositiva</h3>
                <p>Texto de la primera diapositiva.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/banner2.jpeg"
                alt="Segunda diapositiva"
            />
            <Carousel.Caption>
                <h3>Segunda Diapositiva</h3>
                <p>Texto de la segunda diapositiva.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Tercera diapositiva"
            />
            <Carousel.Caption>
                <h3>Tercera Diapositiva</h3>
                <p>Texto de la tercera diapositiva.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}