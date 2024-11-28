import './ProductosContainer.scss'
import { useEffect, useState } from "react";
import { getProductos } from "../../../services/api";
import { ProductoCard } from '../ProductoCard/ProductoCard';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { SectionTitle } from '../../SectionTitle/SectionTitle';

export const ProductosContainer =()=> {
    const [productos , setProductos] = useState([]);

    useEffect(()=>{
        try {
            getProductos()
                .then(res => setProductos(res));
        } catch (error) {
            console.error("Error obteniendo productos:", error);
        }
    },[]);
    
    return (
        <div className="productos-section">
            {
                productos.length > 0 ? (
                    <>  
                        <SectionTitle title={'PRODUCTOS'} />
                        <div className='productos-section-cards'>
                            {productos?.map((producto) => (
                                    <ProductoCard key={producto._id} producto={producto}/>
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