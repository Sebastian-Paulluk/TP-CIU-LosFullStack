import { useLocation } from 'react-router-dom';
import './Detalles.scss';

export const Detalles = () => {
    const location = useLocation();
    const { producto } = location.state || {};

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="detalles">
            <img className="card-img-top" src={producto.foto} alt="FotoProducto"></img>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text"> <strong>Componentes: </strong></p>
                {producto.componentes.map((componente, index) => (
                    <p key={index} className="card-text">{componente.nombre}</p>
                ))}
                <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
            </div>
        </div>
    );
};