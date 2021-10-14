import React from "react";
import Meaning from "./Meaning";
import Sound from "./Sound";

export default function Results(props) {
  return (
    props?.results && (
      <div className="Results">
        <div>
          <h2>{props.results.word}</h2>
          <h5>[{props.results.phonetics[0].text}]</h5>
          <Sound audio={props.results.phonetics[0].audio} />
        </div>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    )
  );
}
