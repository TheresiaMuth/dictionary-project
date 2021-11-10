import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchTerm, setSearchTerm] = useState("happiness");
  let [dictionaryResults, setDictionaryResults] = useState(null);
  let [pictureResults, setPictureResults] = useState(null);

  function handleDictionaryResponse(response) {
    setDictionaryResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictureResults(response.data);
  }

  function fetchPictures(pictureSearchTerm) {
    //Documentation: https://www.pexels.com/de-de/api/documentation/
    const pexelsApiKey =
      "563492ad6f917000010000010d220bb84bac416baa421ece3edfa9da";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${pictureSearchTerm}&per_page=4`;
    let authorization = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: authorization })
      .then(handlePexelsResponse)
      .catch((e) => console.error(e));
  }

  function fetchDictionaryEntry(dictionarySearchTerm) {
    //Documentation: https://dictionaryapi.dev/
    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionarySearchTerm}`;
    axios
      .get(apiDictionaryUrl)
      .then((response) => {
        handleDictionaryResponse(response);
        fetchPictures(dictionarySearchTerm);
      })
      .catch((e) => console.error(e));
  }

  function search(event) {
    event.preventDefault();
    fetchDictionaryEntry(searchTerm);
    setSearchTerm("");
  }

  function handleSearchtermChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    fetchDictionaryEntry(searchTerm);
    fetchPictures(searchTerm);
    setSearchTerm("");
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
              value={searchTerm}
            />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Results results={dictionaryResults} />
          </div>
          <div className="col-md-4">
            <Pictures pictures={pictureResults} searchterm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}
