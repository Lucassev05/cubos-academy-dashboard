import React from "react";
import "./style.css";
import { Filtro } from "../index.js";

export function FiltroTempo(props) {
  const [menuAtivo, setMenuAtivo] = React.useState("estemes");
  return (
    <Filtro>
      <button className="menu-opcao">Este mês</button>
      <button className="menu-opcao">Este ano</button>
      <button className="menu-opcao">Desde o inicio</button>
    </Filtro>
  );
}
