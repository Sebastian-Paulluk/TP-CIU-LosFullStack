import './ProductosContainer.scss'
import { useEffect, useState } from "react";
import { getProductos } from "../../../services/api";
import { ProductoCard } from '../ProductoCard/ProductoCard';

export const ProductosContainer =()=> {
    const [productos , setProductos] = useState([]);

    useEffect(()=>{
        try {
            getProductos()
                .then(res => setProductos(res));
            console.log(productos);
        } catch (error) {
            console.error("Error obteniendo productos:", error);
        }
    },[]);
    
    return (
        <div className="productos-section">
            <h3 className='productos-section-title'>Productos</h3>
            <div className='productos-section-cards'>
                {productos?.map((producto) => (
                        <ProductoCard key={producto._id} producto={producto} />
                ))}
            </div>
        </div>
    );
};