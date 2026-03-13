import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";

const LocalInfo = () => {

    // Uso de hooks
    const { code } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const info = await fetchData(code, "info");
                setData(info);
            } catch (err) {
                console.error('LocalInfo load error:', err);
            }
        };

        load();
    }, [code])


    return (
        <div className="page">
            <h2>Información de la localidad</h2>
            {data ? (
                JSON.stringify(data)
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default LocalInfo;