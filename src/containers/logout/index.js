import React from "react";
import "./style.css";
import { UserProfile, LogoutImg } from "../../assets/index";

export function Logout(props) {
  const [clicado, setClicado] = React.useState(false);
  return (
    <div className="header">
      <button className="logoutImg" onClick={() => setClicado(!clicado)}>
        <img src={UserProfile} alt="logout" />
      </button>
      {clicado ? (
        <button className="deslogar">
          <img src={LogoutImg} alt="" />
          Deslogar
        </button>
      ) : undefined}
    </div>
  );
}
