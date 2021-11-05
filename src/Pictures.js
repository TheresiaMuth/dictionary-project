import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  return (
    props?.pictures && (
      <section className="Pictures">
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <div className="col-3" key={index}>
                <a
                  href={picture.src.original}
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  title={`Photograph by ${picture.photographer}`}
                >
                  <img
                    src={picture.src.tiny}
                    className="img-fluid"
                    alt={`Depiction of ${props.searchterm}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    )
  );
}
