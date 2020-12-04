import React from "react";
import "./style.css";
import { CardDados } from "../index.js";
import { Money } from "../../../assets/index.js";

export function CardCobrancas(props) {
  return (
    <CardDados src={Money} titulo="Cobranças">
      <div className="previstas">
        Previstas <p>{props.previstas}</p>
      </div>
      <div className="vencidas">
        Vencidas <p>{props.vencidas}</p>
      </div>
      <div className="pagas">
        Pagas <p>{props.pagas}</p>
      </div>
    </CardDados>
  );
}
