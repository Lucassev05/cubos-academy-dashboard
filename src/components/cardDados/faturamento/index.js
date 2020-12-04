import React from "react";
import "./style.css";
import { CardDados } from "../index.js";
import { Billing } from "../../../assets/index.js";
import { FiltroGrafico } from "../../filtro/filtroGrafico/index.js";

export function CardFaturamento(props) {
  return (
    <CardDados src={Billing} titulo="Faturamento">
      <div>
        <FiltroGrafico></FiltroGrafico>
      </div>
    </CardDados>
  );
}
