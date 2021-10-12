import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchterm}...`);
  }

  function handleSearchtermChange(event) {
    console.log(event.target.value);
    setSearchterm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control searchbar"
          autoFocus={true}
          autoComplete="off"
          placeholder="What Word are you looking for?"
          onChange={handleSearchtermChange}
        />
      </form>
    </div>
  );
}
