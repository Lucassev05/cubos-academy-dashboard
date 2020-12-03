import React from "react";
import "./style.css";
import { Home, Users, Money, LogoWhite } from "../../assets/index.js";
import { MenuLink } from "../../components/menu/index.js";
import { Button } from "../../components/button";

export function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <img className="logo" src={LogoWhite} alt="logo cubos academy" />
      <MenuLink src={Home} alt="Home" title="Home" />
      <MenuLink src={Money} alt="Cobranças" title="Cobranças" />
      <MenuLink src={Users} alt="Clientes" title="Clientes" />
      <div>
        <Button className="btnMargin">Criar cobranças</Button>
      </div>
    </div>
  );
}
