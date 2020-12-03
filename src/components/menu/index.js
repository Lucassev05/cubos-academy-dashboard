import React from "react";
import "./style.css";

export function MenuLink(props) {
  return (
    <a
      className={`${"DefaultMenu"} ${props.className}`}
      href=""
      onClick={props.onClick}
    >
      <img src={props.src} alt={props.alt} />
      <h2>{props.title}</h2>
    </a>
  );
}
