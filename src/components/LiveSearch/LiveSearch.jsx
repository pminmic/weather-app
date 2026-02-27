import { useState } from "react";
import { readCSV } from "../../hooks/readCSV";
import { getCityInfo } from "../../utils/getCityInfo";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import "./LiveSearch.css";

const LiveSearch = ({ setCode }) => {

    const [query, setQuery] = useState("");

    const csvData = readCSV("/codigos-esp.csv");

    let data = getCityInfo(query, csvData);

    const handleClick = (data) => {
        setCode(data.CODE);
        setQuery(`${data.AUTO}, ${data.NAME}`);
    }

    return (
        <div className="live-search">
            <SearchBar query={query} setQuery={setQuery}/>
            <div className="result-container">
                {data ? (data.slice(0, 10).map((n, i) => { return <SearchResult data={n} key={i} handleClick={handleClick}/> })) : (<empty></empty>)}
            </div>
        </div>
    );
};

export default LiveSearch;