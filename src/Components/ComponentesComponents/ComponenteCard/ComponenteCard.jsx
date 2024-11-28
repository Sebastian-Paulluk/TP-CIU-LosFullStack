import { useMountingAnimation } from '../../../Hooks/useMountingAnimation';
import './ComponenteCard.scss';

export const ComponenteCard = ({ componente, mountingDelay }) => {
    const visibility = useMountingAnimation(mountingDelay);
    
    return (
        <div className={`componente-card ${visibility ? '' : 'hidden'}`}>
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