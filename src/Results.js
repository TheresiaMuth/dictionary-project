import React from "react";
import Meaning from "./Meaning";
import Sound from "./Sound";

import "./Results.css";

export default function Results(props) {
  return (
    props?.results && (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <div className="Sound">
            <Sound sound={props.results.phonetics[0]} />
          </div>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    )
  );
}
