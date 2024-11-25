import './ProductoCard.scss';
import PropTypes from 'prop-types';

export const ProductoCard =({producto})=> {

    return (
       <div className='productos-card'>
            {producto.nombre}
       </div>
    )
}
ProductoCard.propTypes = {
    producto: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
    }).isRequired,
};