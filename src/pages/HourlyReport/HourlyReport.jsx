import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";

const HourlyReport = () => {

    // Uso de hooks
    const { code } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const info = await fetchData(code, "daily");
                setData(info);
            } catch (err) {
                console.error('DailyReport load error:', err);
            }
        };

        load();
    }, [])


    return (
        <div className="page">
            <h2>Predicción por horas</h2>
            {data ? (
                JSON.stringify(data)
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default HourlyReport;