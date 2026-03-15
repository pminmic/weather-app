import './SearchBar.css';

const SearchBar = ({ query, setQuery, setPage }) => {


    return (
        <div className="search-div">
            <label htmlFor="search-input" className="search-input-label" >
                ¡Busca el tiempo de tu ciudad!
            </label>
            <input
                id="search-input"
                type="search"
                autoComplete="off"
                placeholder="¡Busca el tiempo de tu ciudad!"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setPage(0);
                }}
                className="search-input" />
        </div>
    )
};

export default SearchBar;