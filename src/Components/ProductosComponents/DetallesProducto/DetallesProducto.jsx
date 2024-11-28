import { Link, useParams } from 'react-router-dom';
import './DetallesProducto.scss';
import { useEffect, useState } from 'react';
import { getProducto } from '../../../services/api';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { useCart } from '../../../Contexts/CartContext';
import toast from 'react-hot-toast';

export const DetallesProducto = () => {
    const [producto, setProducto] = useState(null);
    const {id} = useParams();
    const {addToCart} = useCart();

    useEffect(() => {
        try {
            getProducto(id)
                .then(res => setProducto(res))
        } catch (error) {
            console.error("Error obteniendo el producto:", error);
        }
    }, []);

    const handleAddToCartClick =()=> {
        addToCart(producto);
        toast.success('Producto agregado al carrito');
    }

    return (
        <>
            {
                producto ? (
                    <div className="detalles-producto">
                        <SectionTitle title={`${producto.nombre}`} />
                        <div className='detalles-producto__content'>

                            <div className='detalles-producto__content__left-side'>
                                <p className="card-text">{producto.descripcion}</p>
                                <div className='card-body__botones'>
                                    <Link to={`/productos/${id}/fabricante`} state={{deProducto: true}}>
                                        <span>Fabricante</span>
                                    </Link>
                                    <Link to={`/productos/${id}/componentes`}>
                                        <span>Componentes</span>
                                    </Link>
                                </div>
                            </div>

                            <div className='detalles-producto__content__right-side'>
                                <div className='card-body-photo-container'>
                                    <img className="card-body-photo" src={producto.pathImg} alt="FotoProducto" />
                                </div>
                            </div>

                            <div className='detalles-producto__content__bottom-side'>
                                <p className="card-text"><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
                                <button className="btn btn-primary" onClick={handleAddToCartClick} >
                                    Agregar al Carrito
                                </button>
                            </div>

                        </div>
                    </div>
                ) : (
                    <LoadingScreen />
                )
            }
        </>
    );
};