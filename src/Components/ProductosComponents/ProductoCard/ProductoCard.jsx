import { useNavigate } from 'react-router-dom';
import './ProductoCard.scss';

export const ProductoCard = ({ producto }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/detalles', { state: { producto } });
    };

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleClick}>
            <img className="card-img-top" src={producto.pathImg} alt="FotoProducto"></img>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
            </div>
        </div>
    );
};