import React from "react";
import "./style.css";
import { Card } from "../../components/card/index.js";
import { DefaultInput } from "../../components/input/index.js";
import { Button } from "../../components/button/index.js";

export function Login(props) {
  return (
    <div>
      <Card>
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
        <a className="link" href="">
          Esqueci minha senha
        </a>
        <Button className="buttonMargin">Entrar</Button>
      </Card>
      <p className="Text">
        Não tem uma conta? <a href="">Cadastre-se!</a>{" "}
      </p>
    </div>
  );
}
