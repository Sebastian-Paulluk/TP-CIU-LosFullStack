import { Link, useParams } from 'react-router-dom';
import './Detalles.scss';
import { useEffect, useState } from 'react';
import { getProducto } from '../../services/api';
import { Button } from 'react-bootstrap';

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
                producto && (
                    <div className="detalles">
                        <img className="card-body-photo" src={producto.pathImg} alt="FotoProducto" />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.descripcion}</p>
                            <div className='card-body__botones'>
                                <Link to={`/productos/${id}/componentes`}>
                                    <Button>Componentes</Button>
                                </Link>
                                <Link to={`/productos/${id}/fabricante`} state={{deProducto: true}}>
                                    <Button>Fabricante</Button>
                                </Link>
                            </div>
                            <p className="card-text"><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
                        </div>
                    </div>
                )
            }
        </>
    );
};