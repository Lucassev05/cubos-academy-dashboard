import React from "react";
import "./style.css";
import { ArrowLeft, ArrowRight, Printer } from "../../assets/index.js";
import { Toggle } from "../toggle/index.js";

export function Table(props) {
  const [dadosTabela, setDadosTabela] = React.useState([]);
  const [numeroPaginas, setNumeroPaginas] = React.useState(1);

  return (
    <div className={`${"DefaultTable"} ${props.className}`}>
      <table>
        <thead className="DefaultHeader">
          <tr>
            <th>teste</th>
            <th>teste1</th>
            <th>teste2</th>
            <th>teste3</th>
          </tr>
        </thead>
        <tbody className="DefaultBody">
          <tr>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>
              <a href="">
                <img src={Printer} alt="" />
              </a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>
              <Toggle></Toggle>
            </td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
      <div className="paginacao">
        <button>
          <img src={ArrowLeft} alt="voltar uma pagina" />
        </button>
        <button className="ativo">1</button>
        <button>2</button>
        <button>3</button>
        <button>
          <img src={ArrowRight} alt="avançar uma pagina" />
        </button>
      </div>
    </div>
  );
}

// realizar logica de paginação, header e dados da pagina
