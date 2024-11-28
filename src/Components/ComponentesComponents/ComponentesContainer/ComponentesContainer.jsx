import './ComponentesContainer.scss'
import { useEffect, useState } from "react"
import { getComponentes } from "../../../services/api"
import { useParams } from 'react-router-dom';
import { ComponenteCard } from '../ComponenteCard/ComponenteCard';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { SectionTitle } from '../../SectionTitle/SectionTitle';

export const ComponentesContainer =()=> {
    const [componentes , setComponentes] = useState([]);
    const [nombreProducto , setnombreProducto] = useState('');
    const {id} = useParams();

    useEffect(()=>{
        try {
            getComponentes(id)
                .then(res => {
                    setnombreProducto(res.nombre)
                    setComponentes(res.componentes);
                })
        } catch (error) {
            console.error("Error obteniendo componentes:", error);
        }
    },[]);

    return (
        <>
            {
                componentes.length > 0 ? (
                    <div className="componentes-section">
                        <SectionTitle title={`Componentes de ${nombreProducto}`} />
                        <div className='componentes-section-cards'>
                            {componentes.map((com, index) => {
                                const mountingDelay = (index + 1) * 0.09;

                                return (
                                    <ComponenteCard
                                        key={com._id}
                                        componente={com}
                                        mountingDelay={mountingDelay}
                                    />
                                )  
                            })}
                        </div>
                    </div>
                ) : (
                    <LoadingScreen />
                )
            }
        </>
    );
};