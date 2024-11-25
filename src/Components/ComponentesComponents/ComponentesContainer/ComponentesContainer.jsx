import './ComponentesContainer.scss'
import { useEffect, useState } from "react"
import { getComponentes } from "../../../services/api"
import { ComponenteCard } from '../ComponenteCard/ComponenteCard';

export const ComponentesContainer =()=> {
    const [componentes , setComponentes] = useState([]);

    useEffect(()=>{
        try {
            getComponentes()
                .then(res => setComponentes(res));
        } catch (error) {
            console.error("Error obteniendo componentes:", error);
        }
    },[]);
    
    return (
        <div className="componentes-section">
            <h3 className='componentes-section__title'>Componentes</h3>
            <div className='componentes-section__cards'>
                {componentes?.map((com) => (
                        <ComponenteCard key={com.id} componente={com} />
                ))}
            </div>
        </div>
    );
};