import React from "react";
import "./style.css";
import { Logo } from "../../assets/index.js";

export function Card(props) {
  return (
    <div className="Card">
      <img src={Logo} alt="logo cubos academy" />
      {props.children}
    </div>
  );
}
