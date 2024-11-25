import './ComponenteCard.scss';
import PropTypes from 'prop-types';

export const ComponenteCard =({componente})=> {

    return (
       <div className='componente-card'>
            {componente.nombre}
       </div>
    )
}
ComponenteCard.propTypes = {
  componente: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
  }).isRequired,
};