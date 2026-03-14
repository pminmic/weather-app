import PeriodTemperatura from "../PeriodTemperatura/PeriodTemperatura";
import ShowStats from "../ShowStats/ShowStats";
import './DailyHero.css';

const DailyHero = ({ day, name, elaborated }) => {

    const temperaturas = day[0].temperatura;
    const sensTermicas = day[0].sensTermica;
    const probPrecipitaciones = day[0].probPrecipitacion;
    const estadosCielo = day[0].estadoCielo;



    return (
        <div className="hero">
            <div className="hero-big">
                <div className="hero-city">
                    {`${name.toUpperCase()} · ${elaborated.split("T")[0]}`}
                </div>
                <div className="hero-stats">
                    <div className="hero-mmtemp">
                        {`${temperaturas.maxima}ºC/${temperaturas.minima}ºC`}
                    </div>
                    <div className="hero-status">
                        {estadosCielo[0].descripcion !== "" ? (
                            `${estadosCielo[0].descripcion}. Probabilidad de lluvia del ${probPrecipitaciones[0].value}%`
                        ):(
                            `Probabilidad de lluvia del ${probPrecipitaciones[0].value}%`
                        )}
                    </div>
                </div>

            </div>
            <div className="hero-grid">
                <ShowStats back={"ºC"} label={"Máxima"} value={temperaturas.maxima} />
                <ShowStats back={"ºC"} label={"Mínima"} value={temperaturas.minima} />
                <ShowStats back={"ºC"} label={"Sens. máx."} value={sensTermicas.maxima} />
                <ShowStats back={"%"} label={"Lluvia"} value={probPrecipitaciones[0].value} />
            </div>
        </div >
    );
};

export default DailyHero;