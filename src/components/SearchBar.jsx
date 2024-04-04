import React, { useState } from "react";
import SearchResult from '../components/SearchResult'
import * as mealSearch from '../meal-search'

function SearchBar() {
  const buttonText = "Search";

  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await mealSearch.searchForMeal(inputValue);
    if (result === null) {
      setSearchError(true);
    } else {
      setSearchError(false);
      setSearchResult(result);
    }
  };

  return (
    <div className="bg-dark">
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            className="input-field"
            placeholder="Type here"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit">
            {buttonText}
          </button>
        </div>
      </form>
      {searchResult !== null && searchResult.length > 0 && !searchError ? (
        <SearchResult data={searchResult} />
      ) : searchError ? ( error
      ) : null}
    </div>
  );
}

export default SearchBar;