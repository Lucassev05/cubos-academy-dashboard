import React from "react";
import "./style.css";

export function Button(props) {
  return (
    <button
      className={`${
        props.style === "secondary" ? "SecondaryButton" : "PrimaryButton"
      } ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
