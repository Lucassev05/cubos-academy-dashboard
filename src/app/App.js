import "./App.css";
import { Sidebar } from "../containers/sidebar/index.js";
import { Login } from "../containers/login";
import { Logout } from "../containers/logout";
import { SaldoEmConta } from "../components/saldoconta";
import { CardDados } from "../components/cardDados";
import { Users } from "../assets/index.js";
import { CardClientes } from "../components/cardDados/clientes/index.js";

import { CardCobrancas } from "../components/cardDados/cobrancas/index.js";
import { CardFaturamento } from "../components/cardDados/faturamento/index.js";
import { FiltroTempo } from "../components/filtro/filtroTempo/index.js";
import { FiltroGrafico } from "../components/filtro/filtroGrafico/index.js";

import { SearchInput } from "../components/searchInput/index.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <SearchInput></SearchInput>
      </div>
    </div>
  );
}

export default App;
