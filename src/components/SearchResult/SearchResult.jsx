import "./SearchResult.css";

const SearchResult = ({ data, handleClick }) => {

    return (
        <div
            className="search-result"
            onClick={() => handleClick(data)}
        >
            {`${data.AUTO}, ${data.NAME}`}
        </div>
    );

};

export default SearchResult;