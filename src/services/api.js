const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la red: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

export const getFabricantes = async () => {
    //return await fetchData('https://tecnomax-api.onrender.com/fabricantes');
    return await fetchData('http://localhost:4000/fabricantes');
};

export const getProductos = async () => {
    //return await fetchData('https://tecnomax-api.onrender.com/productos');
    return await fetchData('http://localhost:4000/productos');
};

export const getProducto = async (idProducto) => {
    //return await fetchData(`https://tecnomax-api.onrender.com/productos/${idProducto}`);
    return await fetchData(`http://localhost:4000/productos/${idProducto}`);
};

export const getComponentes = async (idProducto) => {
    //return await fetchData(`https://tecnomax-api.onrender.com/productos/${idProducto}/componentes`);
    return await fetchData(`https://localhost:4000/productos/${idProducto}/componentes`);
};