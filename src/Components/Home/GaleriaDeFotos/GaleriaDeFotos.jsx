import React from 'react'
import { Gallery } from "react-grid-gallery";
import './GaleriaDeFotos.scss'

export default function GaleriaDeFotos() {
    
    const images = [
        {
            src: "./local-1.jpg",
            width: 320,
            height: 174,
            tags: [{value: "Interior", title: "Local"}],
            alt: "Interior del local y sus estanterias"
        },
        {
            src: "./local-2.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Interior", title: "Local"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./local-3.jpg",
            width: 220,
            height: 212,
            tags: [{value: "Frente", title: "Local"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./local-4.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Frente", title: "Local"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./muestrario-1.jpg",
            width: 320,
            height: 200,
            tags: [{value: "Muestrario MSI", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)",
            caption: "Mirá un video de MSI",
            onClick: (e) => {
                window.open("https://youtu.be/w2fhpoEHj3I?si=QZ1CVBcGB4dQIBlp", "_blank", "noopener,noreferrer");
                    }
        },
        {
            src: "./muestrario-2.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Día AMD", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)",
            caption: "Mirá el video de AMD",
            onClick: (e) => {
                window.open("https://youtu.be/0knj9-HXGo8?si=rMQiywc6jgMIUU15", "_blank", "noopener,noreferrer");
                    }
        },
        {
            src: "./muestrario-3.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Muestrario Hyperx", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)",
            caption: "Mirá el video de Hyperx",
            onClick: (e) => {
                window.open("https://youtu.be/kwxTp3wUQsY?si=Rdvt1gUBQzrukPae", "_blank", "noopener,noreferrer");
                    }
        },
        {
            src: "./muestrario-4.JPG",
            width: 320,
            height: 212,
            tags: [{value: "Muestrario Hyperx", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./muestrario-5.jpg",
            width: 200,
            height: 212,
            tags: [{value: "Frente - muestrarios", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./muestrario-6.jpg",
            width: 200,
            height: 212,
            tags: [{value: "Muestrario MSI", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "./muestrario-7.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Muestrario variado", title: "Muestrario"}],
            alt: "Boats (Jeshu John - designerspics.com)"
        },
     ];

     const handleClick = (index) => {
        if (images[index].onClick) {
            images[index].onClick();
        }
    };
      
    return (
        <div className='galeria-container' id='galeria'>
            <Gallery
                images={images.map(img => ({
                ...img,
                customOverlay: (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            cursor: img.onClick ? 'pointer' : 'default',
                            background: img.onClick ? 'rgba(0,0,0,0.1)' : 'transparent',
                        }}
                    />
                )
            }))}
            enableImageSelection={false}
            onClick={handleClick}
            />
        </div>
    )
}