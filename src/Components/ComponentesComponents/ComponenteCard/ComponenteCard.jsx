import './ComponenteCard.scss';

export const ComponenteCard = ({ componente }) => {
    
    return (
        <div className="componente-card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{componente.nombre}</h5>
                <p className="card-text">{componente.descripcion}</p>
            </div>
        </div>
    );
};