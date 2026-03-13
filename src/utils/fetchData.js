// Importamos las variables de entorno
const apiURL = import.meta.env.VITE_AEMET_URL;
const apiKey = import.meta.env.VITE_AEMET_API_KEY;

export const fetchData = async (code, type) => {
    try {
        let response, data, datos;
        switch (type) {
            case "hourly":
                response = await fetch(`${apiURL}prediccion/especifica/municipio/horaria/${code}?api_key=${apiKey}`);
                data = await response.json();
                datos = await (await fetch(data.datos)).json();
                return datos;
            case "daily":
                response = await fetch(`${apiURL}prediccion/especifica/municipio/diaria/${code}?api_key=${apiKey}`);
                data = await response.json();
                datos = await (await fetch(data.datos)).json();
                return datos;
            case "info":
                response = await fetch(`${apiURL}maestro/municipio/${"id" + code}?api_key=${apiKey}`);
                data = await response.json();
                datos = await (await fetch(data.datos)).json();
                return datos;
            default:
                throw new Error(`Unknown fetch type: ${type}`);
        }
    } catch (err) {
        console.error('fetchData error:', err);
        throw err;
    }
};