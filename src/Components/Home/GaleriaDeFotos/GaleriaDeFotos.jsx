import React from 'react'
import { Gallery } from "react-grid-gallery";
import './GaleriaDeFotos.scss'

export default function GaleriaDeFotos() {

    const localImages = [
        {
            src: "public/fotos-local/local-1.jpg",
            width: 220,
            height: 174,
            tags: [{value: "Interior comercial", title: "Local"}],
            alt: "Interior del local y sus productos"
        },
        {
            src: "public/fotos-local/local-2.jpg",
            width: 250,
            height: 212,
            tags: [{value: "Día AMD en nuestro local", title: "Local"}],
            alt: "Dia AMD en nuestra tienda"
        },
        {
            src: "public/fotos-local/local-3.jpg",
            width: 250,
            height: 300,
            tags: [{value: "Frente azul", title: "Local"}],
            alt: "Vidriera del local con iluminación y productos"
        },
        {
            src: "public/fotos-local/local-4.jpg",
            width: 200,
            height: 212,
            tags: [{value: "Frente verde", title: "Local"}],
            alt: "Vidriera del local con iluinación y productos"
        },
        {
            src: "public/fotos-local/local-5.jpg",
            width: 250,
            height: 300,
            tags: [{value: "La entrada sur", title: "Local"}],
            alt: "El otro frente del local con distintos stands"
        },
        {
            src: "public/fotos-local/local-6.jpg",
            width: 280,
            height: 212,
            tags: [{value: "Interior comercial", title: "Local"}],
            alt: "Interior del local y sus productos"
        }
    ];

    const standImages = [
        {
            src: "public/fotos-stands/stand-msi.jpg",
            width: 200,
            height: 212,
            tags: [{value: "MSI", title: "Stand"}],
            alt: "Stand de productos MSI en nuestra tienda",
            caption: "Mirá el video de MSI",
            onClick: (e) => {
                window.open("https://youtu.be/w2fhpoEHj3I?si=Sjo4d7PNXOk-ZX8R", "_blank", "noopener,noreferrer");
            }
        },
        {
            src: "public/fotos-stands/stand-razer.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Razer", title: "Stand"}],
            alt: "Stand de productos Razer en nuestra tienda",
            caption: "Mirá el video de Razer",
            onClick: (e) => {
                window.open("https://youtu.be/29Zs-grSWxg?si=-GYElYWjH7vd4fGU", "_blank", "noopener,noreferrer");
            }
        },
        {
            src: "public/fotos-stands/stand-hyperx.jpg",
            width: 250,
            height: 212,
            tags: [{value: "Hyperx", title: "Stand"}],
            alt: "Stand de productos Hyperx en nuestra tienda",
            caption: "Mirá el video de Hyperx",
            onClick: (e) => {
                window.open("https://youtu.be/kwxTp3wUQsY?si=Rdvt1gUBQzrukPae", "_blank", "noopener,noreferrer");
            }
        },
        {
            src: "public/fotos-stands/stand-asus.jpg",
            width: 320,
            height: 212,
            tags: [{value: "Asus", title: "Stand"}],
            alt: "Stand de productos Asus en nuestra tienda",
            caption: "Mirá el video de Asus",
            onClick: (e) => {
                window.open("https://youtu.be/3gPSsrskXa4?si=jjNBcj4dG9Hx5Wmi", "_blank", "noopener,noreferrer");
            }
        },
        {
            src: "public/fotos-stands/stand-coolermaster.jpg",
            width: 380,
            height: 212,
            tags: [{value: "Cooler Master", title: "Stand"}],
            alt: "Stand de productos Cooler Master en nuestra tienda",
            caption: "Mirá el video de Cooler Master",
            onClick: (e) => {
                window.open("https://youtu.be/YPTZkW1J2uc?si=zP7tGrg3Whtflosz", "_blank", "noopener,noreferrer");
            }
        }
    ];

    const handleClick = (index, images) => {
        if (images[index].onClick) {
            images[index].onClick();
        }
    };

    return (
        <div className='galeria-container' id='galeria'>
            <h3 className='galeria-subtitle'>Nuestro local comercial</h3>
            <div className="galeria-section first">
                <Gallery
                    images={localImages}
                    enableImageSelection={false}
                />
            </div>
            
            <h3 className='galeria-subtitle'>Los stands en el local</h3>
            <div className="galeria-section second">
                <Gallery
                    images={standImages}
                    enableImageSelection={false}
                    onClick={(index) => handleClick(index, standImages)}
                />
            </div>
        </div>
    );
}