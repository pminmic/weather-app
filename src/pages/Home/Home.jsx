import { useState } from "react"
import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css';

const Home = () => {

    const [query, setQuery] = useState("");

    return(
        <div className="">
            <h1 className="">Weather App</h1>
            <p className="">
                Aquí es donde irá el buscador y las principales datos del tiempo
            </p>
            <SearchBar query={query} setQuery={setQuery}/>
        </div>
    );

    
}

export default Home;