import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";

const DailyReport = () => {

    // Uso de hooks
    const [data, setData] = useState(null);
    const { code } = useParams();

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
            <h2>Predicción diaria</h2>
            {data ? (
                JSON.stringify(data)
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default DailyReport;