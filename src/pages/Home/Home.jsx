import { useState } from 'react';
import LiveSearch from '../../components/LiveSearch/LiveSearch';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [code, setCode] = useState("");

    return (
        <div className="page home-page">
            <div className="home-presentation">
                <h2 className="home-title">Weather App</h2>
                <p className="home-description">
                    Aquí es donde irá el buscador y las principales datos del tiempo
                </p>
            </div>
            <LiveSearch setCode={setCode} />
            {code !== "" ? (
                <div className='links-to'>
                    <Link to={`/hourly-report/${code}`}>Predicción por horas</Link>
                    <Link to={`/daily-report/${code}`}>Predicción diaria</Link>
                    <Link to={`/local-info/${code}`}>Información de la localidad</Link>
                </div>
            ) : (
                <p>¡Introduce una localidad!</p>
            )}
        </div>
    );


}

export default Home;