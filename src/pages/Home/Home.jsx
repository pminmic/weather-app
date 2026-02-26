import { useState } from "react";
import { readCSV } from "../../hooks/readCSV";
import { getCityInfo } from "../../utils/getCityInfo";
import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css';

const Home = () => {

    const [query, setQuery] = useState("");

    const csvData = readCSV("/codigos-esp.csv");

    let data = getCityInfo(query, csvData);


    return (
        <div className="page home-page">
            <div className="home-presentation">
                <h2 className="home-title">Weather App</h2>
                <p className="home-description">
                    Aquí es donde irá el buscador y las principales datos del tiempo
                </p>
            </div>
            <SearchBar query={query} setQuery={setQuery} />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );


}

export default Home;