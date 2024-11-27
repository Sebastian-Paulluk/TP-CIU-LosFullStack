const local = 'http://localhost:4000';
const nube = 'https://tecnomax-api-production.up.railway.app';
const fuenteActual = nube;

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
    return await fetchData(`${fuenteActual}/fabricantes`);
};

export const getFabricante = async (idFabricante) => {
    return await fetchData(`${fuenteActual}/fabricantes/${idFabricante}`);
};

export const getFabricanteDeProducto = async (idProducto) => {
    return await fetchData(`${fuenteActual}/productos/${idProducto}/fabricantes`);
};

export const getProductos = async () => {
    return await fetchData(`${fuenteActual}/productos`);
};

export const getProducto = async (idProducto) => {
    return await fetchData(`${fuenteActual}/productos/${idProducto}`);
};

export const getComponentes = async (idProducto) => {
    return await fetchData(`${fuenteActual}/productos/${idProducto}/componentes`);
};