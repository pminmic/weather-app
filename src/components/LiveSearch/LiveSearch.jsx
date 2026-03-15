import { useState } from "react";
import { readCSV } from "../../hooks/readCSV";
import { getCityInfo } from "../../utils/getCityInfo";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import "./LiveSearch.css";

const LiveSearch = ({ setCode }) => {

    const [query, setQuery] = useState("");
    const [page, setPage] = useState(0);

    const csvData = readCSV("/codigos-esp.csv");

    let data = getCityInfo(query, csvData);

    const handleClick = (data) => {
        setCode(data.CODE);
        setQuery(`${data.AUTO}, ${data.NAME}`);
    }

    const showButtons = () => {
        return (
            <nav className="pagination">
                <button className="prev-sig-but" onClick={() => setPage(page - 10)}>Prev.</button>
                <button className="prev-sig-but" onClick={() => setPage(page + 10)}>Sig.</button>
            </nav>
        );
    }

    return (
        <div className="live-search">
            <SearchBar query={query} setQuery={setQuery} setPage={setPage}/>
            <div className="result-container">
                {data.length > 10 ? (
                    data.slice(0 + page, 10 + page).map((n, i) => {
                        return (
                            <SearchResult data={n} key={i} handleClick={handleClick} />
                        );

                    })
                ) : (
                    data.map((n, i) => {
                        return <SearchResult data={n} key={i} handleClick={handleClick} />
                    }
                    ))}
                {data.slice(0+page, 10+page).length === 10 ? showButtons() : <></>}
            </div>
        </div>
    );
};

export default LiveSearch;