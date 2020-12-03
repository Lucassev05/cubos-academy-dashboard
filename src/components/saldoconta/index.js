import React from "react";
import "./style.css";
import { Cipher } from "../../assets/index.js";

export function SaldoEmConta(props) {
  return (
    <div className="sub-header">
      <div className="saldo-card">
        <div>
          <img src={Cipher} alt="cifrão" />
          Saldo em Conta
        </div>
        <div className="saldo">
          <p>R$ {props.saldo}</p>
        </div>
      </div>
    </div>
  );
}
