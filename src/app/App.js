import "./App.css";
import { Sidebar } from "../containers/sidebar/index.js";
import { Login } from "../containers/login";
import { Logout } from "../containers/logout";
import { SaldoEmConta } from "../components/saldoconta";
import { CardDados } from "../components/cardDados";
import { Users } from "../assets/index.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <CardDados src={Users} titulo="Clientes"></CardDados>
      </div>
    </div>
  );
}

export default App;
