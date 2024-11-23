import './FabricanteCard.scss';

export const FabricanteCard =({fabricante})=> {

    return (
       <div className='fabricante-card'>
            {fabricante.nombre}
       </div>
    )
}