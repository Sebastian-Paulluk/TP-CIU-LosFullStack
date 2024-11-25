import './ComponenteCard.scss';

export const ComponenteCard =({componente})=> {

    return (
       <div className='componente-card'>
            {componente.nombre}
       </div>
    )
}

//ACOMODAR TODO PARA PRODUCTO