import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("friend");
  let [dictionaryResults, setDictionaryResults] = useState(null);
  let [pictureResults, setPictureResults] = useState(null);

  function handleDictionaryResponse(response) {
    setDictionaryResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictureResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    fetchDictionaryEntry();
    fetchPictures();
    setSearchterm("");
  }

  function fetchDictionaryEntry() {
    //Documentation: https://dictionaryapi.dev/
    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchterm}`;
    axios
      .get(apiDictionaryUrl)
      .then(handleDictionaryResponse)
      .catch((e) => console.error(e));
  }

  function fetchPictures() {
    //Documentation: https://www.pexels.com/de-de/api/documentation/
    const pexelsApiKey =
      "563492ad6f917000010000010d220bb84bac416baa421ece3edfa9da";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchterm}&per_page=8`;
    let authorization = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: authorization })
      .then(handlePexelsResponse)
      .catch((e) => console.error(e));
  }

  function handleSearchtermChange(event) {
    setSearchterm(event.target.value);
  }

  useEffect(() => {
    fetchDictionaryEntry();
    fetchPictures();
    setSearchterm("");
  }, []);

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
              value={searchterm}
            />
          </form>
        </div>
      </div>

      <div className="container">
        <Results results={dictionaryResults} />
      </div>
      <div className="container">
        <Pictures pictures={pictureResults} searchterm={searchterm} />
      </div>
    </div>
  );
}
