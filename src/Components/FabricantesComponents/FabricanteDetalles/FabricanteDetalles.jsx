import { useEffect, useState } from 'react';
import './FabricanteDetalles.scss';
import { useParams } from 'react-router-dom';
import { getFabricante } from '../../../services/api';

export const FabricanteDetalles =()=> {
    const [fabricante , setFabricante] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        try {
            getFabricante(id)
                .then(res => setFabricante(res.fabricantes[0]));
        } catch (error) {
            console.error("Error obteniendo productos:", error);
        }
    }, []);

    return (
        <>
            {fabricante && (
                    <div className='fabricante-detalles'>
                        <h3>{fabricante.nombre}</h3>
                        <p>{fabricante.direccion}</p>
                        <p>{fabricante.numeroContacto}</p>
                        <p>{fabricante.pathImgPerfil}</p>
                    </div>
            )}
        </>
    )
};