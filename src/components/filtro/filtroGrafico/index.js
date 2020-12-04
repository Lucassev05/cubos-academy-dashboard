import React from "react";
import "./style.css";
import { Filtro } from "../index.js";

export function FiltroGrafico(props) {
  const [menuAtivo, setMenuAtivo] = React.useState("estemes");
  return (
    <Filtro>
      <button className="menu-opcao">Por mês</button>
      <button className="menu-opcao">Por dia</button>
      <button className="menu-opcao">Desde o inicio</button>
    </Filtro>
  );
}
