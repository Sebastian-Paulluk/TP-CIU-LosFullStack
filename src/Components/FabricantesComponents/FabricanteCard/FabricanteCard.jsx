import { Link } from 'react-router-dom';
import './FabricanteCard.scss';

export const FabricanteCard =({fabricante})=> {

    return (
        <Link to={`/fabricantes/${fabricante._id}`}>

            <div className='fab-card'>
                <div className='fab-card__logo-container'>
                    <img src={fabricante.pathImgPerfil}
                        alt='fab-logo'
                        className='fab-card__logo-container__logo'
                    />
                </div>
            </div>

       </Link>
    )
}