
export const getFabricantes = async() => {
    try {
        const response = await fetch('http://localhost:4000/fabricantes');
        
        if (!response.ok) {
            throw new Error('Red no responde correctamente');
        }
        
        const data = await response.json(); 

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
    return [];
}
