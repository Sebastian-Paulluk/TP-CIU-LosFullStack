import './ProductoCard.scss';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from '../../../Contexts/CartContext';

export const ProductoCard = ({ producto }) => {
    const {addToCart} = useCart();

    const handleClick =(e)=> {
        e.preventDefault();
        e.stopPropagation();
        addToCart(producto);
        toast.success('Producto agregado al carrito');
    }

    return (
        <Link to={`/productos/${producto._id}`} className='product-detail-link'>

            <div className="producto-card">
            
                <div className='producto-card__img-container'>
                    <img className="card-img-top" src={producto.pathImg} alt="FotoProducto"></img>
                </div>
               
               <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
                    <button className="btn btn-primary" onClick={handleClick} >
                        Agregar al Carrito
                    </button>
               </div>

           </div>

        </Link>
    );
};