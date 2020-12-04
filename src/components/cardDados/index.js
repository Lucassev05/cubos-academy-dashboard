import React from "react";
import "./style.css";

export function CardDados(props) {
  return (
    <div className={`${"card-de-dados"} ${props.classNameCard}`}>
      <div className="card-header">
        <img src={props.src} alt={props.alt} />
        {props.titulo}
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}
