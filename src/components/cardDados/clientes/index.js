import React from "react";
import "./style.css";
import { CardDados } from "../index.js";
import { Users } from "../../../assets/index.js";

export function CardClientes(props) {
  return (
    <CardDados src={Users} titulo="Clientes">
      <div className="emDia">
        Em dia <p>{props.emDia}</p>
      </div>
      <div className="inadimplentes">
        Inadimplentes <p>{props.inadimplentes}</p>
      </div>
    </CardDados>
  );
}
