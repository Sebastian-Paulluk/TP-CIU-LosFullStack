import { Link } from 'react-router-dom';
import './ProductoCard.scss';

export const ProductoCard = ({ producto, addToCart  }) => {

    return (
        <>
           <div className="producto-card" style={{ width: '18rem' }}>
            
                <div className='producto-card__img-container'>
                    <img className="card-img-top" src={producto.pathImg} alt="FotoProducto"></img>
                </div>
               
               <div className="card-body">
                   <h5 className="card-title">{producto.nombre}</h5>
                   <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
                   <div className="button-group">
                       <button className="btn btn-secondary" onClick={() => addToCart(producto)}>Agregar al Carrito</button>
                       <Link to={`/productos/${producto._id}`} className="btn btn-primary">
                           Detalles
                       </Link>
                   </div>
               </div>
           </div>
        </>
    );
};