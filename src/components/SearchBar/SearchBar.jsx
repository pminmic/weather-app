import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} role="search"
            className="search-form"
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
            <button type="submit" aria-label="Buscar"
                className="search-button">
                <FaSearch />
            </button>
        </form>


    )
};

export default SearchBar;