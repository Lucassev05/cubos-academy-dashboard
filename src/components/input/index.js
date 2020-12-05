import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div
      className={` ${
        props.style == "Secondary" ? "SecondaryInput" : "DefaultInput"
      } ${props.className}`}
    >
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        inputMode={props.inputMode}
        placeholder={props.placeholder}
        hidden={props.hidden}
        disabled={props.disabled}
      />
      {/* ADICIONAR CODICIONAL  */}
    </div>
  );
}
