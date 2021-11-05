import React from "react";

import "./Sound.css";

export default function Sound(props) {
  function handleClick() {
    let audio = new Audio(props.sound.audio);

    audio.play();
  }

  return (
    props?.sound && (
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClick}
        >
          <i className="bi bi-volume-up-fill"></i>
        </button>
        <span className="phonetics">/{props.sound.text}/</span>
      </div>
    )
  );
}
