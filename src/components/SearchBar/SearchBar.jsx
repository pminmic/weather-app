import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} role="search"
            className="flex items-center justify-center"
        >
            <label htmlFor="search-input" className="" >
                ¡Busca el tiempo de tu ciudad!
            </label>
            <input 
                id="search-input" 
                type="search" 
                autoComplete="off"
                placeholder="¡Busca el tiempo de tu ciudad!"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="" />
            <button type="submit" aria-label="Buscar"
                className="">
                <FaSearch 
                    className=""
                />
            </button>
        </form>


    )
};

export default SearchBar;