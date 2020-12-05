import React from "react";
import "./style.css";
import { ArrowLeft, ArrowRight, Printer } from "../../assets/index.js";

export function Toggle(props) {
  const [status, setStatus] = React.useState(null);

  return (
    <div className={`${"DefaultToggle"} ${props.className}`}>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p className="toggle-checked">{props.titulo}</p>
    </div>
  );
}
