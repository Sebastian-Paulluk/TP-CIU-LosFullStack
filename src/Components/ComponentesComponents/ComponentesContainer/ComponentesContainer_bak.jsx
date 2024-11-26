import './ComponentesContainer.scss'
import { useEffect, useState } from "react"
import { getProductos } from "../../../services/api"
import { ComponenteCard } from '../ComponenteCard/ComponenteCard';

export const ComponentesContainer =()=> {
    const [productos , setComponentes] = useState([]);

    useEffect(()=>{
        try {
            getProductos()
                .then(res => setComponentes(res));
        } catch (error) {
            console.error("Error obteniendo componentes:", error);
        }
    },[]);
    
    return (
        <div className="componentes-section">
            <h3 className='componentes-section-title'>Componentes</h3>
            <div className='componentes-section-cards'>
                {productos?.map((producto) => (
                    producto.componentes.map((componente) => (
                        <ComponenteCard key={componente._id} componente={componente} />
                    ))
                ))}
            </div>
        </div>
    );
};