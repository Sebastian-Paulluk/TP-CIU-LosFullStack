import './FabricantesContainer.scss'
import { useEffect, useState } from "react"
import { getFabricantes } from "../../../services/api"
import { FabricanteCard } from '../FabricanteCard/FabricanteCard';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';

export const FabricantesContainer =()=> {
    const [fabricantes , setFabricantes] = useState([]);
    const [fabricantesCargados , setFabricantesCargados] = useState(false);

    useEffect(()=>{
        try {
            getFabricantes()
                .then(res => {
                    setFabricantes(res);
                    setFabricantesCargados(true);
                });
        } catch (error) {
            console.error("Error obteniendo fabricantes:", error);
        }
    },[]);

    return (
        <div className="fabricantes-section">
            {
                fabricantesCargados ? (
                    <>
                        <h3 className='fabricantes-section__title'>Fabricantes</h3>
                        <div className='fabricantes-section__cards'>
                            {fabricantes?.map((fab) => (
                                    <FabricanteCard key={fab._id} fabricante={fab} />
                            ))}
                        </div>
                    </>
                ) : (
                    <LoadingScreen />
                )
            }
         </div>
    );
};