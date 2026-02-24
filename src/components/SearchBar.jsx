import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setQuery }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} role="search"
            className="flex items-center justify-center"
        >
            <label htmlFor="search-input" className="sr-only" >
                ¡Busca el tiempo de tu ciudad!
            </label>
            <input 
                id="search-input" 
                type="search" 
                autoComplete="off"
                placeholder="¡Busca el tiempo de tu ciudad!"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-2 border-gray-900 
                rounded-2xl w-sm md:w-xl h-10 p-7 mx-3
                transition-translate focus:bg-gray-500/50
                hover:cursor-pointer bg-gray-500
                transform-border transition-all text-2xl
            " />
            <button type="submit" aria-label="Buscar"
                className="
                cursor-pointer border-2 border-gray-900 bg-gray-500 size-15 
                flex items-center justify-center rounded-full mr-3
                hover:scale-95 shadow-2xl hover:bg-gray-500/50 transform-border transition-all
            ">
                <FaSearch 
                    className="size-7"
                />
            </button>
        </form>


    )
};

export default SearchBar;