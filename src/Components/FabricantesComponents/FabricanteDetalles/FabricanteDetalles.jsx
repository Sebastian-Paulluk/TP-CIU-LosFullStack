import { useEffect, useState } from 'react';
import './FabricanteDetalles.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getFabricante, getFabricanteDeProducto } from '../../../services/api';
import { BotonVolver } from '../BotonVolver/BotonVolver';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';

export const FabricanteDetalles =()=> {
    const [fabricante, setFabricante] = useState(null);
    const {id} = useParams();
    const location = useLocation();
    const {deProducto = false} = location.state || {};

    useEffect(() => {
        try {
            if (deProducto) {
                getFabricanteDeProducto(id)
                    .then(res => setFabricante(res.fabricantes[0]));
            } else {
                getFabricante(id)
                    .then(res => setFabricante(res));
            }
        } catch (error) {
            console.error("Error obteniendo el fabricante:", error);
        }
    }, []);

    return (
        <>
            {fabricante ? (
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

                        <div className='boton-volver-container'>
                            { deProducto ? (
                                    <Link to={`/productos/${id}`}>
                                        <BotonVolver />
                                    </Link>
                                ) : (
                                    <Link to={`/fabricantes`}>
                                        <BotonVolver />
                                    </Link>
                                )
                            }
                        </div>

                    </div>
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    )
};