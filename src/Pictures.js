import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  return (
    props?.pictures && (
      <section className="Pictures">
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <div
                className="col-3 ps-1 pe-1 ps-sm-2 pe-sm-2 ps-md-2 pe-md-2 ps-lg-2 pe-lg-2 ps-xl-2 pe-xl-2"
                key={index}
              >
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
