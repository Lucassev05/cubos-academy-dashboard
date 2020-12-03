import React from "react";
import "./style.css";
import { Card } from "../../components/card/index.js";
import { DefaultInput } from "../../components/input/index.js";
import { Button } from "../../components/button/index.js";

export function Cadastro(props) {
  return (
    <div>
      <Card>
        <DefaultInput id="inputName" label="Nome" className="inputMargin" />
        <DefaultInput
          id="inputEmail"
          label="E-mail"
          type="email"
          placeholder="exemplo@exemplo.com"
          className="inputMargin"
        />
        <DefaultInput
          id="inputPassword"
          type="password"
          label="Senha"
          className="inputMargin"
        />
        <Button className="buttonMargin">Criar conta</Button>
      </Card>
      <p className="Text">
        Não tem uma conta? <a href="">Cadastre-se!</a>{" "}
      </p>
    </div>
  );
}
