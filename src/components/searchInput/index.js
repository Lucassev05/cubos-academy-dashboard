import React from "react";
import "./style.css";
import { Search } from "../../assets/index.js";

export function SearchInput(props) {
  return (
    <div className={`${"DefaultInput"} ${props.className}`}>
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        inputMode={props.inputMode}
        placeholder={props.placeholder}
        hidden={props.hidden}
        disabled={props.disabled}
      />
      <button className="searchButton">
        <img src={Search} alt="" />
        Buscar
      </button>
      {/* ADICIONAR CODICIONAL  */}
    </div>
  );
}
