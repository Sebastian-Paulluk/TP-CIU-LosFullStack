import './ComponenteCard.scss';

export const ComponenteCard = ({ componente }) => {
    
    return (
        <div className="componente-card">
            <div className="card-body">
                <div className='card-title'>
                    <p className='line'>-</p>
                    <h5 className="card-title">{componente.nombre}</h5>
                </div>
                <p className="card-text">{componente.descripcion}</p>
            </div>
        </div>
    );
};