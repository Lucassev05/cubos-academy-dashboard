import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../containers/home";
import { Sidebar } from "../containers/sidebar";
import { Login } from "../containers/login";
import { Cadastro } from "../containers/cadastro";

function App() {
  const [token, setToken] = React.useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          {token && <Sidebar></Sidebar>}
          <Switch>
            {!token && <Route exact path="/login" component={Login} />}
            {!token && <Route exact path="/cadastro" component={Cadastro} />}
            <div className="container-geral">
              {token && <Route exact path="/home" component={Home} />}
              <Route
                path="/"
                render={() => <Redirect to={token ? "/home" : "/login"} />}
              />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
