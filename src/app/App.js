import "./App.css";
import { Sidebar } from "../containers/sidebar/index.js";
import { Login } from "../containers/login";
import { Logout } from "../containers/logout";
import { SaldoEmConta } from "../components/saldoconta";
import { CardDados } from "../components/cardDados";
import { Users } from "../assets/index.js";
import { CardClientes } from "../components/cardDados/clientes/index.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <CardClientes emDia="20" inadimplentes="33" />
      </div>
    </div>
  );
}

export default App;
