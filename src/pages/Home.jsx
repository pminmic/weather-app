import { useState } from "react"
import SearchBar from "../components/SearchBar";

const Home = () => {

    const [query, setQuery] = useState("");

    return(
        <div className="text-cyan-50">
            <h1 className="text-5xl flex justify-center py-5 font-extrabold">Weather App</h1>
            <p className="
                text-center
                mb-5
                mx-5
            ">
                Aquí es donde irá el buscador y las principales datos del tiempo
            </p>
            <SearchBar query={query} setQuery={setQuery}/>
        </div>
    );

    
}

export default Home;