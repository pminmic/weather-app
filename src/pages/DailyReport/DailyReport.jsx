import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import './DailyReport.css';
import DailyHero from "../../components/DailyHero/DailyHero";


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


    if (data) {
        // Array containing today, tomorrow and the day after tomorrow
        const dia = data[0].prediccion.dia;
        const nombre = data[0].nombre;
        const elaborado = data[0].elaborado;

        return (
            <div className="page daily-report">
                <DailyHero day={dia} name={nombre} elaborated={elaborado} />
            </div>
        );
    }
    else {
        return <p>Cargando...</p>
    }
};

export default DailyReport;