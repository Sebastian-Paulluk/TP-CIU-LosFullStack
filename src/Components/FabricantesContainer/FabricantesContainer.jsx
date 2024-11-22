import './FabricantesContainer.scss'
import { useEffect, useState } from "react"
import { getFabricantes } from "../../services/api"
import { Fabricante } from '../Fabricante/Fabricante';


export const FabricantesContainer =()=> {
    const [fabricantes , setFabricantes] = useState();

    useEffect(()=>{
        getFabricantes()
            .then(res => setFabricantes(res))
    },[])


    return (
        <div className="fabricantes-container">
            {
                fabricantes && fabricantes.map((fab, key) => {
                    <Fabricante fabricante={fab} key={key} />
                })
            }
        </div>
    )
}