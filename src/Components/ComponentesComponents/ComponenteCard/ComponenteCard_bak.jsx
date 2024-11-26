import './ComponenteCard.scss';
import PropTypes from 'prop-types';

export const ComponenteCard = ({ componente }) => {
    console.log("Componente:", componente);
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{componente.nombre}</h5>
                <p className="card-text">{componente.descripcion}</p>
            </div>
        </div>
    );
}

ComponenteCard.propTypes = {
    componente: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
    }).isRequired,
};