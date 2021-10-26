import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchtermChange(event) {
    setSearchterm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="header-container">
        <div className="container">
          <h1>dictionary</h1>
          <form onSubmit={search}>
            <input
              type="search"
              className="form-control searchbar "
              autoFocus={true}
              autoComplete="off"
              placeholder="What Word are you looking for?"
              onChange={handleSearchtermChange}
            />
          </form>
        </div>
      </div>

      <div className="container">
        <Results results={results} />
      </div>
    </div>
  );
}
