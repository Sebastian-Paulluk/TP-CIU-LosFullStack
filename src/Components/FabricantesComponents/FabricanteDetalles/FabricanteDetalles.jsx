import { useEffect, useState } from 'react';
import './FabricanteDetalles.scss';
import { Link, useParams } from 'react-router-dom';
import { getFabricante } from '../../../services/api';

export const FabricanteDetalles =()=> {
    const [fabricante , setFabricante] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        try {
            getFabricante(id)
                .then(res => setFabricante(res.fabricantes[0]));
        } catch (error) {
            console.error("Error obteniendo productos:", error);
        }
    }, []);

    console.log(id)
    console.log(fabricante)

    return (
        <>
            {fabricante && (
                    <div className='fab-detalles-container'>
                        <div className='fab-detalles'>

                            <img
                                src={fabricante.pathImgPerfil}
                                alt='logo-fabricante'
                                className='fab-detalles__logo'
                            />
                            <div className='fab-detalles__info'>
                                <div className='fab-detalles__info__direccion'>
                                    <p>Dirección:</p>
                                    <p className='fab-direccion'>{fabricante.direccion}</p>
                                </div>
                                <div className='fab-detalles__info__contacto'>
                                    <p>Contacto:</p>
                                    <p className='fab-contacto'>{fabricante.numeroContacto}</p>
                                </div>
                            </div>

                            <Link to={`/productos/${id}`}>
                                <div className='fab-link-back-container'>
                                    
                                        <i className="bi bi-caret-left"></i>
                                        <span className='fab-link-back__text'>
                                            Volver
                                        </span>

                                </div>
                            </Link>

                        </div>
                    </div>
            )}
        </>
    )
};