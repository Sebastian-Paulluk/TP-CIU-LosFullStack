import { Link } from 'react-router-dom';
import './ProductoCard.scss';

export const ProductoCard = ({ producto }) => {

    return (
        <Link to={`/productos/${producto._id}`} className="producto-card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={producto.pathImg} alt="FotoProducto"></img>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
            </div>
        </Link>
    );
};