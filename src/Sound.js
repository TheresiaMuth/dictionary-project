import React from "react";

export default function Sound(props) {
  function handleClick() {
    let audio = new Audio(props.audio);

    audio.play();
  }

  return (
    props?.audio && (
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClick}
      >
        <i className="bi bi-soundwave"></i>
      </button>
    )
  );
}
