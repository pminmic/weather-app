import { useState } from 'react';
import LiveSearch from '../../components/LiveSearch/LiveSearch';
import './Home.css';

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
        </div>
    );


}

export default Home;