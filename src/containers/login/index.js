import React from "react";
import "./style.css";
import { Card } from "../../components/card/index.js";
import { Input } from "../../components/input/index.js";
import { Button } from "../../components/button/index.js";
import { Link } from "react-router-dom";

export function Login(props) {
  return (
    <div className="content-login">
      <Card>
        <Input
          id="inputEmail"
          label="E-mail"
          type="email"
          placeholder="exemplo@exemplo.com"
          className="inputMargin"
        />
        <Input
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
        Não tem uma conta? <Link to="/cadastro">Cadastre-se!</Link>{" "}
      </p>
    </div>
  );
}
