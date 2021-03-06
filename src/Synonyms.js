import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    props?.synonyms && (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym} ▪</li>;
        })}
      </ul>
    )
  );
}
