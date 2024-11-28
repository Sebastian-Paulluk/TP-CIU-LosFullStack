import { Link, useParams } from 'react-router-dom';
import './Detalles.scss';
import { useEffect, useState } from 'react';
import { getProducto } from '../../services/api';
import { Button } from 'react-bootstrap';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Detalles = () => {
    const [producto, setProducto] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        try {
            getProducto(id)
                .then(res => setProducto(res))
        } catch (error) {
            console.error("Error obteniendo el producto:", error);
        }
    }, []);

    return (
        <>
            {
                producto ? (
                    <div className="detalles-producto">
                        <SectionTitle title={`${producto.nombre}`} />
                        <div className='detalles-producto__content'>

                            <div className='detalles-producto__content__left-side'>
                                <div className="card-body">
                                    <p className="card-text">{producto.descripcion}</p>
                                    <div className='card-body__botones'>
                                        <Link to={`/productos/${id}/componentes`}>
                                            <span>Componentes</span>
                                        </Link>
                                        <Link to={`/productos/${id}/fabricante`} state={{deProducto: true}}>
                                        <span>Fabricante</span>
                                        </Link>
                                    </div>
                                    <p className="card-text"><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className='detalles-producto__content__right-side'>
                                <img className="card-body-photo" src={producto.pathImg} alt="FotoProducto" />
                            </div>

                        </div>
                    </div>
                ) : (
                    <LoadingScreen />
                )
            }
        </>
    );
};