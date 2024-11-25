import { useEffect, useState } from "react";
import { getProductos } from "../../../services/api";
import { ProductoCard } from '../ProductoCard/ProductoCard';

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
            <h3 className='productos-section__title'>Productos</h3>
            <div className='productos-section__cards'>
                {productos?.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};