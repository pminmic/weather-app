import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {



    return (
        <div
            className="search-div"
        >
            <label htmlFor="search-input" className="search-input-label" >
                ¡Busca el tiempo de tu ciudad!
            </label>
            <input
                id="search-input"
                type="search"
                autoComplete="off"
                placeholder="¡Busca el tiempo de tu ciudad!"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input" />
        </div>


    )
};

export default SearchBar;