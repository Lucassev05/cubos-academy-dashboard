import React from "react";
import "./style.css";
import { Card } from "../../components/card/index.js";
import { Input } from "../../components/input/index.js";
import { Button } from "../../components/button/index.js";
import { Link } from "react-router-dom";

export function Cadastro(props) {
  return (
    <div className="content-login">
      <Card>
        <Input id="inputName" label="Nome" className="inputMargin" />
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
        <Button className="buttonMargin">Criar conta</Button>
      </Card>
      <p className="Text">
        Já possui uma conta? <Link to="/">Acesse agora!</Link>{" "}
      </p>
    </div>
  );
}
