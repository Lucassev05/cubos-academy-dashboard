import React from "react";
import "./style.css";
import { Logout } from "../../components/logout";
import { CardClientes } from "../../components/cardDados/clientes";
import { CardCobrancas } from "../../components/cardDados/cobrancas";
import { CardFaturamento } from "../../components/cardDados/faturamento";
import { SaldoEmConta } from "../../components/saldoconta";
import { FiltroTempo } from "../../components/filtro/filtroTempo";

export function Home(props) {
  return (
    <div className="content-home">
      <div className="page-content">
        <Logout></Logout>
        <SaldoEmConta></SaldoEmConta>
        <div className="relatorio">
          <FiltroTempo></FiltroTempo>
          <div className="cards-de-relatorios">
            <CardClientes classNameCard="CardMargem" />
            <CardCobrancas />
          </div>
          <CardFaturamento></CardFaturamento>
        </div>
      </div>
    </div>
  );
}
